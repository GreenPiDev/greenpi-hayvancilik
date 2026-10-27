import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 })

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    setIsEnabled(canHover)
    if (!canHover) return

    function handleMove(event: MouseEvent) {
      x.set(event.clientX)
      y.set(event.clientY)
      const target = event.target as HTMLElement
      setIsPointer(!!target.closest('a, button, [role="button"], input, textarea, select, label'))
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  if (!isEnabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: isPointer ? 0 : 6, height: isPointer ? 0 : 6 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-2 border-white mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: isPointer ? 56 : 32, height: isPointer ? 56 : 32 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
