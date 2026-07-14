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
    <div className="min-h-screen bg-[#0d0e12] text-[#f3f4f6]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d0e12]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8 font-mono">
          <Link href="/blog" className="flex items-center gap-2">
            <span className="text-lg font-black tracking-widest bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
              EVENT HORIZON
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-xs">
            <Link
              href="/blog"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              [ GERİ DÖN ]
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article>
          {/* Category Tag & Meta */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6">
            <span className="border border-white/10 bg-white/5 px-2.5 py-0.5 rounded text-zinc-300">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-8 leading-tight uppercase">
            {post.title}
          </h1>

          {/* Banner Image */}
          <div className="relative mb-12 overflow-hidden rounded border border-white/10 bg-zinc-900 shadow-2xl aspect-video w-full">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover grayscale opacity-90"
            />
          </div>

          {/* AdSense In-Article Box */}
          <div className="my-10 border border-dashed border-zinc-800 bg-zinc-950/20 p-4 text-center font-mono">
            <span className="text-[9px] tracking-widest text-zinc-600 uppercase block mb-1">ADSENSE IN-ARTICLE CONTENT UNIT</span>
            <div className="h-20 w-full rounded bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              Responsive In-Article Banner Ad Placement
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-6 text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons / Footer */}
          <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 uppercase tracking-widest">Paylaş:</span>
              <button className="border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1 rounded text-zinc-400 hover:text-white transition-all">
                Twitter/X
              </button>
              <button className="border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1 rounded text-zinc-400 hover:text-white transition-all">
                LinkedIn
              </button>
            </div>
            
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
            >
              [ ← ARŞİVE GERİ DÖN ]
            </Link>
          </div>
        </article>

        {/* AdSense Bottom Box */}
        <section className="mt-16 border border-dashed border-zinc-800 bg-zinc-950/20 py-8 px-4 text-center font-mono">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] tracking-widest text-zinc-600 uppercase mb-2">ADSENSE MULTIPLEX RECOMMENDED</span>
            <div className="h-24 w-full max-w-xl rounded bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              Matched Content Recommendations
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
