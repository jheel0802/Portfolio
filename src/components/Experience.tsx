
import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-12">
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-2">My Journey</span>
          <h2 className="text-4xl font-bold text-gray-800">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l border-gray-200 group">
              <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6.5px] top-1 group-hover:scale-125 transition-transform"></div>
              <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-gray-500 text-sm font-medium">{exp.period}</span>
              </div>
              <div className="text-indigo-500 font-semibold mb-4 flex items-center gap-2">
                {exp.company}
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {exp.points.map((p, i) => (
                  <li key={i} className="text-gray-600 flex gap-3 text-sm leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
