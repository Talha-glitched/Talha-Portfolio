import { useState, useEffect, useRef } from "react"

export function useCountUp(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeOutQuart(progress) * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return count
}
