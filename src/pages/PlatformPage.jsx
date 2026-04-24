import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import { Users, Briefcase, Network, Database, Shield, Cpu } from 'lucide-react';

const PlatformPage = () => {
  return (
    <>
      <Helmet>
        <title>The Platform - Academic AI Solutions</title>
        <meta name="description" content="A four-layer architecture that preserves existing investments while providing unified intelligence across your institution." />
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Architecture Section */}
          <section className="mb-24">
            <SectionHeader
              title="The Architecture"
              subtitle="A four-layer system that preserves existing investments in Banner, Canvas, and Workday"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: <Database className="text-[#d4af37]" size={32} />, title: 'Data Layer', desc: 'Connects to existing systems' },
                { icon: <Network className="text-[#d4af37]" size={32} />, title: 'Integration Layer', desc: 'Unified data access' },
                { icon: <Cpu className="text-[#d4af37]" size={32} />, title: 'Intelligence Layer', desc: 'AI-powered coordination' },
                { icon: <Shield className="text-[#d4af37]" size={32} />, title: 'Interface Layer', desc: 'Personalized experiences' }
              ].map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-100 text-center"
                >
                  <div className="flex justify-center mb-4">{layer.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                  <p className="text-gray-600 text-sm">{layer.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Core Products Section */}
          <section className="py-16">
            <SectionHeader
              title="Core Products"
              subtitle="Two integrated solutions powering institutional transformation"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductCard
                icon={<Users className="text-[#d4af37]" size={40} />}
                title="The Personal Student Assistant"
                description="Unified intelligence for academic planning, proactive support, and career integration. Personalized guidance for all demographics, including first-generation and online students."
                delay={0}
              />
              <ProductCard
                icon={<Briefcase className="text-[#d4af37]" size={40} />}
                title="The Administrative Organizer"
                description="A unified operational command center for leadership. Cross-domain coordination for enrollment, student success, facilities, and finance."
                delay={0.2}
              />
            </div>
          </section>

          {/* Technology Section */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90 rounded-2xl shadow-2xl text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#d4af37]/20 rounded-full">
                  <Cpu className="text-[#d4af37]" size={48} />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Powered by Patented Technology
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Built on a <span className="text-[#d4af37] font-semibold">patented Multi-Agent Coordination Protocol</span> and <span className="text-[#d4af37] font-semibold">Institutional Memory Architecture</span>, ensuring unmatched intelligence and reliability.
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PlatformPage;