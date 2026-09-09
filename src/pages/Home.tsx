import { Hero } from '../sections/Hero'
import { LogoStrip } from '../sections/LogoStrip'
import { AboutIntro } from '../sections/AboutIntro'
import { ExcellenceSplit } from '../sections/ExcellenceSplit'
import { ServiceTeaserRow } from '../sections/ServiceTeaserRow'
import { ProcessWheel } from '../sections/ProcessWheel'
import { ParallaxProcess } from '../sections/ParallaxProcess'
import { StatsCounter } from '../sections/StatsCounter'
import { TestimonialFeature } from '../sections/TestimonialFeature'
import { LatestNews } from '../sections/LatestNews'
import { CTA } from '../sections/CTA'

export function Home() {
  return (
    <div>
      <Hero
        variant="default"
        title="Sürdürülebilir ve Sağlıklı Hayvancılığın Adresi"
        description="GreenPi Hayvancılık; süt, et ve damızlık üretiminde teknoloji destekli, hayvan refahını önceliklendiren bir yaklaşım sunar."
      />
      <LogoStrip />
      <AboutIntro />
      <ExcellenceSplit />
      <ServiceTeaserRow />
      <ProcessWheel />
      <ParallaxProcess />
      <StatsCounter />
      <TestimonialFeature />
      <LatestNews />
      <CTA
        title="Çiftliğinizi Birlikte Geliştirelim"
        description="Uzman ekibimizle tanışın, size özel bir çözüm planı oluşturalım."
      />
    </div>
  )
}
