import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { BlogGrid } from '../sections/BlogGrid'
import { blog } from '../data/blog'

export function BlogListPage() {
  return (
    <div>
      <PageHeader title="Blog" breadcrumb="Blog" />
      <section className="py-20">
        <Container>
          <BlogGrid posts={blog} layout="overlay" />
        </Container>
      </section>
    </div>
  )
}
