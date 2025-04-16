import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    period: "Octobre 2024 - Novembre 2024",
    title: "Chef de Projet Scolaire",
    description: "Chargé de la bonne avancée du projet avec Scrum",
  },
  {
    period: "Juin 2024 - Juillet 2024",
    title: "Chef de Projet Scolaire",
    description: "Chargé de supervision et avancée du travail de groupe",
  },
  {
    period: "Décembre 2023 - Janvier 2024",
    title: "Chargé d'Organisation",
    description: "Responsable d'organisation pour les enfants orphelins",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Expérience Professionnelle
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-indigo-600" />
                <span className="text-sm text-gray-600">{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}