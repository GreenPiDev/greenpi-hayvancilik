import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import type { BlogPost } from '../types/content'

interface BlogGridProps {
  posts: BlogPost[]
  columns?: 2 | 3 | 4
  layout?: 'grid' | 'list' | 'overlay'
}

export function BlogGrid({ posts, columns = 3, layout = 'grid' }: BlogGridProps) {
  if (layout === 'list') {
    return (
      <div className="flex flex-col gap-8">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <Link
              to={`/blog/${post.slug}`}
              className="group grid gap-6 overflow-hidden rounded-2xl border border-line md:grid-cols-[280px_1fr]"
            >
              <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
              <div className="flex flex-col justify-center p-6">
                <span className="text-xs text-muted">
                  {post.date} · {post.author}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-dark transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-body">{post.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    )
  }

  if (layout === 'overlay') {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <Link to={`/blog/${post.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-dark/90 via-dark/20 to-transparent p-6">
                <span className="text-xs text-white/70">{post.date}</span>
                <h3 className="mt-1 font-semibold text-white transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    )
  }

  const colsClass = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-8 ${colsClass}`}>
      {posts.map((post, i) => (
        <Reveal key={post.slug} delay={i * 0.06}>
          <Link to={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-line">
            <img src={post.coverImage} alt={post.title} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <span className="text-xs text-muted">
                {post.date} · {post.author}
              </span>
              <h3 className="mt-2 font-semibold text-dark transition-colors group-hover:text-primary">{post.title}</h3>
              <p className="mt-2 text-sm text-body">{post.excerpt}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
