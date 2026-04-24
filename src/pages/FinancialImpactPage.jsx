import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import ValueCard from '@/components/ValueCard';
import { TrendingUp, DollarSign } from 'lucide-react';

const FinancialImpactPage = () => {
  return (
    <>
      <Helmet>
        <title>Financial Impact - Academic AI Solutions</title>
        <meta name="description" content="Discover the transformative financial impact of Academic AI Solutions with 18-25% total annual value creation." />
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-8"
            >
              <TrendingUp className="text-[#d4af37]" size={24} />
              <span className="text-[#d4af37] font-bold text-lg">
                Transformative Value Creation
              </span>
            </motion.div>
            <SectionHeader
              title="Financial Impact"
              subtitle="Measurable, institution-wide value creation across every domain"
            />
          </section>

          {/* Annual Value Creation */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a]/95 to-[#1e3a8a]/90 rounded-2xl shadow-2xl text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Annual Value Creation
              </h2>
              <div className="text-7xl md:text-8xl font-bold text-[#d4af37] mb-4">
                18% to 25%
              </div>
              <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                Total annual impact across institutional operations, student experience, and ecosystem value
              </p>
            </motion.div>
          </section>

          {/* Value Breakdown */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ValueCard
                percentage="35"
                label="Operational Efficiency"
                description="30% to 40% improvement in administrative functions, translating to 4-6% budget gains through streamlined processes and reduced redundancy"
                delay={0}
              />
              <ValueCard
                percentage="6.5"
                label="Student Experience Value"
                description="6% to 7% value increase through improved enrollment yield and student persistence, driven by personalized support and proactive interventions"
                delay={0.1}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <ValueCard
                percentage="10"
                label="Ecosystem Value"
                description="8% to 12% value capture from student off-campus economy through enhanced career integration, local partnerships, and community engagement"
                delay={0.2}
              />
            </div>
          </section>

          {/* 5-Year Projection */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(30, 58, 138, 0.1) 100%)'
              }}
            >
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#d4af37]/20 rounded-full">
                    <DollarSign className="text-[#d4af37]" size={48} />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  5-Year Projection
                </h2>
                <p className="text-3xl font-bold text-[#d4af37] mb-4">
                  $2.75B to $3.9B
                </p>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Cumulative impact estimated for large-scale institutions, demonstrating sustained, long-term value creation and institutional transformation
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FinancialImpactPage;