import React from 'react';
import { EXPERIENCE } from '../data/content';
import { Briefcase, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-16">Industry Experience & Certifications</h1>
      
      <div className="space-y-12">
        {EXPERIENCE.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 relative">
            <div className="md:w-1/4">
              <p className="text-steelBlue font-bold">{item.period}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                {item.type === 'Work' ? <Briefcase size={14} className="mr-2" /> : <Award size={14} className="mr-2" />}
                {item.type}
              </div>
            </div>
            <div className="md:w-3/4 border-l-2 border-gray-100 dark:border-techBlue-light/20 pl-8 pb-12">
              <h3 className="text-2xl font-bold">{item.role}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">{item.organization}</p>
              <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;