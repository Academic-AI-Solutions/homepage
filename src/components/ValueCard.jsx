import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ValueCard = ({ percentage, label, description, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetValue = parseInt(percentage, 10);

  useEffect(() => {
    if (!isInView) return;
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
  }, [isInView, targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
    >
      <Card className="relative overflow-hidden rounded-xl border-2 border-accent/30 bg-gradient-to-br from-card to-secondary p-8 shadow-lg">
        <div className="absolute -mr-16 -mt-16 right-0 top-0 h-32 w-32 rounded-full bg-accent/5" />
        <CardContent className="relative z-10 p-0">
          <div className="mb-4 text-6xl font-bold text-accent md:text-7xl">{count}%</div>
          <h3 className="mb-3 text-2xl font-bold text-foreground">{label}</h3>
          <p className="leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ValueCard;
