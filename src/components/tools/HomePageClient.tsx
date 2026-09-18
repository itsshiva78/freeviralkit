'use client';

import { useState, useRef } from 'react';
import { generateTitles } from '@/app/actions/titles';
import { generateDetails } from '@/app/actions/details';
import { Wand2, Loader2, Sparkles } from 'lucide-react';
import ErrorBanner from '@/components/ErrorBanner';
import { HomeTopBanner } from './home/HomeTopBanner';
import { HomeTitleList } from './home/HomeTitleList';
import { HomeDetailsPackage, type DetailsData } from './home/HomeDetailsPackage';
import { useToast } from '@/components/ToastProvider';

export default function HomePageClient() {
  const [topic, setTopic] = useState('');
  const [isGeneratingTitles, setIsGeneratingTitles] = useState(false);
  const [titles, setTitles] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [isGeneratingDetails, setIsGeneratingDetails] = useState(false);
  const [details, setDetails] = useState<DetailsData | null>(null);
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);
  const detailsSectionRef = useRef<HTMLDivElement>(null);

  const handleGenerateTitles = async (isRegenerate = false) => {
    if (!topic.trim()) return;
    setIsGeneratingTitles(true);
    setError(null);
    const exclude = isRegenerate ? titles : [];
    setTitles([]);
    setSelectedTitle(null);
    setDetails(null);

    const result = await generateTitles(topic, exclude);
    if (result.success && result.titles) {
      setTitles(result.titles);
    } else {
      setError(result.error || 'Failed to generate titles');
    }
    setIsGeneratingTitles(false);
  };

  const handleSelectTitle = async (title: string) => {
    setSelectedTitle(title);
    setIsGeneratingDetails(true);
    setError(null);
    setDetails(null);

    setTimeout(() => {
      if (detailsSectionRef.current) {
        const yOffset = -80;
        const y = detailsSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 80);

    const result = await generateDetails(title);
    if (result.success && result.details) {
      setDetails(result.details);
    } else {
      setError(result.error || 'Failed to generate details');
    }
    setIsGeneratingDetails(false);
  };

  const { showToast } = useToast();

  const copy = async (text: string, key: string, label?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((p) => ({ ...p, [key]: true }));
      showToast(label ? `Copied ${label}!` : 'Copied to clipboard!', 'success');
      setTimeout(() => setCopiedStates((p) => ({ ...p, [key]: false })), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
      showToast('Failed to copy to clipboard', 'error');
    }
  };

  const copyFullPackage = (customDescription?: string) => {
    if (!details || !selectedTitle) return;
    const desc = customDescription !== undefined ? customDescription : details.description;
    const full = `TITLE:\n${selectedTitle}\n\nDESCRIPTION:\n${desc}\n\nHASHTAGS:\n${details.hashtags.join(' ')}\n\nTAGS:\n${details.tags.join(', ')}\n\nPINNED COMMENT:\n${details.pinnedComment}`;
    copy(full, 'full-package', 'Complete YouTube Pack');
  };

  return (
    <div className="w-full space-y-6">
      <HomeTopBanner />

      {/* Main Generator Input Card */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerateTitles();
        }}
        className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-[#121216]/90 shadow-2xl backdrop-blur-xl space-y-5 relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <Wand2 className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Enter Your Video Topic or Concept
          </label>
          <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            ⚡ 10 Viral Titles + SEO Pack
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., How to build an AI app in 2026, 10 Python Automation Scripts, Minecraft Hardcore..."
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#09090b] text-slate-900 dark:text-slate-100 placeholder:text-slate-500 text-base md:text-lg focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/60 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] outline-none transition-all"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-600 dark:text-slate-400 mr-1">Trending:</span>
            {['AI Automation', 'Python 2026', 'Faceless Channel', 'Stock Investing', 'Gaming Walkthrough'].map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => {
                  setTopic(ex);
                  generateTitles(ex).then((res) => res.success && res.titles && setTitles(res.titles));
                }}
                className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-[#18181f] hover:bg-purple-500/15 hover:text-purple-600 dark:hover:text-purple-300 dark:hover:bg-purple-500/20 border border-slate-200/60 dark:border-white/[0.06] transition-all font-medium cursor-pointer active:scale-[0.96]"
              >
                {ex}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={isGeneratingTitles || !topic.trim()}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 disabled:opacity-50 cursor-pointer text-sm md:text-base shrink-0"
          >
            {isGeneratingTitles ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Generating 10 Viral Titles...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Generate 10 Viral Titles
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error Alert */}
      {error && <ErrorBanner error={error} onClear={() => setError(null)} />}

      {/* Step 1: Titles List */}
      {titles.length > 0 && (
        <HomeTitleList
          titles={titles}
          selectedTitle={selectedTitle}
          onSelectTitle={handleSelectTitle}
          onRegenerate={() => handleGenerateTitles(true)}
          isGeneratingTitles={isGeneratingTitles}
          isGeneratingDetails={isGeneratingDetails}
          copiedStates={copiedStates}
          onCopy={copy}
        />
      )}

      {/* Step 2: Complete SEO Details Package */}
      {details && selectedTitle && (
        <HomeDetailsPackage
          selectedTitle={selectedTitle}
          details={details}
          copiedStates={copiedStates}
          onCopy={copy}
          onCopyFullPackage={copyFullPackage}
          detailsRef={detailsSectionRef}
        />
      )}
    </div>
  );
}
