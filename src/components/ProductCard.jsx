import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        y: -5
      }}
      className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-start mb-6">
        <div className="p-3 bg-[#d4af37]/10 rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center text-[#d4af37] font-semibold"
      >
        Learn More <ArrowRight className="ml-2" size={18} />
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;