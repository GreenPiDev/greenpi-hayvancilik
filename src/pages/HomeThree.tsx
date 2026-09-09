import { HomeTemplate } from '../templates/HomeTemplate'

export function HomeThree() {
  return (
    <HomeTemplate
      heroVariant="centered"
      heroTitle="Doğayla Uyumlu, Verimli Hayvancılık"
      heroDescription="Mera yönetiminden dijital takibe kadar tüm süreçlerde yanınızdayız."
      sections={['stats', 'portfolio', 'services', 'team', 'blog', 'cta']}
    />
  )
}
