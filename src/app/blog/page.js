"use client";

import BlogCard from "./components/BlogCard";
import SimulatorWidget from "./components/SimulatorWidget";
import CookieConsent from "./components/CookieConsent";
import ReadingProgressBar from "./components/ReadingProgressBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { posts } from "./data/posts";

export default function BlogHome() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <ReadingProgressBar />

      {/* Header / Navbar */}
      <Header isArticle={false} />

      {/* Hero Section */}
      <section className="relative py-20 border-b border-zinc-200 dark:border-white/5 animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded border border-zinc-200 dark:border-white/10 bg-zinc-100/50 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
              SECURE DEEP SCIENCE ARCHIVE // CLASSIFIED
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-7xl uppercase">
              EVENT HORIZON
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans max-w-2xl">
              Evrenin fiziksel sınırlarını, astrofiziksel kuramları, kozmolojik modelleri ve ekstrem doğa koşullarının biyofiziksel sınırlarını araştıran bağımsız teknik analiz arşivi.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-in-up">
        {/* AdSense Top Placeholder */}
        <section className="mb-16 border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/20 dark:bg-zinc-950/20 py-6 px-4 text-center font-mono">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase mb-2">ADSENSE RESPONSIBLE UNIT // DATAFLOW</span>
            <div className="h-20 w-full max-w-2xl rounded bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              728x90 Banner Ad Placement Placeholder
            </div>
          </div>
        </section>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16">
          {/* Left Column: Featured Post */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
              ÖNE ÇIKAN DOKÜMAN
            </div>
            <BlogCard post={featuredPost} minimal={false} />
          </div>

          {/* Right Column: Minimalist Dikey Sıralı Makaleler */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                DİĞER ANALİZLER & RAPORLAR
              </div>
              <div className="border border-zinc-200 dark:border-white/5 bg-zinc-50/20 dark:bg-zinc-950/20 rounded-lg p-6 divide-y divide-zinc-200 dark:divide-white/5">
                {remainingPosts.map((post) => (
                  <BlogCard key={post.id} post={post} minimal={true} />
                ))}
              </div>
            </div>

            {/* AdSense In-Grid Box */}
            <div className="mt-8 border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/20 dark:bg-zinc-950/20 p-6 rounded-lg text-center font-mono">
              <span className="text-[9px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase block mb-2">ADSENSE IN-GRID</span>
              <div className="h-32 w-full bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 rounded flex items-center justify-center text-xs text-zinc-500">
                300x250 Medium Rectangle Placement
              </div>
            </div>
          </div>
        </div>

        {/* Science Simulator Section */}
        <section className="mb-16">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            BİLİMSEL ANALİZ MODÜLÜ // RESEARCH APEX
          </div>
          <SimulatorWidget />
        </section>

        {/* AdSense Bottom Placeholder */}
        <section className="border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/20 dark:bg-zinc-950/20 py-8 px-4 text-center font-mono">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase mb-2">ADSENSE BOTTOM DISPLAY BANNER</span>
            <div className="h-24 w-full max-w-4xl rounded bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              970x90 / 728x90 Leaderboard Placeholder
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
