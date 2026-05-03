import React from 'react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-2 border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3">
            <Logo variant="light" />
            <span className="text-xl font-bold text-white">
              Academic AI Solutions
            </span>
          </div>
          <p className="text-center text-sm max-w-3xl">
            © 2026 Academic AI Solutions LLC. All Rights Reserved. Protected by patents, pending applications, and trade secret law. Proprietary and patent-claimed technology under full IP protection.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;