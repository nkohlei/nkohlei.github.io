import { posts } from "../data/posts";
import { notFound } from "next/navigation";
import ReadingProgressBar from "../components/ReadingProgressBar";
import CookieConsent from "../components/CookieConsent";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Reading Progress Line */}
      <ReadingProgressBar />

      {/* Header */}
      <Header isArticle={true} />

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-in-up">
        <article>
          {/* Category Tag & Meta */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6">
            <span className="border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 px-2.5 py-0.5 rounded text-zinc-700 dark:text-zinc-300">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl mb-8 leading-tight uppercase font-sans">
            {post.title}
          </h1>

          {/* Banner Image */}
          <div className="relative mb-12 overflow-hidden rounded border border-zinc-200 dark:border-white/10 bg-zinc-900 shadow-2xl aspect-video w-full">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover grayscale opacity-90"
            />
          </div>

          {/* AdSense In-Article Box */}
          <div className="my-10 border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/20 dark:bg-zinc-950/20 p-4 text-center font-mono">
            <span className="text-[9px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase block mb-1">ADSENSE IN-ARTICLE CONTENT UNIT</span>
            <div className="h-20 w-full rounded bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              Responsive In-Article Banner Ad Placement
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 text-base font-sans"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons / Footer */}
          <div className="mt-16 border-t border-zinc-200 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 uppercase tracking-widest">Paylaş:</span>
              <button className="border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 px-3 py-1 rounded text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-all">
                Twitter/X
              </button>
              <button className="border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 px-3 py-1 rounded text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-all">
                LinkedIn
              </button>
            </div>
            
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-accent transition-colors"
            >
              [ ← ARŞİVE GERİ DÖN ]
            </a>
          </div>
        </article>

        {/* AdSense Bottom Box */}
        <section className="mt-16 border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/20 dark:bg-zinc-950/20 py-8 px-4 text-center font-mono">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase mb-2">ADSENSE MULTIPLEX RECOMMENDED</span>
            <div className="h-24 w-full max-w-xl rounded bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              Matched Content Recommendations
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
