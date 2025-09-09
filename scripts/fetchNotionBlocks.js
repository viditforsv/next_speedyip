// scripts/fetchNotionBlocks.js
import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const notion = new Client({ 
  auth: process.env.NOTION_SECRET 
});

async function fetchPageBlocks(pageId) {
  try {
    console.log(`🔄 Fetching blocks for page: ${pageId}`);
    
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100
    });

    console.log(`📝 Found ${response.results.length} blocks`);
    return response.results;
  } catch (error) {
    console.error(`❌ Error fetching blocks for page ${pageId}:`, error.message);
    return [];
  }
}

async function fetchRichContent() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    
    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not set in environment variables");
    }

    console.log("🔄 Fetching rich content from Notion...");
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

    for (const page of databasePages) {
      try {
        const title = page.properties.title?.title?.[0]?.plain_text || "Untitled";
        const slug = page.properties.slug?.rich_text?.[0]?.plain_text || 
                    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const date = page.properties.date?.date?.start || new Date().toISOString().split('T')[0];
        const tags = page.properties.tags?.multi_select?.map((t) => t.name) || [];
        const excerpt = page.properties.excerpt?.rich_text?.[0]?.plain_text || "";

        // Fetch blocks for this page
        const blocks = await fetchPageBlocks(page.id);
        
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

        const filePath = path.join(blogDir, `${slug}-rich.json`);
        fs.writeFileSync(filePath, JSON.stringify(richContent, null, 2));
        console.log(`✅ Saved rich content: ${slug}-rich.json`);
        
      } catch (error) {
        console.error(`❌ Error processing page ${page.id}:`, error.message);
      }
    }

    console.log("🎉 Rich content sync completed successfully!");
  } catch (error) {
    console.error("❌ Rich content sync failed:", error.message);
    process.exit(1);
  }
}

fetchRichContent();
