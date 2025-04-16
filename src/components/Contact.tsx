import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Me Contacter
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg shadow text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-600">Informations de Contact</h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex flex-row justify-center items-center space-x-4">
                <Mail className="text-indigo-600" />
                <a
                  href="mailto:bangageorgesemmanuel.12@gmail.com"
                  className="hover:underline text-indigo-700"
                >
                  bangageorgesemmanuel.12@gmail.com
                </a>
              </div>
              <div className="flex flex-row justify-center items-center space-x-4">
                <Phone className="text-indigo-600" />
                <a
                  href="tel:+2250150270264"
                  className="hover:underline text-indigo-700"
                >
                  +225 0150270264
                </a>
              </div>
              <div className="flex flex-row justify-center items-center space-x-4">
                <MapPin className="text-indigo-600" />
                <span>Côte D'Ivoire</span>
              </div>
            </div>


            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">Réseaux Sociaux</h4>
              <div className="flex justify-center space-x-6 text-2xl">
                <a
                  href="https://wa.me/2250150270264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                {/* Instagram désactivé temporairement */}
                {/* <a
          href="https://www.instagram.com/ton_profil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a> */}
                <a
                  href="https://www.linkedin.com/in/georges-emmanuel-banga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
