# Sitemap & SEO Setup for SpeedyIP

This document explains the automatic sitemap generation and robots.txt setup for the SpeedyIP website.

## 🗺️ Sitemap Generation

### Automatic Generation

The sitemap is automatically generated during the build process using Next.js built-in features and custom scripts.

### Files Created:

- `src/app/sitemap.ts` - Next.js dynamic sitemap generation
- `src/app/sitemap.xml/route.ts` - Alternative route-based sitemap
- `src/app/robots.txt/route.ts` - Dynamic robots.txt generation
- `public/robots.txt` - Static robots.txt fallback
- `scripts/generateSitemap.js` - Custom sitemap generation script

### URLs Included:

- **Static Pages**: Homepage, Services overview, Blog overview
- **Service Pages**: Patents, Trademarks, Copyrights main pages
- **Sub-Services**: All service sub-pages (search, filing, etc.)
- **Blog Posts**: Dynamic blog posts from `/content/blog/` directory
- **Components Demo**: Development/design system page

## 🤖 Robots.txt Configuration

### Allowed:

- All public pages (`/`)
- Service pages (`/services/`)
- Blog pages (`/blog/`)

### Disallowed:

- API routes (`/api/`)
- Components demo (`/components-demo/`)
- Next.js internals (`/_next/`)
- Admin areas (`/admin/`, `/private/`)

### Crawl Settings:

- Crawl delay: 1 second
- Sitemap location: `https://speedyip.com/sitemap.xml`

## 🚀 Usage

### Build with Sitemap Generation:

```bash
npm run build:sitemap
```

### Generate Sitemap Only:

```bash
npm run sitemap
```

### Regular Build (sitemap auto-generated):

```bash
npm run build
```

## 📊 Sitemap Features

### Dynamic Content:

- **Blog Posts**: Automatically scans `/content/blog/` for `.md` files
- **Last Modified**: Uses actual file modification dates
- **Priority Scoring**:
  - Homepage: 1.0
  - Main services: 0.9
  - Service pages: 0.8
  - Sub-services: 0.7
  - Blog posts: 0.6

### SEO Optimization:

- **Change Frequency**: Appropriate frequencies for each page type
- **Last Modified**: Accurate timestamps
- **Priority**: Strategic priority scoring
- **XML Format**: Standard sitemap.org format

## 🔧 Configuration

### Base URL:

Update the `baseUrl` variable in:

- `src/app/sitemap.ts`
- `scripts/generateSitemap.js`

### Adding New Pages:

1. **Static Pages**: Add to the `staticPages` array
2. **Service Pages**: Add to the `servicePages` array
3. **Dynamic Content**: The system will automatically detect new blog posts

### Customization:

- Modify priority scores in the respective arrays
- Adjust change frequencies based on content update patterns
- Add new URL patterns as needed

## 📈 Monitoring

### Sitemap Validation:

- Validate at: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Google Search Console: Submit sitemap for indexing

### Analytics:

- Monitor sitemap submission in Google Search Console
- Track indexing status of URLs
- Monitor crawl errors and coverage

## 🔄 Automation

### CI/CD Integration:

The sitemap is automatically generated during:

- Production builds
- Deployment processes
- Content updates (blog posts)

### Manual Updates:

Run `npm run sitemap` after:

- Adding new service pages
- Publishing new blog posts
- Making structural changes

## 📝 Notes

- The sitemap is accessible at: `https://speedyip.com/sitemap.xml`
- Robots.txt is accessible at: `https://speedyip.com/robots.txt`
- Both files are automatically served by Next.js
- The system gracefully handles missing blog content
- Fallback URLs ensure sitemap completeness
