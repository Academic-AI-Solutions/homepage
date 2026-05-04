import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Mirrors the hero h1 styling so section titles below the hero share its
// typographic scale and left-anchored alignment. Pass `title` as a ReactNode
// to embed an inline accent span (e.g. <>Core <span className="text-primary">Products</span></>).
const SectionHeader = ({ title, subtitle, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', className)}
    >
      <h2 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
      <div className="mt-6 h-1 w-20 bg-accent" />
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
