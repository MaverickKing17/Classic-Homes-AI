import React from 'react';
import { DOMAIN_NAME } from '../constants';
import { DOMAIN_STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy text-white pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/Z11bfw7P/Interior-Exterior-Luxury-Homes.png" 
          alt="Luxury Interior and Exterior" 
          className="w-full h-full object-cover"
        />
        {/* Deep navy overlay to ensure text readability - Opacity reduced to make image clearer */}
        <div className="absolute inset-0 bg-navy/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy"></div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border border-gold/30 blur-3xl animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full border-2 border-white/10 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        <div className="inline-block mb-6 px-4 py-1 border border-gold/50 rounded-full bg-navy-light/60 backdrop-blur-md">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Premium Digital Asset For Sale</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 drop-shadow-lg">
          <span className="block text-white">The Foundation of</span>
          <span className="block text-gold italic">Luxury Authority</span>
        </h1>
        
        <div className="max-w-4xl mx-auto bg-navy/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-lg mb-12 transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans drop-shadow-md">
            {DOMAIN_NAME}
          </h2>
        </div>

        {/* Domain Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
          {DOMAIN_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-navy-light/60 border border-white/10 rounded-md hover:border-gold/30 transition-colors backdrop-blur-md shadow-lg">
              <span className="text-gold font-serif text-2xl md:text-3xl mb-2">{stat.value}</span>
              <span className="text-white font-medium text-sm tracking-wide uppercase mb-1">{stat.label}</span>
              <span className="text-white/80 text-xs">{stat.subtext}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#pricing" className="px-8 py-4 bg-gold text-navy font-bold rounded-sm shadow-gold hover:bg-gold-light transition-all transform hover:-translate-y-1 text-center min-w-[200px]">
            View Acquisition Options
          </a>
          <a href="#value-proposition" className="px-8 py-4 bg-navy/50 border border-white/30 text-white font-semibold rounded-sm hover:bg-navy/70 transition-all text-center min-w-[200px] backdrop-blur-md">
            Why This Asset?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;