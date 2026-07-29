import Header from "@/components/Layout/header";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
export default function Home() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-white">

        {/* Globaler Seitenhintergrund */}
        <div className="pointer-events-none absolute inset-0 -z-10">

          <div className="absolute left-[-15%] top-0 h-[700px] w-[700px] rounded-full bg-[#dbeafe] blur-[220px]" />

          <div className="absolute right-[-10%] top-[900px] h-[700px] w-[700px] rounded-full bg-[#06b6d4]/10 blur-[240px]" />

          <div className="absolute left-1/3 top-[1900px] h-[650px] w-[650px] rounded-full bg-[#2563eb]/8 blur-[220px]" />

          <div className="absolute right-1/4 top-[3000px] h-[700px] w-[700px] rounded-full bg-[#dbeafe] blur-[240px]" />

        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        

      </main>
    </>
  );
}