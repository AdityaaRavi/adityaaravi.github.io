import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const DEFAULT_ROTATION_MS = 6000

const Highlights = () => {
  const [photos, setPhotos] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasEntered, setHasEntered] = useState(false)
  const preloaded = useRef(new Set())
  const observerRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    let isMounted = true

    const loadPhotos = async () => {
      try {
        const response = await fetch('/images/highlights.json')
        if (!response.ok) {
          throw new Error('Failed to load highlights')
        }
        const data = await response.json()
        if (isMounted) {
          setPhotos(Array.isArray(data) ? data : [])
        }
      } catch (error) {
        if (isMounted) {
          setPhotos([])
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadPhotos()

    return () => {
      isMounted = false
    }
  }, [])

  const getDurationMs = (photo) => {
    if (!photo) return DEFAULT_ROTATION_MS
    if (typeof photo.durationSeconds === 'number' && photo.durationSeconds > 0) {
      return photo.durationSeconds * 1000
    }
    return DEFAULT_ROTATION_MS
  }

  useEffect(() => {
    if (!hasEntered || isPaused || photos.length < 2) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, getDurationMs(photos[currentIndex]))

    return () => window.clearTimeout(timeoutId)
  }, [hasEntered, isPaused, photos, currentIndex])

  useEffect(() => {
    if (photos.length === 0) return

    photos.forEach((photo) => {
      const src = photo?.src
      if (!src || preloaded.current.has(src)) return
      const img = new Image()
      img.src = src
      preloaded.current.add(src)
    })
  }, [photos])

  useEffect(() => {
    if (photos.length === 0) return
    const nextIndex = (currentIndex + 1) % photos.length
    const nextSrc = photos[nextIndex]?.src
    if (!nextSrc || preloaded.current.has(nextSrc)) return

    const img = new Image()
    img.src = nextSrc
    preloaded.current.add(nextSrc)
  }, [currentIndex, photos])

  useEffect(() => {
    if (!containerRef.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observerRef.current?.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observerRef.current.observe(containerRef.current)

    return () => observerRef.current?.disconnect()
  }, [])

  const handlePrev = () => {
    if (photos.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNext = () => {
    if (photos.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const handleSelect = (index) => {
    setCurrentIndex(index)
  }

  const activePhoto = photos[currentIndex]

  return (
    <section id="highlights" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Highlights & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A rotating window into awards, leadership, and research moments
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto" ref={containerRef}>
          <div
            className="glass-card rounded-2xl p-4 sm:p-6 relative overflow-hidden"
          >
            <div
              className="relative aspect-[16/10] rounded-xl overflow-hidden bg-dark-bg/60"
              onClick={() => setIsPaused((prev) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setIsPaused((prev) => !prev)
                }
              }}
              aria-label={isPaused ? 'Play highlights' : 'Pause highlights'}
            >
              {isLoading ? (
                <div className="h-full w-full flex items-center justify-center text-text-secondary">
                  Loading highlights...
                </div>
              ) : photos.length === 0 ? (
                <div className="h-full w-full flex flex-col items-center justify-center text-center px-6">
                  <p className="text-text-secondary">
                    Add images to `public/images` and describe them in
                    `public/images/highlights.json`.
                  </p>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto?.src}
                    src={activePhoto?.src}
                    alt={activePhoto?.title || 'Highlight photo'}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
              )}

            </div>

            {activePhoto && (
              <div className="mt-4 sm:mt-6">
                <div className="glass rounded-xl px-4 py-3 text-left">
                  <p className="text-sm uppercase tracking-wide text-accent mb-1">
                    {activePhoto.title}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {activePhoto.description}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-full glass text-text-secondary hover:text-text-primary transition"
                  aria-label="Previous highlight"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-full glass text-text-secondary hover:text-text-primary transition"
                  aria-label="Next highlight"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="p-2 rounded-full glass text-text-secondary hover:text-text-primary transition"
                  aria-label={isPaused ? 'Play highlights' : 'Pause highlights'}
                >
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                {photos.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    onClick={() => handleSelect(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-accent w-6'
                        : 'bg-text-muted/40 hover:bg-text-muted/70'
                    }`}
                    aria-label={`Go to highlight ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
