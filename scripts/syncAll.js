// scripts/syncAll.js
import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const notion = new Client({ 
  auth: process.env.NOTION_SECRET 
});

async function fetchPageBlocks(pageId) {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100
    });
    return response.results;
  } catch (error) {
    console.error(`❌ Error fetching blocks for page ${pageId}:`, error.message);
    return [];
  }
}

async function syncAllContent() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    
    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not set in environment variables");
    }

    console.log("🔄 Syncing all content from Notion...");
    console.log("Database ID:", databaseId);

    // Search for pages in the database
    const response = await notion.search({
      query: '',
      filter: {
        property: 'object',
        value: 'page'
      },
      sort: {
        direction: 'descending',
        timestamp: 'last_edited_time'
      }
    });

    // Filter pages that belong to our database
    const databasePages = response.results.filter(page => 
      page.parent?.database_id === databaseId || 
      page.parent?.database_id === databaseId.replace(/-/g, '') ||
      page.parent?.database_id === databaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5')
    );

    console.log(`📝 Found ${databasePages.length} pages in database`);

    // Ensure content/blog directory exists
    const blogDir = path.join(process.cwd(), "content", "blog");
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // Clean up old blog files to avoid duplicates
    console.log("🧹 Cleaning up old blog files...");
    const existingFiles = fs.readdirSync(blogDir);
    const filesToDelete = existingFiles.filter(file => 
      (file.endsWith('.md') && !file.includes('welcome-to-speedyip-blog') && !file.includes('test-post-from-notion')) ||
      file.endsWith('-rich.json')
    );
    
    filesToDelete.forEach(file => {
      const filePath = path.join(blogDir, file);
      fs.unlinkSync(filePath);
      console.log(`🗑️  Deleted: ${file}`);
    });

    for (const page of databasePages) {
      try {
        const title = page.properties.title?.title?.[0]?.plain_text || "Untitled";
        const rawSlug = page.properties.slug?.rich_text?.[0]?.plain_text || 
                       title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const slug = rawSlug.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
        const date = page.properties.date?.date?.start || new Date().toISOString().split('T')[0];
        const tags = page.properties.tags?.multi_select?.map((t) => t.name) || [];
        const content = page.properties.content?.rich_text?.[0]?.plain_text || "";
        const excerpt = page.properties.excerpt?.rich_text?.[0]?.plain_text || "";

        // Create simple markdown file
        const frontMatter = matter.stringify(content, {
          title,
          date,
          tags,
          slug,
          excerpt,
          published: true,
        });

        const mdFilePath = path.join(blogDir, `${slug}.md`);
        fs.writeFileSync(mdFilePath, frontMatter);
        console.log(`✅ Saved simple content: ${slug}.md`);

        // Fetch blocks for rich content
        const blocks = await fetchPageBlocks(page.id);
        
        if (blocks.length > 0) {
          // Create rich content data
          const richContent = {
            title,
            slug,
            date,
            tags,
            excerpt,
            blocks: blocks,
            pageId: page.id
          };

          const richFilePath = path.join(blogDir, `${slug}-rich.json`);
          fs.writeFileSync(richFilePath, JSON.stringify(richContent, null, 2));
          console.log(`✅ Saved rich content: ${slug}-rich.json (${blocks.length} blocks)`);
        } else {
          console.log(`ℹ️  No rich content blocks found for: ${slug}`);
        }
        
      } catch (error) {
        console.error(`❌ Error processing page ${page.id}:`, error.message);
      }
    }

    console.log("🎉 Complete sync finished successfully!");
    console.log("📋 Summary:");
    console.log(`  • Cleaned up: ${filesToDelete.length} old files`);
    console.log(`  • Synced: ${databasePages.length} pages from Notion`);
    console.log("  • Simple content: Markdown files");
    console.log("  • Rich content: JSON files with blocks");
    console.log("  • Dynamic routes: Automatic page generation");
    console.log("  • No manual work required! 🚀");

  } catch (error) {
    console.error("❌ Sync failed:", error.message);
    process.exit(1);
  }
}

syncAllContent();
