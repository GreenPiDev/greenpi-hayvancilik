import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
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
  { label: 'Sağlıklı Sürü Yönetimi', icon: 'leaf' as const, image: '/icons/cow-icon.png' },
  { label: 'Doğal Süt Üretimi', icon: 'drop' as const, image: '/icons/milk-bottle-icon.png' },
  { label: 'Teknoloji Destekli Takip', icon: 'chip' as const },
]

function BadgeVisual({ badge, size, box }: { badge: (typeof heroBadges)[number]; size: number; box?: number }) {
  const visual = badge.image ? (
    <img
      src={badge.image}
      alt=""
      className={box ? 'absolute object-contain' : 'object-contain'}
      style={{ width: size * 1.7, height: size * 1.7 }}
    />
  ) : (
    <BadgeIcon icon={badge.icon} size={size} />
  )

  if (!box) return visual

  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: box, height: box }}
    >
      {visual}
    </span>
  )
}

function BadgeIcon({ icon, size = 22 }: { icon: 'leaf' | 'drop' | 'chip'; size?: number }) {
  if (icon === 'leaf') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
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
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
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

function ScallopBadge({ children, size = 80 }: { children: ReactNode; size?: number }) {
  const petalCount = 10
  const petalSize = size * 0.32
  const centerSize = size * 0.8
  const radius = size / 2 - petalSize / 2

  return (
    <span
      className="group relative inline-flex shrink-0 cursor-pointer items-center justify-center"
      style={{ width: size, height: size, perspective: 400 }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center group-hover:animate-spin-y"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {Array.from({ length: petalCount }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: petalSize,
              height: petalSize,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${(360 / petalCount) * i}deg) translateY(-${radius}px)`,
            }}
          />
        ))}
        <span
          className="absolute rounded-full bg-primary"
          style={{ width: centerSize, height: centerSize, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        <span className="relative z-10 text-white">{children}</span>
      </span>
    </span>
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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image ?? '/images/agrezen/home-1-intro-3.webp'}')` }}
        />
        <div className="absolute inset-0 bg-primary/10" />

        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-6 py-24 md:min-h-screen md:flex-row md:items-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-semibold leading-[1.1] text-white md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              {description ?? site.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/service" arrow={false}>
                Hizmetlerimiz
              </Button>
              <Button to="/contact-us" arrow={false}>
                İletişime Geçin
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden flex-wrap items-end justify-center gap-8 md:absolute md:inset-x-auto md:right-10 md:bottom-40 md:flex md:justify-end md:gap-10"
          >
            {heroBadges.map((badge, i) => (
              <div
                key={badge.label}
                className={`flex flex-col items-center gap-3 text-center ${i === 1 ? '-translate-y-6' : ''}`}
              >
                <ScallopBadge size={i === 1 ? 88 : 72}>
                  <BadgeVisual badge={badge} size={i === 1 ? 60 : 50} />
                </ScallopBadge>
                <span className="max-w-[9rem] font-heading text-sm font-medium text-white">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-auto flex flex-col gap-4 pt-10 md:hidden"
          >
            {heroBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <span className="text-white">
                  <BadgeVisual badge={badge} size={16} box={24} />
                </span>
                <span className="text-sm font-medium leading-tight text-white">{badge.label}</span>
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
        <div className="absolute inset-0 bg-primary/10" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 py-16 md:py-24">
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
            <Button to="/service" arrow={false}>
              Hizmetlerimiz
            </Button>
            <Button to="/contact-us" arrow={false}>
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
        <div className="absolute inset-0 bg-primary/10" />

        <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-28 text-center md:py-36">
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
            <Button to="/service" arrow={false}>
              Hizmetlerimiz
            </Button>
            <Button to="/contact-us" arrow={false}>
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
        <div className="absolute inset-0 bg-primary/10" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-10">
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
              <Button to="/contact-us" arrow={false}>
                İletişime Geçin
              </Button>
              <Button to="/service" arrow={false}>
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
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-28 text-center md:py-32">
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
          <Button to="/service" arrow={false}>
            Hizmetlerimiz
          </Button>
          <Button to="/contact-us" arrow={false}>
            İletişime Geçin
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
