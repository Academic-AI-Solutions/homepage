import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Users, Briefcase,
  LayoutGrid, Clock, LifeBuoy, ClipboardList, Route, Eye, Bot, TrendingDown,
} from 'lucide-react';
import { HeroSection } from '@/components/ui/hero-section';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import StatCounter from '@/components/StatCounter';
import IntegrationFeatureCards from '@/components/ui/integration-feature-cards';
import TeamGrid from '@/components/ui/team-grid';
import { ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/team';

const MARKET_STATS = [
  { prefix: '$', value: 671, suffix: 'B', label: 'U.S. higher-ed market' },
  { value: 5300, suffix: '+', label: 'Institutions' },
  { value: 19.6, suffix: 'M', label: 'Students' },
  { prefix: '$', value: 33, suffix: 'B+', label: 'Annual tech spend' },
  { prefix: '$', value: 25, suffix: 'B+', label: 'AI opportunity / decade' },
  { prefix: '$', value: 250, suffix: 'B+', label: 'Off-campus activity' },
];

const PROBLEMS = [
  { icon: LayoutGrid, title: 'Fragmented student experience', body: 'Housing, dining, academics, financial aid, career services — six different companies inside one institution.' },
  { icon: Clock, title: 'Reactive instead of proactive', body: "Problems get identified after they've happened. Intervention becomes remedial." },
  { icon: LifeBuoy, title: 'Advising capacity at breaking point', body: 'Routine inquiries consume the time that should be reserved for complex cases.' },
  { icon: ClipboardList, title: 'Manual administrative burden', body: 'Duplicate workflows, reconciliation across disconnected systems, reporting overhead.' },
  { icon: Route, title: 'Cross-campus friction', body: 'Students moving between locations or modalities navigate different systems and processes for the same things.' },
  { icon: Eye, title: 'Disconnected institutional intelligence', body: 'Leadership pieces together insight from dozens of separate reports. Patterns visible only across domains are missed entirely.' },
  { icon: Bot, title: 'AI arriving without coordination', body: 'No layer exists to integrate emerging robotics, agents, and intelligent infrastructure into the campus safely or coherently.' },
  { icon: TrendingDown, title: 'Value flowing outside the institution', body: 'Hundreds of millions in student spend move through off-campus channels with zero institutional benefit.' },
];

const INTEGRATION_FEATURES = [
  {
    title: 'Pre-Built Connectors',
    description:
      'SIS · LMS · CRM · ERP · Housing · Dining · Financial Aid · Career Services · Events · Athletics · Parking · Transportation · Health Services · Campus Safety · Payment Systems · Marketplace.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Legacy Compatible',
    description:
      'Designed to work with campus infrastructure that has been in place for decades — without rip-and-replace migration.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Custom Builds',
    description:
      'Tailored integrations for institution-specific tools and workflows unique to your campus, built and maintained by AAS.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop',
  },
];

// Server-room / data-center lights — fits dark Enterprise section
const ENTERPRISE_IMAGE_URL =
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&auto=format&fit=crop';

// Connected-nodes / network mesh — fits light Patent section
const PATENT_IMAGE_URL =
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80&auto=format&fit=crop';

const HERO_SLIDESHOW = [
  // Trnavska Univerzita campus exterior — warm brick and greenery
  'https://images.unsplash.com/photo-1686829613628-3e4ebe6f27e7?w=1920&q=80&auto=format',
  // Robotics lab — white robotic arm closeup
  'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&q=80&auto=format',
  // Data science / coding workstation — dual monitors
  'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1920&q=80&auto=format',
  // Modern academic interior — curved glass + reflective floor
  'https://images.unsplash.com/photo-1771911650735-b471e85e8b17?w=1920&q=80&auto=format',
  // Local AI photos
  '/hero/ai.jpg',
  '/hero/ai2.jpg',
  '/hero/ai3.jpg',
  '/hero/ai4.jpg',
  '/hero/ai5.jpg',
];

const INSTITUTIONS = [
  { name: 'Arizona State University', file: 'asu.png' },
  { name: 'Stanford University', file: 'stanford.png' },
  { name: 'Harvard University', file: 'harvard.png' },
  { name: 'University of Michigan', file: 'michigan.png' },
  { name: 'University of Oregon', file: 'oregon.png' },
  { name: 'University of Texas at Austin', file: 'texas.png' },
  { name: 'Texas A&M University', file: 'texas-am.png' },
  { name: 'University of Virginia', file: 'virginia.png' },
  { name: 'University of California, Davis', file: 'ucdavis.png' },
  { name: 'Auburn University', file: 'auburn.png' },
  { name: 'University of Minnesota', file: 'minnesota.png' },
];

const HomePage = () => {
  const navigate = useNavigate();

  // --- Animation Variants ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Academic AI Solutions - The AI Operating System for Higher Education</title>
        <meta name="description" content="Transforming higher education with a proprietary, patent-secured Institutional Intelligence and Coordination Layer. The only AI operating system purpose-built for universities." />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
      {/* ==================== SECTION 1: HERO (HOME) ==================== */}
      <section id="home" className="md:sticky md:top-[var(--nav-h)] min-h-[calc(100vh-var(--nav-h))] md:min-h-[calc(100dvh-var(--nav-h))] z-0 will-change-transform transform-gpu">
        <HeroSection
          className="min-h-[calc(100vh-var(--nav-h))]"
          title={
            <>
              The AI Operating System
              <br />
              <span className="text-primary">for Higher Education</span>
            </>
          }
          subtitle="A proprietary, patent-secured Institutional Intelligence and Coordination Layer — the only one of its kind in higher education."
          callToAction={{
            text: 'EXPLORE THE PLATFORM →',
            href: '/platform',
          }}
          backgroundImages={HERO_SLIDESHOW}
          signals={[
            { icon: 'Mail', label: 'admin@academicaisolutions.com' },
            { icon: 'ShieldCheck', label: 'Patent-Secured Platform' },
            { icon: 'GraduationCap', label: 'Built for Higher Education' },
          ]}
          belowCta={
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/85 md:text-muted-foreground">
                Built for institutions like these
              </p>
              <div className="relative h-[60px] w-full overflow-hidden">
                <InfiniteSlider
                  className="flex h-full w-full items-center"
                  duration={45}
                  gap={56}
                >
                  {INSTITUTIONS.map((school) => (
                    <div
                      key={school.file}
                      className="flex w-20 items-center justify-center sm:w-28"
                    >
                      <img
                        src={`/institutions/${school.file}`}
                        alt={school.name}
                        className="h-7 w-auto object-contain opacity-90 brightness-0 invert transition-all duration-300 sm:h-9 md:opacity-70 md:grayscale md:invert-0 md:brightness-100 md:hover:opacity-100 md:hover:grayscale-0"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          }
        />
      </section>


      {/* ==================== SECTION: THE MARKET ==================== */}
      <section id="market" className="relative z-[5] py-16 md:py-24 bg-secondary">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>The <span className="text-primary">Market</span></>}
          />
          <div className="max-w-4xl space-y-6">
            <motion.p {...fadeInUp} className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Higher education is a <span className="font-semibold text-primary">$671 billion market</span> spanning 5,300+ institutions and 19.6 million students in the United States. Annual technology spend exceeds $33 billion, with AI emerging as the fastest-growing category and a $25 billion-plus addressable opportunity over the next decade.
            </motion.p>
            <motion.p {...fadeInUp} className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Beyond institutional spend, students generate over <span className="font-semibold text-primary">$250 billion in annual off-campus economic activity</span> that flows entirely outside the institutions serving them. The infrastructure to coordinate it has not existed.
            </motion.p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {MARKET_STATS.map((stat, i) => (
              <StatCounter key={stat.label} {...stat} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION: THE PROBLEMS WE'RE FIXING ==================== */}
      <section id="problems" className="relative z-10 py-16 md:py-24 bg-background">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>The Problems We're <span className="text-primary">Fixing</span></>}
            subtitle="Universities run on infrastructure built piece by piece over decades — hundreds of specialized systems, none designed to work together. AI and autonomous systems are arriving faster than institutions can integrate them, and the gap widens every semester."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PROBLEMS.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeInUp} className="mt-10 max-w-3xl text-lg font-medium text-foreground">
            These are coordination failures. The pieces work. They just don't work together.{' '}
            <span className="text-primary">That is the gap AAS exists to close.</span>
          </motion.p>
        </div>
      </section>


      {/* ==================== SECTION 3: CORE PRODUCTS ==================== */}
      <section id="products" className="dark md:sticky md:top-[var(--nav-h)] z-20 flex min-h-[calc(100vh-var(--nav-h))] md:min-h-[calc(100dvh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-gradient-to-br from-background to-background will-change-transform transform-gpu">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            className="mb-6"
            title={<>Core <span className="text-accent">Products</span></>}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-fr gap-8">
            <div onClick={() => navigate('/platform')} className="cursor-pointer h-full">
              <ProductCard
                icon={<Users className="text-primary" size={40} />}
                title="The Personal Student Assistant"
                description="Unified intelligence for academic planning, proactive support, career integration, and campus engagement. Personalized guidance for all demographics, including first-generation and online students. Event discovery, group coordination, and activity recommendations that drive connection and belonging."
                delay={0}
                previewPalette="gold"
                previewIcon={<Users className="text-accent" size={48} />}
              />
            </div>
            <div onClick={() => navigate('/platform')} className="cursor-pointer h-full">
              <ProductCard
                icon={<Briefcase className="text-primary" size={40} />}
                title="The Administrative Organizer"
                description="A unified operational command center for leadership. Cross-domain coordination for enrollment, student success, facilities, and finance. AI-powered workforce optimization that frees staff from repetitive tasks and puts advisors back in front of students."
                delay={0.2}
                previewPalette="maroon"
                previewIcon={<Briefcase className="text-accent" size={48} />}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ==================== SECTION 5: SYSTEM & APP INTEGRATIONS ==================== */}
      <section id="integrations" className="md:sticky md:top-[var(--nav-h)] z-40 flex min-h-[calc(100vh-var(--nav-h))] md:min-h-[calc(100dvh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-muted will-change-transform transform-gpu">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>System &amp; App <span className="text-primary">Integrations</span></>}
            subtitle="No rip-and-replace. No migration. Just amplification."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <IntegrationFeatureCards items={INTEGRATION_FEATURES} />
          </motion.div>

          <motion.p
            {...fadeInUp}
            className="text-muted-foreground text-lg"
          >
            AAS doesn't ask you to start over. It makes what you already have better.
          </motion.p>
        </div>
      </section>

      {/* ==================== SECTION 5: ENTERPRISE VALIDATED ==================== */}
      <section id="enterprise" className="dark md:sticky md:top-[var(--nav-h)] z-50 flex min-h-[calc(100vh-var(--nav-h))] md:min-h-[calc(100dvh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-gradient-to-br from-background to-background will-change-transform transform-gpu">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Enterprise <span className="text-accent">Validated</span></>}
          />
          <motion.div
            {...fadeInUp}
            className="grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center"
          >
            <div className="max-w-2xl space-y-8">
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                The same AI infrastructure principles behind AAS have been proven at enterprise scale in one of the most demanding experience environments in the world — orchestrating real-time personalization, transaction coordination, and operational intelligence across complex, multi-venue operations.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                <span className="text-accent">Every semester of institutional data compounds into intelligence that competitors cannot purchase, replicate, or shortcut.</span>{' '}
                <span className="text-white">The institutions that deploy first build advantages that widen over time.</span>
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
              <img
                src={ENTERPRISE_IMAGE_URL}
                srcSet={`${ENTERPRISE_IMAGE_URL.replace(/&?w=\d+/, '')}&w=800&q=80 800w, ${ENTERPRISE_IMAGE_URL.replace(/&?w=\d+/, '')}&w=1200&q=80 1200w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SECTION 6: PATENT PORTFOLIO ==================== */}
      <section id="patent" className="md:sticky md:top-[var(--nav-h)] z-[60] flex min-h-[calc(100vh-var(--nav-h))] md:min-h-[calc(100dvh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-muted will-change-transform transform-gpu">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Powered by a <span className="text-primary">Proprietary Patent Portfolio</span></>}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center"
          >
            <div className="max-w-2xl space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Built on patent-secured{' '}
                <span className="text-primary font-semibold">Multi-Agent Coordination Protocol</span> and{' '}
                <span className="text-primary font-semibold">Institutional Memory Architecture</span> with advanced IP protection spanning higher education, hospitality, events, and healthcare.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Our trade secret protections cover proprietary algorithms, agent coordination protocols, training methodologies, and integration techniques — representing years of R&amp;D investment that cannot be replicated or reverse-engineered.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Purpose-built for universities from day one. Not retrofitted enterprise software. AAS holds the only proprietary and patent-claimed institutional AI architecture in higher education — and we're prepared to defend it.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
              <img
                src={PATENT_IMAGE_URL}
                srcSet={`${PATENT_IMAGE_URL.replace(/&?w=\d+/, '')}&w=800&q=80 800w, ${PATENT_IMAGE_URL.replace(/&?w=\d+/, '')}&w=1200&q=80 1200w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SECTION 7: THE TEAM ==================== */}
      <section id="team" className="dark relative z-[70] flex flex-col justify-start py-12 md:py-20 bg-background">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>The <span className="text-accent">Team</span></>}
            subtitle="Education operators, AI engineers, enterprise builders, and patent attorneys — together since day one."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <TeamGrid members={TEAM_MEMBERS} />
          </motion.div>
          <motion.div {...fadeInUp}>
            <a
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary/80"
            >
              View full team
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      </div>
    </>
  );
};

export default HomePage;
