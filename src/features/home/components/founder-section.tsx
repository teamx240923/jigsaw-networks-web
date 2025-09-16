'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Mic, Briefcase, Linkedin, Quote } from 'lucide-react';

const achievements = [
  {
    icon: GraduationCap,
    text: 'Published researcher in AI (Springer, 2024)',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Mic,
    text: 'Speaker at the AI-2024 SGAI International Conference on Artificial Intelligence, Cambridge, UK',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Briefcase,
    text: '10+ years of consulting experience across industries',
    gradient: 'from-green-500 to-teal-600',
  },
];

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-white">
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
            Meet Our Founder
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Header */}
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">RA</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Ritika Agarwal</h3>
                <p className="text-lg text-gray-600">Founder</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/ritika-agarwal-2407ra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Ritika Agarwal is the driving force behind Jigsaw Networks. A computer science engineer, 
              MBA in Finance, and MSc in AI, Ritika brings a rare combination of technical expertise 
              and business leadership.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Her vision for Jigsaw Networks is to build AI-powered platforms that are as intuitive 
              as they are powerful — replacing complexity with clarity.
            </motion.p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-600"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-3" />
              <p className="text-lg text-gray-800 italic leading-relaxed">
                &ldquo;At Jigsaw Networks, we believe technology should work for you, not against you.&rdquo;
              </p>
              <p className="text-sm text-gray-600 mt-2 font-medium">– Ritika Agarwal</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Key Achievements</h4>
            
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {achievement.text}
                  </p>
                </motion.div>
              );
            })}

            {/* Visual Enhancement */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
