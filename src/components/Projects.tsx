
import React, { useState } from 'react';
import { Cpu, Globe, Terminal, Monitor, ShieldCheck, ExternalLink } from 'lucide-react';
import { PROJECTS, CONTACT } from '../constants';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('AI/ML');
  const projectCategories = ['AI/ML', 'Full-Stack', 'Systems', 'Cloud/DevOps', 'Security'];
  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-2">Portfolio</span>
            <h2 className="text-4xl font-bold text-gray-800">Featured Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2 bg-gray-200/80 p-1 rounded-lg border border-gray-200">
            {projectCategories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-900 hover:bg-white/80'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-white group flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200/80 hover:border-indigo-400/50 transition-all shadow-lg">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-indigo-100 rounded-lg">
                    {project.category === 'AI/ML' && <Cpu className="w-4 h-4 text-indigo-600" />}
                    {project.category === 'Full-Stack' && <Globe className="w-4 h-4 text-indigo-600" />}
                    {project.category === 'Systems' && <Terminal className="w-4 h-4 text-indigo-600" />}
                    {project.category === 'Cloud/DevOps' && <Monitor className="w-4 h-4 text-indigo-600" />}
                    {project.category === 'Security' && <ShieldCheck className="w-4 h-4 text-indigo-600" />}
                  </span>
                  <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-800 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                <div className="space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-600 text-[11px] leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-200/80">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
