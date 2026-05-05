import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building, FileText, Mail, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { PageHero } from '@/components/ui/page-hero';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: '',
    inquiryType: 'Deployment',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.institution.trim()) next.institution = 'Institution is required';
    if (!formData.role.trim()) next.role = 'Role is required';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Inquiry Submitted Successfully!',
        description: `Thank you ${formData.name}! Your inquiry has been sent to admin@academicaisolutions.com. We'll respond within 24-48 hours.`,
      });
      setFormData({ name: '', institution: '', role: '', inquiryType: 'Deployment' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact — Academic AI Solutions</title>
        <meta
          name="description"
          content="Contact Academic AI Solutions. Discuss deployment, strategic licensing, research collaboration, or investment opportunities."
        />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
        <PageHero
          id="contact-hero"
          kicker="Get in Touch"
          title={
            <>
              Let's discuss what AAS can do for <span className="text-primary">your institution</span>
            </>
          }
          subtitle="Tell us a little about your role and the kind of conversation you want to have. We respond to every inquiry within 24–48 hours."
          image="https://images.unsplash.com/photo-1686829613628-3e4ebe6f27e7?w=1920&q=80&auto=format"
        />

        <section id="contact-form" className="relative z-10 py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 border border-border"
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
                      className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-foreground ${errors.name ? 'border-red-500' : 'border-border'}`}
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
                      className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-foreground ${errors.institution ? 'border-red-500' : 'border-border'}`}
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
                      className={`w-full px-4 py-3 bg-muted border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-foreground ${errors.role ? 'border-red-500' : 'border-border'}`}
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
                      className="w-full px-4 py-3 bg-muted border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-foreground"
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

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-2">Submissions will be sent to:</p>
                <a
                  href="mailto:admin@academicaisolutions.com"
                  className="text-primary font-semibold hover:underline"
                >
                  admin@academicaisolutions.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
