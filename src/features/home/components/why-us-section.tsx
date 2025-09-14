'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Target } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'End-to-End Automation',
    description: 'Streamline everything from cloud ops to customer engagement.',
    gradient: 'from-yellow-500 to-orange-600',
    bgGradient: 'from-yellow-50 to-orange-50',
  },
  {
    icon: Shield,
    title: 'Enterprise-Ready',
    description: 'Secure, scalable, and designed for production.',
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    icon: Target,
    title: 'Outcome-Driven',
    description: 'Focused on delivering measurable impact, not just features.',
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
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
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We believe in building platforms that combine enterprise-grade reliability with 
            consumer-grade simplicity. Our solutions don&apos;t just add more tools — they replace 
            complexity with clarity.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient} border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Visual Elements */}
        <div className="relative mt-16">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-8 right-1/3 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
