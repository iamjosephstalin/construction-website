import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showOnScroll?: boolean;
  scrollThreshold?: number;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  phoneNumber = CONTACT_INFO.phone,
  message = CONTACT_INFO.whatsappMessage,
  position = 'bottom-right',
  showOnScroll = true,
  scrollThreshold = 300
}) => {
  const [isVisible, setIsVisible] = useState(!showOnScroll);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll, scrollThreshold]);

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
    setShowTooltip(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={`fixed ${getPositionClasses()} z-50`}>
          {/* Popup Chat Interface */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Demo Builders</h3>
                        <p className="text-xs opacity-90">Typically replies instantly</p>
                      </div>
                    </div>
                    <button
                      onClick={handlePopupToggle}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-gray-800 text-sm">
                      Hi there! 👋<br />
                      How can we help you today?
                    </p>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start Conversation
                  </button>
                  
                  <div className="mt-3 text-center">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      Call us directly
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !showPopup && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-16 bottom-2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
              >
                Need help? Chat with us!
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            onClick={handlePopupToggle}
            onMouseEnter={() => !showPopup && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ opacity: 0.3 }}
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-green-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon */}
            <motion.div
              animate={{ rotate: showPopup ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {showPopup ? (
                <X className="w-6 h-6 relative z-10" />
              ) : (
                <MessageCircle className="w-6 h-6 relative z-10" />
              )}
            </motion.div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;