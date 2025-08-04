import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import GooeyNavbar from './components/GooeyNavbar';
import AnimatedHero from './components/AnimatedHero';
import About from './components/about';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedFooter from './components/AnimatedFooter';
import ScrollToTopButton from './components/ScrollToTopButton';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fond animé */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <GooeyNavbar />
      
      {/* Contenu principal */}
      <main className="relative z-10">
        <AnimatedHero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Bouton pour remonter */}
      <ScrollToTopButton />

      {/* Footer animé */}
      <AnimatedFooter />
      
      {/* Animation Splash Cursor */}
      <SplashCursor />
    </div>
  );
}

export default App;
