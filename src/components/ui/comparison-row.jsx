import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ComparisonTable = ({ rows, className }) => (
  <div
    className={cn(
      'overflow-hidden rounded-xl border border-border bg-card shadow-sm',
      className
    )}
  >
    {/* Column headers — hidden on mobile, visible md+ */}
    <div className="hidden grid-cols-12 gap-4 border-b border-border bg-secondary/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground md:grid">
      <div className="col-span-3">Structure</div>
      <div className="col-span-3">Best For</div>
      <div className="col-span-5">Key Terms</div>
      <div className="col-span-1 text-right">Action</div>
    </div>

    {rows.map((row, i) => (
      <ComparisonRow key={row.label} row={row} index={i} />
    ))}
  </div>
);

const ComparisonRow = ({ row, index }) => {
  const isFeatured = Boolean(row.badge);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'grid grid-cols-1 gap-4 border-b border-border px-6 py-6 transition-colors last:border-b-0 md:grid-cols-12 md:items-center md:py-5',
        index % 2 === 1 && 'bg-secondary/30',
        isFeatured && 'border-l-4 border-l-accent'
      )}
    >
      <div className="md:col-span-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-foreground">{row.label}</h3>
          {row.badge && (
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
              {row.badge}
            </span>
          )}
        </div>
      </div>
      <div className="text-sm text-muted-foreground md:col-span-3">
        {row.audience}
      </div>
      <div className="text-sm leading-relaxed text-foreground/80 md:col-span-5">
        {row.terms}
      </div>
      <div className="md:col-span-1 md:text-right">
        {row.actionHref && (
          <a
            href={row.actionHref}
            className="text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
          >
            {row.actionLabel || 'Learn'} →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export { ComparisonTable };
