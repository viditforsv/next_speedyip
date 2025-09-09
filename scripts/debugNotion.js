// scripts/debugNotion.js
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const notion = new Client({ 
  auth: process.env.NOTION_SECRET 
});

async function debugConnection() {
  try {
    console.log("🔍 Debugging Notion connection...");
    console.log("Secret:", process.env.NOTION_SECRET ? "✅ Set" : "❌ Missing");
    console.log("Database ID:", process.env.NOTION_DATABASE_ID ? "✅ Set" : "❌ Missing");
    console.log("Secret length:", process.env.NOTION_SECRET?.length);
    console.log("Database ID length:", process.env.NOTION_DATABASE_ID?.length);
    
    // Try to get user info first
    console.log("\n🔍 Testing token validity...");
    const user = await notion.users.me();
    console.log("✅ Token is valid!");
    console.log("User:", user.name || user.id);
    
    // Try different database ID formats
    const dbId = process.env.NOTION_DATABASE_ID;
    const formats = [
      dbId,
      dbId.replace(/-/g, ''),
      dbId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5')
    ];
    
    console.log("\n🔍 Trying different database ID formats...");
    for (let i = 0; i < formats.length; i++) {
      const format = formats[i];
      console.log(`\nTrying format ${i + 1}: ${format}`);
      try {
        const dbInfo = await notion.databases.retrieve({ 
          database_id: format 
        });
        console.log(`✅ SUCCESS with format ${i + 1}!`);
        console.log("Database title:", dbInfo.title[0]?.plain_text || "Untitled");
        console.log("Available properties:", Object.keys(dbInfo.properties));
        break;
      } catch (error) {
        console.log(`❌ Failed with format ${i + 1}: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error("❌ Debug failed:", error.message);
    
    if (error.message.includes("object_not_found")) {
      console.log("\n🔧 Possible solutions:");
      console.log("1. Check if the database ID is correct");
      console.log("2. Verify the database is shared with your integration");
      console.log("3. Make sure the integration has the right permissions");
    }
  }
}

debugConnection();
