import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Academic AI Solutions - The AI Operating System for Higher Education</title>
        <meta name="description" content="Transforming institutions through a patented Institutional Intelligence and Coordination Layer. AAS connects data, workflows, and decision-making across every domain." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        <HomePage />
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;