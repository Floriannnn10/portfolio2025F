import { motion } from 'framer-motion';
import { CalendarDays, Briefcase, Award, Users, Smartphone, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';

const experiences = [
  {
    period: "01 Août 2025 - Présent",
    title: "Webmarketer (SEO & Acquisition de Trafic)",
    description: "Chargé de l'optimisation SEO, gestion de campagnes Google Ads/Meta, analyse de trafic, création de contenu et reporting.",
    icon: <Briefcase size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    period: "Mai 2025 - Juin 2025",
    title: "Concepteur d'Application Mobile",
    description: "Chargé de construire une application mobile de quiz éducatif.",
    icon: <Award size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    period: "Décembre 2025 - Janvier 2025",
    title: "Concepteur d'Application Web",
    description: "Chargé de construire une application 'Open messenger'",
    icon: <CalendarDays size={24} />,
    color: "from-green-500 to-emerald-500"
  },
  {
    period: "Juin 2024 - Juillet 2024",
    title: "Chef de Projet Scolaire",
    description: "Chargé de supervision et avancée du travail de groupe",
    icon: <Briefcase size={24} />,
    color: "from-orange-500 to-red-500"
  },
  {
    period: "Décembre 2023 - Janvier 2024",
    title: "Chargé d'Organisation",
    description: "Responsable d'organisation pour les enfants orphelins",
    icon: <CalendarDays size={24} />,
    color: "from-teal-500 to-cyan-500"
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Titre de section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <AnimatedText
              text="Expérience Professionnelle"
              className="text-5xl md:text-6xl font-bold mb-6"
              type="word"
              animation="slide"
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez mon parcours professionnel et mes réalisations
            </p>
          </motion.div>

          {/* Timeline des expériences */}
          <motion.div variants={itemVariants} className="relative">
            {/* Ligne de timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50 rounded-full" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Point de timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-black shadow-lg z-10" />
                  
                  {/* Contenu de l'expérience */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl text-white`}>
                          {exp.icon}
                        </div>
                        <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}