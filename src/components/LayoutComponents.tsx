import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, siteMeta } from '../data/siteContent';
import { Menu, X, Monitor, Database, Shield, Github, Linkedin, Mail } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-primary-dark text-white sticky top-0 z-50 border-b border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight text-tech-blue">
              {siteMeta.companyName.toUpperCase()}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href ? 'bg-primary text-white' : 'hover:bg-primary-dark hover:text-tech-blue'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-primary">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary-dark px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-primary-dark text-secondary-light py-12 border-t border-tech-slate">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="text-2xl font-bold text-tech-blue">{siteMeta.companyName}</h2>
        <p className="mt-2 max-w-xs">{siteMeta.tagline}</p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-tech-blue"><Github size={24} /></a>
        <a href="#" className="hover:text-tech-blue"><Linkedin size={24} /></a>
        <a href={`mailto:${siteMeta.email}`} className="hover:text-tech-blue"><Mail size={24} /></a>
      </div>
    </div>
    <div className="mt-8 text-center text-sm border-t border-tech-slate pt-8">
      &copy; {new Date().getFullYear()} {siteMeta.companyName}. All rights reserved.
    </div>
  </footer>
);

export const Section = ({ title, subtitle, children, dark = false }: any) => (
  <section className={`py-20 ${dark ? 'bg-primary-dark text-white' : 'bg-secondary-light text-primary-dark'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-xl opacity-80">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);