import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { label: 'All', icon: 'fa-box' },
  { label: 'Men', icon: 'fa-mars' },
  { label: 'Women', icon: 'fa-venus' },
  { label: 'T-Shirts', icon: 'fa-shirt' },
  { label: 'Accessories', icon: 'fa-hat-cowboy' },
  { label: 'Kids', icon: 'fa-child-reaching' },
];

const CategoryBox = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background blurred image */}
      <img
        src="https://source.unsplash.com/1600x900/?fashion,clothes"
        alt="Category background"
        className="absolute inset-0 w-full h-full object-cover blur-lg opacity-30 z-0"
      />

      {/* Overlay to darken slightly (optional) */}
      <div className="absolute inset-0 bg-[#212529]/40 backdrop-blur-sm z-0" />

      {/* Category content */}
      <div className="relative z-10 px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#f8f9fa] mb-6 text-center">Browse by Category</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#dee2e6]/80 text-[#212529] hover:bg-[#adb5bd]/90 transition shadow-sm text-sm"
              >
                <i className={`fas ${category.icon} text-xl mb-2`} />
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
