'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotionBlockRenderer from '@/components/NotionBlockRenderer';
import { BlogPost } from '@/lib/blog';

interface PostRendererProps {
  post: BlogPost;
}

export default function PostRenderer({ post }: PostRendererProps) {
  const getTagColor = (tag: string) => {
    const colors = {
      'patent': 'bg-blue-100 text-blue-800',
      'trademark': 'bg-orange-100 text-orange-800',
      'guide': 'bg-green-100 text-green-800',
      'tag1': 'bg-purple-100 text-purple-800',
      'tag2': 'bg-pink-100 text-pink-800',
    };
    return colors[tag as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
              <span>•</span>
              {post.tags.map((tag, index) => (
                <span key={index} className={`px-2 py-1 rounded-full text-xs ${getTagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.isRichContent && post.blocks && post.blocks.length > 0 ? (
              <NotionBlockRenderer blocks={post.blocks} />
            ) : post.content ? (
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            ) : (
              <div className="text-center py-12">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Content Coming Soon!
                  </h3>
                  <p className="text-blue-800 mb-4">
                    This content is being prepared. Check back soon for updates.
                  </p>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need Professional Help?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert attorneys can guide you through the entire process.
            </p>
            <Button asChild size="lg">
              <Link href="/#lead-capture">Get Expert Help</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
