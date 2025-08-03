import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  type?: 'word' | 'letter' | 'line';
  animation?: 'fade' | 'slide' | 'scale' | 'typing';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.1,
  type = 'word',
  animation = 'fade'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: true });

  const splitText = () => {
    switch (type) {
      case 'letter':
        return text.split('').filter(char => char !== ' ');
      case 'word':
        return text.split(' ');
      case 'line':
        return text.split('\n');
      default:
        return text.split(' ');
    }
  };

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          ease: "easeOut"
        }
      }
    };

    switch (animation) {
      case 'slide':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              ease: "easeOut"
            }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              ease: "easeOut"
            }
          }
        };
      case 'typing':
        return {
          hidden: { width: 0 },
          visible: {
            width: "100%",
            transition: {
              duration,
              ease: "easeOut"
            }
          }
        };
      default:
        return baseVariants;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger
      }
    }
  };

  const itemVariants = getAnimationVariants();

  const words = splitText();

  if (animation === 'typing') {
    return (
      <motion.div
        ref={ref}
        className={`overflow-hidden ${className}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <span className="inline-block">{text}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className={type === 'letter' ? 'inline-block' : 'inline-block mr-2'}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText; 