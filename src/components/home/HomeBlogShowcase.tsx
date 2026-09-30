import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { getPublishedPosts } from '@/app/blog/data';

export async function HomeBlogShowcase() {
  const allPosts = await getPublishedPosts();
  const latestPosts = allPosts.slice(0, 6);

  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            YouTube <span className="text-red-500">Growth Guides</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Deep-dive masterclasses on algorithm mechanics, audience retention, and search discovery
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          Explore All Guides <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card rounded-2xl p-5 group hover:border-zinc-700 dark:hover:border-zinc-700 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-medium text-zinc-400 bg-zinc-800/70 px-2 py-0.5 rounded border border-zinc-700/60 truncate max-w-[160px]">
                  {post.category}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 shrink-0 font-mono">{post.readTime}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                {post.description}
              </p>
            </div>
            <div className="border-t border-slate-100 dark:border-zinc-800/80 pt-3 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-red-400">
              <span>FreeViralKit Research Lab</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
