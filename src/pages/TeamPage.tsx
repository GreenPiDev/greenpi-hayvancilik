import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { TeamGrid } from '../sections/TeamGrid'
import { CTA } from '../sections/CTA'
import { team } from '../data/team'

export function TeamPage() {
  return (
    <div>
      <PageHeader title="Ekibimiz" breadcrumb="Ekibimiz" />
      <section className="py-20">
        <Container>
          <TeamGrid members={team} columns={3} />
        </Container>
      </section>
      <CTA title="Ekibimizle Tanışın" description="Sorularınız için bizimle iletişime geçin." />
    </div>
  )
}
