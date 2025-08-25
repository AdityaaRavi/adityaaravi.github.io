import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Identity Onboarding Latency Reduction',
      description: 'Performance-focused refactors and profiling across Identity Platform services to reduce new-user onboarding latency and improve reliability.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'AWS'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Jenkins → Harness Migration Suite (20+ Services)',
      description: 'Standardized CI/CD pipelines and rollout strategies to migrate 20+ microservices from Jenkins to Harness, improving developer productivity and deployment reliability.',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
      technologies: ['Harness', 'Jenkins', 'Docker', 'CI/CD', 'AWS'],
      category: 'platform',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'UK Vulnerability Tracking Compliance Enablement',
      description: 'Backend capabilities to meet UK regulatory requirements for customer vulnerability tracking, enabling rapid addition of new vulnerability types.',
      image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=300&fit=crop',
      technologies: ['Java', 'Spring', 'Design Systems', 'Security', 'Compliance'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Stakeholder Property Editor (Internal Tool)',
      description: 'Full‑stack tool to automate editing properties for PayPal stakeholders, reducing engineering workload by ~10% on the Identity Platforms team.',
      image: 'https://images.unsplash.com/photo-1557800636-7e7b9b5fcded?w=400&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Aggregation and Analysis of Kinetic Biometric Data for Personalized Healthcare',
      description: 'Smartphone‑based analysis of kinetic and behavioral data to detect clinically significant changes over time. Built data pipelines and ML experimentation code; collaborating with Prof. Dipak Ghosal.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      technologies: ['Python', 'PyTorch', 'Pandas', 'Signal Processing', 'ML'],
      category: 'ai',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'platform', label: 'Platform/DevOps' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent text-white'
                  : 'glass text-text-secondary hover:text-text-primary'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-xs rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-text-secondary mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
