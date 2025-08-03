import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail, Phone } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Accueil', icon: <Home size={20} />, href: '#home' },
  { id: 'about', label: 'À propos', icon: <User size={20} />, href: '#about' },
  { id: 'experience', label: 'Expérience', icon: <Briefcase size={20} />, href: '#experience' },
  { id: 'projects', label: 'Projets', icon: <Code size={20} />, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
];

const GooeyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Florian
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex justify-center">
            <div className="relative bg-black/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/10">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.icon}</span>
                    <span className="relative z-10 font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex justify-end">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="text-white" size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="text-white" size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Menu Mobile Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-full right-0 mt-4 w-64 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
              >
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default GooeyNavbar; 