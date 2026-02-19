'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
}

export function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300"
      >
        <div className="text-blue-600">{icon}</div>
      </motion.div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

interface PortfolioCardProps {
  image: string
  title: string
  category: string
  href: string
  index?: number
}

export function PortfolioCard({ image, title, category, href, index = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group overflow-hidden rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 cursor-pointer"
    >
      <Link href={href} className="block">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-4 bg-white">
          <p className="text-xs text-blue-600 font-semibold mb-1 uppercase">{category}</p>
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
  index?: number
}

export function TestimonialCard({ quote, author, role, avatar, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
    >
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={author} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-gray-900 text-sm">{author}</p>
          <p className="text-gray-600 text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface CTACardProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  index?: number
}

export function CTACard({ title, description, buttonText, buttonHref, index = 0 }: CTACardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-blue-100 mb-6">{description}</p>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
        >
          {buttonText}
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
