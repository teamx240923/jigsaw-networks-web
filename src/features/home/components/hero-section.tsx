'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Building Smarter Platforms with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI
            </span>{' '}
            for Modern Businesses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            From cloud operations to real-time tracking, from lead generation to business insights — 
            Jigsaw Networks creates intelligent solutions that simplify complexity and accelerate growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors group"
            >
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:help.jigsawnetworks@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400  font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Talk to Us
            </motion.a>
          </motion.div>

          {/* Floating Elements for Visual Interest */}
          <div className="relative mt-16">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-60"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-8 right-1/4 w-8 h-8 bg-purple-200 rounded-full opacity-40"
            />
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-4 right-1/3 w-6 h-6 bg-orange-200 rounded-full opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
