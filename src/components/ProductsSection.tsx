import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const productCategories = [
  {
    name: 'Potato Chips',
    brands: ['Lay\'s', 'Bingo', 'Cheetos', 'Pringles', 'Kurkure'],
    image: 'https://images.pexels.com/photos/1618914/pexels-photo-1618914.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Chocolates',
    brands: ['Five Star', 'Dairy Milk', 'Kit Kat', 'Mars', 'Ferrero Rocher', 'Snickers'],
    image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Beverages',
    brands: ['Coke', 'Pepsi', 'Fanta', '7Up', 'Sprite', 'Bovonto'],
    image: 'https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Energy Drinks',
    brands: ['Red Bull', 'Monster', 'Sting', 'Hell'],
    image: 'https://images.pexels.com/photos/2668311/pexels-photo-2668311.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Tetra Packets',
    brands: ['Frooti', 'Maaza', 'Apple Fizz', 'Milkshake'],
    image: 'https://images.pexels.com/photos/2747421/pexels-photo-2747421.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Biscuits',
    brands: ['Good Day', '50 50', 'Bourbon Biscuits', 'Oreo', 'JimJam'],
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="products" className="section bg-gradient-to-br from-gray-900 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Products</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We offer a wide variety of snacks and beverages from popular brands to satisfy all tastes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 bg-blue-600 text-white">
                <h3 className="text-xl font-semibold">Product Categories</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {productCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-4 flex items-center justify-between transition-colors ${
                      activeCategory === index ? 'bg-blue-700 text-blue-200' : 'hover:bg-gray-700 text-gray-200'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <ChevronRight size={18} className={activeCategory === index ? 'text-blue-400' : 'text-gray-400'} />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 h-64 relative">
                <img
                  src={productCategories[activeCategory].image}
                  alt={productCategories[activeCategory].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-2xl font-semibold p-6">
                    {productCategories[activeCategory].name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-medium mb-4 text-gray-200">Available Brands:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {productCategories[activeCategory].brands.map((brand, index) => (
                    <div 
                      key={index}
                      className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-center text-gray-200 transition-all hover:bg-blue-600 hover:border-blue-500 hover:text-white"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
                
                {activeCategory === 2 && (
                  <div className="mt-6 p-4 bg-blue-700 rounded-lg border border-blue-600">
                    <p className="text-blue-200 font-medium">Parie Agro</p>
                    <p className="text-blue-300 italic mt-1">"FRESHNESS IN EVERY SIP!"</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;