import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Element name="projects">
        <ProjectSection id="projects" />
      </Element>
      <Element name="aboutMe">
        <AboutMe id="aboutMe" />
      </Element>
      <Element name="footer">
        <Footer id="footer" />
      </Element>
    </div>
  );
}
