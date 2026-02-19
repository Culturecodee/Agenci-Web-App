'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  Services: [
    { label: 'Web Design', href: '/services' },
    { label: 'Development', href: '/services' },
    { label: 'Branding', href: '/services' },
    { label: 'Consulting', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="section-depth bg-gradient-to-b from-transparent to-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-bold text-xl mb-4">Agency</h3>
            <p className="text-gray-600 text-sm mb-6">
              Creating beautiful digital experiences for modern businesses.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map((category, index) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">{category[0]}</h4>
              <ul className="space-y-2">
                {category[1].map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 text-sm cursor-pointer transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              {[
                { icon: Mail, text: 'hello@agency.com', href: 'mailto:hello@agency.com' },
                { icon: Phone, text: '+1 (555) 000-0000', href: 'tel:+15550000000' },
                { icon: MapPin, text: 'Jakarta, Indonesia', href: '#' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm cursor-pointer transition-colors duration-300 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon size={16} className="flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600"
        >
          <p>&copy; 2024 Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-600 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 cursor-pointer transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
