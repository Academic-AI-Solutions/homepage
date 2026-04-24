import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className={`w-24 h-1 bg-[#d4af37] mb-6 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;