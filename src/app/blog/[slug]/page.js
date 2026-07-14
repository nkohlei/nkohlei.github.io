import { posts } from "../data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6]">
      {/* Header */}
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
              className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Geri Dön
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article>
          {/* Category Tag & Meta */}
          <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-semibold text-accent">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Banner Image */}
          <div className="relative mb-12 overflow-hidden rounded-2xl aspect-video w-full border border-white/10 bg-zinc-900 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* AdSense In-Article Box */}
          <div className="my-10 rounded-xl border border-dashed border-zinc-800 bg-zinc-950/20 p-4 text-center">
            <span className="text-[9px] font-bold tracking-widest text-zinc-600 uppercase block mb-1">REKLAM ALANI (ADSENSE)</span>
            <div className="h-20 w-full rounded bg-zinc-900/40 border border-zinc-800/40 flex items-center justify-center text-xs text-zinc-500">
              Yazı İçi Doğal Reklam Birimi / In-Article Native Ad
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons / Footer */}
          <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Paylaş:</span>
              <button className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 p-2 text-zinc-400 hover:text-white transition-all text-xs">
                Twitter/X
              </button>
              <button className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 p-2 text-zinc-400 hover:text-white transition-all text-xs">
                LinkedIn
              </button>
            </div>
            
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
            >
              ← Tüm Makalelere Geri Dön
            </Link>
          </div>
        </article>

        {/* AdSense Bottom Box */}
        <section className="mt-16 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/20 py-8 px-4 text-center">
          <div className="mx-auto max-w-xs flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-2">REKLAM ALANI (ADSENSE)</span>
            <div className="h-24 w-full rounded-lg bg-zinc-900/40 border border-zinc-800/40 flex items-center justify-center text-xs text-zinc-500">
              Yazı Sonu Önerilen İçerik Reklamı
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
