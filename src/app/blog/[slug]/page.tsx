import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getStaticParams } from '@/lib/blog';
import PostRenderer from '@/components/PostRenderer';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | SpeedyIP Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | SpeedyIP Blog`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  return await getStaticParams();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return <PostRenderer post={post} />;
}