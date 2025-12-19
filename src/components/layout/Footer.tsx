import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-techBlue text-gray-300 py-12 border-t border-techBlue-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              Gummer<span className="text-steelBlue-light">Tech</span>
            </Link>
            <p className="max-w-md">
              Leading the digital frontier with full-stack engineering, cloud native expertise, 
              and uncompromising quality in technical consulting.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-steelBlue-light transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-steelBlue-light transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-steelBlue-light transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-steelBlue-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-steelBlue-light transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-steelBlue-light transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-steelBlue-light transition-colors"><Twitter size={20} /></a>
              <a href="mailto:contact@gummertech.com" className="hover:text-steelBlue-light transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-techBlue-light/10 text-sm text-center">
          © {new Date().getFullYear()} GummerTech Systems Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;