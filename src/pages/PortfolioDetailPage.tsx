import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { CTA } from '../sections/CTA'
import { Reveal } from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export function PortfolioDetailPage() {
  const { slug } = useParams()
  const item = portfolio.find((p) => p.slug === slug)

  if (!item) return <Navigate to="/portfolio" replace />

  return (
    <div>
      <PageHeader title={item.title} breadcrumb="Projeler" />
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal direction="left">
            <img src={item.image} alt={item.title} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            {item.description.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line p-6">
              <dl className="flex flex-col gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-dark">Kategori</dt>
                  <dd className="text-body">{item.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Müşteri</dt>
                  <dd className="text-body">{item.client}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Tarih</dt>
                  <dd className="text-body">{item.date}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>
      <CTA title="Benzer Bir Proje mi Planlıyorsunuz?" />
    </div>
  )
}
