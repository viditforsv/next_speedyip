import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const notion = new Client({ auth: process.env.NOTION_SECRET });

console.log('🔍 Quick Notion Test...');
console.log('Secret:', process.env.NOTION_SECRET ? '✅ Set' : '❌ Missing');
console.log('Database ID:', process.env.NOTION_DATABASE_ID ? '✅ Set' : '❌ Missing');

try {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID
  });
  
  console.log('✅ SUCCESS! Database accessible');
  console.log('📝 Database title:', database.title[0]?.plain_text || 'No title');
  console.log('🆔 Database ID:', database.id);
  
  // Now try to query pages
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 1
  });
  
  console.log('📊 Found', pages.results.length, 'pages');
  
  if (pages.results.length > 0) {
    const page = pages.results[0];
    console.log('📝 First page title:', page.properties.title?.title?.[0]?.text?.content || 'No title');
  }
  
} catch (error) {
  console.log('❌ FAILED:', error.message);
  
  if (error.message.includes('object_not_found')) {
    console.log('\n🔧 SOLUTION:');
    console.log('1. Copy the database ID from your Notion URL');
    console.log('2. Share the database with your integration');
    console.log('3. Check .env.local has the correct NOTION_DATABASE_ID');
  }
}
