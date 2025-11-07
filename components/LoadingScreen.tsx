import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building2, Cpu } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-gray-900/90 backdrop-blur-xl flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Logo Animation */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(249, 115, 22, 0.3)",
                    "0 0 40px rgba(249, 115, 22, 0.6)", 
                    "0 0 20px rgba(249, 115, 22, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 text-white" />
              </motion.div>
              
              {/* Rotating Icons */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <Building2 className="w-6 h-6 text-orange-400" />
                </motion.div>
                <motion.div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <Cpu className="w-6 h-6 text-amber-400" />
                </motion.div>
                <motion.div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Building2 className="w-6 h-6 text-orange-400" />
                </motion.div>
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AG <span className="text-orange-400">Builders</span>
            </motion.h1>
            
            <motion.p 
              className="text-orange-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Building the Future
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            className="w-80 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Initializing Systems</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
            
            {/* Loading Text */}
            <motion.div 
              className="text-gray-400 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading cutting-edge construction solutions...
            </motion.div>
          </motion.div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-4 h-4 border-2 border-orange-500 rotate-45"
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-6 h-6 border border-amber-400"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-500 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;