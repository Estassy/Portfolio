"use client";

import { useState, useEffect, useCallback } from "react";
import Contact from "./contact/contact";
import Header from "./header/Header";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Profile from "./profile/profile";
import Footer from "./footer/footer";
import CTA from "./cta/cta";
import Experiences from "./experiences/experiences";
import BackToTop from "./components/BackToTop";
import { NavigationProvider } from "./components/NavigationContext";
import Stats from "./components/Stats";
import { LangProvider } from "./i18n/LangContext";
import { ThemeProvider } from "./i18n/ThemeContext";
import ScrollProgressBar from "./components/ScrollProgressBar";

const SECTIONS = ["home", "projects", "experiences", "skills", "contact"] as const;

export default function ClientShell() {
  const [active, setActive] = useState("home");

  /**
   * Auto-detect active section via IntersectionObserver.
   * Uses rootMargin "-45% 0px -45% 0px" so the section must occupy
   * the middle 10% band of the viewport to be considered active.
   */
  const handleSetActive = useCallback((id: string) => setActive(id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most recently intersecting entry
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with the highest intersection ratio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActive(best.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <LangProvider>
        <NavigationProvider setActive={handleSetActive}>
          <ScrollProgressBar />
          <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <Header active={active} setActive={handleSetActive} />
            <main className="mx-auto max-w-6xl px-4 sm:px-6">
              <Profile />
              <Projects />
              <Experiences />
              <Skills />
              <Stats />
              <CTA />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </div>
        </NavigationProvider>
      </LangProvider>
    </ThemeProvider>
  );
}
