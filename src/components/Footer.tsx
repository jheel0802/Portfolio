
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-gray-200/80 text-center text-gray-500 text-sm bg-gray-50">
      <p className="font-bold text-indigo-600 mb-4 tracking-widest uppercase text-xs">Ready for the next challenge.</p>
      <div className="flex justify-center gap-6 mb-8">
          <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-indigo-600 transition-colors"><Mail className="w-6 h-6" /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Github className="w-6 h-6" /></a>
      </div>
      <p>© {new Date().getFullYear()} {CONTACT.name}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
