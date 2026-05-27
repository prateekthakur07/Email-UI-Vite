// Digital sine-wave layers drifting across the hero background. Each layer is a
// seamless 2-period wave path (period 720 in a 1440-wide viewBox) rendered at
// 200% width and translated by -50% (CSS `waveShift`), so it loops without a
// visible seam. Colours stay light via low-opacity accent vars.
const WAVE_PATH =
  'M0 100 C 120 60 240 60 360 100 C 480 140 600 140 720 100 ' +
  'C 840 60 960 60 1080 100 C 1200 140 1320 140 1440 100';

export default function HeroWaves() {
  return (
    <div className="hero-waves" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <svg key={n} className={`wave wave-${n}`} viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d={WAVE_PATH} />
        </svg>
      ))}
    </div>
  );
}
