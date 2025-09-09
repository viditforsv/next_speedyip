import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | SpeedyIP - Patent Services & Innovation Insights',
  description: 'Stay updated with the latest patent news, innovation insights, and intellectual property strategies from SpeedyIP experts.',
  openGraph: {
    title: 'Blog | SpeedyIP - Patent Services & Innovation Insights',
    description: 'Stay updated with the latest patent news, innovation insights, and intellectual property strategies from SpeedyIP experts.',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              SpeedyIP Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest patent news, innovation insights, and intellectual property strategies from our experts.
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <Button variant="outline" size="lg">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rich Content Demo */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Rich Content Demo</h2>
          <p className="text-gray-600 mb-4">
            See how complex pages with images, formatting, and rich content work with our Notion integration.
          </p>
          <Link href="/blog/rich-content">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Rich Content Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No blog posts yet
            </h2>
            <p className="text-gray-600 mb-8">
              Check back soon for patent insights and innovation news!
            </p>
            <Link href="/">
              <Button size="lg">
                Return to Home
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {post.tags.length > 0 && (
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-gray-400" />
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Patent Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert patent attorneys are ready to help protect your innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#lead-capture">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
