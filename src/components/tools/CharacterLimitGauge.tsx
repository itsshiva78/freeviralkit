'use client';

import React from 'react';

interface CharacterLimitGaugeProps {
  current: number;
  max: number;
  label?: string;
  recommendedMax?: number;
  warningNote?: string;
}

export function CharacterLimitGauge({
  current,
  max,
  label = 'Characters',
  recommendedMax,
  warningNote,
}: CharacterLimitGaugeProps) {
  const percent = Math.min(Math.round((current / max) * 100), 100);
  const isOver = current > max;
  const isApproaching = current > (recommendedMax || max * 0.85);

  const barColor = isOver
    ? 'bg-rose-500 shadow-rose-500/50'
    : isApproaching
    ? 'bg-amber-400 shadow-amber-400/50'
    : 'bg-emerald-500 shadow-emerald-500/50';

  const textColor = isOver
    ? 'text-rose-500 dark:text-rose-400'
    : isApproaching
    ? 'text-amber-500 dark:text-amber-400'
    : 'text-emerald-600 dark:text-emerald-400';

  return (
    <div className="w-full space-y-1.5 py-1">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500 dark:text-slate-400 font-medium">{label}:</span>
          <span className={`font-mono font-bold ${textColor}`}>
            {current} / {max}
          </span>
          {isOver && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">
              Limit Exceeded
            </span>
          )}
        </div>
        {warningNote && (
          <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
            {warningNote}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-200 rounded-full ${barColor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
