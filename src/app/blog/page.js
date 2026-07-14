"use client";

import BlogCard from "./components/BlogCard";
import { posts } from "./data/posts";
import Link from "next/link";

export default function BlogHome() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-[#0d0e12] text-[#f3f4f6]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d0e12]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8 font-mono">
          <Link href="/blog" className="flex items-center gap-2">
            <span className="text-lg font-black tracking-widest bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
              EVENT HORIZON
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-xs tracking-wider">
            <Link
              href="/blog"
              className="text-white hover:text-blue-400 transition-colors"
            >
              [ ARCHIVES ]
            </Link>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              [ INDEX ]
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">
              SECURE DEEP SCIENCE ARCHIVE // CLASSIFIED
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl uppercase">
              EVENT HORIZON
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 font-sans max-w-2xl">
              Evrenin fiziksel sınırlarını, astrofiziksel kuramları, kozmolojik modelleri ve ekstrem doğa koşullarının biyofiziksel sınırlarını araştıran bağımsız teknik analiz arşivi.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* AdSense Top Placeholder */}
        <section className="mb-16 border border-dashed border-zinc-800 bg-zinc-950/20 py-6 px-4 text-center font-mono">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] tracking-widest text-zinc-600 uppercase mb-2">ADSENSE RESPONSIBLE UNIT // DATAFLOW</span>
            <div className="h-20 w-full max-w-2xl rounded bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              728x90 Banner Ad Placement Placeholder
            </div>
          </div>
        </section>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Featured Post (Devesa Kart) */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              ÖNE ÇIKAN DOKÜMAN
            </div>
            <BlogCard post={featuredPost} minimal={false} />
          </div>

          {/* Right Column: Minimalist Dikey Sıralı Makaleler */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                DİĞER ANALİZLER & RAPORLAR
              </div>
              <div className="border border-white/5 bg-zinc-950/20 rounded-lg p-6 divide-y divide-white/5">
                {remainingPosts.map((post) => (
                  <BlogCard key={post.id} post={post} minimal={true} />
                ))}
              </div>
            </div>

            {/* AdSense In-Grid Box */}
            <div className="mt-8 border border-dashed border-zinc-800 bg-zinc-950/20 p-6 rounded-lg text-center font-mono">
              <span className="text-[9px] tracking-widest text-zinc-600 uppercase block mb-2">ADSENSE IN-GRID</span>
              <div className="h-32 w-full bg-zinc-900/30 border border-zinc-900 rounded flex items-center justify-center text-xs text-zinc-500">
                300x250 Medium Rectangle Placement
              </div>
            </div>
          </div>
        </div>

        {/* AdSense Bottom Placeholder */}
        <section className="mt-20 border border-dashed border-zinc-800 bg-zinc-950/20 py-8 px-4 text-center font-mono">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] tracking-widest text-zinc-600 uppercase mb-2">ADSENSE BOTTOM DISPLAY BANNER</span>
            <div className="h-24 w-full max-w-4xl rounded bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              970x90 / 728x90 Leaderboard Placeholder
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0b0d] py-12 font-mono">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 text-xs text-zinc-500">
          <p className="tracking-widest text-zinc-400 mb-2 uppercase">
            OXYPACE APEX ARCHIVES // EVENT HORIZON
          </p>
          <p>
            © {new Date().getFullYear()} EVENT HORIZON. Halka açık popüler bilim ve ekstrem doğa arşivi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
