import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const DEFAULT_CHARACTERS = '.,:;-*#';
const FONT_SIZE = 16;
const CHAR_WIDTH = 10;
const CHAR_HEIGHT = 20;

const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const onChange = (e) => setPrefersReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return prefersReduced;
};

const useInViewport = (ref) => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px', threshold: 0 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
};

const hexToRgb = (hex) => {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const expanded = hex.replace(shorthand, (_m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expanded);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
};

const interpolateColor = (s, e, f) =>
  `rgb(${Math.round(s.r + (e.r - s.r) * f)}, ${Math.round(s.g + (e.g - s.g) * f)}, ${Math.round(
    s.b + (e.b - s.b) * f
  )})`;

const LetterGlitch = ({
  glitchColors,
  glitchSpeed = 60,
  smooth = true,
  characters = DEFAULT_CHARACTERS,
  active = true,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    context.current = canvas.getContext('2d');

    const lettersAndSymbols = Array.from(characters);
    const getRandomChar = () =>
      lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
    const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

    const calculateGrid = (w, h) => ({
      columns: Math.ceil(w / CHAR_WIDTH),
      rows: Math.ceil(h / CHAR_HEIGHT),
    });

    const initializeLetters = (columns, rows) => {
      grid.current = { columns, rows };
      letters.current = Array.from({ length: columns * rows }, () => ({
        char: getRandomChar(),
        color: getRandomColor(),
        targetColor: getRandomColor(),
        colorProgress: 1,
      }));
    };

    const drawLetters = () => {
      if (!context.current) return;
      const ctx = context.current;
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.textBaseline = 'top';
      letters.current.forEach((letter, i) => {
        const x = (i % grid.current.columns) * CHAR_WIDTH;
        const y = Math.floor(i / grid.current.columns) * CHAR_HEIGHT;
        ctx.fillStyle = letter.color;
        ctx.fillText(letter.char, x, y);
      });
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      if (context.current) context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      const { columns, rows } = calculateGrid(rect.width, rect.height);
      initializeLetters(columns, rows);
      drawLetters();
    };

    const updateLetters = () => {
      const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
      for (let i = 0; i < updateCount; i++) {
        const idx = Math.floor(Math.random() * letters.current.length);
        if (!letters.current[idx]) continue;
        letters.current[idx].char = getRandomChar();
        letters.current[idx].targetColor = getRandomColor();
        if (!smooth) {
          letters.current[idx].color = letters.current[idx].targetColor;
          letters.current[idx].colorProgress = 1;
        } else {
          letters.current[idx].colorProgress = 0;
        }
      }
    };

    const handleSmooth = () => {
      let redraw = false;
      letters.current.forEach((l) => {
        if (l.colorProgress < 1) {
          l.colorProgress += 0.05;
          if (l.colorProgress > 1) l.colorProgress = 1;
          const s = hexToRgb(l.color);
          const e = hexToRgb(l.targetColor);
          if (s && e) {
            l.color = interpolateColor(s, e, l.colorProgress);
            redraw = true;
          }
        }
      });
      if (redraw) drawLetters();
    };

    const tick = () => {
      const now = Date.now();
      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = now;
      }
      if (smooth) handleSmooth();
      animationRef.current = requestAnimationFrame(tick);
    };

    resizeCanvas();
    if (active) tick();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        if (active) tick();
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [glitchSpeed, smooth, characters, glitchColors, active]);

  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_100%)]" />
    </div>
  );
};

const FallbackCard = ({
  palette = 'gold',
  message = 'Preview not available',
  showIcon = true,
  icon,
  className,
}) => {
  const wrapperRef = useRef(null);
  const inView = useInViewport(wrapperRef);
  const reducedMotion = usePrefersReducedMotion();

  const goldDominant = ['#FFC627', '#E6B322', '#F0C04A', '#8C1D40', '#3D0024'];
  const maroonDominant = ['#8C1D40', '#6A0F30', '#3D0024', '#FFC627', '#E6B322'];
  const glitchColors = palette === 'maroon' ? maroonDominant : goldDominant;

  const radial =
    palette === 'maroon'
      ? 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(140, 29, 64, 0.4), transparent 70%), #3D0024'
      : 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 198, 39, 0.25), transparent 70%), #3D0024';

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border/40 shadow-inner',
        className
      )}
    >
      <div className="absolute inset-0 z-0" style={{ background: radial }} />

      {!reducedMotion && (
        <div className="absolute inset-0 z-10 opacity-25">
          <LetterGlitch
            glitchColors={glitchColors}
            characters={DEFAULT_CHARACTERS}
            active={inView}
          />
        </div>
      )}

      <div className="relative z-20 flex flex-col items-center justify-center p-4 text-primary-foreground">
        {showIcon && (
          icon ? (
            <div className="mb-3 flex h-12 w-12 items-center justify-center">{icon}</div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2 h-8 w-8 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="20" x2="16" y2="20" />
            </svg>
          )
        )}
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-center opacity-90">
          {message}
        </p>
      </div>
    </div>
  );
};

export default FallbackCard;
