import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Users, Briefcase, Network, Database, Cpu,
  Mail, Building, User, FileText,
  Map, Activity, Brain, ShieldAlert, Plug, Building2, Wrench
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { HeroSection } from '@/components/ui/hero-section';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import ValueCard from '@/components/ValueCard';

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
  const { toast } = useToast();
  const navigate = useNavigate();

  // --- Contact Form Logic ---
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: '',
    inquiryType: 'Deployment'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.institution.trim()) newErrors.institution = 'Institution is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: `Thank you ${formData.name}! Your inquiry has been sent to admin@academicaisolutions.com. We'll respond within 24-48 hours.`
      });
      setFormData({
        name: '',
        institution: '',
        role: '',
        inquiryType: 'Deployment'
      });
      setIsSubmitting(false);
    }, 1500);
  };

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

      {/* ==================== SECTION 1: HERO (HOME) ==================== */}
      <section id="home" className="pt-16">
        <HeroSection
          className="min-h-[calc(100vh-4rem)]"
          logo={{
            url: '/logos/logo.svg',
            alt: 'Academic AI Solutions',
            text: 'Academic AI Solutions',
          }}
          slogan="Institutional Intelligence"
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
            href: '#platform',
          }}
          backgroundImages={HERO_SLIDESHOW}
          signals={[
            { icon: 'Mail', label: 'admin@academicaisolutions.com' },
            { icon: 'ShieldCheck', label: 'Patent-Secured Platform' },
            { icon: 'GraduationCap', label: 'Built for Higher Education' },
          ]}
          belowCta={
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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
                      className="flex w-28 items-center justify-center"
                    >
                      <img
                        src={`/institutions/${school.file}`}
                        alt={school.name}
                        className="h-9 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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

      {/* ==================== SECTION 2: ARCHITECTURE ==================== */}
      <section id="platform" className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            {...fadeInUp}
            className="max-w-3xl mx-auto mb-16 text-center text-lg leading-relaxed text-gray-700 md:text-xl"
          >
            Higher education is at a turning point. Enrollment is declining,
            student expectations are rising, and institutions that don't evolve
            risk being left behind.{' '}
            <span className="font-semibold text-primary">
              AAS exists to make sure that doesn't happen.
            </span>
          </motion.p>
          <SectionHeader
            title="The Architecture"
            subtitle="A four-layer system that preserves existing investments in Banner, Canvas, Workday, and beyond"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Database className="text-primary" size={32} />, title: 'Data Layer', desc: 'Connects to existing systems' },
              { icon: <Network className="text-primary" size={32} />, title: 'Integration Layer', desc: 'Unified data access' },
              { icon: <Cpu className="text-primary" size={32} />, title: 'Intelligence Layer', desc: 'AI-powered coordination' },
              { icon: <Shield className="text-primary" size={32} />, title: 'Interface Layer', desc: 'Personalized experiences' }
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100 text-center transition-all"
              >
                <div className="flex justify-center mb-4">{layer.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                <p className="text-gray-600 text-sm">{layer.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== SECTION 3: CORE PRODUCTS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Core Products"
            subtitle="Two integrated solutions powering institutional transformation"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div onClick={() => navigate('/platform')} className="cursor-pointer">
              <ProductCard
                icon={<Users className="text-primary" size={40} />}
                title="The Personal Student Assistant"
                description="Unified intelligence for academic planning, proactive support, career integration, and campus engagement. Personalized guidance for all demographics, including first-generation and online students. Event discovery, group coordination, and activity recommendations that drive connection and belonging."
                delay={0}
              />
            </div>
            <div onClick={() => navigate('/platform')} className="cursor-pointer">
              <ProductCard
                icon={<Briefcase className="text-primary" size={40} />}
                title="The Administrative Organizer"
                description="A unified operational command center for leadership. Cross-domain coordination for enrollment, student success, facilities, and finance. AI-powered workforce optimization that frees staff from repetitive tasks and puts advisors back in front of students."
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: INTELLIGENT DATA & MAPPING ==================== */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Intelligent Data & Mapping"
            subtitle="Campus Digital Twin — A living digital replica of your campus operating in real time"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: <Map className="text-primary" size={32} />,
                title: 'Campus Digital Twin',
                desc: 'A living digital replica of your campus operating in real time'
              },
              {
                icon: <Activity className="text-primary" size={32} />,
                title: 'Campus Flow & Mapping',
                desc: 'Student movement, facility usage, traffic patterns, and space utilization visualized'
              },
              {
                icon: <Brain className="text-primary" size={32} />,
                title: 'Predictive Intelligence',
                desc: 'Retention risk, enrollment trends, and resource demand surfaced before they become problems'
              },
              {
                icon: <ShieldAlert className="text-primary" size={32} />,
                title: 'Safety & Risk Monitoring',
                desc: 'Real-time campus awareness, incident tracking, and liability reduction'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100 text-center transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            {...fadeInUp}
            className="text-center text-primary italic text-lg"
          >
            Intelligence that grows with your institution — continuously learning, continuously improving.
          </motion.p>
        </div>
      </section>

      {/* ==================== SECTION 5: SYSTEM & APP INTEGRATIONS ==================== */}
      <section className="dark py-24 bg-gradient-to-br from-background to-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              System & App Integrations
            </h2>
            <div className="w-24 h-1 bg-accent mb-6 mx-auto" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              No rip-and-replace. No migration. Just amplification.
            </p>
          </motion.div>

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
            className="text-center text-white/80 text-lg"
          >
            AAS doesn't ask you to start over. It makes what you already have better.
          </motion.p>
        </div>
      </section>

      {/* ==================== SECTION 6: PATENT PORTFOLIO ==================== */}
      <section className="dark py-24 bg-gradient-to-br from-background to-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl text-center border border-white/10"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/15 rounded-full">
                <Cpu className="text-accent" size={48} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Powered by a Proprietary Patent Portfolio
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              Built on patent-secured{' '}
              <span className="text-accent font-semibold">Multi-Agent Coordination Protocol</span> and{' '}
              <span className="text-accent font-semibold">Institutional Memory Architecture</span> with advanced IP protection spanning higher education, hospitality, events, and healthcare.
            </p>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              Our trade secret protections cover proprietary algorithms, agent coordination protocols, training methodologies, and integration techniques — representing years of R&D investment that cannot be replicated or reverse-engineered.
            </p>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Purpose-built for universities from day one. Not retrofitted enterprise software. AAS holds the only proprietary and patent-claimed institutional AI architecture in higher education — and we're prepared to defend it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== SECTION 7: ENTERPRISE VALIDATED ==================== */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Enterprise Validated" />
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
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

      {/* ==================== SECTION 8: TEAM ==================== */}
      <section id="team" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Team Behind AAS"
            subtitle="Built by People Who Know Both Worlds"
          />

          <motion.p
            {...fadeInUp}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Education operators. AI engineers. Enterprise builders. Our team brings together deep institutional knowledge with the technical expertise to build and scale.
          </motion.p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Daniel Round', title: 'Founder/Chief Executive Officer (CEO)', image: '/headshots/daniel-round.jpg' },
              { name: 'Scott Putnam', title: 'Chief Innovation Officer (CINO)', image: '/headshots/scott-putnam.jpg' },
              { name: 'Scott Bayless', title: 'Chief Technology Officer (CTO)', image: '/headshots/scott-bayless.png' },
              { name: 'Roger Emerson', title: 'Chief Engineering Officer (CE)', image: '/headshots/roger-emerson.jpg' },
              { name: 'Dr. Steven Colby', title: 'Patent Attorney', image: '/headshots/dr-steven-colby.png' },
              { name: 'Ryan Radomski', title: 'Chief AI Automation Officer (CAIO)', image: '/headshots/ryan-radomski.png' },
              { name: 'Charles Scott', title: 'Senior Litigation Attorney', image: '/headshots/charles-scott.png' },
              { name: 'Ryan Yohe', title: 'Chief Operations Officer (COO)', image: '/headshots/ryan-yohe.jpg' },
              { name: 'Stewart Tinti', title: 'Chief Administrative Officer (CAO)', image: '/headshots/stewart-tinti.gif' },
              { name: 'Robert Spottswood Jr.', title: 'Hospitality Attorney', image: null },
              { name: 'Rob Gebaide', title: 'Senior Transactional Attorney', image: null },
              { name: 'Joseph Reiben', title: 'Emerging Technologies Attorney', image: '/headshots/joseph-reiben.png' },
              { name: 'Kory Collins', title: 'Chief Strategy Officer (CSO)', image: null },
              { name: 'Jacob Hill', title: 'Chief Marketing Officer (CMO)', image: '/headshots/jacob-hill.png' },
              { name: 'Jameson Shelnut', title: 'Chief Experience Officer (CXO)', image: null },
              { name: 'William Reynolds', title: 'Financial Attorney', image: '/headshots/will-reynolds.gif' },
              { name: 'Jon Agustin', title: 'Senior Software Engineer', image: '/headshots/jonathan-agustin.png' },
              { name: 'Raymond Carapella', title: 'Financial Systems Director', image: '/headshots/raymond-carapella.jpg' },
              { name: 'Radhesh Choudhary', title: 'AI Software Engineer', image: '/headshots/radhesh-choudhary.png' },
              { name: 'Jonah Efaw', title: 'Director of Ops (DO)', image: '/headshots/jonah-efaw.png' },
              { name: 'Will Dahlquist', title: 'Investor Relations', image: null },
              { name: 'Brock Gorubec', title: 'Investor Relations', image: '/headshots/brock-gorubec.jpg' },
              { name: 'Eric Peter', title: 'Software Engineer', image: '/headshots/eric-peter.jpg' },
              { name: 'Ben Radde', title: 'Legal Assistant', image: '/headshots/ben-radde.png' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center transition-all"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top border-4 border-accent/40"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gray-100 border-4 border-accent/40 flex items-center justify-center">
                    <User className="text-gray-400" size={48} />
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: CONTACT ==================== */}
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact Us"
            subtitle="Let's discuss how Academic AI Solutions can transform your institution"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-semibold text-primary mb-2">
                    <User size={18} className="mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="institution" className="flex items-center text-sm font-semibold text-primary mb-2">
                    <Building size={18} className="mr-2" />
                    Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900 ${errors.institution ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Institution name"
                  />
                  {errors.institution && <p className="mt-1 text-sm text-red-500">{errors.institution}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="flex items-center text-sm font-semibold text-primary mb-2">
                    <FileText size={18} className="mr-2" />
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900 ${errors.role ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Job title"
                  />
                  {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
                </div>

                <div>
                  <label htmlFor="inquiryType" className="flex items-center text-sm font-semibold text-primary mb-2">
                    <Mail size={18} className="mr-2" />
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900"
                  >
                    <option value="Deployment">Deployment</option>
                    <option value="Strategic Licensing">Strategic Licensing</option>
                    <option value="Research & Grant Collaboration">Research & Grant Collaboration</option>
                    <option value="Investment">Investment</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2">
                Submissions will be sent to:
              </p>
              <a href="mailto:admin@academicaisolutions.com" className="text-primary font-semibold hover:underline">
                admin@academicaisolutions.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
