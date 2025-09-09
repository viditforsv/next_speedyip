import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const notion = new Client({ auth: process.env.NOTION_SECRET });

console.log('🔍 Detailed Notion Integration Test...');

try {
  // Test 1: Check integration info
  console.log('\n1️⃣ Testing integration access...');
  const user = await notion.users.me();
  console.log('✅ Integration name:', user.name);
  console.log('✅ Integration ID:', user.id);

  // Test 2: Try to list accessible databases
  console.log('\n2️⃣ Testing database access...');
  
  // Try different database ID formats
  const dbIds = [
    '2679757e-9d89-80a9-98ce-d6af20e099c3',
    '2679757e9d8980a998ced6af20e099c3',
    process.env.NOTION_DATABASE_ID
  ];

  for (const dbId of dbIds) {
    console.log(`\nTrying database ID: ${dbId}`);
    try {
      const db = await notion.databases.retrieve({ database_id: dbId });
      console.log('✅ SUCCESS! Database found:', db.title[0]?.plain_text);
      console.log('✅ Database ID:', db.id);
      
      // Try to query pages
      const pages = await notion.databases.query({ database_id: dbId, page_size: 1 });
      console.log('✅ Pages found:', pages.results.length);
      
      if (pages.results.length > 0) {
        const page = pages.results[0];
        console.log('✅ First page title:', page.properties.title?.title?.[0]?.text?.content);
      }
      
      break; // Success, stop trying other formats
      
    } catch (error) {
      console.log('❌ Failed:', error.message);
    }
  }

} catch (error) {
  console.log('❌ Integration test failed:', error.message);
}
