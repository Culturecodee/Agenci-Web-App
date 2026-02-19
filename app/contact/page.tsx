'use client'

import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's talk about how we can help your business succeed
          </motion.p>
        </div>
      </section>

      {/* Contact Section - Asymmetric Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info on left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'hello@agency.com',
                    href: 'mailto:hello@agency.com',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+1 (555) 000-0000',
                    href: 'tel:+15550000000',
                  },
                  {
                    icon: MapPin,
                    title: 'Address',
                    content: 'Jakarta, Indonesia',
                    href: '#',
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: 'Mon - Fri, 9:00 AM - 6:00 PM',
                    href: '#',
                  },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                          <Icon size={24} className="text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                          {item.content}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Follow Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'GitHub'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form on right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Company
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                  >
                    Thanks for reaching out! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-depth bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. Most projects take 2-6 months. We provide detailed estimates after the discovery phase.',
              },
              {
                question: 'How much does a project cost?',
                answer: 'Pricing depends on your specific needs and project scope. We offer flexible engagement models including fixed-price, hourly, and retainer arrangements.',
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes! We provide comprehensive support packages including maintenance, updates, monitoring, and technical support to keep your project running smoothly.',
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use cutting-edge technologies including React, Next.js, Node.js, TypeScript, and cloud platforms. We choose the best tech stack for each project.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
