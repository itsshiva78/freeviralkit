'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useConsent } from '@/components/ConsentProvider';

export default function CookieBanner() {
  const { isBannerOpen, openBanner, updateConsent, acceptAll, rejectNonEssential, hasDecided } = useConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, advertising: true });

  if (!isBannerOpen && hasDecided) return null;
  if (!isBannerOpen && !hasDecided) return null; // Wait for provider to open it

  const handleSavePreferences = () => {
    updateConsent(prefs);
    setShowPreferences(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 sm:p-3 z-[100] transition-all duration-300 ease-out">
      <div className="container mx-auto max-w-4xl relative">
        <div className="glass-card bg-white/95 dark:bg-[#121216]/95 backdrop-blur-xl border border-slate-200/80 dark:border-zinc-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden p-3 sm:p-4">
          {!showPreferences ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-6">
              <div className="flex-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white mr-1.5">Privacy &amp; Cookies:</span>
                <span>We use cookies to analyze site traffic, optimize performance, and keep our creator tools free.</span>{' '}
                <span className="inline-flex gap-2 text-xs font-medium ml-1">
                  <Link href="/privacy-policy" className="text-red-500 hover:underline">Privacy Policy</Link>
                  <span>•</span>
                  <button onClick={() => setShowPreferences(true)} className="text-zinc-500 dark:text-zinc-400 hover:underline cursor-pointer">Preferences</button>
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-lg sm:rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 sm:flex-initial px-4 sm:px-5 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg sm:rounded-xl transition-colors shadow-sm whitespace-nowrap cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cookie Preferences</h3>
                <button onClick={() => setShowPreferences(false)} className="text-slate-500 hover:text-slate-700 dark:text-slate-300 text-sm font-medium">Back</button>
              </div>
              
              <div className="space-y-4">
                {/* Essential */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Strictly Necessary Cookies</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Required for the website to function properly. Cannot be switched off.</div>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Always Active</div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Analytics Cookies</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Help us understand how visitors interact with the website (Google Analytics).</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" checked={prefs.analytics} onChange={(e) => setPrefs(p => ({ ...p, analytics: e.target.checked }))} />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-950 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                  </label>
                </div>

                {/* Advertising */}
                <div className="flex items-start justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Advertising Cookies</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Used to deliver relevant ads and track ad campaign performance (Google AdSense).</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" checked={prefs.advertising} onChange={(e) => setPrefs(p => ({ ...p, advertising: e.target.checked }))} />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-950 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={rejectNonEssential}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl transition-colors cursor-pointer"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
