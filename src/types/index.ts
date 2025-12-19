export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Software' | 'Cloud' | 'Networking' | 'Design';
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isFeatured?: boolean;
  cta: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string[];
  type: 'Work' | 'Certification';
}