import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const notion = new Client({ auth: process.env.NOTION_SECRET });

console.log('🔍 Debugging search results...');

try {
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

  console.log(`📝 Found ${response.results.length} total pages`);
  
  response.results.forEach((page, index) => {
    console.log(`\n${index + 1}. Page ID: ${page.id}`);
    console.log(`   Title: ${page.properties.title?.title?.[0]?.plain_text || 'No title'}`);
    console.log(`   Parent type: ${page.parent?.type}`);
    console.log(`   Parent database ID: ${page.parent?.database_id}`);
    console.log(`   Properties: ${Object.keys(page.properties || {}).join(', ')}`);
  });

  // Check if any pages belong to our database
  const databaseId = process.env.NOTION_DATABASE_ID;
  const databasePages = response.results.filter(page => 
    page.parent?.database_id === databaseId
  );
  
  console.log(`\n📊 Pages in our database (${databaseId}): ${databasePages.length}`);

} catch (error) {
  console.error('❌ Debug failed:', error.message);
}
