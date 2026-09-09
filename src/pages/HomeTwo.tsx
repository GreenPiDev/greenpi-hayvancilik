import { HomeTemplate } from '../templates/HomeTemplate'

export function HomeTwo() {
  return (
    <HomeTemplate
      heroVariant="split"
      heroTitle="Modern Çiftlikler İçin Akıllı Çözümler"
      heroDescription="Dijital takip sistemleri ve uzman danışmanlığıyla sürü performansınızı artırıyoruz."
      sections={['logos', 'services', 'stats', 'testimonials', 'portfolio', 'cta']}
    />
  )
}
