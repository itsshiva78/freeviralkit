import { motion } from 'framer-motion';
import { Copy, CheckCircle2, ChevronRight, RotateCcw, Loader2 } from 'lucide-react';

interface HomeTitleListProps {
  titles: string[];
  selectedTitle: string | null;
  onSelectTitle: (title: string) => void;
  onRegenerate: () => void;
  isGeneratingTitles: boolean;
  isGeneratingDetails: boolean;
  copiedStates: { [key: string]: boolean };
  onCopy: (text: string, key: string) => void;
}

export function HomeTitleList({
  titles,
  selectedTitle,
  onSelectTitle,
  onRegenerate,
  isGeneratingTitles,
  isGeneratingDetails,
  copiedStates,
  onCopy,
}: HomeTitleListProps) {
  const charColor = (len: number) =>
    len >= 30 && len <= 70
      ? 'text-green-600 dark:text-green-400'
      : len > 80
      ? 'text-red-600 dark:text-red-400'
      : 'text-yellow-600 dark:text-yellow-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg md:text-xl font-bold text-slate-900 dark:text-white">
          Select Title Candidate
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const allTitles = titles.join('\n');
              onCopy(allTitles, 'all-titles');
            }}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer active:scale-[0.96] transition-all font-mono"
          >
            <Copy className="w-3.5 h-3.5" /> Copy All 10
          </button>
          <button
            onClick={onRegenerate}
            disabled={isGeneratingTitles}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer active:scale-[0.96] transition-all font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Regenerate 10
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {titles.map((title, index) => {
          const key = `title-${index}`;
          const isSelected = selectedTitle === title;
          const isCopied = copiedStates[key];

          return (
            <div
              key={index}
              onClick={() => onSelectTitle(title)}
              className={`glass-card rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer transition-all ease-spring duration-200 active:scale-[0.99] ${
                isSelected
                  ? 'border-red-500/80 ring-2 ring-red-500/20 bg-red-500/[0.04] dark:bg-red-950/20 dark:border-red-500/60 shadow-lg'
                  : 'hover:border-zinc-400 dark:hover:border-zinc-700 hover:-translate-y-[1px] hover:bg-slate-50 dark:bg-[#121216] dark:hover:bg-[#17171d] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)]'
              }`}
            >
              <div className="flex-1">
                <p className="text-slate-900 dark:text-slate-200 font-semibold text-base mb-1 leading-snug">
                  {title}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`font-mono font-medium ${charColor(title.length)}`}>
                    {title.length} chars
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-mono">
                    {title.length >= 30 && title.length <= 70
                      ? 'Good length for YouTube'
                      : title.length > 80
                      ? 'May get cut off on mobile'
                      : 'A bit short, but can still work'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCopy(title, key);
                  }}
                  className="p-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#18181f] hover:bg-slate-200 dark:hover:bg-[#22222b] text-slate-700 dark:text-slate-200 border border-transparent dark:border-white/[0.06] active:scale-[0.92] transition-all shrink-0 cursor-pointer"
                  title="Copy title"
                >
                  {isCopied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onSelectTitle(title)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'btn-primary'
                      : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white active:scale-[0.97]'
                  }`}
                >
                  {isSelected && isGeneratingDetails ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Packaging...
                    </>
                  ) : isSelected ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Active Package
                    </>
                  ) : (
                    <>
                      Package This Title <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
