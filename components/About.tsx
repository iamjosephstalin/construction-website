import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Calendar, Target, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Target, number: '500+', label: 'Projects Completed', color: 'text-orange-500' },
    { icon: Users, number: '50+', label: 'Expert Team Members', color: 'text-amber-500' },
    { icon: Calendar, number: '14+', label: 'Years of Excellence', color: 'text-orange-600' },
    { icon: Award, number: '100%', label: 'Client Satisfaction', color: 'text-amber-600' },
  ];

  const achievements = [
    'ISO 9001:2015 Certified Quality Management',
    'Green Building Council Certified Projects',
    'Award-Winning Architectural Designs',
    'Zero-Accident Safety Record',
    'On-Time Project Delivery Guarantee',
    'Industry-Leading Warranty Programs'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
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
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 text-sm font-semibold">ABOUT DEMO BUILDERS</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Building Excellence for Over a Decade
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Transforming visions into reality with precision, innovation, and uncompromising quality standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Premier Construction & Development
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Since 2010, Demo Builders has been at the forefront of construction innovation nationwide. 
                We specialize in creating sustainable, technologically advanced structures that stand the test of time 
                while exceeding our clients' expectations at every level.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence, safety, and environmental responsibility has earned us recognition 
                as one of the leading construction companies in the industry.
              </p>
            </div>

            {/* Achievements List */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Our Achievements</h4>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-orange-500 transition-all duration-300 uppercase tracking-wider group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 auto-rows-fr">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl hover:bg-white/15 transition-all duration-300 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Featured Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
                alt="Demo Builders Construction Team"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
              
              {/* Floating Achievement Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-amber-600 backdrop-blur-lg text-white p-6 rounded-2xl shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="text-lg font-bold">Award Winning</div>
                    <div className="text-sm opacity-90">Construction Excellence</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
