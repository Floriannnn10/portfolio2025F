import { motion } from 'framer-motion';
import { Code2, Globe, Zap, Star } from 'lucide-react';
import Flag from 'react-world-flags';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
import AnimatedBadge from './AnimatedBadge';
import Spider from './Spider';



const languages = [
  { name: "Français", level: 80, label: "Niveau intermédiaire", flag: "FR" },
  { name: "Anglais", level: 30, label: "Moyen", flag: "GB" },
];

export default function Skills() {
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
    <section id="skills" className="py-20 relative">
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
              text="Compétences & Expertise"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              type="word"
              animation="slide"
            />
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez mes compétences techniques et linguistiques
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {/* Galerie Circulaire des Compétences */}
            <motion.div variants={itemVariants}>
              {/* <div className="flex items-center gap-3 mb-8"></div> */}
              <div className="flex justify-center">
                <Spider />
              </div>
            </motion.div>

            {/* Langues */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg">
                  <Globe className="text-green-400" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Langues</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <Flag code={lang.flag} className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg" />
                      <span className="font-semibold text-white text-lg md:text-xl">{lang.name}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 mb-3 block text-sm md:text-base">{lang.label}</span>
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 mb-2">
                        <span>Niveau</span>
                        <span>{lang.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 md:h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 md:h-3 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Badge de compétences */}
            <motion.div variants={itemVariants} className="text-center">
              <AnimatedBadge
                variant="gradient"
                size="lg"
                className="mb-4"
              >
                <Zap size={18} className="mr-2" />
                Développeur Full Stack Passionné
              </AnimatedBadge>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                Toujours en apprentissage et à la recherche de nouvelles technologies pour créer des expériences web exceptionnelles.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
