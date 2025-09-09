import { MetadataRoute } from 'next'

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

  // Blog posts (you can expand this with dynamic blog posts)
  const blogPosts = [
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
    ...blogPosts,
  ]
}
