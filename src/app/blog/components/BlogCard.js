import Link from "next/link";

export default function BlogCard({ post, minimal = false }) {
  if (minimal) {
    return (
      <article className="group relative border-b border-zinc-200 dark:border-white/5 py-6 last:border-b-0">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
              <span className="text-zinc-600 dark:text-zinc-400 font-mono">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                {post.title}
              </Link>
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-mono text-zinc-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
            [ OKU ]
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl glass-panel glass-panel-hover p-6 h-full">
      <div>
        {/* Category & Time */}
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 font-mono">
          <span>{post.category}</span>
          <span>{post.readTime}</span>
        </div>

        {/* Big Title */}
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Image Container */}
        <div className="relative mb-5 overflow-hidden rounded border border-zinc-200 dark:border-white/5 aspect-video w-full bg-zinc-900">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover object-center grayscale opacity-80 transition-all duration-500 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-100"
            loading="lazy"
          />
        </div>

        {/* Excerpt */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Action Footer */}
      <div className="flex items-center text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
        [ ANALİZİ AÇ ]
        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
      </div>
    </article>
  );
}
