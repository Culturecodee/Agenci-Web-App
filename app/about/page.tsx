'use client'

import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Users, Lightbulb, Target } from 'lucide-react'

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: '/dashboard-preview.jpg',
    bio: 'Visionary leader with 15+ years in digital innovation',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Chief Designer',
    image: '/dashboard-preview.jpg',
    bio: 'Award-winning designer specializing in UX/UI',
  },
  {
    name: 'Jordan Lee',
    role: 'Head of Engineering',
    image: '/dashboard-preview.jpg',
    bio: 'Technical expert passionate about scalable solutions',
  },
  {
    name: 'Maria Garcia',
    role: 'Strategy Lead',
    image: '/dashboard-preview.jpg',
    bio: 'Business strategist focused on client success',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We prioritize understanding and exceeding client expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay at the forefront of technology and design trends to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in open communication and teamwork to create the best results together.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We maintain high standards in everything we do, from code quality to design precision.',
  },
]

export default function AboutPage() {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We're a passionate team dedicated to creating exceptional digital experiences
          </motion.p>
        </div>
      </section>

      {/* Company Story - Asymmetric Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on left, text on right */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-lg"
            >
              <img src="/dashboard-preview.jpg" alt="Company" className="w-full h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Founded in 2014, Agency started with a simple mission: to help businesses succeed in the digital world by creating exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                What began as a small team of passionate designers and developers has grown into a full-service digital agency serving clients across multiple industries and continents.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of what's possible in digital design and development, always with our clients' success at the forefront of everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300"
                  >
                    <Icon size={24} className="text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented people behind the magic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <div className="rounded-xl overflow-hidden border border-gray-200 mb-4 group-hover:border-blue-200 transition-colors duration-300">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company's history
            </p>
          </motion.div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { year: '2014', title: 'Founded', description: 'Started with a team of 3 passionate designers and developers' },
              { year: '2016', title: 'Expanded', description: 'Grew to 15 people and opened our second office' },
              { year: '2018', title: '100+ Clients', description: 'Reached milestone of 100 happy clients worldwide' },
              { year: '2020', title: 'Remote First', description: 'Transitioned to remote-first model during global shift' },
              { year: '2022', title: 'Industry Recognition', description: 'Won multiple awards for design and innovation' },
              { year: '2024', title: 'Global Leader', description: 'Now serving clients in 50+ countries with 50+ team members' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the growing list of companies we've helped succeed. Contact us to learn more about how we can help your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-block"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
