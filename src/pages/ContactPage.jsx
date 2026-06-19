import React from 'react';
import { Helmet } from 'react-helmet';
import { Contact2 } from '@/components/ui/contact-2';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Academic AI Solutions</title>
        <meta
          name="description"
          content="Contact Academic AI Solutions. Discuss deployment, strategic licensing, research collaboration, or investment opportunities."
        />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
        <Contact2
          title={<>Contact <span className="text-primary">AAS</span></>}
          description="Tell us a little about your role and what you'd like to discuss: deployment, strategic licensing, research collaboration, or investment. We respond to every inquiry within 24-48 hours."
          email="admin@academicaisolutions.com"
          web={{ label: 'academicaisolutions.com', url: '/' }}
        />
      </div>
    </>
  );
};

export default ContactPage;
