import { logos } from '../data/content.jsx';

export default function LogoMarquee() {
  // Duplicate the list so the CSS marquee can loop seamlessly.
  const track = [...logos, ...logos];

  return (
    <section className="wrap" style={{ padding: '30px 24px 70px' }}>
      <p
        className="mono"
        style={{ textAlign: 'center', fontSize: 12, color: 'var(--faint)', letterSpacing: '.2em', marginBottom: 28 }}
      >
        TRUSTED BY TEAMS AT
      </p>
      <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
        <div className="marquee">
          {track.map((logo, i) => (
            <span className="logo-txt" key={i}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
