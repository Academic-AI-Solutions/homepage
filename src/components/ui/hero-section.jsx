import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, ShieldCheck, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GridBeam } from '@/components/ui/background-grid-beam';

const SIGNAL_ICONS = {
  Mail,
  ShieldCheck,
  GraduationCap,
};

const SignalIcon = ({ name }) => {
  const Icon = SIGNAL_ICONS[name];
  if (!Icon) return null;
  return (
    <div className="mr-2 flex-shrink-0">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const HeroSection = React.forwardRef(
  (
    {
      className,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      backgroundImages,
      slideshowInterval = 5000,
      signals = [],
      belowCta,
      ...props
    },
    ref
  ) => {
    const images =
      Array.isArray(backgroundImages) && backgroundImages.length > 0
        ? backgroundImages
        : [backgroundImage];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (typeof window === 'undefined') return;
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }, [images]);

    useEffect(() => {
      if (images.length < 2) return;
      if (
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }
      const id = setInterval(() => {
        setCurrentIndex((i) => (i + 1) % images.length);
      }, slideshowInterval);
      return () => clearInterval(id);
    }, [images.length, slideshowInterval]);

    return (
      <motion.section
        ref={ref}
        className={cn(
          'relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row',
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left: Content */}
        <div className="relative flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          {/* Decorative grid + animated beam behind the lower half (CTA + signals) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 overflow-hidden md:h-1/2">
            <GridBeam className="h-full" />
          </div>

          <div className="relative">
            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-5xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-1 w-20 bg-accent"
                variants={itemVariants}
              />
              <motion.p
                className="mb-8 max-w-md text-base text-muted-foreground md:text-lg"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="inline-block text-lg font-bold tracking-widest text-primary transition-colors hover:text-primary/80"
                variants={itemVariants}
              >
                {callToAction.text}
              </motion.a>
            </motion.main>
          </div>

          <div className="relative">
            {belowCta && (
              <motion.div className="mt-12 w-full" variants={itemVariants}>
                {belowCta}
              </motion.div>
            )}

            {signals.length > 0 && (
              <motion.footer className="mt-8 w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3">
                  {signals.map((signal) => (
                    <div key={signal.label} className="flex items-center">
                      <SignalIcon name={signal.icon} />
                      <span>{signal.label}</span>
                    </div>
                  ))}
                </div>
              </motion.footer>
            )}
          </div>
        </div>

        {/* Right: Slideshow — each image slides in from the right */}
        <div
          className="relative min-h-[300px] w-full overflow-hidden md:min-h-full md:w-1/2 lg:w-2/5"
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          aria-hidden="true"
        >
          <AnimatePresence initial={true}>
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            />
          </AnimatePresence>
        </div>
      </motion.section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export { HeroSection };
