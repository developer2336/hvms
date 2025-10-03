import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        'service_vlhxet2', // 🔹 Replace with your EmailJS service ID
        'template_69zy9ed', // 🔹 Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          institution: formData.institution,
          message: formData.message,
        },
        'KF1P3eRAN36ByAudp' // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', institution: '', message: '' });
        },
        (error) => {
          console.error(error);
          setStatus('error');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-gray-900 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Get in touch with us to learn more about our vending machine services for your educational institution.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 h-64 relative">
              <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Hari's Vending Machine Services</h3>
                  <p className="opacity-90">Enhancing campus experiences across Chennai</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-300">+91 7904912485</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <p className="text-gray-300">service@harivendingmachineservices.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Send us a message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="institution" className="block text-sm font-medium text-gray-300 mb-1">
                  Institution Name
                </label>
                <input
                  type="text"
                  id="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Your institution name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition-colors duration-300 disabled:opacity-70"
              >
                {loading ? 'Sending...' : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-green-400">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
