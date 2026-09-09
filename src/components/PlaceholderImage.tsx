interface PlaceholderImageProps {
  label: string
  aspect?: '1/1' | '4/3' | '16/9' | '3/4' | '21/9'
  className?: string
}

const aspectClass: Record<string, string> = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '3/4': 'aspect-[3/4]',
  '21/9': 'aspect-[21/9]',
}

// Gerçek çekimler geldiğinde bu bileşen yerine doğrudan <img> kullanılacak; alan/oran burada sabitlenir.
export function PlaceholderImage({ label, aspect = '4/3', className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`flex ${aspectClass[aspect]} w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-light-2 to-light text-center text-muted ${className}`}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="opacity-50">
        <path
          d="M4 6h2l1-2h10l1 2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="px-3 text-xs leading-snug">{label}</span>
    </div>
  )
}
