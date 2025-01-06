import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import ThemeMode from "./components/Theme/ThemeMode";
import Header from "./components/Header/Header";
import TapeSection from "./components/TapeSection/TapeSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="sora-400">
      <Header />
      <main className="site-content">
        <HeroSection />
        <ThemeMode />
        <TapeSection />
        <Portfolio />
        <Services />
        <Skills />
      </main>
    </div>
  );
}

export default App;
