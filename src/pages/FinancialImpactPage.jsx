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
      'Operational efficiency across administrative functions through intelligent automation and coordinated workflows. Staff spend less time on repetitive tasks and more time on meaningful work. Advisors, counselors, and support teams move from reactive, bandwidth-burning service to proactive, high-impact engagement.',
  },
  {
    icon: Users,
    title: 'Student Retention and Experience',
    description:
      'Retention improvement and enrollment yield gains through proactive intervention, personalized engagement, and frictionless campus experience. Every student receives the kind of individualized support that traditionally scales only one institution at a time. The result is measurable improvement to one of the highest-value outcomes in higher education.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Value',
    description:
      'Value capture from the off-campus economy students already participate in. Housing, dining, transportation, services, and the broader institutional marketplace become integrated channels that return value to the institution rather than flowing past it. New revenue streams open without new burden on operations.',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Year Compounding Impact',
    description:
      'Value compounds as the platform learns the institution. Year one delivers meaningful operational and experience gains. Years two through five compound through accumulated institutional intelligence, expanded integration, and activated ecosystem layers. The payback window is short. The long-term value curve is substantial.',
  },
];

const FinancialImpactPage = () => {
  return (
    <>
      <Helmet>
        <title>Financial Impact - Academic AI Solutions</title>
        <meta
          name="description"
          content="Discover the transformative financial impact of Academic AI Solutions: measurable, institution-wide value creation across every domain."
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
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent/15 border border-accent/50 rounded-full mb-8"
            >
              <TrendingUp className="text-accent" size={24} />
              <span className="text-primary font-bold text-lg">
                Transformative Value Creation
              </span>
            </motion.div>

            <SectionHeader
              title="Financial Impact"
              subtitle="Measurable, institution-wide value creation. Scalable from regional universities to large-scale research institutions."
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              The AAS platform delivers value across three primary domains and compounds it over a multi-year horizon. Institutions retain the majority of the value created. Our model succeeds only when our partners succeed.
            </motion.p>
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
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="text-primary" size={36} />
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

        {/* Closing Statement */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-900"
            >
              For a large research institution, the combined impact across these domains represents transformational annual value. Conservative estimates begin in the hundreds of millions. Fully integrated, the platform reshapes the institution's financial position.
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialImpactPage;
