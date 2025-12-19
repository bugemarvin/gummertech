import React from 'react';
import { PRICING } from '../data/content';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Transparent Service Tiers</h1>
        <p className="text-gray-600 dark:text-gray-400">Professional models designed for projects of every scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING.map((plan) => (
          <div 
            key={plan.id} 
            className={`relative p-8 rounded-2xl flex flex-col ${
              plan.isFeatured 
                ? 'bg-techBlue text-white scale-105 shadow-2xl z-10' 
                : 'bg-white dark:bg-techBlue-dark border border-gray-200 dark:border-techBlue-light/20 shadow-lg'
            }`}
          >
            {plan.isFeatured && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-steelBlue text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Recommended
              </span>
            )}
            
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={`text-sm ${plan.isFeatured ? 'text-gray-300' : 'text-gray-500'}`}> {plan.period}</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <Check size={18} className={`mr-2 shrink-0 ${plan.isFeatured ? 'text-steelBlue-light' : 'text-steelBlue'}`} />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.isFeatured ? 'secondary' : 'primary'} 
              className="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;