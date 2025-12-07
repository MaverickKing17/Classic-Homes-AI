import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
             <Logo className="h-10 w-10" />
             <span className="font-serif text-xl">Classic Homes Remodeling</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
            A premium digital asset defining authority in the luxury home design and renovation sector.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-400">
           <a href="#" className="hover:text-gold transition-colors">Contact Broker</a>
           <a href="#" className="hover:text-gold transition-colors">Escrow Verification</a>
           <a href="#" className="hover:text-gold transition-colors">Terms of Sale</a>
        </div>
        
        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ClassicHomesRemodeling.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;