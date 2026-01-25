import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Server, Brain, Cloud } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Backend & Platform Engineering', icon: Server, description: 'Microservices, APIs, Java/Spring, Node.js' },
    { name: 'Data & AI', icon: Brain, description: 'Python, PyTorch, NLP (XCS224N), LLM tooling' },
    { name: 'Frontend Engineering', icon: Code, description: 'React, TypeScript, Tailwind, design systems' },
    { name: 'Cloud & DevOps', icon: Cloud, description: 'AWS, Docker, CI/CD (Harness, Jenkins)' },
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
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Software Engineer on PayPal’s Identity Platform
          </p>
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
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Who I Am
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I’m Adityaa Ravi, a platform-leaning software engineer who loves turning ambiguous problems into production systems. At PayPal’s Identity Platform, I’ve worked across compliance, reliability, and developer experience—from ensuring UK vulnerability-tracking compliance to shaving onboarding latency and migrating 20+ microservices from Jenkins to Harness.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I graduated from UC Davis with honors, receiving the Outstanding Senior Award and the Outstanding Performance Award, and appeared on the Dean’s List multiple times. Beyond coursework, I led student organizations such as SacHacks, GDSC, and the CS Tutoring Club, where I built both technical and leadership foundations that continue to shape my career.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I enjoy clean, maintainable code, thoughtful APIs, and measurable impact. Recently I’ve been deepening skills in NLP/LLMs (Stanford XCS224N), platform reliability, and practical ML. I’ve mentored interns, partnered with 10+ cross-functional teams, and I’m always excited to build with great people.
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '20+', label: 'Services Migrated (Jenkins → Harness)' },
            { number: '10+', label: 'Cross-team Launches' },
            { number: '2', label: 'Interns Mentored' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
