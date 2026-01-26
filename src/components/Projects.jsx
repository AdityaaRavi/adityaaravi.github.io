import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, GraduationCap, Microscope, Rocket, ShieldCheck } from 'lucide-react'

const Projects = () => {
  const highlights = [
    {
      title: 'Outstanding Senior Award',
      description: 'Awarded to one graduating senior per major in the UC Davis College of Engineering for leadership impact.',
      icon: Award,
      link: 'https://cs.ucdavis.edu/news/outstanding-senior-spotlight-adityaa-ravi'
    },
    {
      title: 'Outstanding Performance Award',
      description: 'Recognized by the UC Davis CS Department for academic excellence.',
      icon: GraduationCap,
      link: 'https://cs.ucdavis.edu'
    },
    {
      title: 'Google Developer Group on Campus',
      description: 'Led a 30+ student team delivering workshops, projects, and mentorship programs across campus.',
      icon: Users,
      link: 'https://gdg.community.dev/gdg-on-campus-university-of-california-davis-davis-united-states/'
    },
    {
      title: 'Computer Science Tutoring Club',
      description: 'Led 50+ tutors and 10+ board members providing free peer-led tutoring for CS students.',
      icon: ShieldCheck,
      link: 'https://www.cstutoringatdavis.com/'
    },
    {
      title: 'SacHacks President & CEO',
      description: 'Organized SacHacks with a 20+ student team focused on entrepreneurship and product thinking.',
      icon: Rocket,
      link: 'https://sachacks.io'
    },
    {
      title: 'DECAL Lab Research',
      description: 'ML research on code completion and static analysis to improve developer tooling and learning.',
      icon: Microscope,
      link: 'https://cs.ucdavis.edu'
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
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
            A snapshot of awards, leadership, and research that shaped my path
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-xl p-6 block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
