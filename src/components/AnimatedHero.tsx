import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';

const AnimatedHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4 md:space-y-6"
        >
          {/* Titre principal */}
          <motion.h1
            variants={letterVariants}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Florian
            </span>
            <br />
            <span className="text-white">Banga</span>
          </motion.h1>

          {/* Sous-titre animé */}
          <motion.div
            variants={letterVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light"
          >
            <span className="inline-block">
              Développeur
            </span>
            <motion.span
              variants={floatingVariants}
              animate="animate"
              className="inline-block mx-2 md:mx-4 text-blue-400"
            >
              FullStack
            </motion.span>
            <span className="inline-block">
              Passionné ! 
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={letterVariants}
            className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            Je transforme vos idées en expériences numériques exceptionnelles. 
            Spécialisé dans le développement web moderne avec une approche centrée sur l'utilisateur.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnimatedHero; 