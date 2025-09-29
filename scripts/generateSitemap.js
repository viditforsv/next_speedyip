#!/usr/bin/env node

/**
 * Sitemap Generation Script for SpeedyIP
 * 
 * This script generates a comprehensive sitemap.xml file
 * that includes all static pages, dynamic blog posts, and service pages.
 * 
 * Usage: node scripts/generateSitemap.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://speedyip.com'

// XML template for sitemap
const sitemapTemplate = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`

// Generate sitemap URLs
function generateSitemapUrls() {
  // const urls = []

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/components-demo`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.3',
    },
  ]

  // Service pages
  const servicePages = [
    {
      url: `${baseUrl}/services/patents`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/services/trademarks`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/services/copyrights`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.8',
    },
  ]

  // Patent sub-services
  const patentSubServices = [
    'search', 'drafting', 'filing', 'prosecution'
  ].map(subService => ({
    url: `${baseUrl}/services/patents/${subService}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: '0.7',
  }))

  // Trademark sub-services
  const trademarkSubServices = [
    'search', 'application', 'filing', 'monitoring'
  ].map(subService => ({
    url: `${baseUrl}/services/trademarks/${subService}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: '0.7',
  }))

  // Copyright sub-services
  const copyrightSubServices = [
    'registration', 'dmca', 'monitoring', 'enforcement'
  ].map(subService => ({
    url: `${baseUrl}/services/copyrights/${subService}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: '0.7',
  }))

  // Dynamic blog posts
  const blogPosts = []
  try {
    const blogDir = path.join(__dirname, '..', 'content', 'blog')
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir)
      const mdFiles = files.filter(file => file.endsWith('.md'))
      
      mdFiles.forEach(file => {
        const slug = file.replace('.md', '')
        const filePath = path.join(blogDir, file)
        const stats = fs.statSync(filePath)
        
        blogPosts.push({
          url: `${baseUrl}/blog/${slug}`,
          lastModified: stats.mtime.toISOString().split('T')[0],
          changeFrequency: 'monthly',
          priority: '0.6',
        })
      })
    }
  } catch (error) {
    console.warn('Could not read blog directory:', error.message)
  }

  // Fallback blog posts
  const fallbackBlogPosts = [
    {
      url: `${baseUrl}/blog/how-to-file-patent`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.6',
    },
    {
      url: `${baseUrl}/blog/how-to-file-trademark`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.6',
    },
    {
      url: `${baseUrl}/blog/welcome-to-speedyip-blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: '0.5',
    },
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...patentSubServices,
    ...trademarkSubServices,
    ...copyrightSubServices,
    ...(blogPosts.length > 0 ? blogPosts : fallbackBlogPosts),
  ]
}

// Main function
function generateSitemap() {
  console.log('🚀 Generating sitemap for SpeedyIP...')
  
  const urls = generateSitemapUrls()
  const sitemapXml = sitemapTemplate(urls)
  
  // Write to public directory
  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  
  try {
    fs.writeFileSync(sitemapPath, sitemapXml, 'utf8')
    console.log(`✅ Sitemap generated successfully!`)
    console.log(`📄 Location: ${sitemapPath}`)
    console.log(`🔗 URL: ${baseUrl}/sitemap.xml`)
    console.log(`📊 Total URLs: ${urls.length}`)
    
    // Log URL categories
    const categories = {
      'Static Pages': urls.filter(u => u.priority === '1.0' || u.priority === '0.9').length,
      'Service Pages': urls.filter(u => u.url.includes('/services/') && !u.url.split('/').pop().includes('/')).length,
      'Sub-Services': urls.filter(u => u.url.includes('/services/') && u.url.split('/').pop().includes('/')).length,
      'Blog Posts': urls.filter(u => u.url.includes('/blog/')).length,
    }
    
    console.log('\n📈 URL Breakdown:')
    Object.entries(categories).forEach(([category, count]) => {
      console.log(`   ${category}: ${count}`)
    })
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap()
}

export { generateSitemap }
