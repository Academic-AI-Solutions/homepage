import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', centered && 'text-center')}
    >
      <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{title}</h2>
      <div className={cn('mb-6 h-1 w-24 bg-accent', centered && 'mx-auto')} />
      {subtitle && (
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
