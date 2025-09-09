import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/components-demo/',
        '/_next/',
        '/admin/',
        '/private/'
      ],
    },
    sitemap: 'https://speedyip.com/sitemap.xml',
  }
}
