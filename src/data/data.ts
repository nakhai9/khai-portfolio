import {
  ArrowUp,
  Code,
  FolderCode,
  Home,
  MessageCircleMore,
  SwatchBook,
  User,
} from "lucide-react";

import avatarImage from "../assets/avt.jpg";
import resumeFile from "../assets/KhaiNguyen.pdf";

/**
 * Only structural / non-translatable data lives here (names, dates, urls,
 * icons). Every user-facing string is resolved through i18n - see the `*Key`
 * fields and `src/i18n/locales/*.json`.
 */

export type NavLink = {
  id: string;
  labelKey: string;
  icon: typeof Home;
  href: string;
};

export type Experience = {
  id: string;
  companyName: string;
  /** Short badge shown on the timeline rail. */
  initials: string;
  website: string;
  from: string;
  to: string;
  isCurrent?: boolean;
  teamSize: number;
  workplace: "onsite" | "remote";
  technologies: string[];
  aiTools: string[];
};

export type Project = {
  id: string;
  name: string;
  technologies: string[];
  imageUrl?: string;
  launchUrl?: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export const APP_DATA = {
  me: {
    name: "Khai Nguyen",
    avatar: avatarImage,
    resume: resumeFile,
    resumeFileName: "KhaiNguyen.pdf",
    email: "nakhai.fw@gmail.com",
    phone: "(+84) 945757051",
    address: "Can Tho City, Vietnam",
    linkedin: "https://www.linkedin.com/in/nakhai9/",
    linkedinLabel: "linkedin.com/in/nakhai9",
    github: "https://github.com/nakhai9",
    githubLabel: "github.com/nakhai9",
  },
  stats: {
    years: "3+",
    companies: "3",
    technologies: "16+",
  },
  navLinks: [
    { id: "home", labelKey: "nav.home", icon: Home, href: "#home" },
    { id: "about-me", labelKey: "nav.aboutMe", icon: User, href: "#about-me" },
    { id: "skills", labelKey: "nav.skills", icon: Code, href: "#skills" },
    {
      id: "experiences",
      labelKey: "nav.experiences",
      icon: SwatchBook,
      href: "#experiences",
    },
    {
      id: "projects",
      labelKey: "nav.projects",
      icon: FolderCode,
      href: "#projects",
    },
    {
      id: "contact",
      labelKey: "nav.contact",
      icon: MessageCircleMore,
      href: "#contact",
    },
    {
      id: "scroll-to-top",
      labelKey: "nav.scrollToTop",
      icon: ArrowUp,
      href: "#home",
    },
  ] as NavLink[],
  skills: [
    { name: "HTML", icon: "/skill-icons/html5.svg" },
    { name: "CSS", icon: "/skill-icons/css3.svg" },
    { name: "JavaScript", icon: "/skill-icons/js.svg" },
    { name: "TypeScript", icon: "/skill-icons/typescript.svg" },
    { name: "Angular", icon: "/skill-icons/angular.svg" },
    { name: "React", icon: "/skill-icons/react.svg" },
    { name: "Next.js", icon: "/skill-icons/Next.js.svg" },
    { name: "Node.js", icon: "/skill-icons/node-js.svg" },
    { name: "Nest.js", icon: "/skill-icons/Nest.js.svg" },
    { name: "Tailwind CSS", icon: "/skill-icons/tailwind.svg" },
    { name: "Bootstrap", icon: "/skill-icons/bootstrap.svg" },
    { name: "MySQL", icon: "/skill-icons/MySQL.svg" },
    { name: "Selenium", icon: "/skill-icons/Selenium.svg" },
    { name: "Git", icon: "/skill-icons/Git.svg" },
    { name: "Tortoise Git", icon: "/skill-icons/TortoiseGit.svg" },
    { name: "Vercel", icon: "/skill-icons/Vercel.svg" },
  ] as Skill[],
  /* Source: KhaiNguyen.pdf (resume), newest first. */
  experiences: [
    {
      id: "fpt-is",
      companyName: "FPT IS Ho Chi Minh",
      initials: "FIS",
      website: "https://fpt-is.com/",
      from: "07/2026",
      to: "",
      isCurrent: true,
      teamSize: 15,
      workplace: "onsite",
      technologies: [
        "React.js",
        "MUI",
        "Electron Vite",
        "Java Spring Boot",
        "Microfrontend",
      ],
      aiTools: ["Claude", "Codex"],
    },
    {
      id: "transform-tech",
      companyName: "Transform Tech",
      initials: "TT",
      website: "https://transformtech.vn/",
      from: "10/2025",
      to: "06/2026",
      teamSize: 8,
      workplace: "remote",
      technologies: [
        "Angular",
        "Viettel UI Components",
        "Java Spring Boot",
        "Microfrontend",
        "CQRS",
      ],
      aiTools: ["Cursor"],
    },
    {
      id: "simplify-dalat",
      companyName: "Simplify Dalat - Can Tho Branch",
      initials: "SD",
      website: "https://www.simplifydalat.com/",
      from: "11/2022",
      to: "10/2025",
      teamSize: 13,
      workplace: "onsite",
      technologies: [
        "Angular",
        "Next.js",
        "Selenium WebDriver",
        "Zustand",
        "NgRx",
        ".NET",
        "Microfrontend",
      ],
      aiTools: ["Codex"],
    },
  ] as Experience[],
  education: [
    {
      id: "can-tho-university",
      from: "09/2018",
      to: "04/2022",
    },
  ],
  projects: [
    {
      id: "centrixg",
      name: "CentrixG",
      technologies: ["Electron Vite", "React.js", "shadcn/ui", "NestJS", "i18n"],
      imageUrl: "/images/centrixg.png",
      launchUrl: "https://centrixg.com",
    },
    {
      id: "qr-code",
      name: "QR Code Generate",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      imageUrl: "/images/qr-code.png",
      launchUrl: "https://qr-code-generate-chi.vercel.app/",
    },
    {
      id: "portfolio",
      name: "Portfolio",
      technologies: ["React.js", "TypeScript", "MUI"],
      imageUrl: "/images/portfolio.png",
      launchUrl: "https://khai-portfolio.vercel.app/",
    },
    {
      id: "bill-split",
      name: "Bill Split",
      technologies: ["Gemini AI", "Next.js", "TypeScript"],
      imageUrl: "/images/bill-split.png",
      launchUrl: "https://billsplit-fake.vercel.app/",
    },
    {
      id: "sothuchi",
      name: "Sothuchi App",
      technologies: ["Nest.js", "Next.js", "TypeScript", "Gemini AI"],
      imageUrl: "/images/sothuchi.png",
      launchUrl: "https://sothuchi-app.vercel.app",
    },
  ] as Project[],
  emailServiceConfig: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
  },
};
