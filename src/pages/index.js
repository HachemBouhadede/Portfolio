import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Head from "next/head";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hachem Bouhadede &quot;Timeless&quot; - Web Developer</title>
        <meta name="description" content="Hachem Bouhadede Portfolio, Young Web Devlopor specializing in Front-End and NextJS." />
        {/* Add other meta tags for SEO (e.g., Open Graph tags, Twitter Card tags) here */}
      </Head>
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
