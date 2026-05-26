
import React from 'react';
import { Code2, Globe, Cpu, Monitor, Database } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gray-200 flex-grow"></div>
          <h2 className="text-gray-600 uppercase tracking-widest text-sm text-center font-bold">Tech Stack</h2>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, idx) => (
            <div key={idx} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/80">
              <div className="flex items-center gap-3 mb-5">
                {idx === 0 && <Code2 className="text-indigo-600 w-5 h-5" />}
                {idx === 1 && <Globe className="text-indigo-600 w-5 h-5" />}
                {idx === 2 && <Cpu className="text-indigo-600 w-5 h-5" />}
                {idx === 3 && <Monitor className="text-indigo-600 w-5 h-5" />}
                {idx === 4 && <Database className="text-indigo-600 w-5 h-5" />}
                <h3 className="font-bold text-gray-800">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag px-3 py-1 bg-amber-100 text-amber-800 rounded-md text-sm font-semibold">
                    {skill}
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

export default Skills;
