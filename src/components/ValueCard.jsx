import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ValueCard = ({ percentage, label, description, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetValue = parseInt(percentage);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      className="relative p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg border-2 border-[#FFC627]/30 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC627]/5 rounded-full -mr-16 -mt-16" />
      <div className="relative z-10">
        <div className="text-6xl md:text-7xl font-bold text-[#FFC627] mb-4">
          {count}%
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{label}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ValueCard;