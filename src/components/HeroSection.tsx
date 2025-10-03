import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollRef = useRef(null);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-24 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] top-1/2 right-0 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] bottom-0 left-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center relative">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hari's Vending
              <span className="text-gradient"> Machine Services</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-200 mb-8">
              State-of-the-art vending solutions for colleges and workspaces
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Enhance your campus or workplace experience with our innovative, cloud-monitored vending machines offering 24/7 access to refreshments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
              >
                Get in Touch
              </a>
              <a 
                href="#services" 
                className="btn bg-gray-800/50 text-white border border-gray-700 backdrop-blur-sm hover:bg-gray-700/50"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md lg:max-w-lg"
          >
            <img
              src="https://images.pexels.com/photos/2338113/pexels-photo-2338113.jpeg?auto=compress&cs=tinysrgb&w=2070"
              alt="Modern Vending Machine on Campus"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-white/80" />
      </motion.div>
      
      <div ref={scrollRef}></div>
    </section>
  );
};

export default HeroSection;
