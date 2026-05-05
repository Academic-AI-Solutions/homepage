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
    const allImages =
      Array.isArray(backgroundImages) && backgroundImages.length > 0
        ? backgroundImages
        : [backgroundImage];

    // Mobile devices skip the slideshow entirely — they only ever see the first image.
    // The right image panel is stacked below content on mobile and benefits little from rotation,
    // while preloading 11 large images (~9MB) on mount kills mobile performance.
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
      if (typeof window === 'undefined') return;
      const mq = window.matchMedia('(min-width: 768px)');
      setIsDesktop(mq.matches);
      const onChange = (e) => setIsDesktop(e.matches);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }, []);

    const images = isDesktop ? allImages : allImages.slice(0, 1);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (typeof window === 'undefined') return;
      if (!isDesktop) return; // skip eager preload on mobile
      // Single-image lookahead: preload current + next, not all.
      const next = (currentIndex + 1) % images.length;
      [images[currentIndex], images[next]].forEach((src) => {
        if (!src) return;
        const img = new window.Image();
        img.src = src;
      });
    }, [isDesktop, currentIndex, images]);

    useEffect(() => {
      if (images.length < 2) return;
      if (!isDesktop) return; // no rotation on mobile
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
    }, [images.length, slideshowInterval, isDesktop]);

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
        <div className="relative flex w-full flex-col justify-between px-6 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          {/* Decorative grid + animated beam behind the lower half (CTA + signals) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 overflow-hidden md:h-1/2">
            <GridBeam className="h-full" />
          </div>

          <div className="relative">
            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
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
                {/* Mobile: photo backdrop + maroon scrim wraps the slot full-bleed; desktop: pass-through */}
                <div className="relative -mx-6 sm:-mx-8 md:mx-0">
                  <div className="absolute inset-0 overflow-hidden md:hidden" aria-hidden="true">
                    <img
                      src={images[0]}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
                  </div>
                  <div className="relative z-10 px-6 py-5 sm:px-8 md:p-0">
                    {belowCta}
                  </div>
                </div>
              </motion.div>
            )}

            {signals.length > 0 && (
              <motion.footer className="mt-8 hidden w-full md:block" variants={itemVariants}>
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

        {/* Right: Slideshow — each image slides in from the right (desktop only; mobile uses belowCta backdrop) */}
        <div
          className="relative hidden overflow-hidden md:block md:min-h-full md:w-1/2 lg:w-2/5"
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
