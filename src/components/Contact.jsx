import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adityaaravi6@gmail.com',
      link: 'mailto:adityaaravi6@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bay Area, CA',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/adityaaravi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/adityaaravi6', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/adityaaravi6', label: 'Instagram' }
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to start a conversation? I'd love to hear from you and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-secondary text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent hover:bg-accent-light text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-accent/20 rounded-lg mr-4">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-accent/20 rounded-lg text-accent hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Let's Work Together
              </h4>
              <p className="text-text-secondary leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
