"use client";

import { useState } from "react";
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

export default function Portfolio() {
  const [active, setActive] = useState("home");

  return (
    <NavigationProvider setActive={setActive}>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Header active={active} setActive={setActive} />
        <main className="mx-auto max-w-6xl px-4">
          <Profile />
          <Projects />
          <Skills />
          <Experiences />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </NavigationProvider>
  );
}