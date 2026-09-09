import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { blog } from '../data/blog'

const images = ['/images/agrezen/post-5.webp', '/images/agrezen/post-6.webp', '/images/agrezen/post-7.webp']

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function LatestNews() {
  const posts = blog.slice(0, 3)

  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Güncel İçerikler
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-dark md:text-5xl">
            Hayvancılıkta Son Gelişmeler
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-line"
            >
              <img src={images[i]} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {formatDate(post.date)}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-dark">
                  <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Devamını Oku
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
