'use client'

import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, BarChart3, Users, Rocket, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 1,
    icon: Code2,
    title: 'Web Development',
    shortDesc: 'Custom-built websites',
    description: 'We create high-performance websites using modern technologies like React, Next.js, and TypeScript. Our solutions are scalable, maintainable, and optimized for conversion.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'API Integration',
      'Database Architecture',
      'Real-time Features',
      'Security & Performance',
    ],
    image: '/dashboard-preview.jpg',
  },
  {
    id: 2,
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'Beautiful interfaces',
    description: 'Our design team creates intuitive, visually stunning interfaces that engage users and drive conversions. We follow modern design principles and best practices.',
    features: [
      'User Research',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'User Testing',
      'Design Systems',
    ],
    image: '/dashboard-preview.jpg',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Performance Optimization',
    shortDesc: 'Lightning-fast sites',
    description: 'Speed matters. We optimize every aspect of your site—from code splitting to image optimization—to ensure lightning-fast load times and smooth user experience.',
    features: [
      'Code Splitting',
      'Image Optimization',
      'Caching Strategies',
      'CDN Integration',
      'Performance Monitoring',
      'Core Web Vitals',
    ],
    image: '/dashboard-preview.jpg',
  },
  {
    id: 4,
    icon: BarChart3,
    title: 'Analytics & Insights',
    shortDesc: 'Data-driven decisions',
    description: 'Understand your users better with comprehensive analytics and reporting. We help you track metrics that matter and make data-driven decisions.',
    features: [
      'Custom Dashboards',
      'User Tracking',
      'Conversion Analysis',
      'A/B Testing',
      'Reporting & Insights',
      'Goal Tracking',
    ],
    image: '/dashboard-preview.jpg',
  },
  {
    id: 5,
    icon: Users,
    title: 'Consulting & Strategy',
    shortDesc: 'Expert guidance',
    description: 'Our consultants work with you to define your digital strategy, identify opportunities, and create a roadmap for success in the digital landscape.',
    features: [
      'Digital Strategy',
      'Technology Stack',
      'Scalability Planning',
      'Security Audit',
      'Migration Planning',
      'Team Training',
    ],
    image: '/dashboard-preview.jpg',
  },
  {
    id: 6,
    icon: Rocket,
    title: 'Deployment & Support',
    shortDesc: 'Reliable launches',
    description: 'From deployment to ongoing maintenance, we ensure your applications run smoothly. Our 24/7 support team is always ready to help.',
    features: [
      'Continuous Deployment',
      'DevOps Setup',
      'Server Management',
      'Monitoring & Alerts',
      'Maintenance & Updates',
      'Emergency Support',
    ],
    image: '/dashboard-preview.jpg',
  },
]

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to help your business succeed in the modern digital world
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300"
                    >
                      <Icon size={32} className="text-blue-600" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                      >
                        Learn More
                        <span>→</span>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to ensure your project succeeds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We understand your goals, audience, and requirements' },
              { number: '02', title: 'Strategy', description: 'We create a comprehensive plan and roadmap' },
              { number: '03', title: 'Design & Build', description: 'Our team creates and develops your solution' },
              { number: '04', title: 'Launch & Support', description: 'We deploy and provide ongoing support' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-blue-300 text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss which services are right for your business and create a custom solution.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-block"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
