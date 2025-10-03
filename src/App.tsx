import React, { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Loader2 } from 'lucide-react';

// Lazy load sections for better performance
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const ProductsSection = React.lazy(() => import('./components/ProductsSection'));
const GallerySection = React.lazy(() => import('./components/GallerySection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const ClientSection = React.lazy(() => import('./components/ClientSection'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="animate-pulse text-4xl font-bold text-gradient mb-8">HVMS</div>
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>}>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProductsSection />
          <GallerySection />
               <ClientSection />
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
