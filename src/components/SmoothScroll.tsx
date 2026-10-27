import { cancelFrame, frame } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis()

    function update(data: { timestamp: number }) {
      lenis.raf(data.timestamp)
    }

    frame.update(update, true)

    return () => {
      cancelFrame(update)
      lenis.destroy()
    }
  }, [])

  return children
}
