import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Building, User, FileText } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: '',
    inquiryType: 'Deployment'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: `Thank you ${formData.name}! Your inquiry has been sent to partnerships@academicai.solutions. We'll respond within 24-48 hours.`,
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

  return (
    <>
      <Helmet>
        <title>Contact - Academic AI Solutions</title>
        <meta name="description" content="Get in touch with Academic AI Solutions to explore partnership opportunities and deployment options." />
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact Us"
            subtitle="Let's discuss how Academic AI Solutions can transform your institution"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                  <User size={18} className="mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900 ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Institution Field */}
              <div>
                <label htmlFor="institution" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                  <Building size={18} className="mr-2" />
                  Institution
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900 ${
                    errors.institution ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your institution name"
                />
                {errors.institution && <p className="mt-1 text-sm text-red-500">{errors.institution}</p>}
              </div>

              {/* Role Field */}
              <div>
                <label htmlFor="role" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                  <FileText size={18} className="mr-2" />
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900 ${
                    errors.role ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your role or title"
                />
                {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
              </div>

              {/* Inquiry Type Field */}
              <div>
                <label htmlFor="inquiryType" className="flex items-center text-sm font-semibold text-[#d4af37] mb-2">
                  <Mail size={18} className="mr-2" />
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all text-gray-900"
                >
                  <option value="Deployment">Deployment</option>
                  <option value="Strategic Licensing">Strategic Licensing</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#d4af37] text-white font-semibold text-lg rounded-lg hover:bg-[#b8941f] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2">
                Submissions will be sent to:
              </p>
              <a 
                href="mailto:partnerships@academicai.solutions"
                className="text-[#d4af37] font-semibold hover:underline"
              >
                partnerships@academicai.solutions
              </a>
            </div>
          </motion.div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 max-w-3xl mx-auto">
              © 2026 Academic AI Solutions LLC. All Rights Reserved. Protected by issued patents, pending applications, and trade secret law.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;