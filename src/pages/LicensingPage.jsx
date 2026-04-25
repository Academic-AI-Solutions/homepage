import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import {
  HeartHandshake,
  Shield,
  TrendingUp,
  FileCheck,
  DollarSign,
  BookOpen,
} from 'lucide-react';

const partnershipBenefits = [
  {
    icon: HeartHandshake,
    title: 'Collaborative Development',
    description:
      "Work directly with our team to shape solutions that address your institution's unique challenges.",
  },
  {
    icon: Shield,
    title: 'Protected Innovation',
    description:
      'Benefit from patent-secured technology and trade secrets that provide competitive advantages no other institution can access.',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description:
      'Join institutions seeing measurable annual value creation across operations and student experience.',
  },
];

const flexibleStructures = [
  {
    icon: FileCheck,
    title: 'Licensing Agreements',
    description:
      'Exclusive or non-exclusive models for deploying the AAS platform across your institution.',
  },
  {
    icon: DollarSign,
    title: 'Revenue-Share / Royalty',
    description:
      'Partnerships designed for mutual growth, sharing the financial success of transformed campus operations and student outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Equity Investment',
    description:
      'Strategic capital partnerships to accelerate innovation, deployment, and national expansion together.',
  },
  {
    icon: BookOpen,
    title: 'Grant, Endowment & Research Funding',
    description:
      'Sponsored research collaborations, philanthropic endowments, and institutional grant partnerships that fund deployment through mission-aligned capital — including federal, state, foundation, and donor-directed sources.',
  },
];

const LicensingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Licensing & Partners - Academic AI Solutions</title>
        <meta
          name="description"
          content="Explore partnership opportunities with AAS — collaborative development, protected innovation, and flexible licensing structures for institutional AI."
        />
      </Helmet>

      <div>
        {/* Section 1: Partnership Model — Dark with background image */}
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-24">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1461963188257-938f39e6f9c2?w=1920&q=80&auto=format)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Partnership Model
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-6 mx-auto" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                An integrated development approach merging institutional
                expertise with AAS technology
              </p>
            </motion.div>

            {/* 3-card glassmorphism grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
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
                    className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center transition-all"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#d4af37]/10 p-3 rounded-full">
                        <Icon className="text-[#d4af37]" size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Flexible Structures — Light background */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Flexible Structures for Strategic Collaboration"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {flexibleStructures.map((structure, index) => {
                const Icon = structure.icon;
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
                    className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center transition-all"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#d4af37]/10 p-3 rounded-full">
                        <Icon className="text-[#d4af37]" size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {structure.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {structure.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: National Vision — Dark blue gradient */}
        <section className="py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                National Vision
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-8 mx-auto" />
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                AAS is building toward a national standard in institutional AI —
                starting with flagship partners and scaling across thousands of
                institutions. Early partners shape the platform, influence
                direction, and secure preferred economics from day one.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/#contact')}
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-white font-semibold rounded-lg shadow-lg hover:bg-[#c49b2f] transition-colors text-lg"
              >
                Explore Partnership Opportunities
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LicensingPage;
