
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  ShieldCheck, 
  ChevronRight,
  Monitor,
  Award,
  Terminal,
  MapPin
} from 'lucide-react';
import { CONTACT, SKILLS, EXPERIENCES, PROJECTS, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('AI/ML');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const projectCategories = ['AI/ML', 'Full-Stack', 'Systems', 'Cloud/DevOps', 'Security'];

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => handleScrollTo(e, 'top')}
            className="text-xl font-bold tracking-tighter text-white"
          >
            JHEEL<span className="text-blue-500">.GALA</span>
          </a>
          
          <div className="flex gap-6 md:gap-8 text-sm font-medium">
            {['Experience', 'Projects', 'Skills', 'Education'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">systems</span> that scale <br className="hidden md:block" />
            & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">AI</span> that thinks.
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            Software Engineer & Researcher at <span className="text-white font-semibold">NC State University</span>. 
            Focused on bridging the gap between high-performance distributed systems and intelligent behavioral forecasting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${CONTACT.email}`}
              className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2.5"
            >
              <Mail className="w-5 h-5" /> Get In Touch
            </a>
            <a 
              href={CONTACT.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3.5 bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2.5"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a 
              href={CONTACT.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3.5 bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2.5"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#0d0d10]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col mb-12">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2">My Journey</span>
            <h2 className="text-4xl font-bold text-white">Work Experience</h2>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10 group">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1 group-hover:scale-125 transition-transform"></div>
                <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <span className="text-slate-500 text-sm font-medium">{exp.period}</span>
                </div>
                <div className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                  {exp.company}
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-500 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-slate-400 flex gap-3 text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-[10px] font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2">Portfolio</span>
              <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-lg border border-white/5">
              {projectCategories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="glass-card group flex flex-col h-full rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all animate-in fade-in duration-500">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 bg-blue-500/10 rounded-lg">
                      {project.category === 'AI/ML' && <Cpu className="w-4 h-4 text-blue-500" />}
                      {project.category === 'Full-Stack' && <Globe className="w-4 h-4 text-blue-500" />}
                      {project.category === 'Systems' && <Terminal className="w-4 h-4 text-blue-500" />}
                      {project.category === 'Cloud/DevOps' && <Monitor className="w-4 h-4 text-blue-500" />}
                      {project.category === 'Security' && <ShieldCheck className="w-4 h-4 text-blue-500" />}
                    </span>
                    <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="space-y-2 mb-6 flex-grow">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-slate-400 text-[11px] leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#0d0d10]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-white/10 flex-grow"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest text-sm text-center">Tech Stack</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((group, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-5">
                  {idx === 0 && <Code2 className="text-blue-400 w-5 h-5" />}
                  {idx === 1 && <Globe className="text-blue-400 w-5 h-5" />}
                  {idx === 2 && <Cpu className="text-blue-400 w-5 h-5" />}
                  {idx === 3 && <Monitor className="text-blue-400 w-5 h-5" />}
                  {idx === 4 && <Database className="text-blue-400 w-5 h-5" />}
                  <h3 className="font-bold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="skill-tag px-3 py-1 bg-white/5 border border-white/5 rounded-md text-sm text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Award className="text-blue-500 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-blue-600">
                <h3 className="text-2xl font-bold text-white">Master of Computer Science</h3>
                <p className="text-blue-400 font-semibold text-lg">North Carolina State University</p>
                <div className="flex justify-between mt-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Exp: May 2026</span>
                  <span className="font-bold text-white">GPA: 3.8 / 4.0</span>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-slate-600">
                <h3 className="text-2xl font-bold text-white leading-tight">Bachelor of Technology in Computer Engineering with Honors in Data Science</h3>
                <p className="text-slate-400 font-semibold text-lg mt-2">Somaiya Vidyavihar University</p>
                <div className="flex justify-between mt-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> June 2024</span>
                  <span className="font-bold text-white">GPA: 9.0 / 10.0</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-10">
              <ShieldCheck className="text-blue-500 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map(cert => (
                cert.link ? (
                  <a 
                    key={cert.name} 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                      <span className="text-slate-300 font-bold">{cert.name}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  </a>
                ) : (
                  <div key={cert.name} className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                    <span className="text-slate-300 font-bold">{cert.name}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-white/5 text-center text-slate-600 text-sm bg-gradient-to-t from-blue-900/5 to-transparent">
        <p className="font-bold text-blue-500 mb-4 tracking-widest uppercase text-xs">Ready for the next challenge.</p>
        <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${CONTACT.email}`} className="text-slate-400 hover:text-blue-500 transition-colors"><Mail className="w-6 h-6" /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><Github className="w-6 h-6" /></a>
        </div>
        <p>© {new Date().getFullYear()} {CONTACT.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
