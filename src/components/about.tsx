import { motion } from 'framer-motion';
import { Download, Code, Smartphone, Database, Zap } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Flo_profil from '../assets/Flo_profil.jpg';
import CV_Professionnel_Florian_Banga from '../assets/CV_Professionnel_Florian_Banga.pdf';
import AnimatedText from './AnimatedText';
import AnimatedBadge from './AnimatedBadge';

const person = {
    name: "Banga Adou Georges Emmanuel Florian",
    profession: "Développeur Full Stack",
    age: 22 + " ans",
    address: "Abidjan, Côte d'Ivoire",
    email: "bangageorgesemmanuel.12@gmail.com",
    phone: "+ 225 01 50 27 02 64",
    imageUrl: Flo_profil,
    cvUrl: CV_Professionnel_Florian_Banga,
    services: [
        {
            title: "Développement Web Frontend & Backend",
            description:
                "Je conçois des interfaces utilisateurs attractives et réactives (frontend), tout en développant la logique serveur, la gestion des bases de données et l'architecture applicative (backend), pour créer des sites web complets, performants et fonctionnels.",
            icon: <Code size={24} />
        },
        {
            title: "Création d'applications mobiles",
            description:
                "Je développe des applications mobiles sur mesure avec Flutter ou React Native, en assurant aussi bien l’interface utilisateur (frontend) que la logique métier et la gestion des données (backend). Chaque solution est adaptée à vos besoins spécifiques, qu’il s’agisse de présenter vos services, de gérer des utilisateurs ou d’intégrer des fonctionnalités avancées.",
            icon: <Smartphone size={24} />
        },
        {
            title: "Intégration d'API et bases de données",
            description:
                "J'intègre des API tierces et conçois des bases de données relationnelles ou NoSQL pour assurer la communication entre vos services et vos données.",
            icon: <Database size={24} />
        },
        {
            title: "Optimisation des performances",
            description:
                "J'analyse et j'optimise le temps de chargement, le référencement (SEO) et l'accessibilité pour garantir une expérience utilisateur rapide et fluide.",
            icon: <Zap size={24} />
        },
    ]
};

export default function About() {
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
        <section id="about" className="py-12 md:py-20 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Titre de section */}
                    <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
                        <AnimatedText
                            text="À propos de moi"
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6"
                            type="word"
                            animation="slide"
                        />
                        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 md:px-0">
                            Découvrez mon parcours, mes compétences et ma passion pour le développement
                        </p>
                    </motion.div>

                    {/* Portrait + Infos perso */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20"
                    >
                        {/* Photo avec effet */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                                <img
                                    src={person.imageUrl}
                                    alt="Photo de Florian"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
                        </motion.div>

                        {/* Infos Perso */}
                        <div className="max-w-xl space-y-4 md:space-y-6 text-center lg:text-left order-1 lg:order-2">
                            <div>
                                <AnimatedText
                                    text={`Helloooo, je suis ${person.name}`}
                                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4"
                                    type="word"
                                    animation="slide"
                                    delay={0.2}
                                />
                                <AnimatedBadge
                                    variant="gradient"
                                    size="lg"
                                    className="mb-4 md:mb-6 text-base md:text-lg lg:text-xl"
                                >
                                    {person.profession}
                                </AnimatedBadge>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-gray-300 text-base md:text-lg justify-center lg:justify-start"
                                >
                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full mr-3 md:mr-4" />
                                    <strong className="text-white text-base md:text-lg">Âge :</strong> <span className="text-base md:text-lg">{person.age}</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-gray-300 text-base md:text-lg justify-center lg:justify-start"
                                >
                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-purple-400 rounded-full mr-3 md:mr-4" />
                                    <strong className="text-white text-base md:text-lg">Adresse :</strong> <span className="text-base md:text-lg">{person.address}</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-gray-300 text-base md:text-lg justify-center lg:justify-start"
                                >
                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full mr-3 md:mr-4" />
                                    <strong className="text-white text-base md:text-lg">Email :</strong> <span className="text-base md:text-lg break-all">{person.email}</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-gray-300 text-base md:text-lg justify-center lg:justify-start"
                                >
                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full mr-3 md:mr-4" />
                                    <strong className="text-white text-base md:text-lg">Téléphone :</strong> <span className="text-base md:text-lg">{person.phone}</span>
                                </motion.div>
                            </div>

                            <motion.a
                                href={person.cvUrl}
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:text-white text-sm md:text-base lg:text-lg"
                            >
                                <Download size={18} className="md:w-5 md:h-5" />
                                Télécharger mon CV
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Mes Services */}
                    <motion.div variants={itemVariants} className="text-center">
                        <AnimatedText
                            text="Mes Services"
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6"
                            type="word"
                            animation="slide"
                        />
                        <p className="text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base lg:text-lg px-4 md:px-0">
                            Voici ce que je propose en tant que développeur passionné et polyvalent :
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                            {person.services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        scale: 1.02,
                                        y: -5,
                                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                                    }}
                                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                        <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-base md:text-lg lg:text-xl font-semibold text-white">
                                            {service.title}
                                        </h4>
                                    </div>
                                    <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 md:mb-4" />
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
