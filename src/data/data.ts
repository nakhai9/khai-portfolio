import {
  ArrowUp,
  Code,
  FolderCode,
  Home,
  MessageCircleMore,
  SwatchBook,
  User,
} from "lucide-react";

export const APP_DATA = {
  me: {
    name: "Khai Nguyen",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/firestore-project-6ae19.appspot.com/o/full-resume.png?alt=media&token=031a8c1f-c7d2-49a2-bf2b-ed67a296ff3f",
    summary:
      "A Website Developer with over 2 years of experience, working with TypeScript and JavaScript. Technical expertise covers modern frameworks and libraries, including Angular, React.js, and Next.js. Focused on building clean, responsive, and user-friendly web applications. Skilled at problem-solving and collaboration to deliver high-quality products.",
    role: "Website Developer",
    email: "nakhai.fw@gmail.com",
    phone: "0945757051",
    address: "Can Tho City, Vietnam",
    linkedin: "https://www.linkedin.com/in/nakhai9/",
    github: "https://github.com/nakhai9",
    description:
      "I love coding and constantly explore best practices in my field to make my code more efficient and reliable. What excites me the most is building products that not only perform well but also bring a safe and enjoyable experience to users.",
  },
  navLinks: [
    { id: "home", title: "Home", icon: Home, href: "#home" },
    { id: "about-me", title: "About me", icon: User, href: "#about-me" },
    { id: "skills", title: "Skills", icon: Code, href: "#skills" },
    {
      id: "experiences",
      title: "Experiences",
      icon: SwatchBook,
      href: "#experiences",
    },
    {
      id: "projects",
      title: "Projects",
      icon: FolderCode,
      href: "#projects",
    },
    {
      id: "contact",
      title: "Contact",
      icon: MessageCircleMore,
      href: "#contact",
    },
    {
      id: "home",
      title: "Scroll to top",
      icon: ArrowUp,
      href: "#home",
    },
  ],
  skills: [
    {
      name: "HTML",
      icon: "/skill-icons/html5.svg",
    },
    {
      name: "CSS",
      icon: "/skill-icons/css3.svg",
    },
    {
      name: "Javascript",
      icon: "/skill-icons/js.svg",
    },
    {
      name: "Typescript",
      icon: "/skill-icons/typescript.svg",
    },
    {
      name: "Angular",
      icon: "/skill-icons/angular.svg",
    },
    {
      name: "React",
      icon: "/skill-icons/react.svg",
    },
    {
      name: "Nodejs",
      icon: "/skill-icons/node-js.svg",
    },
    {
      name: "Tailwind",
      icon: "/skill-icons/tailwind.svg",
    },
    {
      name: "Bootstrap",
      icon: "/skill-icons/bootstrap.svg",
    },
    {
      name: "Next.js",
      icon: "/skill-icons/Next.js.svg",
    },
    {
      name: "Tortoise Git",
      icon: "/skill-icons/TortoiseGit.svg",
    },
    {
      name: "Git",
      icon: "/skill-icons/Git.svg",
    },
    {
      name: "Selenium",
      icon: "/skill-icons/Selenium.svg",
    },
    {
      name: "MySQL",
      icon: "/skill-icons/MySQL.svg",
    },
    {
      name: "Nest.js",
      icon: "/skill-icons/Nest.js.svg",
    },
    {
      name: "Vercel",
      icon: "/skill-icons/Vercel.svg",
    },
  ],
  projects: [
    {
      name: "QR Code Generate",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      description:
        "A web application that allows users to generate QR codes for URLs, text, and other data types.",
      imageUrl: "/images/qr-code.png",
      launchUrl: "https://qr-code-generate-chi.vercel.app/",
    },
    {
      name: "Portfolio",
      technologies: ["React.js", "TypeScript", "Tailwind"],
      description:
        "A personal portfolio website to showcase my projects and skills.",
      imageUrl: "/images/portfolio.png",
      launchUrl: "https://khai-portfolio.vercel.app/",
    },
    {
      name: "Bill Split",
      technologies: ["Gemini AI", "Next.js", "TypeScript", "Tailwind"],
      description:
        "A web application that makes splitting bills among friends and family effortless. With AI-powered bill scanning a receipt.",
      imageUrl: "/images/bill-split.png",
      launchUrl: "https://billsplit-fake.vercel.app/",
    },
    {
      name: "Sothuchi App (building)",
      technologies: ["Nest.js", "Next.js", "TypeScript", "Tailwind", "Gemini AI"],
      description:
        "of what you're spending, earning and saving. By keeping track of your expenses you know exactly where your money's going to. This way you can make sure that your money is used wisely.",
      imageUrl: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
      launchUrl: "https://sothuchi-app.vercel.app",
    },
  ],
  emailServiceConfig: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
  },
  experiences: [
    {
      companyName: "Simplify Dalat - Can Tho Campus",
      role: "Software Developer",
      from: "August 2022",
      to: "present",
      duties: [
        "Developed and maintained responsive, user-friendly Uis based on client requirements",
        "Migrated legacy UI use standalone component to improve performance",
        "Identified and removed redundant code, boosting app performance",
        "Wrote automation tests using Selenium Webdriver",
        "Worked directly with client to build and implement new features",
        "Maintained system and upgraded new UIs based on the design",
        "Wrote user guide for the end customer",
        "Integrated social login feature with Facebook and Google",
        "Worked in an Agile Scrum team environment",
        "Developed and maintained basic backend APIs to support frontend team",
        "Took initiative to fix minor backend issues during frontend tasks",
      ],
    },
  ],
};
