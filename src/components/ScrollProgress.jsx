import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { cn } from '@/lib/utils';

const ScrollProgress = ({ sections, className }) => {
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  // Drive the maroon text reveal from the same scroll progress as the gold fill,
  // so the color transition happens exactly under the moving fill edge.
  const insetRight = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const goldRevealClip = useMotionTemplate`inset(0 ${insetRight} 0 0)`;

  // Derive active section from scroll progress (works perfectly with chain-sticky parallax)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        Math.floor(latest * sections.length),
        sections.length - 1
      );
      setActiveIndex(idx);
    });
    return unsubscribe;
  }, [scrollYProgress, sections.length]);

  if (!sections || sections.length === 0) return null;

  const labelClasses =
    'text-[11px] font-bold uppercase tracking-[0.22em]';

  return (
    <div
      className={cn(
        'pointer-events-none fixed left-0 right-0 top-[var(--nav-h)] z-[90]',
        className
      )}
    >
      <div className="relative h-7 overflow-hidden bg-primary shadow-md">
        {/* Gold fill scales from left with scroll progress */}
        <motion.div
          className="absolute inset-y-0 left-0 h-full w-full origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Active section label — far-left, white-by-default, maroon-as-fill-passes */}
        {sections.map((s, i) => (
          <div
            key={`label-${s.id}`}
            className={cn(
              'pointer-events-none absolute inset-0 flex items-center pl-4 transition-opacity duration-300',
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            )}
          >
            {/* Layer 1 — white text, default visible against the maroon track */}
            <span className={cn(labelClasses, 'text-primary-foreground')}>
              {s.label}
            </span>
            {/* Layer 2 — maroon text, revealed only where the gold fill has passed */}
            <motion.span
              className={cn(
                labelClasses,
                'absolute inset-0 flex items-center pl-4 text-primary'
              )}
              style={{ clipPath: goldRevealClip }}
              aria-hidden="true"
            >
              {s.label}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;
