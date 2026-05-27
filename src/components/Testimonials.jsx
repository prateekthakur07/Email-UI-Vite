import { testimonials } from '../data/content.jsx';
import { handleSpotlight } from '../utils/spotlight.js';

export default function Testimonials() {
  return (
    <section className="wrap" style={{ padding: '60px 24px 90px' }}>
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
        <span className="eyebrow">Wall of Results</span>
        <h2 className="section-title" style={{ margin: '16px 0' }}>
          Loved by high-performance teams.
        </h2>
      </div>
      <div
        id="testGrid"
        className="test-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}
      >
        {testimonials.map((t) => (
          <div
            className="reveal feat"
            key={t.name}
            onMouseMove={handleSpotlight}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ color: 'var(--accent)', fontSize: 18, marginBottom: 14 }}>★★★★★</div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: '#cfd5e2', margin: '0 0 24px' }}>"{t.quote}"</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: t.gradient,
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: "'Sora'",
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {t.initial}
              </div>
              <div>
                <div style={{ fontFamily: "'Sora'", fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
