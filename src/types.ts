
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  points: string[];
}

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  category: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  link?: string;
}
