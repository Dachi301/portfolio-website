import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import gethomeImg from "@/public/gethome.png";
import allianceImg from "@/public/alliance.png";
import sendyImg from "@/public/sendy.png";
import bookingImg from "@/public/booking.png";
import personalProjectImg from "@/public/personal-project.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Re:soft",
    description:
      "I am Full-Stack Web/Mobile Developer at re:soft. I’ve created numerous user interfaces, and these experiences have further honed my ability to collaborate seamlessly with my teammates.\n",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 - Present (Tbilisi, Georgia)",
  },
  {
    title: "Front-End Developer",
    location: "Alliance Loyalty",
    description:
      "I am currently working part-time and have developed the Alliance Group web project as a Next.js front-end developer, focusing on ensuring fast web performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Gethome.ge",
    description: "Worked on GetHome, a platform connecting users with their ideal homes. \n",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Dec 2023",
  },
] as any;

export const projectsData = [
  {
    title: "Gethome.ge",
    description:
      "As a Full-Stack Developer, I worked on GetHome, a real estate platform that helps users find homes by browsing listings and filtering based on their needs.",
    tags: ["Material UI", "Next.js", "Laravel", "Filament", "PostgreSQL"],
    imageUrl: gethomeImg,
    link: 'https://gethome.ge/'
  },
  {
    title: "Ally.ge",
    description:
      "\n" +
        "As a Front-End Developer, I worked on a platform that allows users to explore and purchase Alliance apartments, manage expenses, and shop through an integrated marketplace.",
    tags: ["Tailwind", "Next.js", "Redux", "Swiper", 'react-hook-form'],
    imageUrl: allianceImg,
    link: 'https://ally.ge/'
  },
  {
    title: "Sendy Project",
    description:
      "\n" +
        "As a Full-Stack Developer, I worked on Sendy, a platform like Mailchimp for managing email campaigns. It enables users to create, send, and track newsletters, featuring audience segmentation and analytics capabilities.",
    tags: ["Next.js", "Laravel", "MySQL", "Filament"],
    imageUrl: sendyImg,
    link: '/',
  },
  {
    title: "Book a Star Project",
    description:
        "\n" +
        "As a Front-End Developer, I worked on a platform that allowed users to easily book celebrities for events like weddings and birthdays, simplifying the process of finding and securing stars for any occasion.",
    tags: ["Parallax", "Next.js", "Typescript", "Tailwind"],
    imageUrl: bookingImg,
    link: '/',
  },
  {
    title: "Personal Projects",
    description:
        "\n" +
        "If you're interested in viewing my personal projects, feel free to click the link above!",
    tags: ["Vue", "React", "Next.js", "PHP", "Laravel"],
    imageUrl: personalProjectImg,
    link: 'https://github.com/Dachi301',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "jQuery",
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "Redux / Redux-toolkit",
  "NextJS",
  "PHP",
  "Laravel",
  "Laravel Inertia",
  "Filament",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Git & Github",
  "Figma",
  "Webstorm",
] as const;
