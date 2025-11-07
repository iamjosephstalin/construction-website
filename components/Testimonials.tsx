import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-orange-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">Hear from those who have experienced our construction excellence firsthand.</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden animate-on-scroll hover:bg-white/15 transition-all duration-300" style={{ transitionDelay: '200ms' }}>
            <div className="absolute top-0 left-0 text-orange-50" style={{ fontSize: '12rem', lineHeight: 1, zIndex: 0, transform: 'translate(-20%, -20%)' }}>
                &ldquo;
            </div>
            <div key={currentIndex} className="relative z-10 animate-fade-in">
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < currentTestimonial.rating} />)}
                </div>
                <p className="text-lg md:text-xl text-gray-200 italic mb-6">"{currentTestimonial.quote}"</p>
                <div className="flex items-center">
                    <img src={currentTestimonial.imageUrl} alt={currentTestimonial.clientName} className="w-16 h-16 rounded-full mr-4 object-cover" />
                    <div>
                        <p className="font-bold text-white">{currentTestimonial.clientName}</p>
                        <p className="text-sm text-gray-300">{currentTestimonial.projectName}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS_DATA.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
