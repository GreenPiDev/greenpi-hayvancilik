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
        title="Topraktan Hayvana, Tecrübeden Geleceğe"
        description="Green Pi Tarım ve Hayvancılık; 50 yılı aşkın aile tecrübesiyle büyükbaş besi hayvancılığı ve koyun-kuzu yetiştiriciliğinde topraktan hayvana bütünleşik bir üretim modeli yürütür."
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
        title="Faaliyetlerimiz Hakkında Bilgi Almak İster Misiniz?"
        description="Büyükbaş besi hayvancılığı ve küçükbaş yetiştiriciliğimiz hakkında bizimle iletişime geçin."
      />
    </div>
  )
}
