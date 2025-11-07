import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold text-white tracking-widest mb-4">
              Demo <span className="text-orange-500">Builders</span>
            </h3>
            <p className="text-sm text-gray-400">Building Dreams with Strength and Precision.</p>
            <div className="flex space-x-4 mt-6">
                <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.323-.592 1.323-1.325V1.325C24 .592 23.408 0 22.675 0z" /></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg></SocialIcon>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-orange-500 transition-colors">Our Projects</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Career Opportunities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Industrial Infrastructure</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
                123 Construction Plaza, Suite 456<br/>
                Business District, Downtown, New York, NY 10001<br/>
                <strong className="text-gray-200">Phone:</strong> +1 (555) 123-4567<br/>
                <strong className="text-gray-200">Email:</strong> info@demobuilders.com
            </p>
          </div>

        </div>
      </div>
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          Copyright &copy; 2025 Demo Builders. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
