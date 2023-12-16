import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaLightbulb } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AideBeAide from "@/public/aidebeaide.png";
import CNChill from "@/public/cnchill.netlify.app_.png";
import AmaZD from "@/public/e-commerce-project-amazon.vercel.app_.png";
import MyPortfolio from "@/public/MyPortfolio.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "About",
    hash: "#about",
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
    title:
      "Electronic Engnineering Bachlor Degree & Instrumentation Engineering Masters Degree",
    location: "Mentouri Brothers University, Constantine",
    description:
      "Build and apply a foundation in Algorythems, Logic and Electronics",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2017 - July 2022",
  },
  {
    title: "Algerian Universties Innovation Challenge",
    location: "Algies, Algeria",
    description:
      "got selected among the TOP 20 projects of the year out of 500 applicants, build and present a modem buisnis for my project",
    icon: React.createElement(FaLightbulb),
    date: "Jun 2022 - Dec 2022",
  },
  {
    title: "Industrial Maintance Engineer - Internship",
    location: "SOPRODIM Pharma, Boumerdas, Algeria",
    description:
      "I got to work on real life production machines, suprivise, maintain, document and interven on them, in addition to branching out to other fields outside of electronics",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Jun 2023",
  },
  {
    title: "Frontend Web Devolopment Bootcamp",
    location: "Online - Re:Coded Org",
    description:
      "After being selected among the 52 student out 3000 applicants, i graduated after 6 intensive months of studing",
    icon: React.createElement(FaReact),
    date: "Jun 2023 - Dec 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "My Portfolio was my first solo production product, building gave me the chance to apply my knoledge in typeScript and learn framar motion in real time",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: MyPortfolio,
    websiteURL : "/"
  },
  {
    title: "AideBeAide",
    description:
      "A dedicated platform for community engagement and meaningful impact. Creating and Participating in Volunteering is the main focus of the community",
    tags: ["React", , "Next.js", "Tailwind", "i18next", "Firebase"],
    imageUrl: AideBeAide,
    websiteURL : "https://aidebeaide.vercel.app/"
  },
  {
    title: "CNChill",
    description:
      "It's a movie liberary website, showcases , using the TMDb API to fetch movies, genres and actors ! and allows search and filtering accordingly",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: CNChill,
    websiteURL : "https://cnchill.netlify.app/"
  },
  {
    title: "AmaZD.",
    description:
      "E-Commerce Demo Website, includes features like search, category, pricing and rating filters...etc, Annonymous checkout and shopcart",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: AmaZD,
    websiteURL : "https://e-commerce-project-amazon.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Firebase",
  "i18next"
] as const;
