import Link from 'next/link';
import { Zap, ExternalLink } from 'lucide-react';

export function HomeTopBanner() {
  return (
    <div className="mb-6 p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shrink-0">
          <Zap className="w-4 h-4" />
        </span>
        <div className="text-sm">
          <span className="font-semibold text-slate-900 dark:text-white">
            Covering Trending Cinema, Anime, or Breaking News?{' '}
          </span>
          <span className="text-slate-600 dark:text-slate-400">
            Use grounded live search to fetch verified cast rosters, release dates, and SEO lore.
          </span>
        </div>
      </div>
      <Link
        href="/youtube-realtime-title-generator"
        className="shrink-0 px-4 py-2 text-xs font-semibold rounded-xl bg-red-600 hover:bg-red-500 text-white active:scale-[0.98] transition-all shadow-md shadow-red-600/20 flex items-center gap-1.5"
      >
        Real-Time Live Tool <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
