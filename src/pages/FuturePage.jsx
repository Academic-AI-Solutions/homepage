import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Network, CreditCard, Cpu, BookOpen } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';

const architecturePillars = [
  {
    icon: Sparkles,
    title: 'The Persistent Intelligent Companion',
    body: 'A persistent intelligent companion that understands every student — across every credential, transition, and connection.',
  },
  {
    icon: Network,
    title: 'The Unified Data Fabric',
    body: 'A unified data fabric that finally lets institutions act as one, instead of dozens of disconnected systems.',
  },
  {
    icon: CreditCard,
    title: 'The Economic Infrastructure',
    body: 'Economic infrastructure that returns value to the institutions creating it, rather than letting it flow outside.',
  },
  {
    icon: Cpu,
    title: 'Autonomous Campus Coordination',
    body: 'Autonomous coordination of campus operations across physical and digital boundaries.',
  },
  {
    icon: BookOpen,
    title: 'The Lifelong Learner Record',
    body: 'A lifelong learner record that travels with the student across institutions, jurisdictions, and life stages.',
  },
];

const FuturePage = () => {
  return (
    <>
      <Helmet>
        <title>The Future of Academics Starts Here — Academic AI Solutions</title>
        <meta
          name="description"
          content="The next era of higher education will be built by redesigning the coordination layer underneath everything. AAS is building — and protecting — that foundational architecture."
        />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
        <PageHero
          id="future-hero"
          className="relative min-h-[calc(100vh-var(--nav-h))] z-0"
          kicker="The Future Starts Here"
          title={
            <>
              The Future of Academics <span className="text-primary">Starts Here</span>
            </>
          }
          subtitle="The future of higher education will not be built by patching today's infrastructure with one more tool. It will be built by the institutions and partners willing to redesign the coordination layer underneath everything."
          callToAction={{ text: 'SEE WHY AAS →', href: '/why-aas' }}
          image="/hero/ai3.jpg"
        />

        {/* Section: Building the layer — white */}
        <section id="future-vision" className="relative z-10 bg-background py-20 md:py-28">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Building the layer
              </p>
              <h2 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Academic AI Solutions is building that layer.
              </h2>
              <div className="mt-6 h-1 w-20 bg-accent" />
              <p className="mt-8 text-lg leading-relaxed text-foreground/80 md:text-xl">
                We are reshaping the college experience from the inside out — from the moment a student first considers an institution through every credential, every transition, every connection they build across a lifetime of learning and contribution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section: Architecture the patents protect — cream */}
        <section id="future-architecture" className="relative z-20 bg-secondary py-20 md:py-28">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
            <SectionHeader
              title={<>The Architecture Our <span className="text-primary">Patents Protect</span></>}
              subtitle="Our patent filings cover the architecture that makes this future possible."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {architecturePillars.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <div className="mb-5 inline-flex rounded-full bg-primary/10 p-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Closing CTA — dark */}
        <section id="future-cta" className="dark relative z-30 bg-gradient-to-br from-background to-background py-24 md:py-32">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                This is not incremental improvement.
              </h2>
              <div className="mt-6 h-1 w-20 bg-accent" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                It is the foundational architecture of what higher education becomes next. We are building it. We are protecting it. We are partnering with the institutions ready to lead it.
              </p>
              <p className="mt-6 text-2xl font-bold text-foreground md:text-3xl">
                The next era of academics starts with <span className="text-accent">AAS</span>.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
                >
                  Partner With AAS →
                </a>
                <CTAButton to="/why-aas" variant="secondary">
                  See Why AAS
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FuturePage;
