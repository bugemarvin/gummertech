export const siteData = {
  brand: {
    name: "GummerTech",
    tagline: "High-Performance Technology Solutions",
    logoText: "GT",
    contactEmail: "hello@gummertech.io"
  },
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Pricing", path: "/pricing" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ],
  services: [
    {
      id: 1,
      title: "Software Engineering",
      description: "Full-stack development across web and mobile using React, Node.js, and Go.",
      icon: "Code",
      features: ["Custom Web Apps", "API Development", "Legacy Migration"]
    },
    {
      id: 2,
      title: "DevOps & Cloud",
      description: "Cloud infrastructure management and CI/CD pipeline automation.",
      icon: "Cloud",
      features: ["AWS/Azure/GCP", "Kubernetes Orchestration", "Serverless Architecture"]
    },
    {
      id: 3,
      title: "Networking & Systems",
      description: "Secure enterprise network design and proactive systems administration.",
      icon: "Network",
      features: ["VPC Configuration", "Security Audits", "Load Balancing"]
    }
  ],
  pricing: [
    {
      tier: "Starter",
      price: "$1,500",
      period: "starting at",
      features: ["Single Page Application", "Basic Cloud Hosting", "Email Support", "1 Revision"],
      cta: "Inquire Now"
    },
    {
      tier: "Professional",
      price: "$5,000",
      period: "starting at",
      popular: true,
      features: ["Multi-page Dynamic Site", "DevOps Setup", "Database Integration", "3 Revisions", "Priority Support"],
      cta: "Get Started"
    },
    {
      tier: "Enterprise",
      price: "Custom",
      period: "quote",
      features: ["Complex System Architecture", "Full Cloud Infrastructure", "Continuous Monitoring", "Dedicated Lead Engineer"],
      cta: "Contact Sales"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Nexus Cloud Dashboard",
      category: "DevOps",
      description: "A real-time monitoring dashboard for multi-cloud deployments.",
      stack: ["React", "TypeScript", "Tailwind", "Go"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "FinStream Engine",
      category: "Software Engineering",
      description: "High-throughput financial data processing engine.",
      stack: ["Node.js", "Redis", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ],
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL"] },
    { category: "Cloud", items: ["AWS", "Docker", "Kubernetes", "Terraform"] }
  ],
  about: {
    history: "Founded on the principles of engineering excellence and architectural integrity.",
    mission: "Our mission is to empower businesses with scalable, high-performance technology frameworks.",
    values: ["Security First", "Performance Driven", "Transparent Collaboration"]
  }
};