'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Activity, Cloud, Users, BarChart3 } from 'lucide-react';

const products = [
  {
    name: 'Tracksure',
    tagline: 'Event tracking made reliable.',
    description: 'Real-time validation, SDK-based instrumentation, and centralized dashboards for consistent, accurate event data.',
    website: '',
    icon: Activity,
    gradient: 'from-green-500 to-teal-600',
    bgGradient: 'from-green-50 to-teal-50',
  },
  {
    name: 'NoahOps',
    tagline: 'Cloud made simple.',
    description: 'One-click infrastructure management across AWS, GCP, and Azure with role-based access and automated workflows.',
    website: '',
    icon: Cloud,
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    name: 'NimbleBiz',
    tagline: 'Your 24/7 sales agent.',
    description: 'An AI-powered lead generation agent that captures, qualifies, and engages prospects across web, WhatsApp, and Instagram.',
    website: '',
    icon: Users,
    gradient: 'from-purple-500 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
  },
  {
    name: 'NimbleInsights',
    tagline: 'Your 24/7 data analyst.',
    description: 'An AI-driven insights platform that answers business questions in plain English and delivers instant analytics without dashboards.',
    website: '',
    icon: BarChart3,
    gradient: 'from-orange-500 to-pink-600',
    bgGradient: 'from-orange-50 to-pink-50',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Product Suite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Each of our products is built with one goal in mind: to help businesses work smarter, 
            move faster, and focus on what matters most.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${product.bgGradient} border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${product.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>

                {/* Tagline */}
                <p className={`text-lg font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent hover:underline group/link`}
                >
                  Learn more
                  <ExternalLink className="ml-2 w-4 h-4 text-gray-500 group-hover/link:text-gray-700 transition-colors" />
                </motion.a>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-xl`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
