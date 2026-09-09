import { Hero, type HeroVariant } from '../sections/Hero'
import { StatsCounter } from '../sections/StatsCounter'
import { SectionHeading } from '../sections/SectionHeading'
import { ServicesGrid } from '../sections/ServicesGrid'
import { PortfolioGrid } from '../sections/PortfolioGrid'
import { TeamGrid } from '../sections/TeamGrid'
import { TestimonialSlider } from '../sections/TestimonialSlider'
import { LogoStrip } from '../sections/LogoStrip'
import { BlogGrid } from '../sections/BlogGrid'
import { CTA } from '../sections/CTA'
import { Container } from '../components/Container'
import { services } from '../data/services'
import { portfolio } from '../data/portfolio'
import { team } from '../data/team'
import { blog } from '../data/blog'

export type HomeSectionKey =
  | 'stats'
  | 'services'
  | 'portfolio'
  | 'team'
  | 'testimonials'
  | 'logos'
  | 'blog'
  | 'cta'

interface HomeTemplateProps {
  heroVariant: HeroVariant
  heroTitle: string
  heroDescription?: string
  heroImage?: string
  sections: HomeSectionKey[]
}

export function HomeTemplate({ heroVariant, heroTitle, heroDescription, heroImage, sections }: HomeTemplateProps) {
  return (
    <div>
      <Hero variant={heroVariant} title={heroTitle} description={heroDescription} image={heroImage} />

      {sections.map((key) => {
        switch (key) {
          case 'stats':
            return <StatsCounter key={key} />

          case 'logos':
            return <LogoStrip key={key} />

          case 'services':
            return (
              <section key={key} className="py-20">
                <Container>
                  <SectionHeading
                    eyebrow="Hizmetlerimiz"
                    title="Hayvancılıkta Uzman Çözümler"
                    description="Süt, et ve damızlık üretiminde sürdürülebilir ve verimli çözümler sunuyoruz."
                  />
                  <div className="mt-12">
                    <ServicesGrid services={services.slice(0, 6)} columns={3} />
                  </div>
                </Container>
              </section>
            )

          case 'portfolio':
            return (
              <section key={key} className="bg-cream py-20">
                <Container>
                  <SectionHeading
                    eyebrow="Projelerimiz"
                    title="Tamamladığımız Çiftlik Projeleri"
                    description="Türkiye'nin farklı bölgelerinde gerçekleştirdiğimiz projelerden örnekler."
                  />
                  <div className="mt-12">
                    <PortfolioGrid items={portfolio.slice(0, 6)} columns={3} />
                  </div>
                </Container>
              </section>
            )

          case 'team':
            return (
              <section key={key} className="py-20">
                <Container>
                  <SectionHeading
                    eyebrow="Ekibimiz"
                    title="Alanında Uzman Kadromuz"
                    description="Veteriner hekimlerimiz ve ziraat mühendislerimizle sürü sağlığınızı güvence altına alıyoruz."
                  />
                  <div className="mt-12">
                    <TeamGrid members={team.slice(0, 3)} columns={3} />
                  </div>
                </Container>
              </section>
            )

          case 'testimonials':
            return (
              <section key={key} className="bg-cream py-20">
                <Container>
                  <SectionHeading eyebrow="Referanslar" title="Müşterilerimiz Ne Diyor?" />
                  <div className="mt-12">
                    <TestimonialSlider />
                  </div>
                </Container>
              </section>
            )

          case 'blog':
            return (
              <section key={key} className="py-20">
                <Container>
                  <SectionHeading eyebrow="Blog" title="Güncel İçeriklerimiz" />
                  <div className="mt-12">
                    <BlogGrid posts={blog.slice(0, 3)} columns={3} />
                  </div>
                </Container>
              </section>
            )

          case 'cta':
            return (
              <CTA
                key={key}
                title="Çiftliğinizi Birlikte Geliştirelim"
                description="Uzman ekibimizle tanışın, size özel bir çözüm planı oluşturalım."
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
