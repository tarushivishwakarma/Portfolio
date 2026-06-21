import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/portfolio/LoadingScreen";
import { Navigation } from "./components/portfolio/Navigation";
import { HeroSection } from "./components/portfolio/HeroSection";
import { AboutSection } from "./components/portfolio/AboutSection";
import { EducationSection } from "./components/portfolio/EducationSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";
import { ProjectsSection } from "./components/portfolio/ProjectsSection";
import { ExperienceSection } from "./components/portfolio/ExperienceSection";
import { CertificationsSection } from "./components/portfolio/CertificationsSection";
import { ContactSection } from "./components/portfolio/ContactSection";
import { Footer } from "./components/portfolio/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleLoadingComplete = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500ms fade transition
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          onLoadingComplete={handleLoadingComplete} 
          isFadingOut={isFadingOut} 
        />
      )}

      {(!isLoading || isFadingOut) && (
        <div className="relative min-h-screen bg-zinc-50 dark:bg-[#030303] text-zinc-800 dark:text-zinc-100 overflow-x-hidden transition-colors duration-500 animate-fade-in">
          {/* Global Ambient Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[150px]" />
            <div className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[150px]" />
            <div className="absolute top-[70%] left-[-5%] w-[45vw] h-[45vw] max-w-[500px] bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10">
            <Navigation />
            <main>
              <HeroSection />
              <AboutSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <CertificationsSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
