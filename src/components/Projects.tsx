import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image_projet_un from '../assets/image_projet_un.png'; 
import image_deux from '../assets/image_deux.png'; 

const projects = [
  {
    title: "Boisson et vin spiriteux",
    description: "Ce projet visait à concevoir une application web de type vitrine pour une entreprise de vente de boissons et de vins spiritueux. L'application permet aux utilisateurs de parcourir les produits, d'en savoir plus sur l'entreprise et de contacter le service client pour une quelconque réservation.",
    image: Image_projet_un,
    tech: ["HTML", "CSS", "TAILWIND"],
    github: "https://floriannnn10.github.io/Boisson_et_vin_spiriteux/",
    // live: "#"
  },
  {
    title: "Calculatrice",
    description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
    image: image_deux,
    tech: ["HTML", "CSS", "PHP"],
    github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
    // live: "#"
  },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },

  // {
  //   title: "Calculatrice",
  //   description: "Le projet consiste en la création d'une calculatrice simple en utilisant HTML, CSS et PHP. L'application permet aux utilisateurs de calculer la moyenne de plusieurs notes en renvoyant un mail grâce à l'outil `PHP MAILER`.", 
  //   image: image_deux,
  //   tech: ["HTML", "CSS", "PHP"],
  //   github: "https://floriannn10.alwaysdata.net/Projet%20De%20PHP/Accueil.php",
  //   // live: "#"
  // },
  // Add more projects when you have the actual data
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projets Réalisés 
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.github} className="text-white hover:text-gray-200">
                    <Github size={24} />
                  </a>
                  {/* <a href={project.live} className="text-white hover:text-gray-200">
                    <ExternalLink size={24} />
                  </a> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}