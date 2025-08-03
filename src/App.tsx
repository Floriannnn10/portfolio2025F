import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import GooeyNavbar from './components/GooeyNavbar';
import AnimatedHero from './components/AnimatedHero';
import About from './components/about';
import Experience from './components/Experience';
import Skills from './components/Skills';
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
        <Contact />
      </main>

      {/* Bouton pour remonter */}
      <ScrollToTopButton />

      {/* Footer animé */}
      <AnimatedFooter />
      
      {/* Animation Splash Cursor */}
      <SplashCursor 
        colors={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']}
        size={25}
        duration={0.8}
        opacity={0.9}
      />
    </div>
  );
}

export default App;
