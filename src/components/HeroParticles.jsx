import { useMemo } from 'react';

// Floating ambient particles in the hero. Randomised geometry is computed once
// (useMemo) so the layout stays stable across re-renders; the float motion
// itself is the CSS `floatUp` animation.
export default function HeroParticles() {
  const particles = useMemo(() => {
    const count = typeof window !== 'undefined' && window.innerWidth < 700 ? 20 : 38;
    return Array.from({ length: count }, () => {
      const size = 2 + Math.random() * 5;
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${20 + Math.random() * 70}%`,
        '--drift': `${Math.random() * 60 - 30}px`,
        '--maxop': (0.3 + Math.random() * 0.5).toFixed(2),
        animationDuration: `${9 + Math.random() * 10}s`,
        animationDelay: `${-Math.random() * 18}s`,
      };
    });
  }, []);

  return (
    <div className="hero-particles" id="heroParticles">
      {particles.map((style, i) => (
        <div key={i} className="hp" style={style} />
      ))}
    </div>
  );
}
