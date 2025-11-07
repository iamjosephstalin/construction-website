import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Shield, Award } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  
  return (
    <section id="home" className="h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient background with subtle orange accents */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(251, 146, 60, 0.04) 0%, transparent 40%)
            `
          }}
        />
        
        {/* Subtle animated mesh overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 40px 40px, rgba(249, 115, 22, 0.8) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        
        {/* Floating animated shapes - much more subtle */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.03) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.02) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Geometric Overlay Elements */}
      <div className="absolute inset-0 z-15">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 border-2 border-orange-500/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 border border-amber-400/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-20 w-2 h-2 bg-orange-500"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Additional construction-themed elements */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 border-l-4 border-b-4 border-orange-500/40"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-20 w-8 h-8 bg-gradient-to-r from-orange-500/50 to-amber-500/50 rotate-45"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 sm:mt-32">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 mt-[60px]"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Premium Construction Services</span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-[0.9] tracking-tighter text-center"
              style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #f97316 50%, #fbbf24 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(249, 115, 22, 0.3)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Building Dreams.
            </motion.h1>
            
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
              }}
            >
              Delivering Quality.
            </motion.h2>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto font-light px-4 sm:px-0">
              From residential spaces to commercial landmarks —<br className="hidden sm:block" />
              we craft every project with <span className="text-orange-300 font-semibold">precision</span>, <span className="text-orange-300 font-semibold">integrity</span>, and <span className="text-orange-300 font-semibold">passion</span>.<br className="hidden sm:block" />
              Your vision, built to last.
            </p>
            
            {/* Decorative Line */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-10 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <motion.a
              href="#contact"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 text-base uppercase tracking-wider shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Get a Free Quote
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
            
            <motion.a
              href="#projects"
              className="group w-full sm:w-auto bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 hover:border-orange-400/50 transition-all duration-300 text-base uppercase tracking-wider flex items-center gap-2 shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4 group-hover:text-orange-400 transition-colors" />
              <span className="group-hover:text-orange-300 transition-colors">View Our Projects</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-20 pt-10 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-300 px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">14+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;