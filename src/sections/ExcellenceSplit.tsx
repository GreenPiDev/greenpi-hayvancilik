import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

const stats = [
  {
    value: '%92',
    title: 'Sürü Sağlığı',
    description: 'Düzenli veteriner kontrolleriyle sürü sağlığını güvence altına alıyoruz.',
    icon: 'health' as const,
  },
  {
    value: '%88',
    title: 'Süt Verimliliği',
    description: 'Dengeli beslenme programlarıyla süt veriminde istikrarlı artış sağlıyoruz.',
    icon: 'yield' as const,
  },
]

function StatIcon({ icon }: { icon: 'health' | 'yield' }) {
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'health') {
    return (
      <svg {...common}>
        <path
          d="M12 20s-7-4.4-7-9.6C5 7 7.2 5 9.8 5c1 0 1.9.5 2.2 1.3C12.3 5.5 13.2 5 14.2 5 16.8 5 19 7 19 10.4 19 15.6 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 3v14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 9c0 3.5 2.8 5.5 6 5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 6c0 3.2-2.7 5-6 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function ExcellenceSplit() {
  return (
    <section className="bg-cream py-24">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Sürdürülebilir Üretim
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-dark md:text-5xl">
            Her Çiftlikte Mükemmelliği Büyütmek
          </h2>
          <p className="mt-6 max-w-md text-body">
            GreenPi Hayvancılık olarak sürü sağlığından süt verimliliğine kadar her aşamada
            teknoloji destekli, hayvan refahını önceliklendiren bir yaklaşım benimsiyoruz.
          </p>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row">
            {stats.map((stat) => (
              <div key={stat.title} className="max-w-[13rem]">
                <span className="mb-3 flex text-accent">
                  <StatIcon icon={stat.icon} />
                </span>
                <div className="text-2xl font-bold text-dark">
                  {stat.value} <span className="text-base font-semibold text-dark-2">{stat.title}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/contact-us">Bize Ulaşın</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="/images/agrezen/service-6.webp"
            alt="GreenPi Hayvancılık üretim"
            className="col-span-2 h-56 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/agrezen/service-7.webp"
            alt="GreenPi Hayvancılık saha ekibi"
            className="h-40 w-full rounded-2xl object-cover"
          />
          <div className="flex h-40 flex-col justify-center rounded-2xl bg-primary p-5 text-white">
            <span className="text-3xl font-bold">%100</span>
            <span className="mt-1 text-sm font-medium text-white/90">Doğal &amp; İzlenebilir</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
