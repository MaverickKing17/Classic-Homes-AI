import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TawkWidget from './components/TawkWidget';

const App: React.FC = () => {
  return (
    <div className="font-sans text-navy antialiased selection:bg-gold selection:text-navy">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Pricing />
      </main>
      <Footer />
      <TawkWidget />
    </div>
  );
};

export default App;