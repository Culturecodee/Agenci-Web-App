'use client'

import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const projects: Record<string, any> = {
  'project-1': {
    title: 'SaaS Dashboard Platform',
    category: 'Web Development',
    year: '2024',
    client: 'TechCorp Inc.',
    description: 'A comprehensive redesign and rebuild of a complex SaaS platform for analytics and reporting.',
    challenge: 'The existing platform was slow, unintuitive, and struggled to handle growth. Users were abandoning the platform due to poor performance and UX.',
    solution: 'We rebuilt the entire platform using modern technologies, implemented comprehensive performance optimizations, and redesigned the UI/UX based on user research.',
    results: [
      '300% improvement in page load speed',
      '150% increase in user engagement',
      '45% reduction in support tickets',
      '200% increase in feature adoption',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'TailwindCSS'],
    image: '/dashboard-preview.jpg',
  },
  'project-2': {
    title: 'E-Commerce Redesign',
    category: 'UI/UX Design',
    year: '2023',
    client: 'RetailHub',
    description: 'Complete redesign of a major e-commerce platform to improve conversion rates and user experience.',
    challenge: 'Outdated design was losing customers to competitors. Cart abandonment rate was 70%.',
    solution: 'Conducted extensive user research, created modern design system, and implemented best practices for e-commerce UX.',
    results: [
      '35% increase in conversion rate',
      '70% reduction in cart abandonment',
      '2.5x increase in average order value',
      'Ranked top 3 in customer satisfaction',
    ],
    technologies: ['Figma', 'React', 'Next.js', 'Stripe', 'Analytics'],
    image: '/dashboard-preview.jpg',
  },
  'project-3': {
    title: 'Mobile App Optimization',
    category: 'Performance',
    year: '2023',
    client: 'MobileFirst Corp',
    description: 'Performance optimization for a mobile-first application serving millions of users.',
    challenge: 'App was crashing on slow networks and had 40% crash rate on older devices.',
    solution: 'Implemented code splitting, optimized assets, and improved app architecture for better performance.',
    results: [
      '99.9% app stability',
      '5x faster initial load',
      '80% battery efficiency improvement',
      'App store rating: 4.8 stars',
    ],
    technologies: ['React Native', 'Redux', 'GraphQL', 'AWS', 'Performance Monitoring'],
    image: '/dashboard-preview.jpg',
  },
  'project-4': {
    title: 'Analytics Platform',
    category: 'Web Development',
    year: '2022',
    client: 'DataViz Inc.',
    description: 'Built a real-time analytics platform handling millions of data points.',
    challenge: 'Needed to handle real-time data visualization for 100k+ concurrent users.',
    solution: 'Implemented WebSocket connections, Redis caching, and optimized database queries.',
    results: [
      'Handles 10M+ events per day',
      '<100ms query response time',
      '99.99% uptime',
      'Scales to 100k+ concurrent users',
    ],
    technologies: ['Next.js', 'TypeScript', 'WebSocket', 'PostgreSQL', 'Redis', 'Recharts'],
    image: '/dashboard-preview.jpg',
  },
  'project-5': {
    title: 'Brand Identity System',
    category: 'Design',
    year: '2022',
    client: 'CreativeStudio',
    description: 'Comprehensive brand identity and design system for a growing creative agency.',
    challenge: 'Multiple brand variations and inconsistent visual language across properties.',
    solution: 'Created unified brand guidelines, design system, and component library.',
    results: [
      'Unified visual language',
      '40% faster design process',
      'Component library with 200+ components',
      'Brand consistency across all properties',
    ],
    technologies: ['Figma', 'Design Systems', 'Brand Guidelines', 'Component Library'],
    image: '/dashboard-preview.jpg',
  },
  'project-6': {
    title: 'Enterprise Portal',
    category: 'Full Stack',
    year: '2021',
    client: 'Enterprise Solutions Ltd.',
    description: 'Built an enterprise-grade portal for internal business operations and reporting.',
    challenge: 'Legacy system with poor UX and lack of scalability for growing team.',
    solution: 'Modernized tech stack, improved security, and created intuitive user interface.',
    results: [
      '5x increase in productivity',
      'Zero security incidents',
      '200+ daily active users',
      '99.95% uptime SLA',
    ],
    technologies: ['Next.js', 'Express.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'SAML/OAuth'],
    image: '/dashboard-preview.jpg',
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id]

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-600 hover:text-blue-700">
            ← Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Back Link */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer mb-8"
            >
              <ChevronLeft size={20} />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Header */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-600 font-semibold mb-2 uppercase">{project.category}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
          >
            <img src={project.image} alt={project.title} className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Challenge & Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">{project.challenge}</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Project Info & Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Info */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200 mb-8">
                <div className="space-y-6">
                  {[
                    { label: 'Client', value: project.client },
                    { label: 'Year', value: project.year },
                    { label: 'Category', value: project.category },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-lg text-gray-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      {result}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold cursor-pointer"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for Your Next Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build something amazing together. Contact us to discuss your project.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
