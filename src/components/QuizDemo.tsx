import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, ArrowLeft, Smartphone, BookOpen, Trophy, Target, Brain } from 'lucide-react';
import app_mobile_quizz_video from '../assets/Video/app_mobile_quizz.mp4';
import app_mobile_quizz from '../assets/app_mobile_quizz.jpg';

interface QuizDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizDemo({ isOpen, onClose }: QuizDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Questions Interactives",
      description: "Interface intuitive avec des questions variées et engageantes"
    },
    {
      icon: <Trophy size={24} />,
      title: "Système de Score",
      description: "Suivez votre progression et améliorez vos performances"
    },
    {
      icon: <Target size={24} />,
      title: "Progression par Niveaux",
      description: "Débloquez de nouveaux niveaux en fonction de vos résultats"
    },
    {
      icon: <Brain size={24} />,
      title: "Feedback Immédiat",
      description: "Recevez des explications détaillées après chaque réponse"
    }
  ];

  const handleVideoToggle = () => {
    const video = document.querySelector('#quiz-video') as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
                         {/* Contenu de la démo */}
             <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl border border-white/10 backdrop-blur-xl max-w-6xl w-full h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <Smartphone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Quiz Éducatif - Démo</h2>
                    <p className="text-gray-400">Application mobile d'apprentissage interactif</p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

                             <div className="flex flex-col lg:flex-row flex-1">
                 {/* Section Vidéo */}
                 <div className="lg:w-2/3 p-6 flex-1">
                   <div className="relative rounded-xl overflow-hidden bg-black h-full min-h-[500px]">
                     <video
                       id="quiz-video"
                       src={app_mobile_quizz_video}
                       className="w-full h-full object-contain"
                       muted
                       loop
                       onPlay={() => setIsPlaying(true)}
                       onPause={() => setIsPlaying(false)}
                       onEnded={() => setIsPlaying(false)}
                     />
                    
                    {/* Overlay avec bouton de contrôle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <motion.button
                        onClick={handleVideoToggle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                      </motion.button>
                    </div>
                  </div>
                </div>

                                 {/* Section Informations */}
                 <div className="lg:w-1/3 p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">À propos du Quiz Éducatif</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Le Quiz Éducatif est une application mobile conçue pour rendre l'apprentissage 
                        plus engageant et interactif. Elle propose une expérience d'apprentissage 
                        moderne avec des questions variées et un système de progression intelligent.
                      </p>
                    </div>

                    {/* Fonctionnalités */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Fonctionnalités Clés</h4>
                      <div className="space-y-3">
                        {features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                          >
                            <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400">
                              {feature.icon}
                            </div>
                            <div>
                              <h5 className="font-medium text-white">{feature.title}</h5>
                              <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Flutter", "Dart", "CSS"].map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bouton de fermeture */}
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ArrowLeft size={20} />
                      Retour aux projets
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 