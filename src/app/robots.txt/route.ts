export function GET(): Response {
  const robots = `
User-agent: *
Allow: /

# Disallow sensitive/internal areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /components-demo/

# Sitemap
Sitemap: https://speedyip.com/sitemap.xml

# Crawl-delay (optional, may be ignored by Google)
Crawl-delay: 1
  `.trim()

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // 1 day
    },
  })
}
