'use client'

import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { ServiceCard, PortfolioCard, CTACard } from './components/cards'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, BarChart3, Users, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Digital Solutions for Modern Businesses
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                We create beautiful, high-performing websites and applications that help your business grow and succeed in the digital world.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 flex-wrap"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-block"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/portfolio"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer inline-block"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="/dashboard-preview.jpg"
                  alt="Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative gradient behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl -z-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              index={0}
              icon={<Code2 size={24} />}
              title="Web Development"
              description="Custom-built, high-performance websites using the latest technologies and best practices."
            />
            <ServiceCard
              index={1}
              icon={<Palette size={24} />}
              title="UI/UX Design"
              description="Beautiful, intuitive interfaces designed with your users in mind for maximum engagement."
            />
            <ServiceCard
              index={2}
              icon={<Zap size={24} />}
              title="Performance"
              description="Lightning-fast optimization ensuring your site loads quickly across all devices."
            />
            <ServiceCard
              index={3}
              icon={<BarChart3 size={24} />}
              title="Analytics"
              description="Data-driven insights to understand user behavior and drive business growth."
            />
            <ServiceCard
              index={4}
              icon={<Users size={24} />}
              title="Consulting"
              description="Strategic guidance to help you navigate digital transformation effectively."
            />
            <ServiceCard
              index={5}
              icon={<Rocket size={24} />}
              title="Deployment"
              description="Seamless deployment and ongoing support to keep your applications running smoothly."
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent projects and case studies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PortfolioCard
              index={0}
              image="/dashboard-preview.jpg"
              title="SaaS Dashboard Platform"
              category="Web Development"
              href="/portfolio/project-1"
            />
            <PortfolioCard
              index={1}
              image="/dashboard-preview.jpg"
              title="E-Commerce Redesign"
              category="UI/UX Design"
              href="/portfolio/project-2"
            />
            <PortfolioCard
              index={2}
              image="/dashboard-preview.jpg"
              title="Mobile App Optimization"
              category="Performance"
              href="/portfolio/project-3"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer text-lg"
            >
              View All Projects
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Asymmetric Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text on left, image on right */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's work together to create something amazing. Our team is ready to help you achieve your digital goals.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-block"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual on right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center"
            >
              <Rocket size={80} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Let's Build Together</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                  whileInView={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
