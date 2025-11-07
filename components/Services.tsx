import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap } from 'lucide-react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950/20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold">PREMIUM CONSTRUCTION SOLUTIONS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Premium Construction Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the next generation of construction with intelligent systems, sustainable innovation, and architectural mastery.
          </p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:border-orange-500/50 hover:bg-white/15 transition-all duration-500 overflow-hidden h-full">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
                  <div 
                    className="absolute inset-0" 
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  ></div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <motion.div 
                  className="relative inline-flex p-6 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl mb-6 border border-orange-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="h-12 w-12 text-orange-400" />
                  
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <motion.div
                    className="flex items-center gap-2 text-orange-400 font-semibold cursor-pointer group/link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative">
                      Explore Technology
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover/link:w-full transition-all duration-300"></div>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
