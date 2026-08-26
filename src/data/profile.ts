import type { ProfileData } from '../types/profile';

export const profileData: ProfileData = {
  firstName: "Biswajit",
  lastName: "Mohapatra",
  title: "Full Stack Developer & Data Engineer",
  tagline: "Full-stack Developer | Crafting reliable software",
  summary:
    "Passionate Full Stack Developer & Data Engineer with 1.55+ years of experience building production-grade web applications and distributed data systems. Skilled across the entire stack — from pixel-perfect React UIs to robust Node.js APIs, MongoDB schemas, data pipelines, high-throughput scraping engines, and scalable e-commerce platforms.",
  contact: {
    email: "biswajitmohapatra447@gmail.com",
    phone: "+91 8018035461",
    location: "Bhubaneswar, Odisha, India",
    website: "biswajit-mohapatra-portfolio.onrender.com",
    linkedin: "linkedin.com/in/biswajitmohapatra1",
    github: "github.com/codebybiswajit",
  },
  interests: ["Open Source", "Competitive Programming", "Tech Blogging"],
  openToWork: true,
  availableFrom: "Immediately",
  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Nalanda Institute of Technology",
      location: "Bhubaneswar, Odisha",
      start: "2021",
      end: "2025",
      gpa: "8.06 / 10",
      honors: "First Class with Distinction",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Computer Organization and Architecture",
      ],
    },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Capsitech Software Solution Pvt. Ltd.",
      location: "Jodhpur, Rajasthan, India",
      type: "Full-time",
      start: "JUN 2026",
      end: "Present",
      bullets: [
        "Integrated secure bank connection into SA100 data requests, enabling automated retrieval of financial records for individual tax filings.",
        "Engineered enhancements to the UK Individual (SA100) and Partnership (SA800) tax systems within the Acting Office, improving accuracy and compliance workflows.",
        "Developed and optimized P11D data request functionality, streamlining employer reporting of employee benefits and expenses.",
        "Collaborated with HMRC and the Acting Office to modernize tax filing processes, reducing manual intervention and strengthening system reliability.",
        "Implemented microservice architecture for both frontend and backend, improving scalability, enabling independent deployments, and reducing system downtime.",
      ],
      tech: [],
    },
    {
      title: "Python Developer Intern",
      company: "CodeSoft",
      location: "Remote",
      type: "Internship",
      start: "OCT 2023",
      end: "NOV 2023",
      bullets: [
        "Built real-time monitoring dashboards using Python to track crawler health, proxy rotation, and data quality metrics.",
        "Reduced data duplication by 35% with BeautifulSoup-powered parsing and Python-based deduplication logic across consumer pipelines.",
      ],
      tech: [],
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      desc: "Full-stack e-commerce solution with JWT/OAuth2 auth, Elasticsearch product search, persistent Redis cart, Stripe payments, and a real-time admin dashboard.",
      url: "",
      highlights: [],
    },
    {
      name: "Hospital Management System",
      tech: ["Node.js", "Express", "React", "MySQL", "Redis", "WebSockets"],
      desc: "End-to-end hospital operations platform: patient records (EHR), smart appointment scheduling, automated billing & insurance claims, lab integrations, and HIPAA-grade security.",
      url: "",
      highlights: [],
    },
    {
      name: "Python Web Scraping Engine",
      tech: [
        "Python",
        "Scrapy",
        "Selenium",
        "Playwright",
        "Kafka",
        "MongoDB",
        "Redis",
        "Grafana",
      ],
      desc: "Multi-node Scrapy cluster with Kafka queue, proxy rotation, CAPTCHA solving, request fingerprint randomization, and a real-time Grafana monitoring dashboard.",
      url: "",
      highlights: [],
    },
  ],
  skillGroups: [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "CSS / Tailwind",
        "Framer Motion",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Data & Scraping",
      skills: ["Selenium", "BeautifulSoup"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["GitHub Actions"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Stripe API", "JWT / OAuth2", "WebSockets", "Linux"],
    },
  ],
  certifications: [
    {
      name: "AI Appreciate & AI Aware Badge",
      issuer: "CBSE and Intel",
      date: "AUG 2023",
    },
    {
      name: "Python",
      issuer: "Hacker Rank",
      date: "28 JAN 2024",
    },
  ],
  githubPinnedRepos: [
    "OrgFood",
    "dev-app",
    "Dev.Api",
    "HackLab.App",
    "HackLab.API",
    "BChat.API",
    "BChat.App",
  ],
  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Hindi", proficiency: "Fluent" },
    { language: "Odia", proficiency: "Native" },
  ],
};
