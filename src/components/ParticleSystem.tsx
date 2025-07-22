import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 10,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    });

    const updateParticles = () => {
      setParticles(prevParticles => {
        const updatedParticles = prevParticles
          .map(particle => ({
            ...particle,
            y: particle.y - particle.speed,
            opacity: particle.y > window.innerHeight * 0.8 
              ? particle.opacity 
              : particle.opacity * 0.98
          }))
          .filter(particle => particle.y > -10 && particle.opacity > 0.01);

        // Add new particles
        while (updatedParticles.length < 15) {
          updatedParticles.push(createParticle());
        }

        return updatedParticles;
      });
    };

    const interval = setInterval(updateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            background: `hsl(0 75% 45% / ${particle.opacity})`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(0 75% 45% / ${particle.opacity * 0.5})`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;