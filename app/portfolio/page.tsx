'use client'

import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { PortfolioCard } from '@/app/components/cards'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'SaaS Dashboard Platform',
    category: 'Web Development',
    image: '/dashboard-preview.jpg',
    href: '/portfolio/project-1',
  },
  {
    id: 2,
    title: 'E-Commerce Redesign',
    category: 'UI/UX Design',
    image: '/dashboard-preview.jpg',
    href: '/portfolio/project-2',
  },
  {
    id: 3,
    title: 'Mobile App Optimization',
    category: 'Performance',
    image: '/dashboard-preview.jpg',
    href: '/portfolio/project-3',
  },
  {
    id: 4,
    title: 'Analytics Platform',
    category: 'Web Development',
    image: '/dashboard-preview.jpg',
    href: '/portfolio/project-4',
  },
  {
    id: 5,
    title: 'Brand Identity System',
    category: 'Design',
    image: '/dashboard-preview.jpg',
    href: '/portfolio/project-5',
  },
  {
    id: 6,
    title: 'Enterprise Portal',
    category: 'Full Stack',
    image: '/dashboard-preview.jpg',
    href: '/portfolio/project-6',
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore our latest projects and see what we can create for your business
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                index={index}
                image={project.image}
                title={project.title}
                category={project.category}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Asymmetric Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Categories on left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Filter by Category</h2>
              <div className="flex flex-wrap gap-3">
                {['All', 'Web Development', 'Design', 'Performance', 'Full Stack'].map((category, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 ${
                      index === 0
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Stats on right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '40+', label: 'Happy Clients' },
                { number: '100%', label: 'Satisfaction Rate' },
                { number: '5★', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
            <p className="text-xl text-gray-600">
              Deep dive into one of our most successful projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on left, text on right */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-lg"
            >
              <img src="/dashboard-preview.jpg" alt="Case Study" className="w-full h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">SaaS Dashboard Platform</h3>
              <p className="text-lg text-gray-600 mb-6">
                We redesigned and rebuilt a complex SaaS platform, improving performance by 300% and user engagement by 150%.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Timeline', value: '6 months' },
                  { label: 'Team', value: '8 people' },
                  { label: 'Result', value: '300% performance increase' },
                  { label: 'Tech Stack', value: 'Next.js, React, TypeScript, PostgreSQL' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/portfolio/project-1"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  Read Full Case Study
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impressed by Our Work?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something amazing together. Contact us to discuss your project.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-block"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
