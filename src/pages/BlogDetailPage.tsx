import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { Reveal } from '../components/Reveal'
import { blog } from '../data/blog'

export function BlogDetailPage() {
  const { slug } = useParams()
  const post = blog.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div>
      <PageHeader title={post.title} breadcrumb="Blog" />
      <section className="py-20">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <img src={post.coverImage} alt={post.title} className="aspect-video w-full rounded-2xl object-cover" />
            <div className="mt-6 flex gap-2 text-xs text-muted">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            {post.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-light px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
