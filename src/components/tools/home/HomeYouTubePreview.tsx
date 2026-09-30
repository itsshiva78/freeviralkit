'use client';

import { useState } from 'react';
import { Smartphone, Monitor, CheckCircle, AlertTriangle, Eye, Play } from 'lucide-react';

interface HomeYouTubePreviewProps {
  title: string;
}

export function HomeYouTubePreview({ title }: HomeYouTubePreviewProps) {
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');

  const charCount = title.length;
  const isTruncatedOnMobile = charCount > 55;
  const mobileVisibleTitle = isTruncatedOnMobile
    ? title.slice(0, 52) + '...'
    : title;

  return (
    <div className="glass-card rounded-3xl p-5 md:p-6 border border-slate-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-[#121216]/90 shadow-xl backdrop-blur-xl">
      {/* Top Header & Viewport Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/[0.08] pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-red-500/10 text-red-500 dark:bg-red-500/20">
            <Eye className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              YouTube Feed Simulator
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                Live Preview
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              Test title readability &amp; mobile truncation before publishing
            </p>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile Feed
          </button>
          <button
            type="button"
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'desktop'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> Desktop Search
          </button>
        </div>
      </div>

      {/* Simulator Display Body */}
      <div className="flex justify-center">
        {viewMode === 'mobile' ? (
          /* Mobile YouTube App Card Mockup */
          <div className="w-full max-w-md bg-[#0f0f0f] text-white rounded-2xl p-3.5 border border-zinc-800/80 shadow-2xl">
            {/* 16:9 Thumbnail Mockup */}
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black relative overflow-hidden flex items-center justify-center border border-zinc-800">
              <div className="w-11 h-11 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-600/30">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <span className="absolute bottom-2 right-2 bg-black/85 text-[11px] font-mono font-bold px-1.5 py-0.5 rounded text-white tracking-wider">
                12:45
              </span>
            </div>

            {/* Video Metadata Row */}
            <div className="flex gap-3 pt-3">
              {/* Creator Avatar */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                YT
              </div>

              {/* Title & Stats */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2">
                  {mobileVisibleTitle}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                  <span className="truncate max-w-[130px]">Creator Studio</span>
                  <span>•</span>
                  <span>142K views</span>
                  <span>•</span>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop YouTube Search Item Mockup */
          <div className="w-full max-w-2xl bg-[#0f0f0f] text-white rounded-2xl p-4 border border-zinc-800/80 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* Desktop 16:9 Thumbnail */}
              <div className="aspect-video w-full sm:w-56 shrink-0 rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black relative overflow-hidden flex items-center justify-center border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="absolute bottom-1.5 right-1.5 bg-black/85 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded text-white">
                  12:45
                </span>
              </div>

              {/* Desktop Info */}
              <div className="flex-1 min-w-0 py-0.5">
                <h4 className="text-base font-medium text-white leading-snug line-clamp-2 hover:text-blue-400 transition-colors">
                  {title}
                </h4>

                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                  <span>142K views</span>
                  <span>•</span>
                  <span>3 days ago</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 text-[10px] font-bold text-white flex items-center justify-center shrink-0">
                    YT
                  </div>
                  <span className="text-zinc-300 font-medium">Creator Studio</span>
                  <span className="w-3 h-3 rounded-full bg-zinc-700 text-zinc-300 flex items-center justify-center text-[8px]">✓</span>
                </div>

                <p className="text-xs text-zinc-500 mt-2 line-clamp-1">
                  {`Watch the full video: ${title} and more. New videos every week.`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Truncation & Health Diagnostic Bar */}
      <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          {isTruncatedOnMobile ? (
            <span className="flex items-center gap-1.5 text-amber-500 font-medium">
              <AlertTriangle className="w-3.5 h-3.5" />
              Over 55 chars ({charCount} chars). May truncate after word 8 on mobile.
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              Optimal Mobile Length ({charCount} chars). Fully visible on smartphones.
            </span>
          )}
        </div>

        <span className="font-mono text-zinc-500 dark:text-zinc-400">
          Target: 50-70 characters for peak CTR
        </span>
      </div>
    </div>
  );
}
