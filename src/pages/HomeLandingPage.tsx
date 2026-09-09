import { HomeTemplate } from '../templates/HomeTemplate'

export function HomeLandingPage() {
  return (
    <HomeTemplate
      heroVariant="landing"
      heroTitle="GreenPi Hayvancılık ile Tanışın"
      heroDescription="Sürdürülebilir hayvancılıkta güvenilir çözüm ortağınız."
      sections={['stats', 'services', 'cta']}
    />
  )
}
