"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Electronics & Instrumentation Engneering
        </span>
        , I decided to pursue my passion for programming. I enrolled in a coding
        bootcamp at Re:Coded and learned{" "}
        <span className="font-medium">Front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        Algorythemic Thinking aspect which i was able to translate from my
        background in Electronics. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React and Next.js</span>. I am also
        familiar with TypeScript. I am always looking to learn new technologies.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, oe Camping, I know two totally diffrent hobbies. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        learning and enhancing my animation and UI/UX Skills to deliver the best
        possible Digital Products at the moment,{" "}
        
          {" "}
          and Currently i am working on <span className="italic font-meduim"> personal side projects and free lancing to build
          a viable persona{" "}
        </span>
      </p>
    </motion.section>
  );
}
