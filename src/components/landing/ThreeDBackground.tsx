import { useEffect, useRef } from 'react';

export function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create canvas
    const canvas = document.createElement('canvas');
    containerRef.current.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = containerRef.current.clientWidth;
    canvas.height = containerRef.current.clientHeight;

    // Particle system for 3D effect
    const particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * 400 - 200;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.vz = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        if (this.x > canvas.width / 2) this.x = -canvas.width / 2;
        if (this.x < -canvas.width / 2) this.x = canvas.width / 2;
        if (this.y > canvas.height / 2) this.y = -canvas.height / 2;
        if (this.y < -canvas.height / 2) this.y = canvas.height / 2;
        if (this.z > 200) this.z = -200;
        if (this.z < -200) this.z = 200;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 300 / (300 + this.z);
        const x2d = this.x * scale + canvas.width / 2;
        const y2d = this.y * scale + canvas.height / 2;
        const size = this.size * scale;
        const opacity = 0.5 + (this.z / 400) * 0.5;

        ctx.fillStyle = `rgba(26, 145, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = containerRef.current?.clientWidth || canvas.width;
      canvas.height = containerRef.current?.clientHeight || canvas.height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050505 0%, #1a1a3f 50%, #050505 100%)' }}
    />
  );
}
