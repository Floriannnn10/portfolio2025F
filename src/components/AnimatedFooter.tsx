import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Heart,
  Sparkles
} from 'lucide-react';

const AnimatedFooter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/georges-emmanuel-banga/", label: "LinkedIn" },
    // { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:bangageorgesemmanuel.12@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Développement Web",
    "Applications Mobile",
    "Design UI/UX",
    // "Consultation Tech"
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Section Logo */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Florian 
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences numériques exceptionnelles. 
              Transformons vos idées en réalité.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-white border border-white/10 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-colors duration-300"
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={18} className="mr-3 text-blue-400" />
                <span>bangageorgesemmanuel.12@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone size={18} className="mr-3 text-blue-400" />
                <span>+225 01 50 27 02 64</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <MapPin size={18} className="mr-3 text-blue-400" />
                <span>Abidjan, Côte d'Ivoire</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-16 border border-white/10 backdrop-blur-sm"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Restez connecté
            </h3>
            <p className="text-gray-400 mb-6">
              Recevez mes dernières actualités et projets directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
              whileHover={{ scale: 1.02 }}
            >
              © {new Date().getFullYear()} Florian Banga. Tous droits réservés.
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-2 text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>Fait avec</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.div>
              <span>et</span>
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles size={16} className="text-yellow-400" />
              </motion.div>
              <span>en Côte d'Ivoire</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
      />
    </footer>
  );
};

export default AnimatedFooter; 