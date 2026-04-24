import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Users, Briefcase, Network, Database, Cpu, TrendingUp, DollarSign, HeartHandshake as Handshake, FileCheck, Mail, Building, User, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import ValueCard from '@/components/ValueCard';
import Logo from '@/components/Logo';
const HomePage = () => {
  const {
    toast
  } = useToast();

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
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
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
        description: `Thank you ${formData.name}! Your inquiry has been sent to partnerships@academicai.solutions. We'll respond within 24-48 hours.`
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
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.6
    }
  };
  const scrollToPlatform = () => {
    const element = document.getElementById('platform');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <>
      <Helmet>
        <title>Academic AI Solutions - The AI Operating System for Higher Education</title>
        <meta name="description" content="Transforming higher education with a patented Institutional Intelligence and Coordination Layer. Explore our AI platform for student success and administrative efficiency." />
      </Helmet>

      {/* ==================== HERO SECTION (HOME) ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1686829613628-3e4ebe6f27e7?w=1920&q=80&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/95 via-[#1e3a8a]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* LOGO REMOVED FROM HERO SECTION */}

          <motion.h1 {...fadeInUp} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight pt-16 md:pt-0">
            The AI Operating System<br />for Higher Education
          </motion.h1>

          <motion.p {...fadeInUp} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-2xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto">
            Transforming institutions through a patented<br />
            <span className="text-[#d4af37] font-semibold">
              Institutional Intelligence and Coordination Layer
            </span>
          </motion.p>

          <motion.div {...fadeInUp} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="mb-12">
            <div className="inline-flex items-start space-x-3 px-8 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl max-w-4xl mx-auto">
              <Sparkles className="text-[#d4af37] flex-shrink-0 mt-1" size={24} />
              <p className="text-xl text-white text-left leading-relaxed">The AAS platform functions as an overlay of institutional intelligence, integrating seamlessly with your current tools to automate workflows and connect fragmented data without requiring a system overhaul.</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{
          duration: 0.8,
          delay: 0.8
        }}>
             {/* Using button with onClick since simple anchor logic is cleaner for scrolling here */}
            <button onClick={scrollToPlatform} className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-[#d4af37] text-white hover:bg-[#b8941f] shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore The Platform
            </button>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5,
        duration: 1
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }} className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== PLATFORM SECTION ==================== */}
      <section id="platform" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Architecture */}
          <div className="mb-24">
            <SectionHeader title="The Architecture" subtitle="A four-layer system that preserves existing investments in Banner, Canvas, and Workday" />
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
              icon: <Database className="text-[#d4af37]" size={32} />,
              title: 'Data Layer',
              desc: 'Connects to existing systems'
            }, {
              icon: <Network className="text-[#d4af37]" size={32} />,
              title: 'Integration Layer',
              desc: 'Unified data access'
            }, {
              icon: <Cpu className="text-[#d4af37]" size={32} />,
              title: 'Intelligence Layer',
              desc: 'AI-powered coordination'
            }, {
              icon: <Shield className="text-[#d4af37]" size={32} />,
              title: 'Interface Layer',
              desc: 'Personalized experiences'
            }].map((layer, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }} className="p-6 bg-white rounded-lg shadow-md border border-gray-100 text-center transition-all">
                  <div className="flex justify-center mb-4">{layer.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                  <p className="text-gray-600 text-sm">{layer.desc}</p>
                </motion.div>)}
            </motion.div>
          </div>

          {/* Core Products */}
          <div className="mb-24">
            <SectionHeader title="Core Products" subtitle="Two integrated solutions powering institutional transformation" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductCard icon={<Users className="text-[#d4af37]" size={40} />} title="The Personal Student Assistant" description="Unified intelligence for academic planning, proactive support, and career integration. Personalized guidance for all demographics, including first-generation and online students." delay={0} />
              <ProductCard icon={<Briefcase className="text-[#d4af37]" size={40} />} title="The Administrative Organizer" description="A unified operational command center for leadership. Cross-domain coordination for enrollment, student success, facilities, and finance." delay={0.2} />
            </div>
          </div>

          {/* Technology */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="p-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90 rounded-2xl shadow-2xl text-center">
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
        </div>
      </section>

      {/* ==================== FINANCIAL IMPACT SECTION ==================== */}
      <section id="financial-impact" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 transform origin-top-right -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="inline-flex items-center space-x-2 px-6 py-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-8">
              <TrendingUp className="text-[#d4af37]" size={24} />
              <span className="text-[#d4af37] font-bold text-lg">
                Transformative Value Creation
              </span>
            </motion.div>
            <SectionHeader title="Financial Impact" subtitle="Measurable, institution-wide value creation across every domain" />
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="p-12 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a]/95 to-[#1e3a8a]/90 rounded-2xl shadow-2xl text-center mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10">
              Annual Value Creation
            </h2>
            <div className="text-7xl md:text-8xl font-bold text-[#d4af37] mb-4 relative z-10">
              18% to 25%
            </div>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto relative z-10">
              Total annual impact across institutional operations, student experience, and ecosystem value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ValueCard percentage="35" label="Operational Efficiency" description="30-40% improvement in administrative functions, translating to 4-6% budget gains through streamlined processes." delay={0} />
            <ValueCard percentage="6.5" label="Student Experience" description="6-7% value increase through improved enrollment yield and student persistence via proactive interventions." delay={0.1} />
            <ValueCard percentage="10" label="Ecosystem Value" description="8-12% value capture from student off-campus economy through enhanced career integration and partnerships." delay={0.2} />
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-xl" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 100%)'
        }}>
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#d4af37]/10 rounded-full">
                  <DollarSign className="text-[#d4af37]" size={48} />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                5-Year Projection
              </h2>
              <p className="text-5xl font-bold text-[#d4af37] mb-4">
                $2.75B to $3.9B
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cumulative impact estimated for large-scale institutions, demonstrating sustained, long-term value creation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== LICENSING & PARTNERS SECTION ==================== */}
      <section id="licensing" className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1461963188257-938f39e6f9c2?w=1920&q=80&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader title="Partnership Model" subtitle="An integrated development approach merging institutional expertise with AAS technology" centered={true} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[{
            icon: <Handshake className="text-[#d4af37]" size={48} />,
            title: 'Collaborative Development',
            description: 'Work directly with our team to shape solutions that address your institution\'s unique challenges.'
          }, {
            icon: <Shield className="text-[#d4af37]" size={48} />,
            title: 'Protected Innovation',
            description: 'Benefit from patented technology and trade secrets that provide competitive advantages.'
          }, {
            icon: <TrendingUp className="text-[#d4af37]" size={48} />,
            title: 'Proven ROI',
            description: 'Join institutions seeing 18-25% annual value creation across operations and student experience.'
          }].map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            backgroundColor: 'rgba(255,255,255,0.05)'
          }} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center transition-all">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#d4af37]/10 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>)}
          </div>

          {/* Framework Box */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="p-12 bg-white rounded-2xl shadow-xl border-2 border-[#d4af37]/20 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-[#d4af37]/10 rounded-full">
                <FileCheck className="text-[#d4af37]" size={56} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Licensing Framework
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              <span className="text-[#d4af37] font-semibold">Value-aligned licensing</span> where fees are a percentage of documented value creation
            </p>
            
            <button onClick={() => {
            const el = document.getElementById('contact');
            if (el) {
              const offset = 80;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }} className="px-8 py-4 bg-[#d4af37] text-white font-semibold text-lg rounded-lg hover:bg-[#b8941f] transition-all duration-300 shadow-lg">
              Explore Partnership Opportunities
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Contact Us" subtitle="Let's discuss how Academic AI Solutions can transform your institution" />

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                    <User size={18} className="mr-2" />
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-200'}`} placeholder="Full name" />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="institution" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                    <Building size={18} className="mr-2" />
                    Institution
                  </label>
                  <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900 ${errors.institution ? 'border-red-500' : 'border-gray-200'}`} placeholder="Institution name" />
                  {errors.institution && <p className="mt-1 text-sm text-red-500">{errors.institution}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                    <FileText size={18} className="mr-2" />
                    Role
                  </label>
                  <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900 ${errors.role ? 'border-red-500' : 'border-gray-200'}`} placeholder="Job title" />
                  {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
                </div>

                <div>
                  <label htmlFor="inquiryType" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                    <Mail size={18} className="mr-2" />
                    Inquiry Type
                  </label>
                  <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900">
                    <option value="Deployment">Deployment</option>
                    <option value="Strategic Licensing">Strategic Licensing</option>
                  </select>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-[#d4af37] text-white font-semibold text-lg rounded-lg hover:bg-[#b8941f] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2">
                Submissions will be sent to:
              </p>
              <a href="mailto:partnerships@academicai.solutions" className="text-[#d4af37] font-semibold hover:underline">admin@academicaisolutions.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default HomePage;