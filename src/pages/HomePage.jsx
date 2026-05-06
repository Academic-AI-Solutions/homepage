import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Users, Briefcase,
  Plug, Building2, Wrench,
} from 'lucide-react';
import { HeroSection } from '@/components/ui/hero-section';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import IntelligentDataBento from '@/components/ui/intelligent-data-bento';

const HERO_SLIDESHOW = [
  // Trnavska Univerzita campus exterior — warm brick and greenery
  'https://images.unsplash.com/photo-1686829613628-3e4ebe6f27e7?w=1920&q=80&auto=format',
  // University CS lab — rows of monitors
  'https://images.unsplash.com/photo-1643199187247-b3b6009bf0bb?w=1920&q=80&auto=format',
  // Robotics lab — white robotic arm closeup
  'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&q=80&auto=format',
  // Data science / coding workstation — dual monitors
  'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1920&q=80&auto=format',
  // Modern academic interior — curved glass + reflective floor
  'https://images.unsplash.com/photo-1771911650735-b471e85e8b17?w=1920&q=80&auto=format',
  // Engineering / maker bench — Arduino + circuitry
  'https://images.unsplash.com/photo-1649959265391-8a1de884248a?w=1920&q=80&auto=format',
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
      <section id="home" className="md:sticky md:top-[var(--nav-h)] h-[calc(100vh-var(--nav-h))] z-0">
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
                      />
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          }
        />
      </section>


      {/* ==================== SECTION 3: CORE PRODUCTS ==================== */}
      <section id="products" className="dark md:sticky md:top-[var(--nav-h)] z-20 flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-gradient-to-br from-background to-background">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            className="mb-6"
            title={<>Core <span className="text-accent">Products</span></>}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div onClick={() => navigate('/platform')} className="cursor-pointer">
              <ProductCard
                icon={<Users className="text-primary" size={40} />}
                title="The Personal Student Assistant"
                description="Unified intelligence for academic planning, proactive support, career integration, and campus engagement. Personalized guidance for all demographics, including first-generation and online students. Event discovery, group coordination, and activity recommendations that drive connection and belonging."
                delay={0}
                previewPalette="gold"
                previewIcon={<Users className="text-accent" size={48} />}
              />
            </div>
            <div onClick={() => navigate('/platform')} className="cursor-pointer">
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

      {/* ==================== SECTION 4: INTELLIGENT DATA & MAPPING ==================== */}
      <section id="data" className="relative z-30 flex flex-col justify-start py-12 md:py-24 bg-gradient-to-b from-secondary to-background">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Intelligent <span className="text-primary">Data &amp; Mapping</span></>}
            subtitle="Campus Digital Twin — a living digital replica of your campus operating in real time."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <IntelligentDataBento />
          </motion.div>
          <motion.p
            {...fadeInUp}
            className="text-primary italic text-lg"
          >
            Intelligence that grows with your institution — continuously learning, continuously improving.
          </motion.p>
        </div>
      </section>

      {/* ==================== SECTION 5: SYSTEM & APP INTEGRATIONS ==================== */}
      <section id="integrations" className="dark md:sticky md:top-[var(--nav-h)] z-40 flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-gradient-to-br from-background to-background">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>System &amp; App <span className="text-accent">Integrations</span></>}
            subtitle="No rip-and-replace. No migration. Just amplification."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: <Plug className="text-accent" size={48} />,
                title: 'Pre-Built Connectors',
                desc: 'SIS \u00B7 LMS \u00B7 CRM \u00B7 ERP \u00B7 Housing \u00B7 Dining \u00B7 Financial Aid \u00B7 Career Services \u00B7 Events \u00B7 Athletics \u00B7 Parking \u00B7 Transportation \u00B7 Health Services \u00B7 Campus Safety \u00B7 Payment Systems \u00B7 Marketplace'
              },
              {
                icon: <Building2 className="text-accent" size={48} />,
                title: 'Legacy Compatible',
                desc: 'Designed to work with campus infrastructure that\'s been in place for decades'
              },
              {
                icon: <Wrench className="text-accent" size={48} />,
                title: 'Custom Builds',
                desc: 'Tailored integrations for institution-specific tools and workflows unique to your campus'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center transition-all"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-accent/15 p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            {...fadeInUp}
            className="text-white/80 text-lg"
          >
            AAS doesn't ask you to start over. It makes what you already have better.
          </motion.p>
        </div>
      </section>

      {/* ==================== SECTION 5: ENTERPRISE VALIDATED ==================== */}
      <section id="enterprise" className="md:sticky md:top-[var(--nav-h)] z-50 flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-muted">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Enterprise <span className="text-primary">Validated</span></>}
          />
          <motion.div
            {...fadeInUp}
            className="max-w-4xl"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The same AI infrastructure principles behind AAS have been proven at enterprise scale in one of the most demanding experience environments in the world — orchestrating real-time personalization, transaction coordination, and operational intelligence across complex, multi-venue operations.
            </p>
            <p className="text-xl font-bold leading-relaxed">
              <span className="text-primary">Every semester of institutional data compounds into intelligence that competitors cannot purchase, replicate, or shortcut.</span>{' '}
              <span className="text-gray-800">The institutions that deploy first build advantages that widen over time.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== SECTION 6: PATENT PORTFOLIO ==================== */}
      <section id="patent" className="dark md:sticky md:top-[var(--nav-h)] z-[60] flex md:min-h-[calc(100vh-var(--nav-h))] flex-col justify-start py-12 md:py-24 bg-gradient-to-br from-background to-background">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <SectionHeader
            title={<>Powered by a <span className="text-accent">Proprietary Patent Portfolio</span></>}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-6"
          >
            <p className="text-xl text-white/90 leading-relaxed">
              Built on patent-secured{' '}
              <span className="text-accent font-semibold">Multi-Agent Coordination Protocol</span> and{' '}
              <span className="text-accent font-semibold">Institutional Memory Architecture</span> with advanced IP protection spanning higher education, hospitality, events, and healthcare.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Our trade secret protections cover proprietary algorithms, agent coordination protocols, training methodologies, and integration techniques — representing years of R&amp;D investment that cannot be replicated or reverse-engineered.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Purpose-built for universities from day one. Not retrofitted enterprise software. AAS holds the only proprietary and patent-claimed institutional AI architecture in higher education — and we're prepared to defend it.
            </p>
          </motion.div>
        </div>
      </section>

      </div>
    </>
  );
};

export default HomePage;
