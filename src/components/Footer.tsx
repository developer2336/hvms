import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HVMS</h3>
            <p className="text-gray-300 mb-4">
              Providing state-of-the-art vending machine services for educational institutions and workspaces.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/hvms_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:service@harivendingmachineservices.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+917904912485" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Chennai, Tamil Nadu</p>
              <p className="mb-2">India</p>
              <p className="mb-2">
                <a href="tel:+917904912485" className="hover:text-white transition-colors">
                  +91 7904912485
                </a>
              </p>
              <p>
                <a href="mailto:service@harivendingmachineservices.com" className="hover:text-white transition-colors">
                  service@harivendingmachineservices.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hari's Vending Machine Services. All rights reserved.</p>
          <p className="mt-2">Providing Freshness in Every Sip!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
