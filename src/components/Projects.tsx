import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Star, Globe, Smartphone, Monitor, Play, Pause } from 'lucide-react';
import Image_projet_un from '../assets/Image_projet_un.png';
import image_deux from '../assets/image_deux.png';
import projet_trois from '../assets/projet_trois.png';
import app_mobile_quizz from '../assets/app_mobile_quizz.jpg';
import breakTime_app from '../assets/breakTime_app.jpg';
import app_mobile_quizz_video from '../assets/Video/app_mobile_quizz.mp4';
import app_mobile_breaktime_video from '../assets/Video/app_mobile_breaktime.mp4';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
import React from 'react';

const projects = [
  {
    title: "Boisson et vin spiriteux",
    description: "Ce projet visait à concevoir une application web de type vitrine pour une entreprise de vente de boissons et de vins spiritueux. L'application permet aux utilisateurs de parcourir les produits, d'en savoir plus sur l'entreprise et de contacter le service client pour une quelconque réservation.",
    image: Image_projet_un,
    tech: ["HTML", "CSS", "TAILWIND"],
    github: "https://floriannnn10.github.io/Boisson_et_vin_spiriteux/",
    category: "site-web", // site-web, app-web, app-mobile
    // live: "#"
  },
  {
    title: "Calculatrice",
    description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.",
    image: image_deux,
    tech: ["HTML", "CSS", "PHP"],
    github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
    category: "app-web", // site-web, app-web, app-mobile
    // live: "#"
  },

  {
    title: "Refonte du site web DataIvoire",
    description: "Refonte d'un site open data avec modernisation complète de l'interface et amélioration de l'expérience utilisateur. Participation à la conception globale du site (hors backend), avec maquette interactive de la page \"Données\" inspirée de data.gouv.fr, incluant filtres, métadonnées et téléchargement de fichiers... Le site est totalement responsive et fonctionne sur tous les appareils.",
    image: projet_trois,
    tech: ["React", "tailwind",],
    github: "https://calm-cat-ff5e06.netlify.app/",
    category: "site-web", // site-web, app-web, app-mobile
    // live: "#"
  },

  {
    title: "Quiz Éducatif",
    description: "Application mobile de quiz éducatif développée avec flutter. Interface intuitive avec des questions interactives, système de score, progression par niveaux et feedback immédiat. L'application propose une expérience d'apprentissage engageante avec des animations fluides et une navigation intuitive.",
    image: app_mobile_quizz_video,
    tech: ["Flutter", "Dart", "CSS"],
    github: "#",
    category: "app-mobile", // site-web, app-web, app-mobile
    isVideo: true
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = React.useState('all');
  const [playingVideos, setPlayingVideos] = React.useState<{ [key: string]: boolean }>({});

  // Fonction pour obtenir l'icône et la couleur de catégorie
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'site-web':
        return {
          icon: Globe,
          label: 'Site Web',
          color: 'from-green-500/20 to-emerald-500/20',
          borderColor: 'border-green-500/30',
          textColor: 'text-green-400'
        };
      case 'app-web':
        return {
          icon: Monitor,
          label: 'Application Web',
          color: 'from-blue-500/20 to-purple-500/20',
          borderColor: 'border-blue-500/30',
          textColor: 'text-blue-400'
        };
      case 'app-mobile':
        return {
          icon: Smartphone,
          label: 'Application Mobile',
          color: 'from-orange-500/20 to-red-500/20',
          borderColor: 'border-orange-500/30',
          textColor: 'text-orange-400'
        };
      default:
        return {
          icon: Code,
          label: 'Projet',
          color: 'from-gray-500/20 to-gray-600/20',
          borderColor: 'border-gray-500/30',
          textColor: 'text-gray-400'
        };
    }
  };

  // Filtrer les projets selon la catégorie active
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return project.category === 'site-web' || project.category === 'app-web';
    if (activeFilter === 'mobile') return project.category === 'app-mobile';
    return true;
  });

  return (
    <section id="projects" className="py-12 md:py-20 relative bg-transparent" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
        <div
          ref={ref}
          style={{ display: 'block', visibility: 'visible', opacity: 1 }}
        >
          {/* Titre de section */}
          <div className="text-center mb-12 md:mb-16" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            <AnimatedText
              text="Projets Réalisés"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6"
              type="word"
              animation="slide"
            />
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-6 md:mb-8 px-4 md:px-0">
              Découvrez mes réalisations et projets personnels
            </p>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-12" style={{ display: 'flex', visibility: 'visible', opacity: 1 }}>
              {[
                { key: 'all', label: 'Tous les projets', icon: Code },
                { key: 'web', label: 'Projets Web', icon: Monitor },
                { key: 'mobile', label: 'Applications Mobile', icon: Smartphone }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex items-center gap-2 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-xs md:text-sm lg:text-base ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700 hover:border-blue-500/30'
                  }`}
                  style={{ display: 'inline-flex', visibility: 'visible', opacity: 1 }}
                >
                  {React.createElement(filter.icon, { size: 14 })}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8" style={{ display: 'grid', visibility: 'visible', opacity: 1 }}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 overflow-hidden group"
                  style={{ display: 'block', visibility: 'visible', opacity: 1 }}
                >
                  {/* Image du projet */}
                  <div className="relative overflow-hidden">
                    {project.isVideo ? (
                      <video
                        src={project.image}
                        className="w-full h-40 md:h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                        loop
                        onPlay={() => setPlayingVideos(prev => ({ ...prev, [project.title]: true }))}
                        onPause={() => setPlayingVideos(prev => ({ ...prev, [project.title]: false }))}
                        onEnded={() => setPlayingVideos(prev => ({ ...prev, [project.title]: false }))}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 md:h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Boutons d'action */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.isVideo ? (
                        <button
                          onClick={() => {
                            const video = document.querySelector(`video[src="${project.image}"]`) as HTMLVideoElement;
                            if (video) {
                              if (video.paused) {
                                video.play();
                                setPlayingVideos(prev => ({ ...prev, [project.title]: true }));
                              } else {
                                video.pause();
                                setPlayingVideos(prev => ({ ...prev, [project.title]: false }));
                              }
                            }
                          }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          title={playingVideos[project.title] ? "Pause" : "Play"}
                        >
                          {playingVideos[project.title] ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <Github size={24} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Contenu du projet */}
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <Code className="text-blue-400" size={18} />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
                    </div>

                    {/* Badge de catégorie */}
                    {project.category && (
                      <div
                        className={`inline-flex items-center gap-2 px-2 md:px-3 py-1 rounded-full text-xs font-medium border ${getCategoryInfo(project.category).color} ${getCategoryInfo(project.category).borderColor} ${getCategoryInfo(project.category).textColor} mb-3 md:mb-4`}
                      >
                        {React.createElement(getCategoryInfo(project.category).icon, { size: 12 })}
                        {getCategoryInfo(project.category).label}
                      </div>
                    )}

                    <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-xs md:text-sm lg:text-base">
                      {project.description}
                    </p>

                    {/* Technologies utilisées */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 md:px-3 lg:px-4 py-1 md:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-xs md:text-sm font-medium border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Lien vers le projet */}
                    {project.isVideo ? (
                      <button
                        onClick={() => {
                          const video = document.querySelector(`video[src="${project.image}"]`) as HTMLVideoElement;
                          if (video) {
                            if (video.paused) {
                              video.play();
                              setPlayingVideos(prev => ({ ...prev, [project.title]: true }));
                            } else {
                              video.pause();
                              setPlayingVideos(prev => ({ ...prev, [project.title]: false }));
                            }
                          }
                        }}
                        className="inline-flex items-center gap-2 px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:from-white hover:to-white hover:text-gray-900 transition-all duration-300 text-xs md:text-sm lg:text-base"
                      >
                        {playingVideos[project.title] ? <Pause size={14} /> : <Play size={14} />}
                        {playingVideos[project.title] ? "Pause" : "Voir la démo"}
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-white hover:to-white hover:text-gray-900 transition-all duration-300 text-xs md:text-sm lg:text-base"
                      >
                        <ExternalLink size={14} />
                        Voir le projet
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div
                className="col-span-full text-center py-12 md:py-16"
                style={{ display: 'block', visibility: 'visible', opacity: 1 }}
              >
                <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-gray-600/30">
                  <Code className="text-gray-400" size={20} />
                  <span className="text-gray-400 font-medium text-sm md:text-base">
                    Aucun projet trouvé pour cette catégorie
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Badge de fin */}
          <div className="text-center mt-12 md:mt-16" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <Star className="text-green-400" size={16} />
              <span className="text-green-400 font-medium text-sm md:text-base">Plus de projets en cours...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}