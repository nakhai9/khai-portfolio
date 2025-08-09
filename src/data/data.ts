export const APP_DATA = {
  me: {
    name: "Khai Nguyen",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/firestore-project-6ae19.appspot.com/o/full-resume.png?alt=media&token=031a8c1f-c7d2-49a2-bf2b-ed67a296ff3f",
    summary:
      "With 3 years of hands-on experience as a front-end developer, I specialize in building clean, intuitive, and scalable interfaces that drive user engagement. I take pride in transforming complex requirements into seamless digital experiences.",
    role: "",
    email: "khai.fordev@gmail.com",
    phone: "0945757051",
    address: "Can Tho City, Vietnam",
    linkedin: "https://www.linkedin.com/in/nakhai9/",
    github: "https://github.com/nakhai9",
  },
  skills: {},
  projects: [
    {
      name: "Portfolio",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      description:
        "A personal portfolio website to showcase my projects and skills.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/firestore-project-6ae19.appspot.com/o/2025-07-26_13-51-13.png?alt=media&token=8c6de435-129f-40b6-a6d2-8e2299da3af9",
      launchUrl: "https://khai-portfolio.vercel.app/",
    },
    {
      name: "Expense Tracker App",
      technologies: ["Nextjs", "Firebase", "Tailwind CSS", "MUI"],
      description:
        "A personal finance management app designed to track and organize my income and expenses",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/firestore-project-6ae19.appspot.com/o/2025-07-26_15-26-19.png?alt=media&token=3467767b-b29f-4a7a-ae73-827cb4af8c7e",
      launchUrl: "https://vitietkiem-ui.vercel.app/",
    },
    {
      name: "Bill Split",
      technologies: ["Gemini AI", "Nextjs", "TypeScript", "Tailwind CSS"],
      description:
        "A web application that makes splitting bills among friends and family effortless. With AI-powered bill scanning a receipt.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/firestore-project-6ae19.appspot.com/o/2025-08-09_16-20-50.png?alt=media&token=8bec531b-3897-4e54-8e90-3bbd014cd638",
      launchUrl: "https://billsplit-fake.vercel.app/",
    },
  ],
  emailServiceConfig: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
  },
};
