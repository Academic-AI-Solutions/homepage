import React from 'react';
import { cn } from '@/lib/utils';

// Image-led integration cards for the System & App Integrations section.
// Renders dark-theme by default (cream text on maroon backdrop). Each card:
// hero image (16:10) + title + description, with subtle hover lift.
const IntegrationFeatureCards = ({ items = [], className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8', className)}>
      {items.map((item) => (
        <article
          key={item.title}
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <img
              src={item.image}
              srcSet={`${item.image.replace(/&?w=\d+/, '')}&w=800&q=80 800w, ${item.image.replace(/&?w=\d+/, '')}&w=1200&q=80 1200w`}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <h3 className="text-xl font-semibold leading-tight text-foreground">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export { IntegrationFeatureCards };
export default IntegrationFeatureCards;
