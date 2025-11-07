import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 shadow-2xl backdrop-blur-xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background Glow */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-orange-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="group flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-widest">
              Demo <span className="text-orange-400">Builders</span>
            </div>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a 
            href="#contact" 
            className="hidden md:inline-block relative group overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              Get Started
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-orange-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-orange-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.a>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-orange-400 transition-colors focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.nav 
              className="flex flex-col items-center space-y-6 py-8"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {['About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    {item}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold py-3 px-6 rounded-xl hover:from-amber-600 hover:to-orange-500 transition-all duration-300 text-sm uppercase tracking-wider shadow-xl flex items-center gap-2 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Get Started
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
