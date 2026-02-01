import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/adityaaravi6',
      link: 'https://www.linkedin.com/in/adityaaravi6/'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/adityaaravi',
      link: 'https://github.com/adityaaravi'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/adityaaravi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adityaaravi6', label: 'LinkedIn' }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Feel free to reach out. I&apos;m always open to thoughtful conversations about AI,
            full-stack systems, and building meaningful products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-xl flex items-center gap-4"
              >
                <div className="p-3 bg-accent/20 rounded-lg">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">
                    {info.title}
                  </h4>
                  <span className="text-text-secondary">
                    {info.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Reach out directly
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Whether you want to collaborate, discuss research, or just say hi, I&apos;d love
                to hear from you.
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:adityaaravi6@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-dark-bg font-semibold hover:opacity-90 transition"
              >
                <Mail size={18} />
                Email Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
