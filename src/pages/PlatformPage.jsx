import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Database, Network, Cpu, Shield, Users, Briefcase, GraduationCap, AlertTriangle, Map, Eye, Brain, ShieldAlert, Plug, Building2, Wrench, BookOpen, Calendar, CreditCard, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const PlatformPage = () => {
  const architectureLayers = [
    { icon: Database, title: 'Data Layer', desc: 'Secure connections to your existing systems of record' },
    { icon: Network, title: 'Integration Layer', desc: 'Unified data access across every department and campus' },
    { icon: Cpu, title: 'Intelligence Layer', desc: 'AI-powered coordination through our patent-secured multi-agent architecture' },
    { icon: Shield, title: 'Interface Layer', desc: 'Personalized experiences delivered through chat, voice, mobile, kiosk, and more' },
  ];

  const studentFeatures = [
    { icon: GraduationCap, title: 'Academic Planning & Career Mapping', desc: 'Optimal course paths connected to career outcomes from day one' },
    { icon: AlertTriangle, title: 'Early Alerts & Intervention', desc: 'Flags risk before anyone else sees it and connects students to support instantly' },
    { icon: CreditCard, title: 'Transactions & Campus Life', desc: 'Enroll, pay, book, order — all through conversation' },
    { icon: Calendar, title: 'Student Engagement & Events', desc: 'Personalized recommendations, group coordination, and activity discovery that drive connection and belonging' },
  ];

  const adminFeatures = [
    { icon: Users, title: 'Advisor Automation', desc: 'AI advises at scale so human advisors focus on high-impact cases' },
    { icon: BookOpen, title: 'Faculty Support', desc: 'Less admin, more teaching' },
    { icon: Briefcase, title: 'Staff Efficiency', desc: 'Repetitive workflows automated across departments' },
    { icon: Network, title: 'Cross-Department Coordination', desc: 'Shared data intelligence' },
  ];

  const dataCards = [
    { icon: Map, title: 'Campus Digital Twin', desc: 'A living digital replica of your entire campus operating in real time' },
    { icon: Eye, title: 'Campus Flow & Mapping', desc: 'Student movement, facility usage, traffic patterns, and space utilization visualized' },
    { icon: Brain, title: 'Predictive Intelligence', desc: 'Retention risk, enrollment trends, resource demand — surfaced before they become problems' },
    { icon: ShieldAlert, title: 'Safety & Risk Monitoring', desc: 'Real-time campus awareness, incident tracking, and liability reduction' },
  ];

  const integrationCards = [
    { icon: Plug, title: 'Pre-Built Connectors', desc: 'SIS · LMS · CRM · ERP · Housing · Dining · Financial Aid · Career Services · Events · Athletics · Parking · Transportation · Health Services · Campus Safety · Payment Systems · Marketplace' },
    { icon: Building2, title: 'Legacy Compatible', desc: 'Designed to work with campus infrastructure that\'s been in place for decades' },
    { icon: Wrench, title: 'Custom Builds', desc: 'Tailored integrations for institution-specific tools and workflows unique to your campus' },
  ];

  return (
    <>
      <Helmet>
        <title>The Platform - Academic AI Solutions</title>
        <meta name="description" content="A four-layer architecture that preserves existing investments while providing unified intelligence across your institution." />
      </Helmet>

      <div className="pt-24">
        {/* Hero / Header */}
        <section className="bg-gradient-to-br from-[#3D0024] to-[#3D0024]/90 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#8C1D40] font-semibold uppercase tracking-widest mb-4"
            >
              The Platform
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Intelligence Infrastructure for Higher Education
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              A four-layer system that preserves existing investments while delivering AI-powered coordination across your entire institution.
            </motion.p>
          </div>
        </section>

        {/* Section 1: The Architecture */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="The Architecture"
              subtitle="A four-layer system that preserves existing investments"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-[#8C1D40]/10 rounded-full">
                      <layer.icon className="text-[#8C1D40]" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{layer.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{layer.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: The Personal Student Assistant */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="The Personal Student Assistant"
              subtitle="Every student gets a personal, 24/7 AI assistant."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="flex items-start gap-5 p-8 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex-shrink-0 p-3 bg-[#8C1D40]/10 rounded-full">
                    <feature.icon className="text-[#8C1D40]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#8C1D40] text-white font-semibold rounded-lg hover:bg-[#6A0F30] transition-colors">
                Learn More <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Section 3: The Administrative Organizer */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="The Administrative Organizer"
              subtitle="AI-powered workforce optimization across your institution."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adminFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="flex items-start gap-5 p-8 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex-shrink-0 p-3 bg-[#8C1D40]/10 rounded-full">
                    <feature.icon className="text-[#8C1D40]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#8C1D40] text-white font-semibold rounded-lg hover:bg-[#6A0F30] transition-colors">
                Learn More <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Intelligent Data & Mapping */}
        <section className="py-24 bg-gradient-to-br from-[#3D0024] to-[#3D0024]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Intelligent Data & Mapping
              </h2>
              <div className="w-24 h-1 bg-[#8C1D40] mb-6 mx-auto" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Your Campus. Fully Mapped. Fully Intelligent.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center"
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-[#8C1D40]/20 rounded-full">
                      <card.icon className="text-[#8C1D40]" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center text-white/80 text-lg italic mt-12 max-w-3xl mx-auto"
            >
              Intelligence that grows with your institution — continuously learning, continuously improving.
            </motion.p>
          </div>
        </section>

        {/* Section 5: System & App Integrations */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="System & App Integrations"
              subtitle="Plugs Into What You Already Have"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-gray-600 text-lg mb-12 -mt-4"
            >
              No rip-and-replace. No migration. Just amplification.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-[#8C1D40]/10 rounded-full">
                      <card.icon className="text-[#8C1D40]" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-gray-700 text-lg font-medium mt-12 max-w-3xl mx-auto"
            >
              AAS doesn't ask you to start over. It makes what you already have better.
            </motion.p>
          </div>
        </section>

        {/* Section 6: Proprietary & Patent-Claimed Technology */}
        <section className="py-24 bg-gradient-to-br from-[#3D0024] to-[#3D0024]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-[#8C1D40]/20 rounded-full">
                  <Cpu className="text-[#8C1D40]" size={48} />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Proprietary & Patent-Claimed Technology
              </h2>

              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Built on fully patent-filed <span className="text-[#8C1D40] font-semibold">Multi-Agent Coordination Protocol</span> and <span className="text-[#8C1D40] font-semibold">Institutional Memory Architecture</span> with an advanced IP portfolio spanning higher education, hospitality, events, and healthcare.
              </p>

              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Trade secret protections cover proprietary algorithms, agent coordination protocols, training methodologies, and integration techniques — representing years of R&D investment that cannot be replicated or reverse-engineered.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                Purpose-built for universities. Under patent protection across multiple verticals. Proprietary and patent-claimed — this architecture belongs to AAS, and we're prepared to defend it.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlatformPage;
