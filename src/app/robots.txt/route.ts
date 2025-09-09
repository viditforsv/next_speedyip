export function GET(): Response {
  const robots = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /api/
Disallow: /components-demo/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /services/
Allow: /blog/

# Sitemap location
Sitemap: https://speedyip.com/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
