# SpeedyIP Notion CMS Setup Guide

This guide will help you set up Notion as a CMS for your SpeedyIP blog.

## 🚀 Step 1: Prepare Notion Database

1. **Create a new Notion database** called `Blog Posts`

2. **Add the following columns:**

   - `title` (Title) - The blog post title
   - `slug` (Text) - URL-friendly version of the title
   - `date` (Date) - Publication date
   - `tags` (Multi-select) - Categories/tags for the post
   - `content` (Text or Long Text) - The main content
   - `excerpt` (Text) - Short description for previews
   - `enabled` (Checkbox) - Whether to publish this post

3. **Create a Notion Integration:**

   - Go to [notion.so/my-integrations](https://notion.so/my-integrations)
   - Click "New integration"
   - Name it `SpeedyIP CMS`
   - Copy the **Integration Token** (starts with `secret_`)

4. **Share your database:**

   - Open your `Blog Posts` database
   - Click "Share" in the top right
   - Click "Invite" and add your integration
   - Give it "Read" permissions

5. **Get your Database ID:**
   - Copy the URL of your database
   - Extract the Database ID (the long string between the last `/` and `?`)

## 🚀 Step 2: Configure Environment Variables

1. **Create `.env.local` file** in your project root:

```env
NOTION_SECRET=your-integration-token-here
NOTION_DATABASE_ID=your-database-id-here
```

2. **Replace the values** with your actual Notion integration token and database ID

## 🚀 Step 3: Sync Content from Notion

Run the sync command to fetch content from Notion:

```bash
npm run sync:cms
```

This will:

- Fetch all enabled posts from your Notion database
- Convert them to Markdown files in `content/blog/`
- Create proper frontmatter with metadata

## 🚀 Step 4: View Your Blog

- **Blog listing**: Visit `/blog` to see all posts
- **Individual posts**: Visit `/blog/[slug]` for specific posts
- **Sample post**: Check out `/blog/welcome-to-speedyip-blog`

## 🚀 Step 5: Workflow

### Adding New Posts:

1. Create a new page in your Notion `Blog Posts` database
2. Fill in all the required fields
3. Check the `enabled` checkbox
4. Run `npm run sync:cms` to sync to your site
5. Deploy your changes

### Editing Posts:

1. Edit the post in Notion
2. Run `npm run sync:cms` to update the site
3. Deploy your changes

## 🚀 Step 6: Customization

### Adding More Fields:

To add more fields to your blog posts:

1. **Add the field to Notion** (e.g., `author`, `featured_image`)
2. **Update the sync script** (`scripts/fetchNotion.js`) to include the new field
3. **Update the blog components** to display the new field

### Styling:

- Blog styles are in the individual page components
- Customize the design in `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`

## 🚀 Troubleshooting

### Common Issues:

1. **"NOTION_DATABASE_ID is not set"**

   - Make sure your `.env.local` file exists and has the correct values

2. **"Database not found"**

   - Verify your Database ID is correct
   - Make sure you've shared the database with your integration

3. **"No posts found"**

   - Check that posts have the `enabled` checkbox checked
   - Verify the field names match exactly (case-sensitive)

4. **Build errors**
   - Make sure all required dependencies are installed
   - Check that the `content/blog` directory exists

### Getting Help:

- Check the Notion API documentation
- Verify your integration has the correct permissions
- Test your sync script locally before deploying

## 🚀 Next Steps

1. **Set up automated syncing** with GitHub Actions
2. **Add image support** for featured images
3. **Implement search functionality**
4. **Add RSS feed** for subscribers
5. **Set up analytics** to track blog performance

---

**Ready to start blogging?** Create your first post in Notion and run `npm run sync:cms`!
