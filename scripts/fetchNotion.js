// scripts/fetchNotion.js
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

async function fetchPosts() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    
    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not set in environment variables");
    }

    console.log("🔄 Fetching posts from Notion...");
    console.log("Database ID:", databaseId);

    // Use search method to find pages in the database
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

    console.log(`📝 Found ${response.results.length} enabled posts`);

    // Ensure content/blog directory exists
    const blogDir = path.join(process.cwd(), "content", "blog");
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // Filter pages that belong to our database
    const databasePages = response.results.filter(page => 
      page.parent?.database_id === databaseId || 
      page.parent?.database_id === databaseId.replace(/-/g, '') ||
      page.parent?.database_id === databaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5')
    );

    console.log(`📝 Found ${databasePages.length} pages in database`);

    databasePages.forEach((page) => {
      try {
        const title = page.properties.title?.title?.[0]?.plain_text || "Untitled";
        const slug = page.properties.slug?.rich_text?.[0]?.plain_text || 
                    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const date = page.properties.date?.date?.start || new Date().toISOString().split('T')[0];
        const tags = page.properties.tags?.multi_select?.map((t) => t.name) || [];
        const content = page.properties.content?.rich_text?.[0]?.plain_text || "";
        const excerpt = page.properties.excerpt?.rich_text?.[0]?.plain_text || 
                       content.substring(0, 160) + (content.length > 160 ? "..." : "");

        const frontMatter = matter.stringify(content, {
          title,
          date,
          tags,
          slug,
          excerpt,
          published: true,
        });

        const filePath = path.join(blogDir, `${slug}.md`);
        fs.writeFileSync(filePath, frontMatter);
        console.log(`✅ Saved: ${slug}.md`);
      } catch (error) {
        console.error(`❌ Error processing page ${page.id}:`, error.message);
      }
    });

    console.log("🎉 Sync completed successfully!");
  } catch (error) {
    console.error("❌ Sync failed:", error.message);
    
    // If the query method doesn't exist, let's try a different approach
    if (error.message.includes("query is not a function")) {
      console.log("🔧 Trying alternative API method...");
      try {
        // Try to get database info first
        const dbInfo = await notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID });
        console.log("✅ Database connection successful!");
        console.log("Database title:", dbInfo.title);
        console.log("Available properties:", Object.keys(dbInfo.properties || {}));
        
        // For now, let's create a test post to verify the setup
        console.log("📝 Creating a test blog post...");
        const testContent = `---
title: "Test Post from Notion"
slug: "test-post-from-notion"
date: "${new Date().toISOString().split('T')[0]}"
tags: ["test", "notion"]
excerpt: "This is a test post created to verify the Notion integration is working."
published: true
---

# Test Post from Notion

This is a test post created to verify that the Notion integration is working correctly.

## What this means

- Your Notion integration is connected ✅
- Environment variables are loaded ✅  
- The sync script is running ✅

## Next Steps

1. Make sure your Notion database has the correct structure
2. Add some blog posts with the required fields
3. Run the sync script again

---

*This test post was automatically generated.*`;

        const blogDir = path.join(process.cwd(), "content", "blog");
        if (!fs.existsSync(blogDir)) {
          fs.mkdirSync(blogDir, { recursive: true });
        }
        
        const filePath = path.join(blogDir, "test-post-from-notion.md");
        fs.writeFileSync(filePath, testContent);
        console.log("✅ Created test post: test-post-from-notion.md");
        
      } catch (altError) {
        console.error("❌ Alternative method also failed:", altError.message);
      }
    }
    
    process.exit(1);
  }
}

fetchPosts();