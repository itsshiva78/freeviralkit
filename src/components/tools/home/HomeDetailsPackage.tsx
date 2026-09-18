import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Copy,
  CheckCircle2,
  Package,
  AlignLeft,
  Hash,
  Tag,
  MessageCircle,
  RotateCcw,
  Edit3,
} from 'lucide-react';
import { CharacterLimitGauge } from '../CharacterLimitGauge';

export interface DetailsData {
  description: string;
  hashtags: string[];
  tags: string[];
  pinnedComment: string;
}

interface HomeDetailsPackageProps {
  selectedTitle: string;
  details: DetailsData;
  copiedStates: { [key: string]: boolean };
  onCopy: (text: string, key: string) => void;
  onCopyFullPackage: (customDescription?: string) => void;
  detailsRef: React.RefObject<HTMLDivElement | null>;
}

export function HomeDetailsPackage({
  selectedTitle,
  details,
  copiedStates,
  onCopy,
  onCopyFullPackage,
  detailsRef,
}: HomeDetailsPackageProps) {
  const [editedDescription, setEditedDescription] = useState(details.description);

  useEffect(() => {
    setEditedDescription(details.description);
  }, [details.description]);

  const tagsTotalChars = (tags: string[]) => tags.join(', ').length;
  const isEdited = editedDescription !== details.description;

  return (
    <motion.div
      ref={detailsRef}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-[#121216]/90 shadow-2xl backdrop-blur-xl space-y-8 mt-12"
    >
      {/* Header & Copy All Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6">
        <div>
          <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            Step 2: Complete Metadata Cockpit
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            SEO Packaging for: &quot;{selectedTitle}&quot;
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onCopyFullPackage(editedDescription)}
          className="w-full sm:w-auto px-5 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {copiedStates['full-package'] ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Entire Package Copied!
            </>
          ) : (
            <>
              <Package className="w-4 h-4" /> Copy Entire YouTube Pack
            </>
          )}
        </button>
      </div>

      {/* Description Section with In-Place Editing */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlignLeft className="w-4 h-4 text-purple-500" />
            <span>Optimized Video Description</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
              <Edit3 className="w-3 h-3 text-purple-400" /> Editable in-place
            </span>
          </label>
          <div className="flex items-center gap-2">
            {isEdited && (
              <button
                type="button"
                onClick={() => setEditedDescription(details.description)}
                className="text-xs px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition-all cursor-pointer"
                title="Reset to AI original"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
            <button
              type="button"
              onClick={() => onCopy(editedDescription, 'desc')}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copiedStates['desc'] ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copiedStates['desc'] ? 'Copied' : 'Copy Description'}
            </button>
          </div>
        </div>

        <CharacterLimitGauge
          current={editedDescription.length}
          max={5000}
          recommendedMax={4500}
          label="Description Chars"
          warningNote="First 150-200 chars appear before 'Show more' fold"
        />

        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          aria-label="Editable Video Description"
          rows={7}
          className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-[#09090b] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 text-sm font-mono leading-relaxed focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/60 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] outline-none transition-all resize-y"
        />
      </div>

      {/* Tags Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Tag className="w-4 h-4 text-cyan-500" /> YouTube Studio Search Tags ({details.tags.length})
          </label>
          <button
            type="button"
            onClick={() => onCopy(details.tags.join(', '), 'all-tags')}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {copiedStates['all-tags'] ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copiedStates['all-tags'] ? 'Copied' : 'Copy All Tags'}
          </button>
        </div>

        <CharacterLimitGauge
          current={tagsTotalChars(details.tags)}
          max={500}
          recommendedMax={480}
          label="Tags Total Chars"
          warningNote="YouTube Studio allows max 500 characters total"
        />
        <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-[#09090b] border border-slate-200 dark:border-white/[0.08] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
          {details.tags.map((tag, idx) => {
            const key = `tag-${idx}`;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onCopy(tag, key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 ${
                  copiedStates[key]
                    ? 'bg-emerald-500/20 text-emerald-600 border-emerald-500/40'
                    : 'bg-white dark:bg-[#16161c] border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-purple-500/50 dark:hover:bg-[#1e1e26] active:scale-[0.95]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hashtags Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Hash className="w-4 h-4 text-pink-500" /> Trending Hashtags ({details.hashtags.length})
          </label>
          <button
            type="button"
            onClick={() => onCopy(details.hashtags.join(' '), 'all-hashtags')}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all"
          >
            {copiedStates['all-hashtags'] ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copiedStates['all-hashtags'] ? 'Copied' : 'Copy Hashtags'}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-[#09090b] border border-slate-200 dark:border-white/[0.08] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
          {details.hashtags.map((ht, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-bold bg-pink-500/10 text-pink-500 border border-pink-500/20"
            >
              {ht}
            </span>
          ))}
        </div>
      </div>

      {/* Pinned Comment Section */}
      {details.pinnedComment && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-amber-500" /> High-Engagement Pinned Comment
            </label>
            <button
              type="button"
              onClick={() => onCopy(details.pinnedComment, 'pinned')}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all"
            >
              {copiedStates['pinned'] ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copiedStates['pinned'] ? 'Copied' : 'Copy Comment'}
            </button>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#09090b] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 text-sm font-mono leading-relaxed dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
            {details.pinnedComment}
          </div>
        </div>
      )}
    </motion.div>
  );
}
