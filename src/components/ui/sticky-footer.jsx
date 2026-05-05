import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Sticky-reveal footer: a tall (FOOTER_HEIGHT) block that is clip-pathed and
// holds a `position: fixed` inner panel — as the user scrolls past page
// content the fixed panel "reveals" cinematically inside the clipped frame.
const FOOTER_HEIGHT = 720;

export function StickyFooter({
  className,
  brand,
  tagline,
  socialLinks = [],
  linkGroups = [],
  legal,
  attribution,
  ...props
}) {
  return (
    <footer
      className={cn('relative w-full', className)}
      style={{
        height: `${FOOTER_HEIGHT}px`,
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
      {...props}
    >
      <div className="fixed bottom-0 w-full" style={{ height: `${FOOTER_HEIGHT}px` }}>
        <div
          className="sticky h-full overflow-y-auto"
          style={{ top: `calc(100vh - ${FOOTER_HEIGHT}px)` }}
        >
          <div className="dark relative flex h-full w-full flex-col justify-between gap-5 border-t border-border bg-background px-6 py-10 text-foreground md:px-12">
            {/* Decorative radial-glow blobs (v3 arbitrary syntax) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[22rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsl(var(--foreground)/0.06)_0,hsl(0_0%_55%/0.02)_50%,hsl(var(--foreground)/0.01)_80%)]" />
              <div className="absolute left-0 top-0 h-[80rem] w-[15rem] translate-x-[5%] -translate-y-1/2 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/0.04)_0,hsl(var(--foreground)/0.01)_80%,transparent_100%)]" />
              <div className="absolute left-0 top-0 h-[80rem] w-[15rem] -translate-y-[22rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/0.04)_0,hsl(var(--foreground)/0.01)_80%,transparent_100%)]" />
            </div>

            {/* Top: brand + columns */}
            <div className="relative z-10 mt-10 flex flex-col gap-10 md:flex-row md:gap-12 xl:mt-0">
              <AnimatedContainer className="w-full max-w-sm space-y-4">
                {brand}
                {tagline && (
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:mt-4">
                    {tagline}
                  </p>
                )}
                {socialLinks.length > 0 && (
                  <div className="flex gap-2 pt-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={link.title}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </AnimatedContainer>

              {linkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.1}
                  className="w-full"
                >
                  <div className="mb-8 md:mb-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {group.label}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center transition-colors duration-200 hover:text-accent"
                          >
                            {link.icon && <link.icon className="me-1 h-4 w-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            {/* Bottom: legal line */}
            <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-4 text-xs text-muted-foreground md:flex-row md:text-sm">
              {legal && <p className="text-center md:text-left">{legal}</p>}
              {attribution && <p>{attribution}</p>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AnimatedContainer({ delay = 0.1, children, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div {...props}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', y: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default StickyFooter;
