import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, ExternalLink, Code, Server, Cloud, Palette, Terminal, ChevronRight } from 'lucide-react';
import { SERVICES, PROJECTS, SKILLS } from './data/portfolioData';

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              TECH_PRO
            </Link>
            
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${pathname === link.path ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
               <button onClick={() => setIsDark(!isDark)} className="p-2 mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-12">
        {children}
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400">© 2024 Tech Professional Portfolio. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

const Home = () => (
  <div className="max-w-7xl mx-auto px-4">
    <section className="py-20 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
        Software Engineer • DevOps Specialist • Designer
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
        Engineering <span className="text-blue-600">Resilient</span> Solutions
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
        Bridging the gap between software development, cloud infrastructure, and human-centric design for enterprise-scale impacts.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/projects" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
          View Projects
        </Link>
        <Link to="/contact" className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:shadow-md transition-all">
          Let's Talk
        </Link>
      </div>
    </section>

    <section className="grid md:grid-cols-3 gap-8 py-20">
        <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="text-blue-600 mb-4"><Terminal size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Modular Code</h3>
            <p className="text-slate-500">Clean, testable architecture ensuring maintainability and scalability across the stack.</p>
        </div>
        <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="text-blue-600 mb-4"><Cloud size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Cloud First</h3>
            <p className="text-slate-500">Infrastructure as code and automated pipelines for zero-downtime deployments.</p>
        </div>
        <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="text-blue-600 mb-4"><Palette size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Design Driven</h3>
            <p className="text-slate-500">Aesthetic interfaces meeting high accessibility standards and user satisfaction.</p>
        </div>
    </section>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Software', 'DevOps', 'Networking', 'Design'];

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(project => (
          <div key={project.id} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all">
            <div className="relative overflow-hidden h-48">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
               <div className="absolute top-2 right-2 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded text-xs font-bold">{project.category}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] font-mono">{t}</span>)}
              </div>
              <button className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                View Case Study <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700">
      <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
      <p className="text-slate-500 mb-8">Have a project in mind or just want to chat about tech? Drop me a message below.</p>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea rows="4" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can I help you?"></textarea>
        </div>
        <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">Send Message</button>
      </form>
      <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700 flex justify-center gap-8">
        <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Github /></a>
        <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin /></a>
        <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Mail /></a>
      </div>
    </div>
  </div>
);

const GenericPage = ({ title, data }) => (
  <div className="max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-12">{title}</h1>
    <div className="grid md:grid-cols-2 gap-8">
       {data.map((item, idx) => (
         <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
           <h3 className="text-xl font-bold mb-4">{item.title || item.category}</h3>
           <p className="text-slate-500 mb-6">{item.description}</p>
           <div className="flex flex-wrap gap-2">
              {(item.tags || item.items).map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-sm font-medium">
                  {tag}
                </span>
              ))}
           </div>
         </div>
       ))}
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<GenericPage title="My Services" data={SERVICES} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<GenericPage title="Technical Skills" data={SKILLS} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="text-center py-20 text-3xl font-bold">Coming Soon...</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
