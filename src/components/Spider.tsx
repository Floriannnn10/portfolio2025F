import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel,
  FaReact, FaGitAlt, FaVuejs
} from "react-icons/fa";
import {
  SiMysql, SiFlutter, SiJquery, SiTypescript, SiApachenetbeanside,
  SiReact, SiTailwindcss
} from "react-icons/si";

// Icône centrale
const HashIcon = () => (
  <svg width="2.2em" height="2.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L6 21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 3L14 21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 9H20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 15H18" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Wrapper pour les icônes
const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isHovered = false,
  animationDelay = 0
}: {
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
  isHovered?: boolean;
  animationDelay?: number;
}) => (
  <div 
    className={`
      backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 border
      ${isHighlighted ? 'dark:bg-gray-700/50 bg-gray-100/80 border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow' : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${!isHovered && 'animate-float'}`}
      ${isHovered ? 'dark:bg-gray-600/50 bg-gray-200/80 border-blue-400/60 scale-110 dark:shadow-blue-400/30 shadow-blue-400/40 shadow-2xl' : 'dark:hover:bg-white/10 hover:bg-gray-100/80 dark:hover:border-white/20 hover:border-gray-300/60'}
      ${className}
    `} 
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {children}
  </div>
);

// Compétences avec leurs icônes et couleurs
const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 size={40} />, color: "#E34F26" },
  { id: 2, name: "CSS", icon: <FaCss3Alt size={40} />, color: "#1572B6" },
  { id: 3, name: "JavaScript", icon: <FaJs size={40} />, color: "#F7DF1E" },
  { id: 4, name: "PHP", icon: <FaPhp size={40} />, color: "#777BB4" },
  { id: 5, name: "MySQL", icon: <SiMysql size={40} />, color: "#4479A1" },
  { id: 6, name: "Laravel", icon: <FaLaravel size={40} />, color: "#FF2D20" },
  { id: 7, name: "React", icon: <FaReact size={40} />, color: "#61DAFB" },
  { id: 9, name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "#06B6D4" },
  { id: 10, name: "API REST", icon: <SiApachenetbeanside size={40} />, color: "#FF6B35" },
  { id: 11, name: "Git", icon: <FaGitAlt size={40} />, color: "#F05032" },
  { id: 12, name: "Flutter", icon: <SiFlutter size={40} />, color: "#02569B" },
  { id: 13, name: "VueJS", icon: <FaVuejs size={40} />, color: "#4FC08D" },
  { id: 14, name: "jQuery", icon: <SiJquery size={40} />, color: "#0769AD" },
  { id: 15, name: "TypeScript", icon: <SiTypescript size={40} />, color: "#3178C6" }
];

const Spider: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const radius = 220;
  const centralIconRadius = 60;
  const outerIconRadius = 40;
  const svgSize = 600;
  const svgCenter = svgSize / 2;

  // Fonction pour calculer la position optimale des tooltips
  const getTooltipPosition = (index: number, total: number) => {
    const angle = (index / total) * 360 - 90;
    
    // Positions prédéfinies avec plus d'espacement pour éviter les chevauchements
    const positions = [
      { x: 0, y: -60 },      // Haut (plus loin)
      { x: 60, y: -30 },     // Haut-droite (plus loin)
      { x: 60, y: 0 },       // Droite (plus loin)
      { x: 60, y: 30 },      // Bas-droite (plus loin)
      { x: 0, y: 60 },       // Bas (plus loin)
      { x: -60, y: 30 },     // Bas-gauche (plus loin)
      { x: -60, y: 0 },      // Gauche (plus loin)
      { x: -60, y: -30 },    // Haut-gauche (plus loin)
      { x: 30, y: -45 },     // Haut-droite intermédiaire
      { x: 45, y: -15 },     // Droite-haut intermédiaire
      { x: 45, y: 15 },      // Droite-bas intermédiaire
      { x: 30, y: 45 },      // Bas-droite intermédiaire
      { x: -30, y: 45 },     // Bas-gauche intermédiaire
      { x: -45, y: 15 },     // Gauche-bas intermédiaire
      { x: -45, y: -15 }     // Gauche-haut intermédiaire
    ];
    
    return `translate(${positions[index % positions.length].x}px, ${positions[index % positions.length].y}px)`;
  };

  return (
    <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
      {/* Styles CSS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes breathing-glow {
            0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); }
            100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
          }
          .animate-breathing-glow {
            animation: breathing-glow 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Fond radial */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

             <div className="relative z-10 container mx-auto flex items-center justify-center">
         <div className="relative w-[600px] h-[600px] scale-75 md:scale-90 lg:scale-100">
          
          {/* SVG pour les lignes de connexion */}
          <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g>
              {/* Lignes de connexion entre les icônes externes */}
              {skills.map((skill, i) => {
                const nextIndex = (i + 1) % skills.length;
                const nextSkill = skills[nextIndex];
                const angle1 = (-90 + i * (360 / skills.length)) * (Math.PI / 180);
                const x1 = svgCenter + (radius - outerIconRadius) * Math.cos(angle1);
                const y1 = svgCenter + (radius - outerIconRadius) * Math.sin(angle1);
                const angle2 = (-90 + nextIndex * (360 / skills.length)) * (Math.PI / 180);
                const x2 = svgCenter + (radius - outerIconRadius) * Math.cos(angle2);
                const y2 = svgCenter + (radius - outerIconRadius) * Math.sin(angle2);
                const isLineActive = hoveredId === skill.id || hoveredId === nextSkill.id;
                
                return (
                  <line 
                    key={`web-line-${skill.id}`} 
                    x1={x1} y1={y1} x2={x2} y2={y2} 
                    stroke={isLineActive ? '#3B82F6' : '#6B7280'} 
                    strokeWidth="1.5" 
                    className="transition-all duration-300 dark:stroke-gray-600" 
                    style={{ opacity: isLineActive ? 0.8 : 0.25 }}
                    filter={isLineActive ? 'url(#glow)' : 'none'} 
                  />
                );
              })}

              {/* Lignes de connexion vers l'icône centrale */}
              {skills.map((skill, i) => {
                const angleInDegrees = -90 + i * (360 / skills.length);
                const angleInRadians = angleInDegrees * (Math.PI / 180);
                const startX = svgCenter + centralIconRadius * Math.cos(angleInRadians);
                const startY = svgCenter + centralIconRadius * Math.sin(angleInRadians);
                const endX = svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
                const endY = svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
                const isSpokeActive = hoveredId === skill.id;
                
                return (
                  <line 
                    key={`spoke-line-${skill.id}`} 
                    x1={startX} y1={startY} x2={endX} y2={endY} 
                    stroke={isSpokeActive ? '#3B82F6' : '#6B7280'} 
                    strokeWidth="1.5" 
                    className="transition-all duration-300 dark:stroke-gray-600" 
                    style={{ opacity: isSpokeActive ? 1 : 0.25 }}
                    filter={isSpokeActive ? 'url(#glow)' : 'none'} 
                  />
                );
              })}
            </g>
          </svg>

          {/* Conteneur des icônes */}
          <div className="absolute top-1/2 left-1/2">
            
                         {/* Icône centrale */}
             <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
               <IconWrapper className="w-32 h-32" isHighlighted={true} animationDelay={0}>
                 <HashIcon />
               </IconWrapper>
             </div>

                         {/* Icônes externes */}
             {skills.map((skill, i) => {
               const angleInDegrees = -90 + i * (360 / skills.length);
               const angleInRadians = angleInDegrees * (Math.PI / 180);
               const x = radius * Math.cos(angleInRadians);
               const y = radius * Math.sin(angleInRadians);
               const iconStyle = {
                 transform: `translate(${x}px, ${y}px)`
               };
               const isHovered = hoveredId === skill.id;
               
               return (
                 <div 
                   key={skill.id} 
                   className="absolute z-10" 
                   style={iconStyle} 
                   onMouseEnter={() => setHoveredId(skill.id)}
                   onMouseLeave={() => setHoveredId(null)}
                 >
                   <div className="-translate-x-1/2 -translate-y-1/2 relative">
                     {/* Effet de glow au hover */}
                     <div className={`absolute inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                     
                     <IconWrapper 
                       className="w-20 h-20" 
                       isHovered={isHovered} 
                       animationDelay={i * 0.15}
                     >
                       <div style={{ color: skill.color }}>
                         {skill.icon}
                       </div>
                     </IconWrapper>
                     
                                           {/* Nom de la compétence au hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0, 
                          y: isHovered ? 0 : 10 
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-gray-900/98 backdrop-blur-lg px-4 py-3 rounded-lg border border-white/40 shadow-2xl z-[100]"
                        style={{
                          // Ajuster la position selon l'angle pour éviter les chevauchements
                          transform: `translate(-50%, 0) ${getTooltipPosition(i, skills.length)}`
                        }}
                      >
                        <span className="text-white text-base font-medium whitespace-nowrap">
                          {skill.name}
                        </span>
                      </motion.div>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spider;
