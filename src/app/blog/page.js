"use client";

import { useState } from "react";
import BlogCard from "./components/BlogCard";
import { posts } from "./data/posts";
import Link from "next/link";

export default function BlogHome() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === "Tümü"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0c10]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-widest bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent">
              OXYPACE <span className="text-zinc-500 font-medium text-sm">BLOG</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-semibold text-white hover:text-accent transition-colors"
            >
              Günlük
            </Link>
            <a
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Hakkında
            </a>
            <a
              href="#"
              className="rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-xs font-semibold text-accent hover:bg-accent/25 transition-all"
            >
              Oxypace Ana Sayfa
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.accent/10),transparent)]" />
        <div className="absolute top-1/4 left-1/2 -z-10 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/5 blur-[80px]" />
        
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
            <span>Evrenin En Uç Sınırlarına Yolculuk</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Fizikçi, Dağcı ve Astronotun Günlüğü
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
            Kuantum mekaniğinin gizemli dehlizlerinden, Güneş Sistemi'nin en yüksek zirvelerine kadar uzanan, sınırları zorlayan popüler bilim ve ekstrem macera portalı.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all border ${
                selectedCategory === category
                  ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                  : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AdSense Top Placeholder */}
        <section className="mb-12 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/20 py-8 px-4 text-center">
          <div className="mx-auto max-w-xs flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-2">REKLAM ALANI (ADSENSE)</span>
            <div className="h-24 w-full rounded-lg bg-zinc-900/40 border border-zinc-800/40 flex items-center justify-center text-xs text-zinc-500">
              Responsive Banner - 728x90 / Auto
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* AdSense Middle Placeholder (for layout flow) */}
        <section className="my-16 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/20 py-10 px-4 text-center">
          <div className="mx-auto max-w-md flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-2">REKLAM ALANI (ADSENSE)</span>
            <div className="h-32 w-full rounded-lg bg-zinc-900/40 border border-zinc-800/40 flex items-center justify-center text-xs text-zinc-500">
              Dinamik Akış Reklamı / Multi-Size Ad Unit
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#08090d] py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent mb-4">
            OXYPACE BLOG
          </p>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Oxypace. Halka açık popüler bilim portalı. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
