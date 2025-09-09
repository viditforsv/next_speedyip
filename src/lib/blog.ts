// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content?: string;
  blocks?: any[];
  isRichContent: boolean;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    
    if (!fs.existsSync(blogDir)) {
      return [];
    }

    const files = fs.readdirSync(blogDir);
    const posts: BlogPost[] = [];

    // Get all markdown files (simple content)
    const mdFiles = files.filter(file => file.endsWith('.md') && !file.includes('-rich'));
    
    for (const file of mdFiles) {
      try {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        const slug = data.slug || file.replace('.md', '');
        
        // Check if rich content exists
        const richFilePath = path.join(blogDir, `${slug}-rich.json`);
        const hasRichContent = fs.existsSync(richFilePath);
        
        let blocks: any[] = [];
        if (hasRichContent) {
          try {
            const richContent = fs.readFileSync(richFilePath, 'utf8');
            const richData = JSON.parse(richContent);
            blocks = richData.blocks || [];
          } catch (error) {
            console.error(`Error reading rich content for ${slug}:`, error);
          }
        }
        
        posts.push({
          slug,
          title: data.title,
          date: data.date,
          tags: data.tags || [],
          excerpt: data.excerpt,
          content: data.content || '',
          blocks,
          isRichContent: hasRichContent && blocks.length > 0
        });
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }

    return posts
      .filter(post => post.title) // Only include posts with titles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}
