import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/mdx';

export const dynamic = 'force-dynamic';

export default function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const post = getPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 px-6 md:px-8 prose prose-neutral max-w-none">
      <div className="font-mono text-xs text-sage-deep mb-2">{post!.date}</div>
      <h1 className="font-serif text-3xl mb-6">{post!.title}</h1>
      <MDXRemote source={post!.content} />
    </article>
  );
}