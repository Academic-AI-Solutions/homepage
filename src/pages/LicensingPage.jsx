import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { ComparisonTable } from '@/components/ui/comparison-row';
import SectionHeader from '@/components/SectionHeader';

const philosophyPillars = [
  {
    icon: Shield,
    title: 'Patent-Protected Position',
    body: 'Partner with the only patent-secured institutional AI platform purpose-built for higher education.',
  },
  {
    icon: TrendingUp,
    title: 'First-Mover Economics',
    body: 'Early partners lock in preferred terms before scaled deployment shifts the structure of available agreements.',
  },
  {
    icon: Sparkles,
    title: 'Co-Development Influence',
    body: 'Shape the platform roadmap to reflect your institution’s priorities and operational realities.',
  },
];

const partnershipStructures = [
  {
    label: 'Licensing Agreement',
    audience: 'Institutions ready to deploy with predictable terms',
    terms:
      'Exclusive or non-exclusive models for deploying AAS across the institution. Defined-term licenses with optional renewal.',
    actionLabel: 'Discuss',
    actionHref: '/contact',
  },
  {
    label: 'Revenue-Share',
    audience: 'Partners aligning on shared upside from outcomes',
    terms:
      'Royalty-style structures designed for mutual growth — sharing the financial success of transformed campus operations and student outcomes.',
    actionLabel: 'Discuss',
    actionHref: '/contact',
    badge: 'Most flexible',
  },
  {
    label: 'Equity Investment',
    audience: 'Strategic investors and university venture arms',
    terms:
      'Capital partnerships to accelerate innovation, deployment, and national expansion together. Board observer optionality on qualifying rounds.',
    actionLabel: 'Discuss',
    actionHref: '/contact',
  },
  {
    label: 'Grant / Endowment / Research',
    audience: 'Sponsored research, philanthropic, or grant-funded deployments',
    terms:
      'Sponsored research collaborations, philanthropic endowments, and institutional grant partnerships funded through mission-aligned capital — federal, state, foundation, and donor-directed sources.',
    actionLabel: 'Discuss',
    actionHref: '/contact',
  },
];

const whyNowReasons = [
  {
    n: '01',
    title: 'Preferred Economics',
    body: 'Lock in commercial terms set when AAS still has open capacity. Later cohorts of partners will price against deployment scale that no longer needs to discount for early-stage validation.',
  },
  {
    n: '02',
    title: 'Platform Influence',
    body: 'Direct input into the product roadmap. Foundational partners shape integration priorities, data-model decisions, and operational defaults that will persist as the platform scales.',
  },
  {
    n: '03',
    title: 'First-Mover Advantage',
    body: 'Institutional intelligence compounds. Every semester of data deepens the operational moat — partners who deploy first build advantages that widen, not narrow, against their peers.',
  },
];

const LicensingPage = () => {
  return (
    <>
      <Helmet>
        <title>Licensing & Partners — Academic AI Solutions</title>
        <meta
          name="description"
          content="Partner with AAS at the ground floor of institutional AI. Licensing, revenue-share, equity, and research funding structures designed for higher education."
        />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
        <PageHero
          id="lic-hero"
          className="md:sticky md:top-[var(--nav-h)] min-h-[calc(100vh-var(--nav-h))] z-0"
          kicker="Licensing & Partnership"
          title={
            <>
              Partner at the Ground Floor of <span className="text-primary">Institutional AI</span>
            </>
          }
          subtitle="AAS is building toward a national standard in institutional AI — starting with flagship partners and scaling across thousands of institutions. Early partners shape the platform, influence direction, and secure preferred economics from day one."
          callToAction={{ text: 'EXPLORE PARTNERSHIP STRUCTURES →', href: '#structures' }}
          image="https://images.unsplash.com/photo-1771911650735-b471e85e8b17?w=1920&q=80&auto=format"
        />

        {/* Section: Partnership Philosophy — sticky, white bg */}
        <section id="lic-philosophy" className="md:sticky md:top-[var(--nav-h)] z-10 flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-center bg-background py-24">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Why Partner With AAS
              </p>
              <h2 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Structural advantage belongs to <span className="text-primary">early partners</span>.
              </h2>
              <div className="mt-6 h-1 w-20 bg-accent" />
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Higher education AI is a one-time architecture decision. The institutions that engage now help define the operational defaults, integration patterns, and commercial structures that the rest of the market will inherit — and they do so on terms that won't be available again.
              </p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-6"
            >
              {philosophyPillars.map(({ icon: Icon, title, body }) => (
                <motion.li
                  key={title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-foreground">{title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

        {/* Section: Partnership Structures — sticky, cream bg */}
        <section id="structures" className="md:sticky md:top-[var(--nav-h)] z-20 flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-start bg-secondary py-24">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Partnership <span className="text-primary">Structures</span></>}
            subtitle="Four distinct paths into the AAS platform — designed to fit the operational, financial, and governance realities of major research universities."
          />
          <ComparisonTable rows={partnershipStructures} />
          <p className="mt-8 text-xs italic text-muted-foreground">
            Structures may be combined. Hybrid arrangements are common for institutions with mixed funding profiles.
          </p>
        </div>
      </section>

        {/* Section: Why Partner Now — sticky, dark bg */}
        <section id="lic-why-now" className="dark md:sticky md:top-[var(--nav-h)] z-30 flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-start bg-gradient-to-br from-background to-background py-24">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Why Partner <span className="text-accent">Now</span></>}
          />

          <div className="max-w-5xl space-y-12">
            {whyNowReasons.map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-12 items-start gap-6 border-b border-border/30 pb-12 last:border-b-0 last:pb-0"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="text-5xl font-bold text-accent md:text-6xl">{n}</span>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              Start a Partnership Conversation →
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default LicensingPage;
