export interface NavItem {
  label: string
  path?: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Hakkımızda', path: '/about-us' },
  { label: 'Hizmetler', path: '/service/classic-style' },
  { label: 'Projeler', path: '/portfolio-grid-4' },
  { label: 'Ekibimiz', path: '/team' },
  { label: 'Blog', path: '/blog-grid-overlay' },
  { label: 'Referanslar', path: '/testimonials' },
  { label: 'SSS', path: '/faq' },
]

export const footerNav: NavItem[] = [
  { label: 'Hakkımızda', path: '/about-us' },
  { label: 'Hizmetler', path: '/service' },
  { label: 'Projeler', path: '/portfolio' },
  { label: 'Ekibimiz', path: '/team' },
  { label: 'Blog', path: '/blog' },
  { label: 'İletişim', path: '/contact-us' },
  { label: 'Gizlilik Politikası', path: '/privacy-policy' },
]
