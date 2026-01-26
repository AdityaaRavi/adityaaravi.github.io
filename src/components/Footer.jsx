import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/adityaaravi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adityaaravi6', label: 'LinkedIn' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-text-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Adityaa Ravi
            </h3>
            <p className="text-text-secondary text-sm max-w-md">
              Software Engineer on PayPal&apos;s Identity team | UC Davis alum | Exploring AI, systems, and impact.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 mb-6 md:mb-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-accent/20 rounded-lg text-accent hover:bg-accent hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-text-muted/20 my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-text-muted text-sm flex items-center justify-center gap-2">
            © {currentYear} Adityaa Ravi. All rights reserved.
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500" /> using React
            </span>
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-light/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer
