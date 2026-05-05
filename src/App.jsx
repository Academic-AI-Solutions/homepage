import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PlatformPage from '@/pages/PlatformPage';
import FinancialImpactPage from '@/pages/FinancialImpactPage';
import LicensingPage from '@/pages/LicensingPage';
import TeamPage from '@/pages/TeamPage';
import ContactPage from '@/pages/ContactPage';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import { Toaster } from '@/components/ui/toaster';

const ROUTE_SECTIONS = {
  '/': [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'data', label: 'Data' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'patent', label: 'Patent' },
  ],
  '/licensing': [
    { id: 'lic-hero', label: 'Overview' },
    { id: 'lic-philosophy', label: 'Why Partner' },
    { id: 'structures', label: 'Structures' },
    { id: 'lic-why-now', label: 'Why Now' },
  ],
  '/team': [
    { id: 'team-hero', label: 'The Team' },
    { id: 'team-grid', label: 'Members' },
  ],
  '/contact': [
    { id: 'contact-hero', label: 'Get in Touch' },
    { id: 'contact-form', label: 'Inquiry' },
  ],
};

const RouteAwareScrollProgress = () => {
  const location = useLocation();
  const sections = ROUTE_SECTIONS[location.pathname];
  if (!sections) return null;
  return <ScrollProgress sections={sections} />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Academic AI Solutions - The AI Operating System for Higher Education</title>
        <meta name="description" content="Transforming higher education with a proprietary Institutional Intelligence and Coordination Layer." />
      </Helmet>
      <Navigation />
      <RouteAwareScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/financial-impact" element={<FinancialImpactPage />} />
        <Route path="/licensing" element={<LicensingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
