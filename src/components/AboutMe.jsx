import React from "react";
import Timeline from "./Timeline";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="bg-base-100">
      <h1 className="flex justify-center items-center rounded-sm bg-gray-900 text-3xl p-2 w-1/3 mx-auto">
        Who Am i{" "}
      </h1>
      <p className="p-2 mr-10">
        {" "}
        Hello, I&apos;m{" "}
        <span className="text-yellow-500 font-bold">Hachem Bouhadede</span> or
        you can call me <span className="text-yellow-500 ">Timeless</span>, a
        passionate web developer.
        <br />
        Ever since my childhood, I&apos;ve had a deep fascination for computers
        and all things tech-related like Games, Arduino Projects, DIY project
        etc..
        <br />
        My academic background in{" "}
        <span className="text-yellow-500 font-bold">
          Electronic Engneering
        </span>{" "}
        has honed my skills in developing an algorithmic and logical way of
        thinking.
        <br />
        My journey into the world of{" "}
        <span className="underline">web development</span> took a significant
        leap when I joined the Recoded{" "}
        <span className="text-yellow-500 font-bold">
          Algeria Frontend 2023 bootcamp
        </span>{" "}
        . This experience allowed me to seamlessly translate my logical and
        algorithmic thinking into the realm of web development. In addition to
        my technical skills, I&apos;ve also nurtured my design abilities by
        crafting compelling
        <span className="text-yellow-500 front-bold pl-2">UI/UX designs</span>.
        <br />
        This combination of technical and design expertise empowers me to create
        innovative and user-friendly web solutions. Let&apos;s build something
        amazing together! 🚀💻
      </p>
      <h2 className="flex justify-center items-center text-2xl p-2 w-1/3 mx-auto">
        {" "}
        Timeline{" "}
      </h2>
      <Timeline />
      <div className="text-center text-xl">
        Be Part of the Journey ! <br />
        Hire me to Or Ask for a Collaboration{" "}
        <ScrollLink
          to="footer"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact Me Via Email
        </ScrollLink>{" "}
        or 
        {" "}<Link href="https://www.linkedin.com/in/hachem-bouhadede/" passHref target="_blank">LinkedIn !</Link>
        
      </div>
    </div>
  );
}

export default AboutMe;
