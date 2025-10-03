import React from 'react';
import { motion } from 'framer-motion';

const ClientSection = () => {
  return (
    <section id="clients" className="section bg-gradient-to-br from-gray-900 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Valued Clients</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We are proud to partner with leading institutions and enterprises, helping them enhance operations and deliver impactful experiences.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* Client 1: M.O.P. Vaishnav College */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center max-w-sm w-full border border-gray-700/50">
              <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-400 mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/6/67/M.O.P.Vaishnav_College_for_Women_logo.jpg" // your base64 here
                  alt="M.O.P. Vaishnav College Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">M.O.P. Vaishnav College</h3>
              <p className="text-gray-300 text-center mt-2">
                A prestigious institution in Chennai, partnering with HVMS to provide convenient refreshment solutions for students and staff.
              </p>
            </div>
          </motion.div>

          {/* Client 2: Solverminds */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center max-w-sm w-full border border-gray-700/50">
              <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-400 mb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHM3unbkM34eA/company-logo_200_200/company-logo_200_200/0/1631353033655?e=2147483647&v=beta&t=5jbL_4MjiyBz1fKN96ZXDezvnr-0tfOVbk3s0TK76ss"
                  alt="Solverminds Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Solverminds</h3>
              <p className="text-gray-300 text-center mt-2">
                Solverminds is a leading solution provider for the liner shipping industry, delivering
                expertise in liner operations, ship management, and logistics optimization. 
                We partnered with them to implement cutting-edge services that streamline global maritime operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
