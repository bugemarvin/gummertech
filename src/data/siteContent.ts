export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export const siteMeta = {
  companyName: "GummerTech",
  tagline: "Engineering the Digital Frontier",
  description: "Multi-disciplinary technology consulting specializing in Full-stack Software Engineering, DevOps, Cloud infrastructure, and Systems Administration.",
  email: "solutions@gummertech.io",
  phone: "+1 (555) 010-9988",
  location: "Silicon Valley / Remote Global"
};

export const services = [
  {
    id: 1,
    title: "Software Engineering",
    description: "Scalable frontend, backend, and full-stack solutions built with React, Node.js, and Python.",
    icon: "Code",
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    id: 2,
    title: "DevOps & Cloud",
    description: "Automated CI/CD pipelines and infrastructure as code (IaC) for high-availability environments.",
    icon: "Cloud",
    tools: ["AWS", "Docker", "Kubernetes", "Terraform"]
  },
  {
    id: 3,
    title: "Networking & SysAdmin",
    description: "Secure, robust network architectures and enterprise system management.",
    icon: "Server",
    tools: ["Linux", "Cisco", "Network Security", "Proxmox"]
  }
];

export const pricing = [
  {
    tier: "Starter",
    price: "$1,500",
    period: "per project",
    features: ["UI/UX Design", "Single Page Application", "Basic SEO", "1 Month Support"],
    cta: "Get Started"
  },
  {
    tier: "Professional",
    price: "$4,500",
    period: "per project",
    popular: true,
    features: ["Full-Stack Development", "Cloud Integration", "Database Design", "3 Months Support"],
    cta: "Hire Us"
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "quote",
    features: ["Distributed Systems", "DevOps Automation", "24/7 Monitoring", "Priority Support"],
    cta: "Contact Sales"
  }
];

export const projects = [
  {
    title: "Nexus Cloud Dashboard",
    category: "DevOps",
    description: "A comprehensive monitoring tool for hybrid cloud deployments.",
    tags: ["React", "Go", "Kubernetes"],
    link: "#"
  },
  {
    title: "E-Commerce Engine",
    category: "Software",
    description: "High-performance headless commerce API with real-time inventory management.",
    tags: ["Next.js", "NestJS", "Redis"],
    link: "#"
  }
];

export const skills = [
  { category: "Frontend", items: [{ name: "React", level: 95 }, { name: "TypeScript", level: 90 }] },
  { category: "Backend", items: [{ name: "Node.js", level: 88 }, { name: "Python", level: 82 }] },
  { category: "Infrastructure", items: [{ name: "Docker", level: 92 }, { name: "AWS", level: 85 }] }
];

export const experience = [
  {
    company: "TechGlobal Solutions",
    role: "Lead Systems Engineer",
    period: "2020 - Present",
    description: "Architecting cloud migration strategies for Fortune 500 clients."
  },
  {
    company: "BuildRight Software",
    role: "Senior Full-Stack Developer",
    period: "2017 - 2020",
    description: "Led the development of a flagship SaaS product reaching 1M+ users."
  }
];