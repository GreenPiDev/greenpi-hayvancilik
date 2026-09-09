import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { BlogGrid } from '../sections/BlogGrid'
import { Reveal } from '../components/Reveal'
import { blog } from '../data/blog'

const categories = ['Teknoloji', 'Mera Yönetimi', 'Organik', 'Sürdürülebilirlik', 'Verimlilik']

export function BlogSidebarPage() {
  return (
    <div>
      <PageHeader title="Blog" breadcrumb="Blog" />
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_320px]">
          <BlogGrid posts={blog} columns={2} layout="list" />

          <Reveal direction="right" className="flex flex-col gap-8">
            <div className="rounded-2xl border border-line p-6">
              <h3 className="mb-4 font-semibold text-dark">Kategoriler</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat}>
                    <span className="text-body transition hover:text-primary">{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line p-6">
              <h3 className="mb-4 font-semibold text-dark">Son Yazılar</h3>
              <ul className="flex flex-col gap-3 text-sm">
                {blog.slice(0, 4).map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="text-body transition hover:text-primary">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
