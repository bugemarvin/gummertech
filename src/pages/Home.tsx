import React from 'react';
import { ArrowRight, Terminal, Cloud, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { SERVICES } from '../data/content';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-techBlue-dark text-white pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-steelBlue to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Engineering the <span className="text-steelBlue-light">Digital Future</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            GummerTech provides full-spectrum technical expertise from architecture to implementation, 
            specializing in robust cloud systems and high-performance software.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button size="lg" className="w-full sm:w-auto">View Our Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">Start a Project</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0,3).map((s) => (
            <div key={s.id} className="bg-white dark:bg-techBlue p-8 rounded-xl shadow-xl border border-gray-100 dark:border-techBlue-light/20">
              <div className="w-12 h-12 bg-techBlue-light/10 rounded-lg flex items-center justify-center mb-6">
                <Terminal className="text-steelBlue-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{s.description}</p>
              <Link to="/services" className="text-steelBlue-light font-medium flex items-center group">
                Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Value Prop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Professional Enterprises Choose GummerTech</h2>
            <div className="space-y-6">
              {[ 
                { title: 'Security First', desc: 'Every line of code and infrastructure component is architected with a zero-trust mindset.' },
                { title: 'Scalable by Design', desc: 'We build systems that handle growth natively, from startup MVP to enterprise-scale traffic.' },
                { title: 'Legacy Modernization', desc: 'Don\'t let technical debt hold you back. We specialize in transforming aging systems.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-steelBlue/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-steelBlue"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-techBlue-light/10 h-96 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
            <span className="text-gray-400">Visual Element (Architecture Diagram)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;