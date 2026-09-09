const items = [
  { label: 'GreenPi Süt', icon: 'leaf' as const },
  { label: 'SafÇiftlik', icon: 'barn' as const },
  { label: 'DoğaSürü', icon: 'sprout' as const },
  { label: 'Besicilik', icon: 'tractor' as const },
]

function StripIcon({ icon }: { icon: 'leaf' | 'barn' | 'sprout' | 'tractor' }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' } as const
  switch (icon) {
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'barn':
      return (
        <svg {...common}>
          <path d="M4 11 12 4l8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M6 10v10h12V10" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'sprout':
      return (
        <svg {...common}>
          <path d="M12 21v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 15c0-3.5-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5Z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'tractor':
      return (
        <svg {...common}>
          <circle cx="7" cy="17" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 17V9h6l3 5h2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )
  }
}

export function LogoStrip() {
  const track = [...items, ...items, ...items]

  return (
    <section className="overflow-hidden border-y border-line bg-white py-8">
      <div className="flex w-max animate-marquee gap-16 pr-16">
        {[...track, ...track].map((item, i) => (
          <div key={`${item.label}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-primary">
              <StripIcon icon={item.icon} />
            </span>
            <span className="text-lg font-semibold text-dark-2">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
