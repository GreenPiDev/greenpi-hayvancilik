import { HomeTemplate } from '../templates/HomeTemplate'

export function HomeFive() {
  return (
    <HomeTemplate
      heroVariant="default"
      heroTitle="Sürünüzün Sağlığı, Bizim Önceliğimiz"
      heroDescription="Veteriner destekli sağlık programları ve organik besleme çözümleriyle yanınızdayız."
      heroImage="/images/agrezen/home-5-intro-6.webp"
      sections={['portfolio', 'stats', 'services', 'blog', 'testimonials', 'cta']}
    />
  )
}
