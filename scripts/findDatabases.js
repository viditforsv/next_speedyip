import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const notion = new Client({ auth: process.env.NOTION_SECRET });

console.log('🔍 Finding Accessible Databases...');

try {
  // Try to search for databases
  console.log('\n1️⃣ Searching for accessible databases...');
  
  // This might not work, but let's try
  try {
    const searchResults = await notion.search({
      query: '',
      filter: {
        property: 'object',
        value: 'database'
      }
    });
    
    console.log('✅ Found databases:', searchResults.results.length);
    searchResults.results.forEach((db, index) => {
      console.log(`${index + 1}. ${db.title?.[0]?.plain_text || 'Untitled'} - ID: ${db.id}`);
    });
    
  } catch (searchError) {
    console.log('❌ Search failed:', searchError.message);
  }

  // Try to get the database by trying different approaches
  console.log('\n2️⃣ Trying direct database access...');
  
  const dbId = process.env.NOTION_DATABASE_ID;
  console.log('Using database ID:', dbId);
  
  try {
    const db = await notion.databases.retrieve({ database_id: dbId });
    console.log('✅ SUCCESS! Database found:', db.title[0]?.plain_text);
    console.log('✅ Database ID:', db.id);
    
    // Try to query pages
    const pages = await notion.databases.query({ database_id: dbId, page_size: 5 });
    console.log('✅ Pages found:', pages.results.length);
    
    pages.results.forEach((page, index) => {
      const title = page.properties.title?.title?.[0]?.text?.content || 'No title';
      console.log(`  ${index + 1}. ${title}`);
    });
    
  } catch (dbError) {
    console.log('❌ Database access failed:', dbError.message);
    
    if (dbError.message.includes('object_not_found')) {
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('1. Double-check the database ID in your Notion URL');
      console.log('2. Make sure the integration is shared at WORKSPACE level');
      console.log('3. Try creating a new integration and sharing it');
      console.log('4. Check if the database is in a different workspace');
    }
  }

} catch (error) {
  console.log('❌ Test failed:', error.message);
}
