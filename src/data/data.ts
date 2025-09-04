export const APP_DATA = {
  me: {
    name: "Khai Nguyen",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/firestore-project-6ae19.appspot.com/o/full-resume.png?alt=media&token=031a8c1f-c7d2-49a2-bf2b-ed67a296ff3f",
    summary:
      "With 3 years of hands-on experience as a front-end developer, I specialize in building clean, intuitive, and scalable interfaces that drive user engagement. I take pride in transforming complex requirements into seamless digital experiences.",
    role: "Frontend Developer",
    email: "khai.fordev@gmail.com",
    phone: "0945757051",
    address: "Can Tho City, Vietnam",
    linkedin: "https://www.linkedin.com/in/nakhai9/",
    github: "https://github.com/nakhai9",
    description:
      "I love coding and constantly explore best practices in my field to make my code more efficient and reliable. What excites me the most is building products that not only perform well but also bring a safe and enjoyable experience to users.",
  },
  navLinks: [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "education",
    //   title: "Education",
    // },
    // {
    //   id: "skills",
    //   title: "Skills",
    // },
    // {
    //   id: "projects",
    //   title: "Projects",
    // },
    // {
    //   id: "contact",
    //   title: "Contact Me",
    // },
  ],
  skills: {},
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
      name: "Expense Tracker App",
      technologies: ["Nextjs", "Firebase", "Tailwind", "MUI"],
      description:
        "A personal finance management app designed to track and organize my income and expenses",
      imageUrl: "/images/wallet.png",
      launchUrl: "https://vitietkiem-ui.vercel.app/",
    },
    {
      name: "Bill Split",
      technologies: ["Gemini AI", "Next.js", "TypeScript", "Tailwind"],
      description:
        "A web application that makes splitting bills among friends and family effortless. With AI-powered bill scanning a receipt.",
      imageUrl: "/images/bill-split.png",
      launchUrl: "https://billsplit-fake.vercel.app/",
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
      technologies: ["angular", "tailwind", "bootstrap", "typescript"],
    },
  ],
};
