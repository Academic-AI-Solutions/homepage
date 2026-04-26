import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTAButton = ({ to, children, variant = 'primary', className = '' }) => {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300";
  const variants = {
    primary: "bg-[#FFC627] text-[#3D0024] hover:bg-[#E6B322] font-bold shadow-lg hover:shadow-xl",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl border-2 border-gray-200"
  };

  const Component = to ? Link : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Component
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default CTAButton;