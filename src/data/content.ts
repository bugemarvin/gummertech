import { Service, Project, PricingPlan, SkillCategory, ExperienceItem } from '../types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Software Engineering',
    description: 'Bespoke full-stack applications built with modern frameworks and robust backends.',
    icon: 'Code',
    features: ['React/Next.js Architecture', 'Node.js & Python Backends', 'RESTful & GraphQL APIs', 'Legacy System Modernization']
  },
  {
    id: '2',
    title: 'DevOps & Cloud',
    description: 'Infrastructure automation and cloud native strategies for high availability.',
    icon: 'Cloud',
    features: ['AWS/Azure/GCP Management', 'CI/CD Pipelines (GitHub Actions)', 'Docker & Kubernetes', 'Infrastructure as Code']
  },
  {
    id: '3',
    title: 'Networking & SysAdmin',
    description: 'Secure, scalable network designs and systems administration for enterprise reliability.',
    icon: 'Network',
    features: ['Zero Trust Architecture', 'VPN & Firewall Configuration', 'Linux/Windows Administration', 'Network Auditing']
  },
  {
    id: '4',
    title: 'UI/UX & Design',
    description: 'User-centric designs focused on conversions and exceptional digital experiences.',
    icon: 'Figma',
    features: ['Responsive Prototyping', 'Design Systems', 'Brand Visual Identity', 'Accessibility Compliance']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'FinTech Dashboard',
    category: 'Software',
    description: 'A real-time analytics platform for high-frequency trading visualization.',
    tech: ['TypeScript', 'React', 'D3.js', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'CloudGuard Pro',
    category: 'Cloud',
    description: 'Automated security auditing tool for AWS multi-account environments.',
    tech: ['Python', 'Terraform', 'Lambda', 'AWS SDK'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Network Nexus',
    category: 'Networking',
    description: 'Enterprise-grade SD-WAN orchestration interface for distributed offices.',
    tech: ['Go', 'Docker', 'SNMP', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'tier1',
    name: 'Consulting',
    price: '$150',
    period: 'per hour',
    features: ['Strategic Technical Roadmap', 'Code Reviews', 'Security Assessment', 'Cloud Cost Optimization'],
    cta: 'Book Session'
  },
  {
    id: 'tier2',
    name: 'Project Based',
    price: '$5,000',
    period: 'starting from',
    features: ['Dedicated Development Team', 'End-to-end Project Management', 'Full Source Ownership', '2 Months Post-launch Support'],
    isFeatured: true,
    cta: 'Get Quote'
  },
  {
    id: 'tier3',
    name: 'Managed Services',
    price: '$1,200',
    period: 'per month',
    features: ['24/7 Server Monitoring', 'Backup & Disaster Recovery', 'Security Patching', 'Priority Incident Response'],
    cta: 'Contact Sales'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Development',
    skills: [{ name: 'React/TS', level: 95 }, { name: 'Node.js', level: 90 }, { name: 'Python', level: 85 }, { name: 'PostgreSQL', level: 88 }]
  },
  {
    name: 'Infrastructure',
    skills: [{ name: 'AWS/GCP', level: 92 }, { name: 'Terraform', level: 85 }, { name: 'Docker/K8s', level: 88 }, { name: 'Linux Admin', level: 94 }]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    organization: 'Global Tech Corp',
    role: 'Lead Cloud Architect',
    period: '2020 - Present',
    description: ['Managed multi-cloud infrastructure migration', 'Implemented CI/CD reducing deploy time by 60%'],
    type: 'Work'
  },
  {
    organization: 'Amazon Web Services',
    role: 'Certified Solutions Architect - Professional',
    period: '2022',
    description: ['Advanced cloud architecture validation'],
    type: 'Certification'
  }
];