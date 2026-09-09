import { HomeTemplate } from '../templates/HomeTemplate'

export function HomeFour() {
  return (
    <HomeTemplate
      heroVariant="dark"
      heroTitle="Geleceğin Çiftliğini Bugünden Kurun"
      heroDescription="Sensör tabanlı takip sistemleri ve uzman kadromuzla verimliliği artırıyoruz."
      sections={['services', 'stats', 'team', 'testimonials', 'cta']}
    />
  )
}
