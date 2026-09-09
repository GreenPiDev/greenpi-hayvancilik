import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { SectionHeading } from '../sections/SectionHeading'
import { AboutIntro } from '../sections/AboutIntro'
import { StatsCounter } from '../sections/StatsCounter'
import { TeamGrid } from '../sections/TeamGrid'
import { TestimonialFeature } from '../sections/TestimonialFeature'
import { CTA } from '../sections/CTA'
import { team } from '../data/team'

export function AboutPage() {
  return (
    <div>
      <PageHeader title="Hakkımızda" breadcrumb="Hakkımızda" />

      <AboutIntro />

      <StatsCounter />

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Ekibimiz" title="Bu Yolculukta Bize Eşlik Edenler" />
          <div className="mt-12">
            <TeamGrid members={team} columns={3} />
          </div>
        </Container>
      </section>

      <TestimonialFeature />

      <CTA title="Bizimle Çalışmaya Hazır Mısınız?" />
    </div>
  )
}
