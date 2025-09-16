'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import AppIcon from '@public/icon.svg'
import NextImage from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-2"
          >                               
            <NextImage src={AppIcon} width={32} height={32} alt='App Logo' />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jigsaw Networks
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a
              whileHover={{ y: -2 }}
              href="#products"
              onClick={(e) => handleSmoothScroll(e, 'products')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Products
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#why-us"
              onClick={(e) => handleSmoothScroll(e, 'why-us')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Why Us
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#founder"
              onClick={(e) => handleSmoothScroll(e, 'founder')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Founder
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="mailto:help.jigsawnetworks@gmail.com"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 pt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, 'products')}
              >
                Products
              </a>
              <a
                href="#why-us"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, 'why-us')}
              >
                Why Us
              </a>
              <a
                href="#founder"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, 'founder')}
              >
                Founder
              </a>
              <a
                href="mailto:help.jigsawnetworks@gmail.com"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
