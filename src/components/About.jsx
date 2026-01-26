import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Brain, Users } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Identity & Platform Systems', icon: Server, description: 'System-of-record services, reliability, secure data flows' },
    { name: 'AI & Research', icon: Brain, description: 'ML for code completion, static analysis, and learning tools' },
    { name: 'Full-Stack Engineering', icon: Code, description: 'React, Node.js, Spring, production UX' },
    { name: 'Leadership & Community', icon: Users, description: 'Student organizations, mentorship, and builder ecosystems' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          {/* <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Software Engineer • AI Researcher • Builder
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              I&apos;m currently a Software Engineer on the Identity team at PayPal, building
              high-traffic backend services that serve as the system of record for user data.
              I&apos;m passionate about AI and full-stack development, and I love exploring how
              technology can create meaningful impact.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I graduated with honors from the University of California, Davis in Spring 2024
              with a degree in Computer Science and Engineering. Along the way, I received the
              <a href="https://cs.ucdavis.edu/news/outstanding-senior-spotlight-adityaa-ravi" className="gradient-text"> Outstanding Senior Award </a> 
              from the College of Engineering and the Outstanding Performance Award from the Computer Science Department.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Beyond coursework, inspiring others to forge their path in Computer Science is close to my heart, 
              leading me to spearhead multiple student organizations including <a href="https://sachacks.io" className="gradient-text">SacHacks</a>, <a href="https://www.instagram.com/gdscucd/" className="gradient-text">Google Developer Group on Campus at UC Davis</a> (also known as Google Developer Student Club), and the <a href="https://www.cstutoringatdavis.com" className="gradient-text">CS Tutoring Club at UC Davis</a>.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg mr-4">
                    <skill.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-text-muted text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
