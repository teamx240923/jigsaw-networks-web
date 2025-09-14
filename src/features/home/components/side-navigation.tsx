'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, Package, Shield, User, MessageSquare, Phone } from 'lucide-react';

const navigationItems = [
  {
    id: 'hero',
    label: 'Home',
    icon: Home,
    href: '#hero',
  },
  {
    id: 'products',
    label: 'Products',
    icon: Package,
    href: '#products',
  },
  {
    id: 'why-us',
    label: 'Why Us',
    icon: Shield,
    href: '#why-us',
  },
  {
    id: 'founder',
    label: 'Founder',
    icon: User,
    href: '#founder',
  },
  {
    id: 'cta',
    label: 'Contact',
    icon: MessageSquare,
    href: '#cta',
  },
];

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block bg-white">
      {/* Navigation Container */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-2">
        {/* Navigation Items */}
        <div className="flex flex-col space-y-1">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <IconComponent className="w-5 h-5" />
                
                {/* Tooltip */}
                <div className={`absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
                  isActive ? 'opacity-100' : ''
                }`}>
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item, index) => (
              <div
                key={`progress-${item.id}`}
                className="flex items-center justify-center"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connecting Line */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -z-10" />
    </div>
  );
}
