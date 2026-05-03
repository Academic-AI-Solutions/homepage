import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const variantClasses = {
  primary:
    'bg-accent text-accent-foreground font-bold shadow-lg hover:bg-accent/90 hover:shadow-xl',
  secondary:
    'bg-background text-foreground border-2 border-border shadow-lg hover:bg-secondary hover:shadow-xl',
};

const CTAButton = ({ to, children, variant = 'primary', className = '', ...props }) => {
  const merged = cn(
    'h-auto rounded-lg px-8 py-4 text-lg transition-all duration-300',
    variantClasses[variant],
    className
  );

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
      {to ? (
        <Button asChild className={merged} {...props}>
          <Link to={to}>{children}</Link>
        </Button>
      ) : (
        <Button className={merged} {...props}>
          {children}
        </Button>
      )}
    </motion.div>
  );
};

export default CTAButton;
