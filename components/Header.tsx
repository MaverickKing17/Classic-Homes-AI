import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10 sm:h-12 sm:w-12" />
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg sm:text-xl tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
              Classic Homes
            </span>
            <span className={`text-xs uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-gold' : 'text-gray-300'}`}>
              Remodeling
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#valuation" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white/90'}`}>Valuation</a>
          <a href="#value-proposition" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white/90'}`}>Potential</a>
          <a href="#pricing" className={`px-6 py-2 rounded-sm text-sm font-semibold transition-all ${
            isScrolled 
              ? 'bg-navy text-white hover:bg-navy-light' 
              : 'bg-white text-navy hover:bg-gray-100'
          }`}>
            Acquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;