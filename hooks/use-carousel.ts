'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type UseCarouselOptions = {
  length: number
  /** Auto-advance interval in ms. */
  interval?: number
  autoPlay?: boolean
}

type UseCarouselReturn = {
  active: number
  /** 0 → 1 progress of the current slide's timer, for progress bars. */
  progress: number
  paused: boolean
  setPaused: (paused: boolean) => void
  goTo: (index: number) => void
  next: () => void
  prev: () => void
}

/**
 * Headless carousel controller.
 * Owns the active index and a smooth 0→1 timer used to drive progress bars.
 * Kept UI-agnostic so it can be reused or swapped when wiring up a CMS.
 */
export function useCarousel({
  length,
  interval = 6000,
  autoPlay = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const startRef = useRef<number>(0)
  const rafRef = useRef<number | null>(null)

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % length) + length) % length)
      setProgress(0)
      startRef.current = 0
    },
    [length],
  )

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (!autoPlay || paused) return

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      const ratio = Math.min(elapsed / interval, 1)
      setProgress(ratio)

      if (ratio >= 1) {
        startRef.current = 0
        setActive((prev) => (prev + 1) % length)
        setProgress(0)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = 0
    }
  }, [active, autoPlay, interval, length, paused])

  return { active, progress, paused, setPaused, goTo, next, prev }
}
