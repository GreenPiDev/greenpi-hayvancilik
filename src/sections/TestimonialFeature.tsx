import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { testimonials } from '../data/testimonials'

export function TestimonialFeature() {
  const featured = testimonials[0]

  return (
    <section className="bg-cream py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-white">
            “
          </span>
          <p className="text-2xl font-medium leading-relaxed text-dark md:text-3xl">{featured.quote}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-primary/15 text-lg font-bold text-primary">
              {featured.name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="font-semibold text-dark">{featured.name}</div>
              <div className="text-sm text-muted">{featured.role}</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
