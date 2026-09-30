import Image from 'next/image';
import { Rocket, Target, Users, Zap, MousePointerClick, Clock } from 'lucide-react';

export function HomeSeoMasterclass() {
  return (
    <div className="space-y-16">
      {/* Why FreeViralKit Section */}
      <section aria-labelledby="why-choose-heading">
        <div className="text-center mb-8">
          <h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Why Choose <span className="text-red-500">FreeViralKit</span>?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl mx-auto">
            Everything you need to optimize for YouTube algorithm discovery without paying for monthly subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-6 md:p-7 border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                <Rocket className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Grow Faster with High-CTR SEO
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              YouTube is the second largest search engine in the world. To get discovered, your videos need
              optimized metadata: the right title, description, tags, and hashtags. FreeViralKit analyzes
              successful patterns on YouTube to generate high-CTR metadata tailored to your niche.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-7 border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Complete SEO Package in One Click
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Most tools only generate titles or tags in isolation. FreeViralKit gives you everything in a single workflow:
              10 clickable titles, a keyword-rich description, trending hashtags, SEO tags under 500 characters, and
              a pinned comment to boost initial comment velocity.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-7 border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Tailored for Every Creator Niche
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Whether you are uploading your first video or managing a channel with thousands of subscribers,
              FreeViralKit adapts across gaming, tech, faceless channels, tutorials, vlogs, fitness, and finance.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-7 border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                100% Free Forever, Zero Paywalls
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              No signup required. No credit card. No usage limits. FreeViralKit is completely free to use and always will
              be. We believe every creator deserves professional-grade YouTube SEO tools without paying expensive monthly fees.
            </p>
          </div>
        </div>
      </section>

      {/* Ultimate SEO Masterclass Section */}
      <section
        aria-labelledby="masterclass-heading"
        className="glass-card rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-xl space-y-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2
            id="masterclass-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            The Ultimate Guide to <span className="text-red-500">YouTube SEO in 2026</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Uploading videos without metadata optimization buries your content. Here is how the modern neural algorithm discovers, indexes, and promotes videos to viewers.
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mb-2">
              1. How the YouTube Algorithm Actually Works
            </h3>
            <p>
              Historically, YouTube relied heavily on tags and keyword stuffing. Today, the algorithm operates on a deep neural network designed to achieve one primary goal: <strong>maximize user satisfaction and session watch time</strong>. When you publish a video, your metadata (Title, Description, and Tags) provides the initial context signals for YouTube to run a test audience cohort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
              <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center mb-1">
                <MousePointerClick className="w-4 h-4 text-red-500 mr-2" /> Click-Through Rate (CTR)
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                Out of all users who saw your thumbnail and title on their feed, what percentage clicked through?
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
              <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center mb-1">
                <Clock className="w-4 h-4 text-zinc-400 mr-2" /> Average View Duration (AVD)
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                Once viewers clicked, did your hook hold their attention through the first 30 seconds and beyond?
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-xl my-6">
            <Image
              src="/images/youtube_studio_analytics_spike.webp"
              alt="YouTube Studio Search Analytics Discovery Spike"
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mb-2">
              2. The Holy Trinity: Title, Thumbnail &amp; Hook
            </h3>
            <p>
              To trigger exponential suggested views, your video packaging must synchronize across three core elements:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>The Title (Search + Psychology):</strong> Includes ranking keywords front-loaded in the first 50 characters, paired with curiosity triggers.</li>
              <li><strong>The Thumbnail (Visual Contrast):</strong> Complements the title rather than repeating it word-for-word.</li>
              <li><strong>The Retention Hook (First 30 Seconds):</strong> Immediately validates the title promise without slow intros or filler talk.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
