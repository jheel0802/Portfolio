
import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <ShieldCheck className="text-indigo-600 w-8 h-8" />
              <h2 className="text-4xl font-bold text-gray-800">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map(cert => (
                cert.link ? (
                  <a 
                    key={cert.name} 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-xl bg-white border border-gray-200/80 hover:border-indigo-400/50 hover:bg-gray-50 transition-all group shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                      <span className="text-gray-700 font-bold">{cert.name}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </a>
                ) : (
                  <div key={cert.name} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-200/80">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                    <span className="text-gray-700 font-bold">{cert.name}</span>
                  </div>
                )
              ))}
            </div>
        </div>
    </section>
  );
};

export default Certifications;
