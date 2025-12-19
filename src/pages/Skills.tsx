import React from 'react';
import { SKILLS } from '../data/content';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Core Technical Competencies</h1>
        <p className="text-gray-600 dark:text-gray-400">Our specialized knowledge areas and technical proficiency levels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {SKILLS.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-1 bg-steelBlue mr-4"></span>
              {cat.name}
            </h2>
            <div className="space-y-8">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-techBlue-light/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-techBlue dark:bg-steelBlue transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;