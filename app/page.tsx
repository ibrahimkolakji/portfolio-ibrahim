import Header from "@/components/Layout/header";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  );
}