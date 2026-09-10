import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '../components/Container'

const steps = [
  { number: '01', label: 'Topraktan Gelen Sağlık' },
  { number: '02', label: 'Sürdürülebilir Büyümeye Kök Salmış' },
  { number: '03', label: 'Teknolojinin Meralarla Buluşması' },
  { number: '04', label: 'Paylaşılan Refahın Çiftlikleri' },
  { number: '05', label: 'Doğal Yollarla Filizlenen Üretim' },
]

export function ParallaxProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '70vw'])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-dark py-36 text-white md:py-52">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/agrezen/service-bg-3.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/60 to-dark/90" />
      <motion.img
        src="/images/agrezen/shape-9.webp"
        alt=""
        aria-hidden="true"
        style={{ x }}
        className="pointer-events-none absolute -left-10 bottom-0 hidden w-72 opacity-95 md:block lg:w-96"
      />

      <Container className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight text-white md:text-5xl"
        >
          Doğaya Kök Salan, Dürüstlükle Büyüyen Bir Anlayış
        </motion.h2>

        <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-14 md:gap-x-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex w-32 flex-col items-center text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-base font-bold text-dark-2">
                {step.number}
              </span>
              <span className="mt-4 text-sm font-semibold text-white">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
