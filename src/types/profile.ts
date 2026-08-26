export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  gpa: string;
  honors: string;
  courses: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  name: string;
  tech: string[];
  desc: string;
  url: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  summary: string;
  contact: Contact;
  interests: string[];
  openToWork: boolean;
  availableFrom: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skillGroups: SkillGroup[];
  certifications: Certification[];
  githubPinnedRepos?: string[];
  languages: Language[];
}

export type NavLayout = 'top' | 'left';
