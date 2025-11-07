import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { ProjectCategory } from '../types';

type FilterType = ProjectCategory | 'All';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const FilterButton: React.FC<{ filter: FilterType; label: string }> = ({ filter, label }) => (
    <motion.button
      onClick={() => setActiveFilter(filter)}
      className={`relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden backdrop-blur-lg ${
        activeFilter === filter 
          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' 
          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Filter className="w-4 h-4" />
        {label}
      </span>
      {activeFilter === filter && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500"
          layoutId="activeFilter"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950/20"></div>
        <div className="absolute top-40 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
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
            <Eye className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold">PROJECT SHOWCASE</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Building Tomorrow's Landmarks
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore our portfolio of groundbreaking projects that reshape cityscapes and redefine architectural possibilities.
          </p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterButton filter="All" label="All Projects" />
          <FilterButton filter={ProjectCategory.Residential} label="Residential" />
          <FilterButton filter={ProjectCategory.Commercial} label="Commercial" />
          <FilterButton filter={ProjectCategory.Industrial} label="Industrial" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-orange-500/50 hover:bg-white/15 transition-all duration-500 h-full"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      className="flex gap-4"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.button
                        className="p-3 bg-orange-500/90 text-white rounded-full hover:bg-orange-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-amber-500/90 text-white rounded-full hover:bg-amber-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Progress Indicator */}
                  <motion.div 
                    className="w-full h-1 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    />
                  </motion.div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">Project Status</span>
                    <span className="text-xs text-orange-400 font-semibold">Completed</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
