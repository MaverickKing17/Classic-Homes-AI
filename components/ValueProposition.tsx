import React from 'react';

const ValueCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode }> = ({ title, items, icon }) => (
  <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-gold group hover:shadow-luxury transition-all duration-300">
    <div className="mb-6 p-4 bg-off-white rounded-full w-16 h-16 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
      {icon}
    </div>
    <h3 className="font-serif text-2xl font-semibold text-navy mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ValueProposition: React.FC = () => {
  return (
    <section id="value-proposition" className="py-24 bg-off-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Future-Proof Investment</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-navy font-medium mb-6">Built for the AI Era</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            More than just a domain. This is a foundational digital asset ready for the next generation of web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* AI/ML Card */}
          <ValueCard 
            title="AI & Machine Learning Utility"
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
            items={[
              'Deploy an AI-powered "Classic Remodel Visualizer" for instant AR/VR client simulations.',
              'Train a proprietary LLM on luxury content for an automated "AI Design Concierge".',
              'Capture high-intent traffic searching for automated home value enhancement tools.'
            ]}
          />

          {/* Web 3.0 Card */}
          <ValueCard 
            title="Web 3.0 & Tokenization"
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            items={[
              'Digital Asset Appreciation: Secure a store of value comparable to virtual real estate.',
              'Tokenizable Subdomains: Create a marketplace for local contractors (e.g., dallas.classichomesremodeling.com).',
              'Smart-contract enabled "Classic Homes Marketplace" for trusted vendor matchmaking.'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;