import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isCoarsePointer = window.matchMedia('(pointer: coarse)')
    if (prefersReducedMotion.matches || isCoarsePointer.matches) {
      return undefined
    }

    let frameId = null
    let timeoutId = null
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY
    let width = window.innerWidth
    let height = window.innerHeight
    let lastTimestamp = 0
    let isAnimating = false

    const applyParallax = () => {
      const dx = currentX - width / 2
      const dy = currentY - height / 2

      document.documentElement.style.setProperty('--mouse-x', `${currentX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${currentY}px`)
      document.documentElement.style.setProperty('--parallax-x', `${dx * 0.04}px`)
      document.documentElement.style.setProperty('--parallax-y', `${dy * 0.04}px`)
      document.documentElement.style.setProperty('--parallax-x-2', `${dx * 0.08}px`)
      document.documentElement.style.setProperty('--parallax-y-2', `${dy * 0.08}px`)
      document.documentElement.style.setProperty('--parallax-x-3', `${dx * 0.12}px`)
      document.documentElement.style.setProperty('--parallax-y-3', `${dy * 0.12}px`)
    }

    const updateSize = () => {
      width = window.innerWidth
      height = window.innerHeight
    }

    const handleMove = (event) => {
      const point = event.touches?.[0] || event
      targetX = point.clientX
      targetY = point.clientY

      document.documentElement.style.setProperty('--activity', '1')
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
      timeoutId = window.setTimeout(() => {
        document.documentElement.style.setProperty('--activity', '0')
        isAnimating = false
        if (frameId) {
          window.cancelAnimationFrame(frameId)
          frameId = null
        }
      }, 800)

      if (!isAnimating) {
        isAnimating = true
        frameId = window.requestAnimationFrame(animate)
      }
    }

    const animate = (timestamp) => {
      if (!isAnimating) return
      if (timestamp - lastTimestamp < 33) {
        frameId = window.requestAnimationFrame(animate)
        return
      }
      lastTimestamp = timestamp

      const ease = 0.06
      currentX += (targetX - currentX) * ease
      currentY += (targetY - currentY) * ease

      applyParallax()

      frameId = window.requestAnimationFrame(animate)
    }

    document.documentElement.style.setProperty('--activity', '0')
    applyParallax()

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('resize', updateSize)

    return () => {
      isAnimating = false
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-text-primary">Loading...</h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      <div className="interactive-bg" aria-hidden="true">
        <div className="grid-layer grid-layer--near" />
        <div className="grid-layer grid-layer--mid" />
        <div className="grid-layer grid-layer--far" />
        <div className="cloud cloud--one" />
        <div className="cloud cloud--two" />
        <svg className="motif motif--nn" viewBox="0 0 220 140" aria-hidden="true">
          <circle cx="20" cy="20" r="6" />
          <circle cx="20" cy="70" r="6" />
          <circle cx="20" cy="120" r="6" />
          <circle cx="110" cy="45" r="6" />
          <circle cx="110" cy="95" r="6" />
          <circle cx="200" cy="30" r="6" />
          <circle cx="200" cy="110" r="6" />
          <path d="M26 20 L104 45 L26 70 L104 95 L26 120" />
          <path d="M116 45 L194 30 M116 45 L194 110 M116 95 L194 30 M116 95 L194 110" />
        </svg>
        <svg className="motif motif--wave" viewBox="0 0 260 120" aria-hidden="true">
          <path d="M0 60 C30 20, 60 100, 90 60 C120 20, 150 100, 180 60 C210 20, 240 100, 260 60" />
        </svg>
        <svg className="motif motif--lock" viewBox="0 0 140 140" aria-hidden="true">
          <rect x="35" y="60" width="70" height="55" rx="12" />
          <path d="M50 60 V40 C50 26, 60 16, 70 16 C80 16, 90 26, 90 40 V60" />
          <circle cx="70" cy="86" r="7" />
          <path d="M70 93 V104" />
        </svg>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
