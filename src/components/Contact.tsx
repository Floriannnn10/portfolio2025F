import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
import AnimatedBadge from './AnimatedBadge';

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "bangageorgesemmanuel.12@gmail.com",
    link: "mailto:bangageorgesemmanuel.12@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Phone size={24} />,
    title: "Téléphone",
    value: "+225 0150270264",
    link: "tel:+2250150270264",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <MapPin size={24} />,
    title: "Localisation",
    value: "Côte D'Ivoire, Abidjan, Cocody Angré",
    link: null,
    color: "from-purple-500 to-pink-500"
  }
];

const socialLinks = [
  // {
  //   icon: <FaWhatsapp size={24} />,
  //   name: "WhatsApp",
  //   link: "https://wa.me/2250150270264",
  //   color: "from-green-500 to-emerald-500"
  // },
  {
    icon: <FaLinkedin size={24} />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/georges-emmanuel-banga/",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: <FaGithub size={24} />,
    name: "GitHub",
    link: "https://github.com/",
    color: "from-gray-600 to-gray-700"
  }
];

export default function Contact() {
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
    <section id="contact" className="py-20 relative">
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
              text="Me Contacter"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              type="word"
              animation="slide"
            />
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Prêt à collaborer ? Contactez-moi pour discuter de vos projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Informations de contact */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                  <MessageCircle className="text-blue-400" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Informations de Contact</h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                    }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 bg-gradient-to-r ${info.color} rounded-xl text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1 text-sm md:text-base">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-400 text-sm md:text-base">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <motion.div variants={itemVariants} className="mt-6 md:mt-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg">
                    <Globe className="text-green-400" size={20} />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Réseaux Sociaux</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)"
                      }}
                      className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-3 md:p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 text-center"
                    >
                      <div className={`p-2 md:p-3 bg-gradient-to-r ${social.color} rounded-lg text-white mb-2 mx-auto w-fit`}>
                        {social.icon}
                      </div>
                      <span className="text-white text-xs md:text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Send className="text-purple-400" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Envoyez-moi un message</h3>
              </div>

              <motion.form
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm md:text-base">Nom</label>
                      <input
                        type="text"
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm md:text-base"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm md:text-base">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm md:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm md:text-base">Sujet</label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm md:text-base"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm md:text-base">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none text-sm md:text-base"
                      placeholder="Votre message..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Send size={18} />
                    Envoyer le message
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </div>

          {/* Badge de disponibilité */}
          <motion.div variants={itemVariants} className="text-center mt-8 md:mt-12">
            <AnimatedBadge
              variant="gradient"
              size="lg"
              className="mb-4"
            >
              <MessageCircle size={18} className="mr-2" />
              Disponible pour de nouveaux projets
            </AnimatedBadge>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations passionnantes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
