import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PlatformPage from '@/pages/PlatformPage';
import FinancialImpactPage from '@/pages/FinancialImpactPage';
import LicensingPage from '@/pages/LicensingPage';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Academic AI Solutions - The AI Operating System for Higher Education</title>
        <meta name="description" content="Transforming higher education with a proprietary Institutional Intelligence and Coordination Layer." />
      </Helmet>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/financial-impact" element={<FinancialImpactPage />} />
        <Route path="/licensing" element={<LicensingPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;