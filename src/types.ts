
export interface ExperiencePoint {
  label?: string;
  text: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  points: ExperiencePoint[];
}

export interface Project {
  title: string;
  description: string | string[];
  tech: string[];
  categories: string[];
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  category: string;
  skills: (string | { name: string; link?: string })[];
}

