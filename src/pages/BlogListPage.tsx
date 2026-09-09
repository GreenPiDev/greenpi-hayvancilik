import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { BlogGrid } from '../sections/BlogGrid'
import { blog } from '../data/blog'

interface BlogListPageProps {
  columns?: 2 | 3 | 4
  layout?: 'grid' | 'list' | 'overlay'
}

export function BlogListPage({ columns = 3, layout = 'grid' }: BlogListPageProps) {
  return (
    <div>
      <PageHeader title="Blog" breadcrumb="Blog" />
      <section className="py-20">
        <Container>
          <BlogGrid posts={blog} columns={columns} layout={layout} />
        </Container>
      </section>
    </div>
  )
}
