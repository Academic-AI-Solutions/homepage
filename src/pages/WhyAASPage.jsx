import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Plug, Brain, Layers, HeartHandshake, Users, Clock } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';

const differentiators = [
  {
    icon: Shield,
    title: 'Patent-Protected Architecture',
    body: 'Our IP covers the foundational architecture of integrated institutional AI — protecting our partners’ investment and creating defensible advantage that compounds over time.',
  },
  {
    icon: GraduationCap,
    title: 'Built for Higher Education, Not Adapted to It',
    body: 'Every layer is purpose-built for the regulatory environment, operational complexity, and cultural realities of universities. We did not build a generic tool and pivot. We started here.',
  },
  {
    icon: Plug,
    title: 'Non-Invasive Integration',
    body: 'We work with the systems institutions have already invested in. We do not replace, we coordinate — minimizing risk, preserving prior investment, and accelerating deployment.',
  },
  {
    icon: Brain,
    title: 'Compounding Institutional Intelligence',
    body: 'Every interaction makes the platform smarter about the institution it serves. Years of accumulated knowledge cannot be replicated by late entrants.',
  },
  {
    icon: Layers,
    title: 'Multi-Layer Coverage',
    body: 'From the personal student assistant to the administrative intelligence layer to the autonomous infrastructure layer — the full architecture, not a single point solution.',
  },
  {
    icon: HeartHandshake,
    title: 'Real Partnership, Not Vendor Relationship',
    body: 'We work alongside institutional teams as co-developers, not a vendor delivering a black box. The platform shaped at each institution is shaped by that institution.',
  },
  {
    icon: Users,
    title: 'Built by Operators Who Understand the Mission',
    body: 'Depth in artificial intelligence, enterprise architecture, and the operational realities of institutions — calibrated for real-world impact, not theoretical promise.',
  },
  {
    icon: Clock,
    title: 'Ready When the Window Is Open',
    body: 'The right time to partner with the company defining the next era of academic technology is before that era arrives. That window is now.',
  },
];

const WhyAASPage = () => {
  return (
    <>
      <Helmet>
        <title>Why AAS — Academic AI Solutions</title>
        <meta
          name="description"
          content="Integrated architecture, defensible IP, and a working platform purpose-built for higher education. Anyone can talk about AI — few can deliver. AAS does."
        />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
        <PageHero
          id="why-hero"
          className="relative min-h-[calc(100vh-var(--nav-h))] z-0"
          kicker="Why AAS"
          title={
            <>
              Few Can Deliver. <span className="text-primary">We Do.</span>
            </>
          }
          subtitle="Anyone can talk about AI in higher education right now. Few can deliver integrated architecture, defensible IP, and a working platform. We do."
          callToAction={{ text: 'PARTNER WITH AAS →', href: '/#contact' }}
          image="/hero/ai2.jpg"
        />

        {/* Section: The differentiators — white */}
        <section id="why-reasons" className="relative z-10 bg-background py-20 md:py-28">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
            <SectionHeader
              title={<>Why <span className="text-primary">AAS</span></>}
              subtitle="Eight reasons institutions partner with the only patent-secured AI platform purpose-built for higher education."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {differentiators.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="flex flex-col rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-5 inline-flex self-start rounded-full bg-primary/10 p-4">
                    <Icon className="text-primary" size={26} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-tight text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Closing CTA — dark */}
        <section id="why-cta" className="dark relative z-20 bg-gradient-to-br from-background to-background py-24 md:py-32">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                The window is <span className="text-accent">now</span>.
              </h2>
              <div className="mt-6 h-1 w-20 bg-accent" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                The right time to partner with the company defining the next era of academic technology is before that era arrives. Partner with AAS at the ground floor — and build an advantage that widens with every semester.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
                >
                  Partner With AAS →
                </a>
                <CTAButton to="/licensing" variant="secondary">
                  Explore Partnership Structures
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyAASPage;
