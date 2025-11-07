import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Send, MessageSquare, User, Building } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) return 'Please enter a valid phone number';
        return '';
      case 'projectType':
        if (!value) return 'Please select a project type';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Reset submit status when user modifies form
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      projectType: true,
      message: true
    });
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      // Focus on first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      errorElement?.focus();
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        message: ''
      });
      setTouched({});
      setErrors({});
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950/20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
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
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold">START YOUR PROJECT</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to transform your vision into reality? Connect with our team of experts and let's create the future together.
          </p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Form - Left Side */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden hover:bg-white/15 transition-all duration-300">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                ></div>
              </div>

              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-300">Start Your Project</h3>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div 
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-green-300">Message Sent Successfully!</h4>
                        <p className="text-green-200 text-sm">Thank you for your inquiry. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-red-300">Message Failed to Send</h4>
                        <p className="text-red-200 text-sm">There was an error sending your message. Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="name" className="sr-only">Full Name</label>
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                          errors.name && touched.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-600 focus:border-orange-500'
                        }`}
                        placeholder="Your Name"
                        aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                        aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                        required
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="relative">
                      <label htmlFor="phone" className="sr-only">Phone Number</label>
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                          errors.phone && touched.phone
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-600 focus:border-orange-500'
                        }`}
                        placeholder="+1 (555) 123-4567"
                        aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                        required
                      />
                      {errors.phone && touched.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                        errors.email && touched.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-600 focus:border-orange-500'
                      }`}
                      placeholder="your.email@example.com"
                      aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="projectType" className="sr-only">Project Type</label>
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                    <select 
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-all duration-300 text-white ${
                        errors.projectType && touched.projectType
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-600 focus:border-orange-500'
                      }`}
                      aria-invalid={errors.projectType && touched.projectType ? 'true' : 'false'}
                      aria-describedby={errors.projectType && touched.projectType ? 'projectType-error' : undefined}
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="residential">Smart Residential</option>
                      <option value="commercial">Commercial Mega Project</option>
                      <option value="industrial">Industrial Infrastructure 4.0</option>
                      <option value="retrofit">Green Retrofit Solutions</option>
                      <option value="architecture">Futuristic Architecture</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && touched.projectType && (
                      <p id="projectType-error" className="mt-1 text-sm text-red-400" role="alert">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="message" className="sr-only">Project Details</label>
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none ${
                        errors.message && touched.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-600 focus:border-orange-500'
                      }`}
                      placeholder="Tell us about your vision..."
                      aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                      aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                      required
                    ></textarea>
                    {errors.message && touched.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-orange-500 transition-all duration-300 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" color="#ffffff" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Details Card - Right Side */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-300">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">123 Construction Plaza, Suite 456
Business District, Downtown
New York, NY 10001
United States</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@demobuilders.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full Width Map */}
        <motion.div 
          className="mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-700 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1619554084716!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Demo Builders Location"
              className="rounded-2xl"
            ></iframe>
            
            {/* Map Overlay Info */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Demo Builders</p>
                  <p className="text-gray-300 text-xs">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
