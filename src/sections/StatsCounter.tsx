import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 1500 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toString()
    })
  }, [springValue])

  return <span ref={ref}>0</span>
}

const cards = [
  { value: 97, label: 'Sürü Verimliliği', tone: 'light' as const },
  { value: 124, label: 'Süt Verim Artışı', tone: 'primary' as const },
  { value: 85, label: 'Çiftlik Büyümesi', tone: 'dark' as const },
]

const toneClasses: Record<string, string> = {
  light: 'bg-light-2 text-dark',
  primary: 'bg-primary text-white',
  dark: 'bg-dark text-white',
}

export function StatsCounter() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              Etkimiz
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-dark md:text-5xl">
              Daha Yeşil Bir Hayvancılık İnşa Ediyoruz
            </h2>
          </div>
          <Button to="/contact-us">Bize Ulaşın</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border border-line p-8 ${toneClasses[card.tone]}`}
            >
              <div className="text-5xl font-bold">
                <Counter value={card.value} />%
              </div>
              <p className="mt-3 text-base font-medium opacity-90">{card.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
