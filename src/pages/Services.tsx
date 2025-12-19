import React from 'react';
import { SERVICES } from '../data/content';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Specialized Technical Services</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive expertise across the modern technology stack, delivering value from high-level architecture to low-level optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white dark:bg-techBlue p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-techBlue-light/20">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">{service.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle className="text-steelBlue mt-1 shrink-0" size={16} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;