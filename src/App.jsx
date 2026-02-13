import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Hook
import useScrollAnimation from './hooks/useScrollAnimation';

// Pages
import Home from './pages/Home';
import Translation from './pages/services/Translation';
import Equipment from './pages/services/Equipment';
import Manpower from './pages/services/Manpower';
import Visa from './pages/services/Visa';
import Frro from './pages/services/Frro';
import Founder from './pages/Founder';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Placeholder pages (we will create these later)
const NotFound = () => <div className="section container"><h1>404 - Page Not Found</h1></div>;

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Trigger scroll animation check on route change
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <ScrollToTop />
        <Helmet
          titleTemplate="%s | Vaibhav Language Translation Services"
          defaultTitle="Vaibhav Language Translation Services | Global Interpretation & Industrial Support"
        />
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Service Routes */}
            <Route path="/services/translation" element={<Translation />} />
            <Route path="/services/equipment" element={<Equipment />} />
            <Route path="/services/manpower" element={<Manpower />} />
            <Route path="/services/visa" element={<Visa />} />
            <Route path="/services/frro" element={<Frro />} />

            {/* Industry Routes */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />

            <Route path="/founder" element={<Founder />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
