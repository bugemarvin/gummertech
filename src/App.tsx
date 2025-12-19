import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { siteData } from './data/siteData';
import { Section, Card, Button } from './components/Shared';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-gummer-blue tracking-tighter">{siteData.brand.name}</Link>
        <div className="hidden md:flex gap-8">
          {siteData.navLinks.map(link => (
            <Link key={link.path} to={link.path} className="font-medium text-gummer-navy hover:text-gummer-blue transition-colors">{link.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Home = () => (
  <div>
    <div className="min-h-screen flex items-center bg-gummer-light">
      <Section className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gummer-navy mb-6 leading-tight">
          Engineered for <span className="text-gummer-blue">Scalability</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">{siteData.brand.tagline}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/services"><Button>Explore Services</Button></Link>
          <Link to="/contact"><Button variant="outline">Request Consultation</Button></Link>
        </div>
      </Section>
    </div>
    <Section title="Core Specializations" subtitle="A multi-disciplinary approach to modern technology.">
      <div className="grid md:grid-cols-3 gap-8">
        {siteData.services.map(s => (
          <Card key={s.id}>
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-slate-600 mb-6">{s.description}</p>
            <ul className="space-y-2">
              {s.features.map(f => <li key={f} className="text-sm text-gummer-steel font-medium flex items-center">• {f}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

const Projects = () => (
  <Section title="Selected Work">
    <div className="grid md:grid-cols-2 gap-12">
      {siteData.projects.map(p => (
        <div key={p.id} className="group cursor-pointer">
          <div className="overflow-hidden rounded-2xl mb-4">
            <img src={p.image} alt={p.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h3 className="text-2xl font-bold text-gummer-navy">{p.title}</h3>
          <p className="text-gummer-steel mb-4">{p.description}</p>
          <div className="flex gap-2">
            {p.stack.map(s => <span key={s} className="px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase tracking-wider">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Pricing = () => (
  <Section title="Transparent Pricing">
    <div className="grid md:grid-cols-3 gap-8">
      {siteData.pricing.map((p, i) => (
        <Card key={i} className={p.popular ? 'ring-2 ring-gummer-blue relative scale-105' : ''}>
          {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gummer-blue text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>}
          <h3 className="text-lg font-bold uppercase">{p.tier}</h3>
          <div className="my-6">
            <span className="text-4xl font-black">{p.price}</span>
            <p className="text-slate-400 text-sm italic">{p.period}</p>
          </div>
          <ul className="mb-8 space-y-3">
            {p.features.map(f => <li key={f} className="text-sm text-slate-600">✓ {f}</li>)}
          </ul>
          <Button className="w-full" variant={p.popular ? 'primary' : 'outline'}>{p.cta}</Button>
        </Card>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section title="Get in Touch" subtitle="Have a project in mind? Let's talk architecture.">
    <div className="max-w-2xl mx-auto">
      <Card>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase">Name</label>
              <input type="text" className="p-3 border rounded-lg focus:ring-2 ring-gummer-blue outline-none" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase">Email</label>
              <input type="email" className="p-3 border rounded-lg focus:ring-2 ring-gummer-blue outline-none" placeholder="john@example.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase">Message</label>
            <textarea rows={5} className="p-3 border rounded-lg focus:ring-2 ring-gummer-blue outline-none" placeholder="Describe your needs..."></textarea>
          </div>
          <Button type="button" className="w-full">Send Message</Button>
        </form>
      </Card>
    </div>
  </Section>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gummer-dark">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-gummer-navy py-12 px-6 text-white text-center">
          <p className="text-xl font-bold mb-4">{siteData.brand.name}</p>
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} GummerTech Engineering. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}