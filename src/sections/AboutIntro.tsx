import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

const features = [
  {
    title: 'Çiftlik Geliştirme',
    description: 'Modern altyapı ve planlamayla çiftlik kapasitesini güvenle büyütüyoruz.',
    icon: 'farm' as const,
  },
  {
    title: 'Sürü Yönetimi',
    description: 'Sağlık takibi ve beslenme planlarıyla sürü verimliliğini artırıyoruz.',
    icon: 'herd' as const,
  },
  {
    title: 'Mera İyileştirme',
    description: 'Doğal döngüyü koruyan rotasyonlu otlatma sistemleri uyguluyoruz.',
    icon: 'soil' as const,
  },
  {
    title: 'Organik Yetiştiricilik',
    description: 'Katkısız, doğal beslenmeyle sağlıklı ve kaliteli üretim sağlıyoruz.',
    icon: 'organic' as const,
  },
]

function FeatureIcon({ icon }: { icon: 'farm' | 'herd' | 'soil' | 'organic' }) {
  const common = { width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' } as const
  switch (icon) {
    case 'farm':
      return (
        <svg {...common}>
          <path d="M4 11 12 4l8 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6 10v10h12V10" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
    case 'herd':
      return (
        <svg {...common}>
          <ellipse cx="9" cy="14" rx="5" ry="3.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4 14c0-1 .5-2 1.5-2.4M14 9.5c.6-.6 1.4-.9 2-.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'soil':
      return (
        <svg {...common}>
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M7 19c0-5 2-9 5-11 3 2 5 6 5 11" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
    case 'organic':
      return (
        <svg {...common}>
          <path d="M12 20V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M12 12c0-4.5 3.5-7 8-7 0 4.5-3.5 7-8 7Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 15c0-3.5-2.8-5.8-6.5-5.8 0 3.5 2.8 5.8 6.5 5.8Z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
  }
}

export function AboutIntro() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Hakkımızda
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-dark md:text-5xl">
            Yenilikçi Hayvancılık, Sürdürülebilir Gelecek
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="mb-4 flex text-accent">
                <FeatureIcon icon={feature.icon} />
              </span>
              <h3 className="text-lg font-semibold text-dark">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/images/agrezen/about-2.webp"
            alt="GreenPi Hayvancılık çiftlik"
            className="h-72 w-full rounded-2xl object-cover md:h-96"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-72 w-full overflow-hidden rounded-2xl md:h-96"
          >
            <img
              src="/images/agrezen/about-3.webp"
              alt="GreenPi Hayvancılık sürü"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <p className="max-w-[14rem] text-sm font-medium leading-snug text-white">
                Hayvan refahı ve doğal büyümeyle sürdürülebilir üretim.
              </p>
              <Button to="/about-us" className="shrink-0 !px-5 !py-2.5 !text-xs">
                Hakkımızda
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
