
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { CONTACT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-24 px-6 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-200/20 blur-[120px] rounded-full -z-10"></div>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500">systems</span> that scale <br className="hidden md:block" />
          & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-indigo-500">AI</span> that thinks.
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
          Software Engineer & Researcher at <span className="text-gray-800 font-semibold">NC State University</span>. 
          Focused on bridging the gap between high-performance distributed systems and intelligent behavioral forecasting.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={`mailto:${CONTACT.email}`}
            className="px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2.5"
          >
            <Mail className="w-5 h-5" /> Get In Touch
          </a>
          <a 
            href={CONTACT.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3.5 bg-indigo-600/10 border border-indigo-500/30 text-indigo-600 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2.5"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a 
            href={CONTACT.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3.5 bg-indigo-600/10 border border-indigo-500/30 text-indigo-600 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2.5"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
