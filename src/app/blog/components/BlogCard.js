import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl glass-panel glass-panel-hover p-5 h-full">
      {/* Decorative background glow on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div>
        {/* Image Container */}
        <div className="relative mb-5 overflow-hidden rounded-xl aspect-video w-full bg-zinc-900 border border-white/5">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Glass Overlay Category Tag */}
          <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-accent border border-white/10">
            {post.category}
          </span>
        </div>

        {/* Read time and date */}
        <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      </div>

      {/* Action Footer */}
      <div className="flex items-center text-xs font-bold text-white group-hover:text-accent transition-colors duration-300">
        Devamını Oku
        <svg
          className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}
