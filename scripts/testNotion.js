// scripts/testNotion.js
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const notion = new Client({ 
  auth: process.env.NOTION_SECRET 
});

async function testConnection() {
  try {
    console.log("🔍 Testing Notion connection...");
    console.log("Secret:", process.env.NOTION_SECRET ? "✅ Set" : "❌ Missing");
    console.log("Database ID:", process.env.NOTION_DATABASE_ID ? "✅ Set" : "❌ Missing");
    
    // Test database access
    const dbInfo = await notion.databases.retrieve({ 
      database_id: process.env.NOTION_DATABASE_ID 
    });
    
    console.log("✅ Database connection successful!");
    console.log("Database title:", dbInfo.title[0]?.plain_text || "Untitled");
    console.log("Available properties:", Object.keys(dbInfo.properties));
    
    // List all properties
    Object.entries(dbInfo.properties).forEach(([key, value]) => {
      console.log(`  - ${key}: ${value.type}`);
    });
    
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    
    if (error.message.includes("object_not_found")) {
      console.log("\n🔧 To fix this:");
      console.log("1. Go to your Notion database");
      console.log("2. Click 'Share' in the top-right corner");
      console.log("3. Click 'Invite' and search for your integration");
      console.log("4. Give it 'Read' permissions");
      console.log("5. Click 'Invite'");
    }
  }
}

testConnection();
