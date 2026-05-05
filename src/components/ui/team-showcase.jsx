import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram, Mail, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Distribute members across N columns row-major so visual order matches list order.
const distribute = (members, columns) =>
  Array.from({ length: columns }, (_, c) =>
    members.filter((_, i) => i % columns === c)
  );

const TeamShowcase = ({ members = [] }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const normalized = members.map((m, i) => ({
    id: m.id ?? slugify(m.name) ?? `m-${i}`,
    name: m.name,
    role: m.role ?? m.title ?? '',
    image: m.image ?? null,
    social: m.social ?? {},
  }));

  // Responsive column counts via three pre-distributed grids; we render one per breakpoint.
  // Tailwind can't conditionally swap distribute() output, so we render all three and toggle visibility.
  const cols6 = distribute(normalized, 6);
  const cols4 = distribute(normalized, 4);
  const cols3 = distribute(normalized, 3);

  return (
    <div className="flex w-full select-none flex-col gap-10 lg:flex-row lg:gap-12">
      {/* Photo grid — 3 responsive variants */}
      <div className="flex-shrink-0">
        <PhotoGrid columns={cols3} className="flex lg:hidden md:hidden" hoveredId={hoveredId} onHover={setHoveredId} sizeClass="h-[110px] w-[100px] sm:h-[125px] sm:w-[115px]" />
        <PhotoGrid columns={cols4} className="hidden md:flex lg:hidden" hoveredId={hoveredId} onHover={setHoveredId} sizeClass="h-[120px] w-[110px]" />
        <PhotoGrid columns={cols6} className="hidden lg:flex" hoveredId={hoveredId} onHover={setHoveredId} sizeClass="h-[110px] w-[95px] xl:h-[120px] xl:w-[105px]" />
      </div>

      {/* Member name list — responsive 1 / 2 / 3 columns */}
      <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {normalized.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
};

/* Asymmetric photo grid — even-index columns offset down to keep the "fan" feel */
const PhotoGrid = ({ columns, className, hoveredId, onHover, sizeClass }) => (
  <div className={cn('gap-2 md:gap-3', className)}>
    {columns.map((col, ci) => (
      <div
        key={ci}
        className={cn(
          'flex flex-col gap-2 md:gap-3',
          ci % 2 === 1 && 'mt-6 md:mt-8'
        )}
      >
        {col.map((member) => (
          <PhotoCard
            key={member.id}
            member={member}
            sizeClass={sizeClass}
            hoveredId={hoveredId}
            onHover={onHover}
          />
        ))}
      </div>
    ))}
  </div>
);

const PhotoCard = ({ member, sizeClass, hoveredId, onHover }) => {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label={member.name}
      className={cn(
        'overflow-hidden rounded-xl flex-shrink-0 transition-opacity duration-300 cursor-default',
        sizeClass,
        isDimmed ? 'opacity-60' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-[filter] duration-500"
          style={{
            filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
          }}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-muted transition-colors duration-300"
          style={{ filter: isActive ? 'none' : 'grayscale(1) brightness(0.92)' }}
        >
          <User className="h-1/2 w-1/2 text-muted-foreground" aria-hidden="true" />
        </div>
      )}
    </button>
  );
};

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  email: Mail,
};

const buildHref = (platform, value) =>
  platform === 'email' && !value.startsWith('mailto:') ? `mailto:${value}` : value;

const MemberRow = ({ member, hoveredId, onHover }) => {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const socialEntries = Object.entries(member.social).filter(([, v]) => Boolean(v));
  const hasSocial = socialEntries.length > 0;

  return (
    <div
      className={cn(
        'group cursor-default transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(member.id)}
      onBlur={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'h-3 flex-shrink-0 rounded-[5px] transition-all duration-300',
            isActive ? 'w-5 bg-primary' : 'w-4 bg-foreground/25'
          )}
        />
        <span
          className={cn(
            'text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[17px]',
            isActive ? 'text-foreground' : 'text-foreground/80'
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              'ml-1 flex items-center gap-1.5 transition-all duration-200',
              isActive
                ? 'translate-x-0 opacity-100'
                : 'pointer-events-none -translate-x-2 opacity-0'
            )}
          >
            {socialEntries.map(([platform, value]) => {
              const Icon = SOCIAL_ICONS[platform];
              if (!Icon) return null;
              return (
                <a
                  key={platform}
                  href={buildHref(platform, value)}
                  target={platform === 'email' ? undefined : '_blank'}
                  rel={platform === 'email' ? undefined : 'noopener noreferrer'}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${platform} for ${member.name}`}
                  title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  className="rounded p-1 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-foreground/10 hover:text-primary"
                >
                  <Icon size={12} />
                </a>
              );
            })}
          </div>
        )}
      </div>

      <p className="mt-1.5 pl-[27px] text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {member.role}
      </p>
    </div>
  );
};

export { TeamShowcase };
export default TeamShowcase;
