import { steps } from '../data/content.jsx';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="wrap" style={{ padding: '60px 24px 90px', position: 'relative' }}>
      <div className="hiw-bg" aria-hidden="true">
        <div className="hiw-glow" />
      </div>
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px', position: 'relative' }}>
        <span className="eyebrow">Our Protocol</span>
        <h2 className="section-title" style={{ margin: '16px 0' }}>
          The path to perfection.
        </h2>
      </div>
      <div className="steps-row reveal">
        <div className="steps-line" />

        {steps.map((step) => (
          <div className="step" key={step.number} style={step.style}>
            <div className="step-badge">
              <span className="step-tab">{step.number}</span>
              <div className="step-ring" />
              <div className="step-core">
                <svg viewBox="0 0 24 24">{step.icon}</svg>
              </div>
            </div>
            <h4 style={{ fontSize: 22, margin: '0 0 12px' }}>{step.title}</h4>
            <p className="muted" style={{ lineHeight: 1.6, fontSize: 15, maxWidth: 300 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
