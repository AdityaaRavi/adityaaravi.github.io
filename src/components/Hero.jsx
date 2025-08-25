import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-accent font-medium text-lg mb-4">Hello, I'm</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6"
          >
            <span className="gradient-text">Adityaa Ravi</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl text-text-secondary mb-8"
          >
            Software Engineer — Identity Platform @ PayPal
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Platform-leaning backend engineer focused on reliable identity systems, performance, and developer productivity. At PayPal, I’ve driven UK vulnerability-tracking compliance, shaved onboarding latency, and migrated 20+ microservices from Jenkins → Harness. UC Davis alum — Outstanding Senior Award, Outstanding Performance Award, Dean’s List.
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
              href="/Adityaa_Ravi_Resume.pdf"
              download
              className="glass px-8 py-4 rounded-full text-text-primary font-semibold flex items-center gap-2 hover:bg-accent/20 transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
