import React from 'react';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Flat team grid for the homepage closing section.
// Image-top + name + title stacked below; hover saturates grayscale and lifts the card.
// Each card links to /team for the rich showcase view.
const TeamGrid = ({ members = [], className, href = '/team' }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
        className
      )}
    >
      {members.map((member) => (
        <a
          key={member.name}
          href={href}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${member.name} — ${member.title}`}
        >
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted transition-transform duration-300 group-hover:-translate-y-1">
            {member.image ? (
              <img
                src={member.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
                <User className="h-1/3 w-1/3 text-muted-foreground" />
              </div>
            )}
          </div>
          <h3 className="mt-3 text-sm font-semibold leading-tight tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
            {member.name}
          </h3>
          <p className="mt-1 text-xs leading-snug text-muted-foreground">{member.title}</p>
        </a>
      ))}
    </div>
  );
};

export { TeamGrid };
export default TeamGrid;
