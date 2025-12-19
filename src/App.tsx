import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Section } from './components/LayoutComponents';
import { siteMeta, services, pricing, projects, skills, experience } from './data/siteContent';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className="bg-primary-dark text-white py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">{siteMeta.companyName}</h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-secondary-light">{siteMeta.description}</p>
      <button className="bg-tech-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105">
        Explore Services
      </button>
    </div>
    <Section title="Key Specializations">
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.id} className="p-8 bg-white rounded-xl shadow-lg border-b-4 border-tech-blue">
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-secondary mb-6">{s.description}</p>
            <div className="flex flex-wrap gap-2">
              {s.tools.map(t => <span key={t} className="text-xs bg-secondary-light px-2 py-1 rounded">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  </motion.div>
);

const Services = () => (
  <Section title="Our Technical Expertise" subtitle="End-to-end solutions for modern businesses">
    <div className="space-y-12">
      {services.map((s, i) => (
        <div key={s.id} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
            <p className="text-lg mb-6">{s.description}</p>
            <ul className="grid grid-cols-2 gap-2">
              {s.tools.map(tool => <li key={tool} className="flex items-center text-tech-blue">✓ {tool}</li>)}
            </ul>
          </div>
          <div className="flex-1 bg-tech-slate h-64 w-full rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
            {s.title[0]}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Pricing = () => (
  <Section title="Transparent Pricing" dark>
    <div className="grid md:grid-cols-3 gap-8">
      {pricing.map(p => (
        <div key={p.tier} className={`p-8 rounded-2xl ${p.popular ? 'bg-tech-blue' : 'bg-tech-slate'} flex flex-col`}>
          <h3 className="text-2xl font-bold">{p.tier}</h3>
          <div className="my-6">
            <span className="text-4xl font-extrabold">{p.price}</span>
            <span className="ml-2 opacity-80">{p.period}</span>
          </div>
          <ul className="mb-8 space-y-4 flex-grow">
            {p.features.map(f => <li key={f}>• {f}</li>)}
          </ul>
          <button className="w-full py-3 bg-white text-primary-dark font-bold rounded-lg">{p.cta}</button>
        </div>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section title="Featured Projects">
    <div className="grid md:grid-cols-2 gap-10">
      {projects.map(proj => (
        <div key={proj.title} className="group relative overflow-hidden rounded-xl bg-primary-dark aspect-video">
           <div className="absolute inset-0 bg-tech-blue opacity-10 group-hover:opacity-30 transition-opacity" />
           <div className="absolute bottom-0 left-0 p-8">
              <span className="text-tech-blue font-bold text-sm uppercase tracking-widest">{proj.category}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-white opacity-80 mb-4">{proj.description}</p>
              <div className="flex gap-2">
                {proj.tags.map(t => <span key={t} className="text-[10px] bg-white/20 text-white px-2 py-1 rounded">{t}</span>)}
              </div>
           </div>
        </div>
      ))}
    </div>
  </Section>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<Section title="About GummerTech"><p className="max-w-3xl text-center mx-auto text-xl">{siteMeta.description}</p></Section>} />
            <Route path="/skills" element={<Section title="Technical Proficiencies"><div className="grid md:grid-cols-3 gap-8">{skills.map(s => <div key={s.category}><h3 className="font-bold mb-4">{s.category}</h3>{s.items.map(i => <div key={i.name} className="mb-4"><div className="flex justify-between mb-1"><span>{i.name}</span><span>{i.level}%</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-tech-blue h-2 rounded-full" style={{width: `${i.level}%`}}></div></div></div>)}</div>)}</div></Section>} />
            <Route path="/experience" element={<Section title="Work History & Certs"><div className="space-y-8">{experience.map(e => <div key={e.company} className="border-l-4 border-tech-blue pl-6"><h3 className="text-2xl font-bold">{e.role}</h3><p className="text-tech-blue">{e.company} | {e.period}</p><p className="mt-2">{e.description}</p></div>)}</div></Section>} />
            <Route path="/contact" element={<Section title="Contact Us"><div className="max-w-xl mx-auto"><form className="space-y-4"><input type="text" placeholder="Name" className="w-full p-3 rounded border" /><input type="email" placeholder="Email" className="w-full p-3 rounded border" /><textarea placeholder="Message" rows={5} className="w-full p-3 rounded border"></textarea><button className="w-full py-3 bg-primary text-white font-bold rounded">Send Message</button></form></div></Section>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;