import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { site } from '../data/site'

export type HeroVariant = 'default' | 'split' | 'centered' | 'dark' | 'landing'

interface HeroProps {
  variant?: HeroVariant
  eyebrow?: string
  title: string
  description?: string
  image?: string
}

const heroBadges = [
  { label: 'Sağlıklı Sürü Yönetimi', icon: 'leaf' as const },
  { label: 'Doğal Süt Üretimi', icon: 'drop' as const },
  { label: 'Teknoloji Destekli Takip', icon: 'chip' as const },
]

function BadgeIcon({ icon }: { icon: 'leaf' | 'drop' | 'chip' }) {
  if (icon === 'leaf') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M5 19c0-5 2-9 6-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'drop') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function EyebrowLeaf() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function Hero({ variant = 'default', eyebrow = 'GreenPi Hayvancılık', title, description, image }: HeroProps) {
  if (variant === 'default') {
    return (
      <section className="relative overflow-hidden bg-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${image ?? '/images/agrezen/home-1-intro-3.webp'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark from-40% via-dark/90 to-dark/50" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              <EyebrowLeaf />
              {eyebrow}
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] text-white md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              {description ?? site.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/service">Hizmetlerimiz</Button>
              <Button to="/contact-us" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-dark">
                İletişime Geçin
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 flex flex-wrap gap-10 border-t border-white/15 pt-8 md:justify-end"
          >
            {heroBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/25 text-primary">
                  <BadgeIcon icon={badge.icon} />
                </span>
                <span className="max-w-[9rem] text-sm font-semibold text-white">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'split') {
    return (
      <section className="relative overflow-hidden bg-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image ?? '/images/agrezen/home-2-intro-3.webp'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-6 py-16 md:py-24">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary"
          >
            <EyebrowLeaf />
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-4xl font-semibold leading-[1.1] text-white md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/75"
          >
            {description ?? site.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button to="/service">Hizmetlerimiz</Button>
            <Button to="/contact-us" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-dark">
              İletişime Geçin
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'centered') {
    return (
      <section className="relative overflow-hidden bg-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image ?? '/images/agrezen/footer-3.webp'}')` }}
        />
        <div className="absolute inset-0 bg-dark/60" />

        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary"
          >
            <EyebrowLeaf />
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold text-white md:text-5xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-5 max-w-xl text-white/75"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button to="/service">Hizmetlerimiz</Button>
            <Button to="/contact-us" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-dark">
              İletişime Geçin
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'dark') {
    return (
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image ?? '/images/agrezen/home-4-intro-3-1.webp'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-transparent to-dark/80" />

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col justify-between px-6 py-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-sm font-semibold text-dark-2"
          >
            <span className="text-primary">
              <EyebrowLeaf />
            </span>
            {eyebrow}
          </motion.span>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl text-4xl font-semibold leading-[1.1] text-white md:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/85"
            >
              {description ?? site.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button to="/contact-us">İletişime Geçin</Button>
              <Button to="/service" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-dark">
                Hizmetlerimiz
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('${image ?? '/images/agrezen/home-landing-2.webp'}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/70 to-dark" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary"
        >
          <EyebrowLeaf />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-white/70"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button to="/service">Hizmetlerimiz</Button>
          <Button to="/contact-us" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-dark">
            İletişime Geçin
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
