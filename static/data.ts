import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiMui,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiCss,
  SiHtml5,
  SiJquery,
  SiGit,
  SiGithub,
  SiZod,
  SiGitlab,
} from "react-icons/si";

export const HEADER_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Technologies",
    href: "/#technologies",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Companies",
    href: "/#companies",
  },
  {
    title: "Certificates",
    href: "/#certificates",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export const SKILLS = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Material UI", icon: SiMui, color: "#0081CB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#563D7C" },
  { name: "GSAP", icon: SiGreensock, color: "#880000" },
  { name: "CSS", icon: SiCss, color: "#663399" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#8534F3" },
  { name: "GitLab", icon: SiGitlab, color: "#fc6d27" },

  { name: "Zod", icon: SiZod, color: "#408AFF" },

  // Still need SVGs from svgl.app for these ⬇️
  { name: "Zustand", icon: null, svg: "/logos/zustand.svg" },
  { name: "Shadcn UI", icon: null, svg: "/logos/shadcn.svg" },
  { name: "Syncfusion", icon: null, svg: "/logos/syncfusion.svg" },
  { name: "React Hook Form", icon: null, svg: "/logos/react-hook-form.svg" },
  { name: "TanStack React Table", icon: null, svg: "/logos/splash-dark.svg" },
];

export const PROJECTS = [
  {
    name: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, cart management, and a seamless checkout experience built with modern web technologies.",
    image: "/images/e-commerce/hero.png",
    images: [
      "/images/e-commerce/hero.png",
      "/images/e-commerce/image-1.png",
      "/images/e-commerce/image-2.png",
      "/images/e-commerce/image-3.png",
      "/images/e-commerce/image-4.png",
      "/images/e-commerce/image-5.png",
      "/images/e-commerce/image-6.png",
      "/images/e-commerce/image-7.png",
      "/images/e-commerce/image-8.png",
    ],
    skills: ["React.js", "Typescript", "Javascript", "Bootstrap", "CSS"],
    link: "https://ashiaa.netlify.app/",
  },
  {
    name: "foodies App",
    description:
      "A food discovery app where users can explore recipes, browse meals by category, and find detailed cooking instructions.",

    image: "/images/foodies/hero.png",
    images: [
      "/images/foodies/hero.png",
      "/images/foodies/image-1.png",
      "/images/foodies/image-2.png",
      "/images/foodies/image-3.png",
      "/images/foodies/image-4.png",
      "/images/foodies/image-5.png",
    ],
    skills: [
      "Next.js",
      "React.js",
      "Typescript",
      "Javascript",
      "CSS",
      "Github",
    ],
    link: "https://foodies-next15.netlify.app/",
  },
  {
    name: "Management System",
    description:
      "A comprehensive admin dashboard with data tables, analytics charts, and user management built with Shadcn UI components.",

    image: "/images/dashboard/hero.png",
    images: [
      "/images/dashboard/hero.png",
      "/images/dashboard/image-1.png",
      "/images/dashboard/image-2.png",
      "/images/dashboard/image-3.png",
      "/images/dashboard/image-4.png",
    ],
    skills: ["Next.js", "Shadcn UI", "Zod", "React Hook Form", "TanStack"],
    link: "https://shadcn-dashboard-lake.vercel.app/",
  },
  {
    name: "Online Shop",
    description:
      "A modern e-commerce storefront featuring product filtering, dynamic cart, and a clean responsive UI for a smooth shopping experience.",

    image: "/images/shop/hero.png",
    images: [
      "/images/shop/hero.png",
      "/images/shop/image-1.png",
      "/images/shop/image-2.png",
      "/images/shop/image-3.png",
      "/images/shop/image-4.png",
      "/images/shop/image-5.png",
      "/images/shop/image-6.png",
    ],
    skills: ["Next.js", "Tailwind CSS", "Typescript"],
    link: "https://e-commerce-navy-alpha-47.vercel.app/",
  },
  {
    name: "Tourism Website",
    description:
      "A visually rich tourism platform showcasing travel destinations, tour packages, and booking information for wanderlust explorers.",

    image: "/images/tourism/hero.png",
    images: [
      "/images/tourism/hero.png",
      "/images/tourism/image-1.png",
      "/images/tourism/image-2.png",
      "/images/tourism/image-3.png",
      "/images/tourism/image-4.png",
      "/images/tourism/image-5.png",
    ],
    skills: ["Next.js", "React.js", "Tailwind CSS", "Typescript", "Javascript"],
    link: "https://travel-two-eta.vercel.app/",
  },
];

export const EXPERIENCES = [
  {
    image: "/images/signals_control.png",
    position: "Frontend Developer",
    type: "Freelance",
    location: "Amman, Jordan",
    startDate: "Dec 2025",
    endDate: "Mar 2026",
  },
  {
    image: "/images/rowmini.jpeg",
    position: "Frontend Developer",
    type: "Freelance",
    location: "Amman, Jordan",
    startDate: "Oct 2024",
    endDate: " Jun 2025",
  },
  {
    image: "/images/future-advanced.png",
    position: "Frontend Developer",
    type: "Internship",
    location: "Amman, Jordan",
    startDate: "Dec 2023",
    endDate: "Jan 2024",
  },
];

export const CERTIFICATES = [
  {
    course: "Next js 15 & React - The Complete Guide",
    status: "Complete",
    hours: "40.7",
    institute: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    progress: 100,
    link: "https://www.udemy.com/certificate/UC-2d065592-dbe5-49bb-a3c0-b0438ee062f6",
  },
  {
    course: "Frontend Engineer with React",
    status: "Complete",
    hours: "16",
    institute: "Manara",
    progress: 100,
    link: "https://app.manara.tech/certificate/1731704506-EBAE4B05C1F5E3C1",
  },
  {
    course: "Full stack (React & SpringBoot)",
    status: "Complete",
    hours: "90",
    institute: "webtoon web space Co. & SHAI AI",
    progress: 100,
    link: "",
  },
  {
    course: "Vue - The Complete Guide (incl. Router & Composition API)",
    status: "Complete",
    hours: "32",
    institute: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    progress: 100,
    link: "https://www.udemy.com/certificate/UC-148510c5-08de-4af3-b083-f2e65d9aa2ed",
  },
  {
    course: "Node.js The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    status: "In Progress",
    hours: "40.5",
    institute: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    progress: 44,
    link: "",
  },
];

export const CONTACT_INFO = [
  {
    Icon: IoMdCall,
    info: "+962 78 77 555 85",
  },
  {
    Icon: MdEmail,
    info: "jebrealaldrani@gmail.com",
  },
  {
    Icon: FaLocationDot,
    info: "Amman, Jordan",
  },
];

export const CONTACT_LINKS = [
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/jebreal-aldrani",
  },
  {
    Icon: SiGithub,
    link: "https://github.com/JebrealAldrani",
  },
];
