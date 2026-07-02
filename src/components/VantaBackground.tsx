import { useEffect, useRef } from 'react'
import * as THREE from 'three'
// @ts-expect-error vanta has no types
import NET from 'vanta/dist/vanta.net.min'

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const vantaRef = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    vantaRef.current = NET({
      el: containerRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0xffffff,
      backgroundColor: 0x0b0d17,
      points: 10,
      maxDistance: 20,
      spacing: 18,
    })

    return () => {
      vantaRef.current?.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
