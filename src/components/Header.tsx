import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/">Florian B.</a>
          </motion.h1>

          {/* Menu hamburger pour petit écran */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">A propos de moi</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projets</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Compétences</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          {/* Réseaux sociaux */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a href="https://github.com/Floriannnn10" whileHover={{ scale: 1.1 }} className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/georges-emmanuel-banga/" whileHover={{ scale: 1.1 }} className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </motion.a>
            <motion.a href="mailto:bangageorgesemmanuel.12@gmail.com" whileHover={{ scale: 1.1 }} className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center">
            <a href="#about" className="block text-gray-700 hover:text-gray-900">A propos de moi</a>
            <a href="#projects" className="block text-gray-700 hover:text-gray-900">Projets</a>
            <a href="#skills" className="block text-gray-700 hover:text-gray-900">Compétences</a>
            <a href="#contact" className="block text-gray-700 hover:text-gray-900">Contact</a>
            <div className="flex justify-center space-x-4 pt-2">
              <motion.a href="https://github.com/Floriannnn10" whileHover={{ scale: 1.1 }} className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/georges-emmanuel-banga/" whileHover={{ scale: 1.1 }} className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </motion.a>
              <motion.a href="mailto:bangageorgesemmanuel.12@gmail.com" whileHover={{ scale: 1.1 }} className="text-gray-600 hover:text-gray-900">
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
