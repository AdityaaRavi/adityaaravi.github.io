import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'PayPal',
      location: 'Austin, TX',
      period: 'Jul 2024 – Present',
      description: 'Developing scalable systems that enable secure, reliable access to user and account data for 420M+ PayPal users. Collaborate with 10+ cross-functional teams across Product, Risk, Compliance, and Customer Service to integrate identity solutions. Led migration of 20+ microservices from Jenkins to Harness CI/CD. Mentored new engineers and interns to accelerate onboarding and productivity.',
      technologies: ['Spring Boot', 'Oracle SQL', 'C/C++', 'MCP', 'Jenkins', 'Harness CI/CD', 'DataDog'],
      link: 'https://www.paypal.com'
    },
    {
      title: 'Software Engineering Intern',
      company: 'PayPal',
      location: 'Austin, TX',
      period: 'Jun 2023 – Sep 2023',
      description: 'Built a full-stack internal tool to automate stakeholder property management, reducing Identity Platform workload by 10%. Enabled UK regulatory compliance by enhancing backend support for dynamic customer vulnerability tracking, cutting a weeks-long manual process to hours.',
      technologies: ['Node.js', 'Kraken.js', 'Oracle SQL', 'React.js', 'Spring Boot'],
      link: 'https://www.paypal.com'
    },
    {
      title: 'Software Engineering Intern',
      company: 'PayPal',
      location: 'San Jose, CA',
      period: 'Jun 2022 – Sep 2022',
      description: 'Built a full-stack internal tool to automate bulk user data corrections across millions of records, reducing Identity Platform workload by 15% and improving engineering efficiency.',
      technologies: ['Node.js', 'Kraken.js', 'Oracle SQL', 'React.js', 'Spring Boot'],
      link: 'https://www.paypal.com'
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Roles focused on identity platforms, scalable systems, and measurable impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-accent-light/50"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg z-10"></div>

                {/* Content Card */}
                <div className={`glass-card p-8 rounded-xl w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-accent font-medium mb-1">
                        {experience.company}
                      </p>
                    </div>
                    <motion.a
                      href={experience.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  <div className="flex items-center gap-4 text-text-muted text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {experience.location}
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
