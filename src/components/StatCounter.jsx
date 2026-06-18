import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated count-up stat. Counts from 0 → value on scroll-into-view.
// ValueCard is %-only and card-shaped; this is a lightweight label/number unit
// for stat bands (supports $ prefixes, B/M/+ suffixes, and decimals like 19.6).
const StatCounter = ({ value, prefix = '', suffix = '', label, decimals, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const places = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    if (!isInView) return;
    let raf;
    let startTs;
    const duration = 1600;
    const tick = (ts) => {
      if (startTs === undefined) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(value);
    };
    const startTimer = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay * 1000);
    return () => {
      clearTimeout(startTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isInView, value, delay]);

  const formatted = count.toLocaleString('en-US', {
    minimumFractionDigits: places,
    maximumFractionDigits: places,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="mx-auto mt-3 h-0.5 w-10 bg-primary/30" />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCounter;
