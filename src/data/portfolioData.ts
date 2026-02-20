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
  // ─── REAL PROJECTS ───────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Saheri Hardware Centre",
    category: "Web Development",
    description: "A professional website for a trusted hardware supply business in Vadodara — showcasing power tools, construction materials, adhesives, modular hardware, and building supplies with a focus on quality and transparent pricing.",
    image: "/assets/portfolio/saheri-hardware-centre.png",
    previewUrl: "https://saherihardwarecentre.vercel.app/",
    tags: ["Static", "SEO", "JS (Vanilla)"],
    client: "Aliakbar Saherwala (CEO)",
    year: "Jan 2026",
    featured: true
  },

  // ─── REAL PROJECT 2 ──────────────────────────────────────────────────────────
  {
    id: 2,
    title: "MAT Overseas",
    category: "Web Development",
    description: "A premium website for a hardware and modular kitchen solutions business in Vadodara — showcasing high-quality fittings, cabinet accessories, and modular components for residential and commercial interiors.",
    image: "/assets/portfolio/mat-overseas.png",
    previewUrl: "https://mat-overseas.vercel.app/",
    tags: ["GSAP", "API (Forms)", "SEO"],
    client: "Taher Sandalwala (Founder)",
    year: "Feb 2026",
    featured: true
  },

  // ─── REAL PROJECT 3 ──────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Portfolio Website — Alakmar Saherwala",
    category: "Web Development",
    description: "A visually appealing single-page portfolio website built with a modern tech stack to showcase the client's profile. Features proper meta tags for SEO and enhanced Google search positioning.",
    image: "/assets/portfolio/Alakmar-Saherwala.png",
    previewUrl: "https://a-p-trial.vercel.app/",
    tags: ["TailwindCSS", "TypeScript", "Vite"],
    client: "Alakmar Saherwala",
    year: "Feb 2026",
    featured: true
  },

  // ─── REAL PROJECT 4 ──────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Portfolio Website — Mohammed Fatehpurwala",
    category: "Web Development",
    description: "A portfolio website for a Cloud and Cybersecurity professional, showcasing career milestones in an appealing style. Features optimised meta tags for enhanced SEO and Google search positioning.",
    image: "/assets/portfolio/mohammed-fatehpurwala.png",
    previewUrl: "https://mohammed-portfolio-olive.vercel.app/",
    tags: ["HTML5", "CSS3", "Vanilla JS"],
    client: "Mohammed Fatehpurwala",
    year: "Feb 2026",
    featured: true
  },
];
