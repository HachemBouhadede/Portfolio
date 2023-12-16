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
      "Build and apply a foundation in Algorythems, Logic and Electronic",
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
  },
  {
    title: "AideBeAide - Re:Coded Boot Camp Capstone Project",
    description:
      "Aide Be Aide, is a dedicated platform for community engagement and meaningful impact. where Volunteering and Initiativity are key, the website has Simple & Freindly Interface | Find, Join & Save Volunteering Events Feature | Create, Edit, and Comment on Events ! | See what other user are participating in and their interests",
    tags: [
      "React",
      ,
      "Next.js",
      "Tailwind",
      "i18Internalization, Firebase (Authentification, AppCheck, Store and Storage)",
    ],
    imageUrl: AideBeAide,
  },
  {
    title: "CNChill",
    description:
      "C&Chill, is a website that holds double meaning, Code&Chill, and C ( 👀) and chill ! and as you guessed it's a movie liberary website, showcases all the latest and old movies, with rating, genres and actors ! great for plaaning what you'd like to watch next !",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: CNChill,
  },
  {
    title: "AmaZD.",
    description:
      "E-Commerce Demo Website, includes features like search, category, pricing and rating filters...etc, Annonymous checkout and shopcart",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: AmaZD,
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
] as const;
