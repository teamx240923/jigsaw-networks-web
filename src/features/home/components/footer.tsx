'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const productLinks = [
  { name: 'Tracksure', url: 'https://tracksure.io' },
  { name: 'NoahOps', url: 'https://noahops.com' },
  { name: 'NimbleBiz', url: 'https://nimblebiz.ai' },
  { name: 'NimbleInsights', url: 'https://nimbleinsights.ai' },
];

const companyLinks = [
  { name: 'About', href: '#why-us' },
  { name: 'Founder', href: '#founder' },
  { name: 'Contact', href: 'mailto:help.jigsawnetworks@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jigsaw Networks
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Building smarter platforms with AI for modern businesses. 
              Simplifying complexity and accelerating growth.
            </p>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <div className="space-y-2">
              {productLinks.map((product) => (
                <motion.a
                  key={product.name}
                  whileHover={{ x: 5 }}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  {product.name}
                  <ExternalLink className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ x: 5 }}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 JigsawNetworks.com. All rights reserved.
            </p>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 text-sm">
              {productLinks.map((product, index) => (
                <span key={product.name}>
                  <motion.a
                    whileHover={{ y: -1 }}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {product.name}
                  </motion.a>
                  {index < productLinks.length - 1 && (
                    <span className="ml-6 text-gray-600">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" /> */}
    </footer>
  );
}
