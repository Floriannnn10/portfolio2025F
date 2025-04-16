import { motion } from 'framer-motion';
import { Code2, Globe } from 'lucide-react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel,
  FaReact, FaGitAlt, FaVuejs
} from "react-icons/fa";
import {
  SiMysql, SiFlutter, SiJquery, SiTypescript, SiApachenetbeanside
} from "react-icons/si";
import Flag from 'react-world-flags'; // Importer react-world-flags

const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={50} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={50} /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" size={50} /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" size={50} /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" size={50} /> },
  { name: "React", icon: <FaReact className="text-cyan-500" size={50} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" size={50} /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" size={50} /> },
  { name: "VueJS", icon: <FaVuejs className="text-green-500" size={50} /> },
  { name: "jQuery", icon: <SiJquery className="text-purple-500" size={50} /> },
  { name: "Dév. API", icon: <SiApachenetbeanside className="text-gray-600" size={50} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={50} /> },
];

const languages = [
  { name: "Français", level: 80, label: "Niveau intermédiaire", flag: "FR" },
  { name: "Anglais", level: 30, label: "Moyen", flag: "GB" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Compétences & Expertise
        </motion.h2>

        <div className="space-y-16">
          {/* Compétences Techniques */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="text-indigo-600" size={24} />
              <h3 className="text-2xl font-bold underline">Compétences Techniques</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
                >
                  <div className="flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Langues */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Globe className="text-indigo-600" size={24} />
              <h3 className="text-2xl font-bold underline">Langues</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Flag code={lang.flag} className="w-12 h-12" />
                    <span className="font-medium text-gray-700">{lang.name}</span>
                  </div>
                  <span className="text-gray-500">{lang.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
