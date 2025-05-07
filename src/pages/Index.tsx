
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowToUseSection from '@/components/HowToUseSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animateItems = document.querySelectorAll('.animate-on-scroll');
    animateItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      animateItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="animate-on-scroll">
        <FeaturesSection />
      </div>
      
      <div className="animate-on-scroll">
        <HowToUseSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
