export interface Personal {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resume: string;
  profileImage: string;
}

export interface Skill {
  name: string;
  level: string;
  value: number;
}

export interface Skills {
  testing: Skill[];
  tools: Skill[];
  automation: Skill[];
  languages: Skill[];
  other: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  month: string;
  image: string;
}

export interface Profile {
  personal: Personal;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export async function getProfile(): Promise<Profile> {
  const response = await fetch('/profile.json');
  if (!response.ok) {
    throw new Error('Failed to fetch profile data');
  }
  return response.json();
} 