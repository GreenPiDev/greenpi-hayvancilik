import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'dark'
  pill?: boolean
  arrow?: boolean
  children: ReactNode
  className?: string
}

const variants = {
  primary: 'bg-secondary text-dark-2 hover:bg-primary hover:text-white',
  outline: 'border border-dark/15 text-dark hover:border-primary hover:bg-primary hover:text-white',
  dark: 'bg-dark text-white hover:bg-primary',
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 11 11 3M11 3H4.5M11 3v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Button({
  to,
  href,
  onClick,
  variant = 'primary',
  pill = false,
  arrow = !pill,
  children,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3 text-sm font-semibold transition-colors duration-300 ${
    pill ? 'rounded-full' : 'rounded-[15px]'
  } ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {arrow && <ArrowIcon />}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow && <ArrowIcon />}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
      {arrow && <ArrowIcon />}
    </button>
  )
}
