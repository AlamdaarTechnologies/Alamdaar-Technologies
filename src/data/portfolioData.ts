export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  previewUrl: string;
  tags: string[];
  client: string;
  year: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "TechStart Global Website",
    category: "Web Development",
    description: "A cutting-edge corporate website with advanced animations and seamless user experience for a leading tech startup.",
    image: "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjQ2NDQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/techstart",
    tags: ["React", "Next.js", "Tailwind"],
    client: "TechStart Inc.",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "FinanceApp Mobile Interface",
    category: "Web Development",
    description: "Intuitive mobile-first progressive web app for personal finance management with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNDQ1NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/financeapp",
    tags: ["PWA", "TypeScript", "Chart.js"],
    client: "FinTech Solutions",
    year: "2024",
    featured: true
  },
  {
    id: 3,
    title: "LuxeStore E-commerce Platform",
    category: "Web Development",
    description: "High-conversion e-commerce platform with advanced product filtering, secure payments, and inventory management.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjQyNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/luxestore",
    tags: ["E-commerce", "Stripe", "Node.js"],
    client: "LuxeStore",
    year: "2024",
    featured: true
  },
  {
    id: 4,
    title: "Analytics Dashboard Pro",
    category: "Web Development",
    description: "Comprehensive analytics dashboard with real-time data processing and interactive visualizations for enterprise clients.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNDQ1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/analytics",
    tags: ["Dashboard", "D3.js", "PostgreSQL"],
    client: "DataCorp",
    year: "2024",
    featured: true
  },
  {
    id: 5,
    title: "Creative Agency Portfolio",
    category: "Web Development",
    description: "Stunning portfolio website showcasing creative work with smooth animations and immersive user experience.",
    image: "https://images.unsplash.com/photo-1720293049481-c0299876d90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYyNTIyNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/creative",
    tags: ["Portfolio", "GSAP", "Three.js"],
    client: "Creative Studios",
    year: "2023",
    featured: false
  },
  {
    id: 6,
    title: "Corporate Business Site",
    category: "Web Development",
    description: "Professional corporate website with multi-language support and integrated CMS for easy content management.",
    image: "https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjUyMjc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/corporate",
    tags: ["CMS", "Multilingual", "SEO"],
    client: "Global Corp",
    year: "2023",
    featured: false
  },
  {
    id: 7,
    title: "SaaS Product Landing Page",
    category: "Web Development",
    description: "High-converting SaaS landing page with A/B testing capabilities and integrated marketing automation.",
    image: "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjQ2NDQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/saas",
    tags: ["SaaS", "Marketing", "Analytics"],
    client: "CloudTech",
    year: "2023",
    featured: false
  },
  {
    id: 8,
    title: "Healthcare Platform",
    category: "Security",
    description: "HIPAA-compliant healthcare management platform with end-to-end encryption and secure patient data handling.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNDQ1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    previewUrl: "https://example.com/healthcare",
    tags: ["Security", "HIPAA", "Encryption"],
    client: "MediCare Systems",
    year: "2023",
    featured: false
  }
];
