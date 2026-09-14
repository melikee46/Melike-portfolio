import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

type Frontmatter = {
  title?: string;
  date?: string | Date;
  excerpt?: string;
};

const postsDirectory = path.join(process.cwd(), 'content/posts');

function parsePost(locale: string, filename: string): Post {
  const slug = filename.replace(/\.mdx$/, '');
  const filePath = path.join(postsDirectory, locale, filename);
  const file = matter(fs.readFileSync(filePath, 'utf8'));
  const data = file.data as Frontmatter;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date instanceof Date ? data.date.toISOString() : data.date ?? '',
    excerpt: data.excerpt ?? '',
    content: file.content
  };
}

export function getPosts(locale: string): Post[] {
  const localeDirectory = path.join(postsDirectory, locale);

  if (!fs.existsSync(localeDirectory)) {
    return [];
  }

  return fs
    .readdirSync(localeDirectory)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => parsePost(locale, filename))
    .sort((first, second) => second.date.localeCompare(first.date));
}

export const getAllPosts = getPosts;

export function getPostBySlug(locale: string, slug: string): Post | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(postsDirectory, locale, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parsePost(locale, filename);
}
