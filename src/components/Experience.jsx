import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer I — Identity Platform',
      company: 'PayPal',
      location: 'Austin, TX',
      period: 'Sep 2023 – Present',
      description: 'Backend/platform engineer on the Identity Platform’s system-of-record services. Drove UK vulnerability-tracking compliance, reduced onboarding latency via performance-focused refactors, and led the migration of 20+ microservices from Jenkins to Harness to improve developer productivity and reliability. Mentored interns and partnered with 10+ cross-functional teams across Risk, Customer Service, and Platform.',
      technologies: ['Java', 'Spring Boot', 'Node.js', 'Kafka', 'AWS', 'Docker', 'Harness', 'Jenkins'],
      link: 'https://www.paypal.com'
    },
    {
      title: 'Software Engineering Intern — Identity Platform',
      company: 'PayPal',
      location: 'Austin, TX',
      period: 'Jun 2023 – Sep 2023',
      description: 'Built a full‑stack internal tool to automate stakeholder property updates, reducing engineering workload by ~10%. Implemented backend capabilities to support UK regulatory requirements for customer vulnerability tracking, enabling rapid addition of new vulnerability types.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Java', 'Spring'],
      link: 'https://www.paypal.com'
    },
    {
      title: 'Leadership & Teaching — Student Organizations',
      company: 'UC Davis',
      location: 'Davis, CA',
      period: '2019 – 2023',
      description: 'Led and contributed to SacHacks, Google Developer Student Clubs (GDSC), and the CS Tutoring Club. Recognized with the Outstanding Senior Award and Outstanding Performance Award; Dean’s List multiple times. Organized hackathons, mentored peers, and grew developer communities.',
      technologies: ['Leadership', 'Mentorship', 'Event Ops', 'Community'],
      link: 'https://sachacks.io'
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              What I Bring to the Table
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Throughout my career, I've developed a strong foundation in both frontend and backend technologies, 
              with a particular focus on creating scalable, maintainable solutions. I thrive in collaborative 
              environments and am passionate about mentoring others while continuously learning from my peers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
