import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

export function useParallax(speed: number = 0.3): { ref: React.RefObject<HTMLElement | null>, y: MotionValue<string> } {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`])
  return { ref, y }
}
