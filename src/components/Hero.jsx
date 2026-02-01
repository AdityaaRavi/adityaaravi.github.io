import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold text-text-primary mb-6"
          >
            Hi, this is <span className="gradient-text">Adityaa Ravi</span> 🚀
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl text-text-secondary mb-8"
          >
            Software Engineer • AI Researcher
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I build large-scale software systems and apply AI to solve real-world problems. <br/>
            My work is driven by curiosity, rigor, and ownership in fast-paced environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="glass-card px-8 py-4 rounded-full text-text-primary font-semibold flex items-center gap-2 hover:bg-accent/20 transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/adityaaravi6"
              target="_blank"
              rel="noreferrer"
              className="glass px-8 py-4 rounded-full text-text-primary font-semibold flex items-center gap-2 hover:bg-accent/20 transition-all duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume/Adityaa_resume_2025.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass px-8 py-4 rounded-full text-text-primary font-semibold flex items-center gap-2 hover:bg-accent/20 transition-all duration-300"
            >
              View Resume
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-text-secondary hover:text-text-primary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
