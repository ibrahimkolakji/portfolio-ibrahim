import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  );
}