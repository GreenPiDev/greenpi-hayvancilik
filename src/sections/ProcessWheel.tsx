import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

const steps = [
  { number: '01', title: 'Veri Odaklı Yönetim', description: 'Sensör ve takip sistemleriyle sürü verilerini anlık izliyoruz.' },
  { number: '02', title: 'Sağlıklı Beslenme', description: 'Dengeli yem formülasyonlarıyla doğal büyümeyi destekliyoruz.' },
]

const stepsRight = [
  { number: '03', title: 'Doğal Mera Döngüsü', description: 'Rotasyonlu otlatmayla toprağın ve sürünün dengesini koruyoruz.' },
  { number: '04', title: 'Kalite Kontrolü', description: 'Her partiyi gıda güvenliği standartlarına göre denetliyoruz.' },
]

export function ProcessWheel() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Yaklaşımımız
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-dark md:text-5xl">
            Meradan Sofraya, Doğal Üretim
          </h2>
        </motion.div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 md:text-right md:flex-row-reverse"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-yellow/20 text-sm font-bold text-dark">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
            <Button to="/service" className="self-start md:self-end">
              Detaylı Bilgi
            </Button>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="/images/agrezen/shape-15.webp"
            alt="GreenPi süreç döngüsü"
            className="mx-auto w-64 md:w-80"
          />

          <div className="flex flex-col gap-10">
            {stepsRight.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-yellow/20 text-sm font-bold text-dark">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
