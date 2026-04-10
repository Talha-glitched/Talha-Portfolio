import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorEffect() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 60, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 60, damping: 20 })
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 200)
      cursorY.set(e.clientY - 200)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY])

  return (
    <motion.div
      ref={orbRef}
      className="fixed pointer-events-none z-0 rounded-full"
      style={{
        x: springX,
        y: springY,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, oklch(0.72 0.22 220 / 0.06) 0%, oklch(0.65 0.25 300 / 0.03) 50%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  )
}
