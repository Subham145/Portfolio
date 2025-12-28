import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import { GitHubActivity } from "./components/ProjectsSection/GitHubActivity";
import { ContactSection } from "./components/ContactSection/ContactSection";

import StripedBackground from "./components/lightswind/StripedBackground";
import Dock from "./components/lightswind/dock";

import ReactLenis from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Home,
  User,
  GraduationCap,
  FolderKanban,
  Briefcase,
  Mail,
  FileText,
  Github,
} from "lucide-react";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowDock(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dock items (IDs MATCH SECTIONS)
  const dockItems = [
    {
      icon: <Home size={22} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <User size={22} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <GraduationCap size={22} />,
      label: "Skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      icon: <FolderKanban size={22} />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      icon: <Briefcase size={22} />,
      label: "Career",
      onClick: () => scrollToSection("career"),
    },
    {
      icon: <Mail size={22} />,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
    {
      icon: <Github size={22} />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/Subham145", "_blank"),
    },
    {
      icon: <FileText size={22} />,
      label: "Resume",
      onClick: () =>
        window.open(
          "https://drive.google.com/file/d/1KLQePp5fzgjS3Rt7-GUhSW2pESGOQ5_2/view",
          "_blank"
        ),
    },
  ];

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <StripedBackground className="fixed z-0 blur-xs opacity-60" />

      <ReactLenis root>
        <Header />

        <div className="w-full bg-transparent max-w-5xl px-4 my-30 flex items-center justify-center lg:rounded-3xl backdrop-blur-sm border border-skyblue-200 dark:border-skyblue-900/20">
          <div className="z-10 w-full space-y-24">

            <section id="home">
              <HeroSection />
            </section>

            <section id="about">
              <AboutSection />
            </section>

            <section id="skills">
              <EducationSection />
            </section>

            <section id="projects">
              <ProjectsSection />
            </section>

            <section id="github-activity">
              <GitHubActivity />
            </section>

            <section id="career">
              <CareerTimeline />
            </section>

            <section id="contact">
              <ContactSection />
            </section>

          </div>
        </div>

        {/* Floating Dock */}
        <AnimatePresence>
          {showDock && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]"
            >
              <Dock
                items={dockItems}
                position="bottom"
                magnification={70}
                baseItemSize={50}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ReactLenis>
    </div>
  );
}

export default App;
