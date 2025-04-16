import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import React from 'react';
import Flo_profil from '../assets/Flo_profil.jpg';
import CV_Professionnel_Florian_Banga from '../assets/CV_Professionnel_Florian_Banga.pdf';

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
                "Je conçois des interfaces utilisateurs attractives et réactives (frontend), tout en développant la logique serveur, la gestion des bases de données et l’architecture applicative (backend), pour créer des sites web complets, performants et fonctionnels.",
        },
        {
            title: "Création d'applications mobiles (Vitrine)",
            description:
                "Je développe des applications mobiles vitrines modernes et fluides avec Flutter, idéales pour présenter vos services ou produits de manière professionnelle.",
        },
        {
            title: "Intégration d'API et bases de données",
            description:
                "J’intègre des API tierces et conçois des bases de données relationnelles ou NoSQL pour assurer la communication entre vos services et vos données.",
        },
        {
            title: "Optimisation des performances",
            description:
                "J’analyse et j’optimise le temps de chargement, le référencement (SEO) et l’accessibilité pour garantir une expérience utilisateur rapide et fluide.",
        },
    ]
};

export default function About() {
    return (
        <section id="about" className="text-black py-20">
            <div className="container mx-auto px-6">
                {/* Portrait + Infos perso */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20"
                >
                    {/* Photo en grand */}
                    <div className="w-18 h-96 rounded-lg overflow-hidden">
                        <img
                            src={person.imageUrl}
                            alt="Photo de Banga"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Infos Perso */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            Helloooo, je suis <span className="text-blue-700">{person.name}</span>
                        </h2>
                        <p className="mb-4 text-black">
                            <span className='font-bold'>Profession :</span> {person.profession}
                        </p>
                        <ul className="text-black space-y-2">
                            <li><strong>Âge :</strong> {person.age}</li>
                            <li><strong>Adresse :</strong> {person.address}</li>
                            <li><strong>Email :</strong> {person.email}</li>
                            <li><strong>Téléphone :</strong> {person.phone}</li>
                        </ul>
                        <a
                            href={person.cvUrl}
                            download
                            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-600 transition"
                        >
                            <Download size={20} />
                            Télécharger mon CV
                        </a>
                    </div>
                </motion.div>

                {/* Mes Services */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold mb-6">
                        <span className="text-black">Mes </span>
                        <span className="text-black">Services</span>
                    </h3>
                    <p className="text-black max-w-2xl mx-auto mb-12">
                        Voici ce que je propose en tant que développeur passionné et polyvalent :
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {person.services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {service.title}
                                </h4>
                                <div className="h-1 w-10 bg-green-400 mb-2"></div>
                                <p className="text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
