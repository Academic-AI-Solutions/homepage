import React from 'react';
import { StickyFooter } from '@/components/ui/sticky-footer';

const LINK_GROUPS = [
  {
    label: 'Product',
    links: [
      { title: 'The Platform', href: '/platform' },
      { title: 'The Market', href: '/#market' },
      { title: 'Problems We Fix', href: '/#problems' },
      { title: 'Patent Portfolio', href: '/#patent' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'Why AAS', href: '/why-aas' },
      { title: 'The Future of Academics', href: '/future' },
      { title: 'Team', href: '/team' },
      { title: 'Licensing & Partners', href: '/licensing' },
      { title: 'Financial Impact', href: '/financial-impact' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms of Service', href: '#' },
      { title: 'Patent Disclosures', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <StickyFooter
      brand={
        <div className="flex items-center gap-3">
          <img
            src="/logos/logo-icon.gif"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 rounded-md object-contain"
          />
          <span className="text-base font-bold tracking-tight text-foreground">
            Academic AI Solutions
          </span>
        </div>
      }
      tagline="The patent-secured AI operating system for higher education."
      linkGroups={LINK_GROUPS}
      legal="© 2026 Academic AI Solutions LLC. All Rights Reserved. Protected by patents, pending applications, and trade secret law. Proprietary and patent-claimed technology under full IP protection."
    />
  );
};

export default Footer;
