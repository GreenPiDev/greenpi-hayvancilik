import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'

const teasers = [
  {
    title: 'Büyükbaş Besi Hayvancılığı',
    image: '/images/agrezen/service-6.webp',
    to: '/service/buyukbas-besi-hayvanciligi',
  },
  {
    title: 'Küçükbaş Hayvan Yetiştiriciliği',
    image: '/images/agrezen/service-7.webp',
    to: '/service/kucukbas-hayvan-yetistiriciligi',
  },
  {
    title: 'Topraktan Hayvana Üretim Modelimiz',
    image: '/images/agrezen/service-img-1.webp',
    to: '/service/topraktan-hayvana-uretim-modelimiz',
  },
]

export function ServiceTeaserRow() {
  return (
    <section className="pb-24">
      <Container className="grid gap-6 md:grid-cols-3">
        {teasers.map((teaser, i) => (
          <motion.div
            key={teaser.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-line"
          >
            <img src={teaser.image} alt={teaser.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-dark">{teaser.title}</h3>
              <Link
                to={teaser.to}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Devamını Oku
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  )
}
