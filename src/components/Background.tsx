import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
  pulseSpeed: number
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const NODE_COUNT = 70
    const CONNECTION_DIST = 160
    const MOUSE_DIST = 200

    nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    }))

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current
      const mouse = mouseRef.current

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
        node.pulsePhase += node.pulseSpeed
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, `rgba(0, 180, 255, ${alpha})`)
            gradient.addColorStop(0.5, `rgba(100, 120, 255, ${alpha * 0.8})`)
            gradient.addColorStop(1, `rgba(160, 80, 255, ${alpha})`)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const distMouse = Math.sqrt(dx * dx + dy * dy)
        const mouseInfluence = distMouse < MOUSE_DIST ? (1 - distMouse / MOUSE_DIST) : 0
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5
        const r = node.radius * (1 + pulse * 0.8 + mouseInfluence * 1.5)
        const baseAlpha = 0.4 + pulse * 0.5 + mouseInfluence * 0.3

        const glowR = r * (3 + mouseInfluence * 4)
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR)
        const hue = 200 + mouseInfluence * 60
        glowGradient.addColorStop(0, `hsla(${hue}, 100%, 70%, ${baseAlpha * 0.6})`)
        glowGradient.addColorStop(1, `hsla(${hue}, 100%, 70%, 0)`)
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${80 + mouseInfluence * 100}, ${160 + mouseInfluence * 50}, 255, ${baseAlpha})`
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
