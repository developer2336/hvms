import React from 'react';
import { motion } from 'framer-motion';
import { CloudCog as CloudCheck, Cpu, Wifi, Zap, Clock, Map } from 'lucide-react';

const services = [
  {
    icon: <CloudCheck size={32} className="text-blue-400" />,
    title: 'Cloud Monitoring',
    description: 'Real-time monitoring of product availability and machine status through our cloud platform.',
  },
  {
    icon: <Cpu size={32} className="text-blue-400" />,
    title: 'Smart Analytics',
    description: 'Comprehensive data analysis to optimize product selection based on demand patterns.',
  },
  {
    icon: <Clock size={32} className="text-blue-400" />,
    title: 'Automatic Restocking',
    description: 'We monitor stock levels and replenish products when they reach 50% capacity.',
  },
  {
    icon: <Wifi size={32} className="text-blue-400" />,
    title: 'Connected Experience',
    description: 'Wi-Fi enabled machines that stay connected to our central management system.',
  },
  {
    icon: <Zap size={32} className="text-blue-400" />,
    title: 'Energy Efficient',
    description: 'Low power consumption of less than 8 units per day to minimize environmental impact.',
  },
  {
    icon: <Map size={32} className="text-blue-400" />,
    title: 'Strategic Placement',
    description: 'Expert consultation on optimal vending machine placement within your campus.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We provide comprehensive vending machine solutions tailored specifically for educational institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="mb-4 p-3 bg-blue-900/30 rounded-lg w-14 h-14 flex items-center justify-center group-hover:bg-blue-900/50 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-blue-500/20 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Campus Experience?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
            Our vending machines require minimal space (less than 3 sq. ft.) and provide maximum convenience.
            Get in touch to learn how we can customize our solutions for your institution.
          </p>
          <a 
            href="#contact" 
            className="btn bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 inline-block"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;