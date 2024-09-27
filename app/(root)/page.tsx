import AboutMe from "@/components/about-me";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ProjectStudy from "@/components/project-study";
import { MarqueeDemo } from "@/components/ui/techstack";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectStudy />
      <FeaturedProjects />
      <MarqueeDemo/>
      <AboutMe />
    </>
  );
}
