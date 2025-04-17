import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  starbucks,
  carrent,
  jobit,
} from "../assets";

// Navigation links
export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services offered by Gwang
const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Specialist",
    icon: mobile,
  },
  // {
  //   title: "Community Mod",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

// Technologies that Gwang is skilled in
const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
];

// Professional experience
const experiences: TExperience[] = [
  {
    title: "FPT Software Ho Chi Minh",
    companyName: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - May 2025",
    points: [
      "Developed a user interface for an AI-powered chatbot (AI Agent) using React.js.",
      "Collaborated with backend and AI teams to integrate natural language processing features.",
      "Focused on creating a clean and responsive UI/UX for real-time chatbot interaction."

     
    ],
  },
];

// Client testimonials
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Gwang exceeded our expectations by creating a website as beautiful and functional as our product.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Gwang is the kind of developer who genuinely cares about the success of his clients.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gwang optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Project portfolio
const projects: TProject[] = [
  {
    name: "TicketResell Web",
    description:
      "A dynamic ticket reselling platform allowing users to buy and sell event tickets. Built with Next.js and Tailwind CSS, it includes user authentication, real-time listings for an enhanced user experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/gwang08/TicketResell_Web",
  },
  {
    name: "E-commerce Web",
    description:
      "An e-commerce platform offering a seamless shopping experience. Built with JSP, it includes real-time product updates, secure payment processing, and a user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/gwang08/ecommerce-website",
  },
];

export { services, technologies, experiences, testimonials, projects };
