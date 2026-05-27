import { stats } from '../data/content.jsx';

const valueStyle = {
  fontFamily: "'Sora'",
  fontSize: 'clamp(30px,4vw,42px)',
  fontWeight: 800,
  background: 'linear-gradient(120deg,var(--accent-2),var(--accent-3))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

export default function StatsStrip() {
  return (
    <section className="wrap" style={{ paddingBottom: 90 }}>
      <div
        className="reveal glass stats-strip"
        style={{ borderRadius: 22, padding: 44, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div style={valueStyle}>{stat.value}</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
