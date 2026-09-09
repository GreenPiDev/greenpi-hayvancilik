import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { PortfolioGrid } from '../sections/PortfolioGrid'
import { CTA } from '../sections/CTA'
import { portfolio } from '../data/portfolio'

export function PortfolioListPage({ columns = 3 }: { columns?: 2 | 3 | 4 }) {
  return (
    <div>
      <PageHeader title="Projelerimiz" breadcrumb="Projeler" />
      <section className="py-20">
        <Container>
          <PortfolioGrid items={portfolio} columns={columns} />
        </Container>
      </section>
      <CTA title="Sıradaki Proje Sizin Çiftliğiniz Olsun" />
    </div>
  )
}
