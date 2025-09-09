import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://speedyip.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/components-demo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Service pages
  const servicePages = [
    {
      url: `${baseUrl}/services/patents`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/trademarks`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/copyrights`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Patent sub-services
  const patentSubServices = [
    'search',
    'drafting', 
    'filing',
    'prosecution'
  ].map(subService => ({
    url: `${baseUrl}/services/patents/${subService}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Trademark sub-services
  const trademarkSubServices = [
    'search',
    'application',
    'filing', 
    'monitoring'
  ].map(subService => ({
    url: `${baseUrl}/services/trademarks/${subService}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Copyright sub-services
  const copyrightSubServices = [
    'registration',
    'dmca',
    'monitoring',
    'enforcement'
  ].map(subService => ({
    url: `${baseUrl}/services/copyrights/${subService}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog posts from content directory
  const blogPosts: MetadataRoute.Sitemap = []
  
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir)
      const mdFiles = files.filter(file => file.endsWith('.md'))
      
      mdFiles.forEach(file => {
        const slug = file.replace('.md', '')
        const filePath = path.join(blogDir, file)
        const stats = fs.statSync(filePath)
        
        blogPosts.push({
          url: `${baseUrl}/blog/${slug}`,
          lastModified: stats.mtime,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        })
      })
    }
  } catch (error) {
    console.warn('Could not read blog directory for sitemap:', error)
  }

  // Fallback blog posts if dynamic reading fails
  const fallbackBlogPosts = [
    {
      url: `${baseUrl}/blog/how-to-file-patent`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/how-to-file-trademark`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/welcome-to-speedyip-blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
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
