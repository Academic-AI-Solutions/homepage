import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const PageHero = React.forwardRef(
  (
    {
      className,
      kicker,
      title,
      subtitle,
      callToAction,
      image,
      ...props
    },
    ref
  ) => {
    return (
      <motion.section
        ref={ref}
        className={cn(
          'relative flex w-full flex-col overflow-hidden bg-secondary text-foreground md:flex-row',
          'min-h-[60vh]',
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left: Static image with mirrored diagonal clip */}
        <div
          className="relative min-h-[280px] w-full overflow-hidden md:min-h-full md:w-1/2 lg:w-2/5"
          style={{ clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        >
          <motion.img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          />
        </div>

        {/* Right: Content */}
        <div className="relative flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          {kicker && (
            <motion.p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              variants={itemVariants}
            >
              {kicker}
            </motion.p>
          )}
          <motion.h1
            className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.div
            className="my-6 h-1 w-20 bg-accent"
            variants={itemVariants}
          />
          {subtitle && (
            <motion.p
              className="mb-8 max-w-xl text-base text-muted-foreground md:text-lg"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
          {callToAction && (
            <motion.a
              href={callToAction.href}
              className="inline-block text-lg font-bold tracking-widest text-primary transition-colors hover:text-primary/80"
              variants={itemVariants}
            >
              {callToAction.text}
            </motion.a>
          )}
        </div>
      </motion.section>
    );
  }
);

PageHero.displayName = 'PageHero';

export { PageHero };
