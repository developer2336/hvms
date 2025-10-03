import React from 'react';
import { motion } from 'framer-motion';
import { CloudCog, Clock, Coffee, Briefcase, School } from 'lucide-react';

const features = [
  {
    icon: <Briefcase size={36} className="text-blue-400" />,
    title: 'Corporate Focus',
    description: 'Tailored solutions for offices and corporate environments to boost employee satisfaction.',
  },
  {
    icon: <School size={36} className="text-blue-400" />,
    title: 'Educational Focus',
    description: 'Designed for colleges and universities to enhance the student experience.',
  },
  {
    icon: <CloudCog size={36} className="text-blue-400" />,
    title: 'Smart Monitoring',
    description: 'Cloud-based system that tracks stock levels and automatically alerts for refills.',
  },
  {
    icon: <Coffee size={36} className="text-blue-400" />,
    title: 'Quality Products',
    description: 'Curated selection of snacks, beverages, and refreshments from trusted brands.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About HVMS</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We provide state-of-the-art vending machine services to enhance the experience for both corporate employees and college students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Why Companies Need Vending Machines</h3>
            <p className="text-gray-300 mb-6">
              Companies benefit from vending machines for several reasons. They provide convenient access to snacks and beverages, catering to employees' busy schedules and tight deadlines.
            </p>
            <p className="text-gray-300 mb-6">
              Vending machines reduce the need for employees to leave the office for refreshments, saving time and increasing productivity. They also help create a more comfortable and inclusive workplace environment.
            </p>
            <p className="text-gray-300">
              Our vending solutions support a 24/7 work environment, offering refreshments during late-night shifts and fostering a sense of care and support for employees.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Why Colleges Need Vending Machines</h3>
            <p className="text-gray-300 mb-6">
              Colleges benefit from vending machines by providing students and staff with easy access to snacks and beverages, accommodating their busy schedules and study sessions.
            </p>
            <p className="text-gray-300 mb-6">
              Vending machines help reduce long queues in cafeterias during peak hours, ensuring efficient service. They enhance the overall campus experience, creating a more inclusive and accessible environment.
            </p>
            <p className="text-gray-300">
              Our solutions support a 24/7 learning environment, allowing access to refreshments outside regular cafeteria hours and fostering a sense of autonomy among students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Technology</h3>
            <p className="text-gray-300 mb-4">
              Our OI - MODEL SI LITE machines feature:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                10-inch touch screen interface for easy product selection
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                6 rows with 60 slots for diverse product offerings
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Cloud-based monitoring for real-time stock management
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Comprehensive analytics on product demand and sales
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Energy-efficient operation (less than 8 units per day)
              </li>
            </ul>
            <p className="text-gray-300">
              We handle all maintenance and stock refills, ensuring a hassle-free experience for your company or college.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Our Founder</h3>
          <div className="max-w-md mx-auto bg-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/50">
            <p className="text-3xl font-bold text-blue-400 mb-2">Harish Kumar</p>
            <p className="text-gray-300">
              Harish Kumar, the visionary behind HVMS, founded the company with a mission to revolutionize refreshment solutions for workplaces and campuses. With a passion for innovation and well-being, he leads HVMS in delivering top-notch vending services across Chennai.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700/50"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
