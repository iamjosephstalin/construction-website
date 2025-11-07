import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => {
        try {
          observer.unobserve(el);
        } catch (error) {
          // Ignores errors thrown when unobserving elements that are not being observed
        }
      });
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="bg-gray-900 text-gray-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat showOnScroll={false} />
      </div>
    </>
  );
};

export default App;
