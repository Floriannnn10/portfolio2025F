import { useEffect, useRef } from 'react';

interface SplashCursorProps {
  colors?: string[];
  size?: number;
  duration?: number;
  opacity?: number;
}

export default function SplashCursor({ 
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
  size = 20,
  duration = 0.6,
  opacity = 0.8
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe Particle
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 15;
        this.vy = (Math.random() - 0.5) * 15;
        this.life = 1;
        this.maxLife = 1;
        this.color = color;
        this.size = Math.random() * size + size / 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.life -= 1 / (60 * duration);
        this.size *= 0.98;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life * opacity;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Gestionnaire de clic global
    const handleGlobalClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Créer plusieurs particules
      const particleCount = Math.floor(Math.random() * 15) + 10;
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particlesRef.current.push(new Particle(x, y, color));
      }
    };

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mettre à jour et dessiner les particules
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return !particle.isDead();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Démarrer l'animation
    animate();

    // Ajouter l'écouteur d'événement global
    document.addEventListener('click', handleGlobalClick);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleGlobalClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, size, duration, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ touchAction: 'none' }}
    />
  );
} 