import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
  icon?: React.ReactNode;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  animated = true,
  icon
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'error':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'info':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-xs';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  const baseStyles = `${getVariantStyles()} ${getSizeStyles()} rounded-full border backdrop-blur-sm font-medium transition-all duration-300 ${className}`;

  const badgeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className={`relative inline-flex items-center gap-2 ${baseStyles}`}
      variants={animated ? badgeVariants : undefined}
      initial="initial"
      animate="animate"
      whileHover={animated ? "hover" : undefined}
      whileTap={animated ? "tap" : undefined}
    >
      {/* Effet de pulse pour certains variants */}
      {animated && (variant === 'success' || variant === 'error') && (
        <motion.div
          className="absolute inset-0 rounded-full"
          variants={pulseVariants}
          animate="animate"
          style={{
            background: variant === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'
          }}
        />
      )}

      {/* Effet shimmer pour le gradient */}
      {animated && variant === 'gradient' && (
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          variants={shimmerVariants}
          animate="animate"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
        </motion.div>
      )}

      {/* Contenu du badge */}
      <div className="relative z-10 flex items-center gap-2">
        {icon && (
          <motion.div
            animate={animated ? { rotate: [0, 10, -10, 0] } : undefined}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>
        )}
        <span>{children}</span>
      </div>

      {/* Effet de bordure animée */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          animate={{
            borderColor: [
              'rgba(59, 130, 246, 0.3)',
              'rgba(139, 92, 246, 0.3)',
              'rgba(59, 130, 246, 0.3)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
};

export default AnimatedBadge; 