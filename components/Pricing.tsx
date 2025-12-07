import React from 'react';
import { PRICING_TIERS, LEGAL_DISCLAIMER } from '../constants';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium mb-6">Acquisition Structures</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the financial pathway that aligns with your capital strategy. All transactions secured via Escrow.com.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                tier.highlight 
                  ? 'border-2 border-gold shadow-luxury transform lg:-translate-y-4 z-10' 
                  : 'border border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              {tier.highlight && (
                <div className="bg-gold text-navy text-center py-2 text-xs font-bold uppercase tracking-widest">
                  Premier Option
                </div>
              )}
              
              <div className={`p-8 ${tier.highlight ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
                <h3 className={`font-serif text-2xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-navy'}`}>
                  {tier.title}
                </h3>
                {tier.subtitle && (
                  <p className={`text-sm mb-6 ${tier.highlight ? 'text-gold' : 'text-gray-500'}`}>
                    {tier.subtitle}
                  </p>
                )}
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-navy'}`}>
                    {tier.price}
                  </span>
                </div>
                {tier.priceSubtext && (
                  <p className={`text-sm mb-8 ${tier.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                    {tier.priceSubtext}
                  </p>
                )}

                <button 
                  className={`w-full py-4 rounded-sm font-bold text-sm uppercase tracking-wide transition-colors ${
                    tier.ctaColor === 'gold' 
                      ? 'bg-gold text-navy hover:bg-gold-light' 
                      : 'bg-navy text-white hover:bg-navy-light'
                  }`}
                  onClick={() => window.open('https://www.escrow.com', '_blank')} 
                >
                  {tier.ctaText}
                </button>
              </div>

              <div className="p-8 bg-gray-50">
                <ul className="space-y-4">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-gray-700 leading-tight">
                        {feature.includes("Lowest monthly cost") ? (
                          <>
                            {feature.split("(Lowest monthly cost")[0]}
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded ml-1 font-medium">Lowest monthly cost</span>
                          </>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500 leading-relaxed italic">
            {LEGAL_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;