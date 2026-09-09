export interface NavItem {
  label: string
  path?: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  {
    label: 'Anasayfa',
    path: '/',
    children: [
      { label: 'Anasayfa 1', path: '/' },
      { label: 'Anasayfa 2', path: '/home-2' },
      { label: 'Anasayfa 3', path: '/home-3' },
      { label: 'Anasayfa 4', path: '/home-4' },
      { label: 'Anasayfa 5', path: '/home-5' },
      { label: 'Landing Page', path: '/home-landing-page' },
    ],
  },
  { label: 'Hakkımızda', path: '/about-us' },
  {
    label: 'Hizmetler',
    path: '/service',
    children: [
      { label: 'Hizmetler (Klasik)', path: '/service/classic-style' },
      { label: 'Hizmetler (Modern)', path: '/service/modern-style' },
      { label: 'Hizmetler (Klasik Pro)', path: '/service/classic-pro' },
    ],
  },
  {
    label: 'Projeler',
    path: '/portfolio',
    children: [
      { label: 'Projeler (2 Sütun)', path: '/portfolio-grid-2' },
      { label: 'Projeler (3 Sütun)', path: '/portfolio-grid-3' },
      { label: 'Projeler (4 Sütun)', path: '/portfolio-grid-4' },
    ],
  },
  { label: 'Ekibimiz', path: '/team' },
  {
    label: 'Blog',
    path: '/blog',
    children: [
      { label: 'Blog (2 Sütun)', path: '/blog-2-columns' },
      { label: 'Blog (3 Sütun)', path: '/blog-3-columns' },
      { label: 'Blog (4 Sütun)', path: '/blog-4-columns' },
      { label: 'Blog (Grid Overlay)', path: '/blog-grid-overlay' },
      { label: 'Blog (Liste)', path: '/blog-list' },
      { label: 'Blog (Kenar Çubuklu)', path: '/2-columns-sidebar' },
    ],
  },
  { label: 'Referanslar', path: '/testimonials' },
  { label: 'SSS', path: '/faq' },
  { label: 'İletişim', path: '/contact-us' },
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
