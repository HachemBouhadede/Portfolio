import React from "react";
import HeroImage from "public/HachemBouhadede.png";
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';

function HeroSection() {
  return (
    <div className="hero min-h-80vh bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={HeroImage}
          className="max-w-sm "
          alt='Hachem "Timeless" Bouhadede'
        />
        <div >
          <h1 className="text-5xl font-bold ">
            Hachem Bouhadede <br />
            <span className="italic text-2xl">AKA &quot;Timeless&quot;</span>
          </h1>
          <p className="pt-6 pb-3 m-auto text-xl flex-wrap">
            I Am a WebDeveloper 🌐
          </p>
          <p className="text-xl py-3">Specializing in Front-End Web 🚀</p>
          <p className="flex flex-wrap text-xl py-3 text-yellow-500">
          <span className="pr-2 text-white">I </span>
            Transform Ideas and Visions{" "}
            <span className="px-2 text-white">into</span> Digital Marvels!🚀💻
          </p>

          <div className="flex flex-wrap justify-between mx-0 md:mx-32 space-x-4">
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              Contact Me
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              See My Work
            </ScrollLink>
            <ScrollLink
              to="aboutMe"
              spy={true}
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              About Me
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
