import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { PortfolioGrid } from '../sections/PortfolioGrid'
import { CTA } from '../sections/CTA'
import { portfolio } from '../data/portfolio'

export function PortfolioListPage() {
  return (
    <div>
      <PageHeader title="Projelerimiz" breadcrumb="Projeler" />
      <section className="py-20">
        <Container>
          <PortfolioGrid items={portfolio} columns={4} />
        </Container>
      </section>
      <CTA title="Sıradaki Proje Sizin Çiftliğiniz Olsun" />
    </div>
  )
}
