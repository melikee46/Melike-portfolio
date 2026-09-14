import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function BlogListPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = getAllPosts(locale);

  return (
    <section className="py-16 px-6 md:px-8">
      <h1 className="font-serif text-3xl mb-8">{locale === 'tr' ? 'günlük' : 'blog'}</h1>
      <div className="flex flex-col gap-6">
        {posts.length === 0 && (
          <p className="text-ink-soft text-sm">{locale === 'tr' ? 'henüz yazı yok.' : 'no posts yet.'}</p>
        )}
        {posts.map((post) => (
          <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="block border-b border-dashed border-line pb-4">
            <div className="font-mono text-xs text-sage-deep mb-1">{post.date}</div>
            <div className="font-serif text-xl mb-1">{post.title}</div>
            {post.excerpt && <div className="text-sm text-ink-soft">{post.excerpt}</div>}
          </Link>
        ))}
      </div>
    </section>
  );
}