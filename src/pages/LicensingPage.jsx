import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import { HeartHandshake as Handshake, FileCheck, TrendingUp, Shield } from 'lucide-react';

const LicensingPage = () => {
  return (
    <>
      <Helmet>
        <title>Licensing & Partners - Academic AI Solutions</title>
        <meta name="description" content="Explore partnership opportunities with value-aligned licensing and integrated development approaches." />
      </Helmet>

      <div className="pt-32 pb-16">
        {/* Hero Section with Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center mb-24">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1461963188257-938f39e6f9c2?w=1920&q=80&auto=format)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 to-[#1e3a8a]/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Partnership Model
              </h1>
              <p className="text-2xl text-white/90 leading-relaxed">
                An integrated development approach merging institutional expertise with AAS technology
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partnership Benefits */}
          <section className="mb-24">
            <SectionHeader
              title="Why Partner with AAS"
              subtitle="Building the future of higher education together"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Handshake className="text-[#d4af37]" size={48} />,
                  title: 'Collaborative Development',
                  description: 'Work directly with our team to shape solutions that address your institution\'s unique challenges and opportunities'
                },
                {
                  icon: <Shield className="text-[#d4af37]" size={48} />,
                  title: 'Protected Innovation',
                  description: 'Benefit from patented technology and trade secrets that provide competitive advantages in the education sector'
                },
                {
                  icon: <TrendingUp className="text-[#d4af37]" size={48} />,
                  title: 'Proven ROI',
                  description: 'Join institutions seeing 18-25% annual value creation across operations, student experience, and ecosystem development'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center transition-all"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#d4af37]/10 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Licensing Framework */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border-2 border-[#d4af37]/20"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-[#d4af37]/10 rounded-full">
                  <FileCheck className="text-[#d4af37]" size={56} />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Licensing Framework
              </h2>
              <p className="text-2xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                <span className="text-[#d4af37] font-semibold">Value-aligned licensing</span> where fees are a percentage of documented value creation
              </p>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our licensing model ensures that your investment is directly tied to the measurable outcomes and value delivered to your institution
                </p>
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Let's discuss how Academic AI Solutions can drive measurable value creation at your institution
              </p>
              <CTAButton to="/contact">
                Explore Partnership Opportunities
              </CTAButton>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LicensingPage;