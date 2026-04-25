import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { TrendingUp, Briefcase, Users, Globe } from 'lucide-react';

const valueAreas = [
  {
    icon: Briefcase,
    title: 'Workforce Optimization',
    description:
      'Operational efficiency improvements across administrative functions through streamlined processes and AI-powered automation.',
  },
  {
    icon: Users,
    title: 'Student Retention & Experience',
    description:
      'Value creation through improved enrollment yield and student persistence via proactive interventions and personalized engagement.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Value',
    description:
      'Value capture from student off-campus economy through enhanced career integration, marketplace features, and institutional partnerships.',
  },
  {
    icon: TrendingUp,
    title: '5-Year Projection',
    description:
      'Cumulative impact estimated for large-scale institutions, demonstrating sustained, long-term value creation with rapid payback.',
  },
];

const FinancialImpactPage = () => {
  return (
    <>
      <Helmet>
        <title>Financial Impact - Academic AI Solutions</title>
        <meta
          name="description"
          content="Discover the transformative financial impact of Academic AI Solutions — measurable, institution-wide value creation across every domain."
        />
      </Helmet>

      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              subtitle="Measurable, institution-wide value creation across every domain — scalable from regional universities to large-scale research institutions."
            />
          </div>
        </section>

        {/* Value Areas Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valueAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                    className="p-10 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-all"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#d4af37]/10 p-3 rounded-full">
                        <Icon className="text-[#d4af37]" size={36} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialImpactPage;
