import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'platform', label: 'The Platform', path: '/platform' },
  { id: 'financial', label: 'Financial Impact', path: '/financial-impact' },
  { id: 'licensing', label: 'Licensing & Partners', path: '/licensing' },
  { id: 'team', label: 'Team', path: '/team' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

// Compact, condensed list for the inline desktop nav (Home is the lockup itself)
const INLINE_NAV_ITEMS = [
  { id: 'platform', label: 'The Platform', path: '/platform' },
  { id: 'financial', label: 'Financial Impact', path: '/financial-impact' },
  { id: 'licensing', label: 'Partners', path: '/licensing' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

// Brand-aligned background shapes — gold tinted on maroon, one per nav item
const BackgroundShape = ({ index }) => {
  const shapes = [
    // 0 — Home: floating circles
    <svg key="home" viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <circle cx="80" cy="120" r="40" fill="rgba(255, 198, 39, 0.18)" />
      <circle cx="300" cy="80" r="60" fill="rgba(255, 198, 39, 0.12)" />
      <circle cx="200" cy="300" r="80" fill="rgba(255, 198, 39, 0.08)" />
      <circle cx="350" cy="280" r="30" fill="rgba(255, 198, 39, 0.20)" />
    </svg>,
    // 1 — Platform: wave pattern
    <svg key="platform" viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <path d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(255, 198, 39, 0.22)" strokeWidth="60" fill="none" />
      <path d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(255, 198, 39, 0.14)" strokeWidth="40" fill="none" />
    </svg>,
    // 2 — Financial: grid dots
    <svg key="financial" viewBox="0 0 400 400" fill="none" className="h-full w-full">
      {[50, 150, 250, 350].flatMap((y) =>
        [50, 150, 250, 350].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill="rgba(255, 198, 39, 0.22)" />
        ))
      )}
    </svg>,
    // 3 — Licensing: organic blobs
    <svg key="licensing" viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <path
        d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
        fill="rgba(255, 198, 39, 0.16)"
      />
      <path
        d="M260 220 Q310 170, 360 220 Q380 260, 340 310 Q280 340, 240 300 Q220 260, 260 220"
        fill="rgba(255, 198, 39, 0.10)"
      />
    </svg>,
    // 4 — Team: clustered circles (people)
    <svg key="team" viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <circle cx="120" cy="180" r="48" fill="rgba(255, 198, 39, 0.16)" />
      <circle cx="220" cy="140" r="58" fill="rgba(255, 198, 39, 0.14)" />
      <circle cx="320" cy="190" r="48" fill="rgba(255, 198, 39, 0.16)" />
      <circle cx="220" cy="260" r="42" fill="rgba(255, 198, 39, 0.10)" />
    </svg>,
    // 5 — Contact: diagonal lines
    <svg key="contact" viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <line x1="0" y1="100" x2="300" y2="400" stroke="rgba(255, 198, 39, 0.20)" strokeWidth="30" />
      <line x1="100" y1="0" x2="400" y2="300" stroke="rgba(255, 198, 39, 0.14)" strokeWidth="25" />
      <line x1="200" y1="0" x2="400" y2="200" stroke="rgba(255, 198, 39, 0.10)" strokeWidth="20" />
    </svg>,
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
    >
      <div className="h-2/3 w-2/3 max-w-2xl">{shapes[index]}</div>
    </motion.div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Compact nav after a small scroll — toggles the global --nav-h CSS variable
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-compact', isScrolled);
    return () => document.body.classList.remove('nav-compact');
  }, [isScrolled]);

  // Escape closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setHoveredIdx(null);
  };

  return (
    <>
      {/* Persistent top header bar — compacts on scroll */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] h-[var(--nav-h)] transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        )}
      >
        <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            aria-label="Home — Academic AI Solutions"
            className="flex items-center gap-2 sm:gap-3"
          >
            <Logo
              className={cn(
                'transition-all duration-300',
                isScrolled ? 'h-9 w-9' : 'h-12 w-12'
              )}
            />
            <div className="flex flex-col leading-tight">
              <span className="whitespace-nowrap text-xs font-bold text-foreground transition-all duration-300 sm:text-sm">
                Academic AI Solutions
              </span>
              <span
                className={cn(
                  'hidden overflow-hidden whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 sm:block',
                  isScrolled ? 'max-h-0 opacity-0' : 'max-h-4 opacity-100'
                )}
              >
                Institutional Intelligence
              </span>
            </div>
          </a>

          {/* Right group: inline section links (desktop) + MENU button */}
          <div className="flex items-center gap-7">
            <div className="hidden lg:flex items-center gap-1">
              {INLINE_NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className={cn(
                      'whitespace-nowrap rounded-sm px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-150',
                      isActive
                        ? 'bg-primary text-accent'
                        : 'text-foreground/70 hover:bg-foreground hover:text-accent'
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="group flex items-center gap-3"
            >
              <span
                className={cn(
                  'font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 group-hover:text-primary',
                  isScrolled ? 'text-xs' : 'text-sm'
                )}
              >
                Menu
              </span>
              <Menu
                className={cn(
                  'text-foreground transition-all duration-300 group-hover:text-primary',
                  isScrolled ? 'h-4 w-4' : 'h-5 w-5'
                )}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Backdrop fade */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel slides in from the right */}
            <motion.div
              className="relative ml-auto h-full w-full md:w-2/3 lg:w-3/5 bg-primary text-primary-foreground overflow-hidden"
              variants={{
                closed: { x: '100%' },
                open: { x: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.65, 0.05, 0, 1] }}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-6 right-6 z-20 group flex items-center gap-3"
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent transition-opacity group-hover:opacity-80">
                  Close
                </span>
                <X className="h-5 w-5 text-accent transition-transform group-hover:rotate-90" />
              </button>

              {/* Hover-driven background shape */}
              <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence mode="wait">
                  {hoveredIdx !== null && (
                    <BackgroundShape key={hoveredIdx} index={hoveredIdx} />
                  )}
                </AnimatePresence>
              </div>

              {/* Menu items */}
              <motion.ul
                className="relative z-10 flex h-full flex-col justify-center gap-2 px-12 lg:px-20"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
                }}
              >
                {NAV_ITEMS.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  const isDimmed = hoveredIdx !== null && hoveredIdx !== i;
                  return (
                    <motion.li
                      key={item.id}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      variants={{
                        hidden: { y: 60, opacity: 0, rotate: 6 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          rotate: 0,
                          transition: { duration: 0.6, ease: 'easeOut' },
                        },
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelect(item.path)}
                        className={cn(
                          'group flex items-center gap-6 text-left transition-opacity duration-300',
                          isDimmed && 'opacity-30'
                        )}
                      >
                        <span
                          className={cn(
                            'h-1 bg-accent transition-all duration-300',
                            isActive ? 'w-12 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100'
                          )}
                        />
                        <span className="text-4xl font-bold uppercase tracking-tight text-accent md:text-5xl lg:text-6xl">
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Footer microcopy in the panel */}
              <div className="absolute bottom-8 left-12 lg:left-20 right-12 lg:right-20 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                <span>Academic AI Solutions</span>
                <a
                  href="mailto:admin@academicaisolutions.com"
                  className="text-accent transition-opacity hover:opacity-80"
                >
                  admin@academicaisolutions.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
