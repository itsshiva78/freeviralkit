import { Zap, Target, Shield, Users, Code2, Globe, Database, Star, type LucideIcon } from 'lucide-react';

export interface ValueCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
  border: string;
}

export interface TechStackItem {
  icon: LucideIcon;
  name: string;
  detail: string;
}

export const aboutStats = [
  { value: 'Growing', label: 'Creator Community' },
  { value: '100%', label: 'Free: No Signup Required' },
  { value: '<5s', label: 'Generation Speed' },
  { value: '11+', label: 'SEO Tools in One Place' },
];

export const aboutValues: ValueCardItem[] = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second metadata generation running on high-speed edge networks.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Target,
    title: 'Data-Driven SEO',
    description: 'Prompts tuned to YouTube algorithm ranking factors, CTR psychology, and retention curves.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  {
    icon: Shield,
    title: '100% Free',
    description: 'No subscriptions, no hidden fees, no signup required. Just paste and optimize.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: Users,
    title: 'Built for Creators',
    description: 'Designed by a developer who deeply understands the YouTube algorithm and what it takes to grow.',
    color: 'text-zinc-300',
    bg: 'bg-zinc-800/50',
    border: 'border-zinc-700/60',
  },
];

export const aboutTechStack: TechStackItem[] = [
  { icon: Code2, name: 'Next.js 16', detail: 'App Router + SSG' },
  { icon: Globe, name: 'Edge Infrastructure', detail: 'Distributed Cloud Network' },
  { icon: Database, name: 'TypeScript', detail: 'Type-safe codebase' },
  { icon: Star, name: 'Vercel', detail: 'Edge deployment' },
];

export const aboutFaqs = [
  {
    question: 'Is FreeViralKit really 100% free?',
    answer:
      "Yes, absolutely. We don't believe in paywalling basic SEO tools. Everything from our title generator to our YouTube description builder is completely free to use without even needing to create an account. No subscriptions, no hidden fees, and no credit cards required.",
  },
  {
    question: 'How does the AI optimize for YouTube SEO?',
    answer:
      "Our backend leverages advanced semantic models running on high-speed inference engines. The system applies deep YouTube SEO knowledge (such as character limits, high-CTR hook patterns, keyword front-loading, and algorithm preferences) to generate content that performs exceptionally well in search and suggested feeds.",
  },
  {
    question: 'Do I need to worry about algorithmic penalties for using AI?',
    answer:
      "No. Our tools are designed to generate high-quality, human-sounding text that avoids the robotic, repetitive patterns that YouTube's spam filters penalize. By providing unique, highly relevant, and context-aware titles and descriptions, you align perfectly with YouTube's goal of serving high-quality content to viewers.",
  },
  {
    question: 'Why did you build FreeViralKit?',
    answer:
      "I noticed a frustrating trend in the creator economy: basic metadata optimization tools were locked behind expensive monthly subscriptions. I believe understanding the YouTube algorithm shouldn't be a luxury reserved for massive channels. I built FreeViralKit to democratize access to top-tier SEO tools so independent creators can compete on a level playing field.",
  },
  {
    question: 'Are my video ideas kept private?',
    answer:
      'Yes. We do not store or sell your queries or generated outputs. The prompts are processed statelessly by our AI provider, and once the generation is complete, the data is not retained on our servers.',
  },
];
