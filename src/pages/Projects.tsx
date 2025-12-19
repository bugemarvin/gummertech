import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Cloud' | 'Networking'>('All');
  
  const categories = ['All', 'Software', 'Cloud', 'Networking'];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Project Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-400">A showcase of our technical problem solving across domains.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c 
                  ? 'bg-techBlue text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-techBlue-light/20 dark:text-gray-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div key={project.id} className="group bg-white dark:bg-techBlue rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-techBlue-light/20">
            <div className="h-56 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-techBlue-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <ExternalLink className="text-white" size={32} />
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-steelBlue uppercase tracking-wider">{project.category}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] bg-gray-100 dark:bg-techBlue-light/30 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;