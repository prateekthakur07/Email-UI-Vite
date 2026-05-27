import { features } from '../data/content.jsx';
import { handleSpotlight } from '../utils/spotlight.js';

export default function Features() {
  return (
    <section id="features" className="wrap" style={{ padding: '60px 24px 90px' }}>
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
        <span className="eyebrow">Powerful Core Features</span>
        <h2 className="section-title" style={{ margin: '16px 0 14px' }}>
          Everything you need for high-volume growth.
        </h2>
        <p className="muted" style={{ fontSize: 17, lineHeight: 1.6 }}>
          Built for those who can't afford to be in the spam folder. AI-driven precision for modern sales teams.
        </p>
      </div>
      <div
        id="featGrid"
        className="feat-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}
      >
        {features.map((feature) => (
          <div className="reveal feat" key={feature.title} onMouseMove={handleSpotlight}>
            <div className="feat-ico" style={{ fontSize: 22 }}>
              {feature.icon}
            </div>
            <h4 style={{ fontSize: 18, margin: '18px 0 10px' }}>{feature.title}</h4>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
