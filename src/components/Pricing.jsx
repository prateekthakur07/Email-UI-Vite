import { useState } from 'react';
import { plans } from '../data/content.jsx';
import { CheckIcon } from './icons.jsx';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const toggleBtn = (active) => ({
    padding: '8px 20px',
    fontSize: 13,
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? '#ffffff' : 'var(--muted)',
  });

  return (
    <section id="pricing" className="wrap" style={{ padding: '60px 24px 90px' }}>
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 30px' }}>
        <span className="eyebrow">Transparent Pricing</span>
        <h2 className="section-title" style={{ margin: '16px 0 24px' }}>
          Plans that grow with you.
        </h2>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: 5,
            borderRadius: 100,
            border: '1px solid var(--border-strong)',
            background: 'rgba(124,58,237,.035)',
          }}
        >
          <button id="mBtn" className="btn" style={toggleBtn(!yearly)} onClick={() => setYearly(false)}>
            Monthly
          </button>
          <button  id="yBtn" className="btn" style={toggleBtn(yearly)} onClick={() => setYearly(true)}>
            Yearly <span style={{ color: yearly ? '#fff' : 'var(--accent)', fontSize: 11 }}>−20%</span>
          </button>
        </div>
      </div>

      <div
        className="price-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 20, alignItems: 'stretch' }}
      >
        {plans.map((plan) => (
          <div className={`reveal price-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
            {plan.featured && (
              <span
                style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg,var(--accent),var(--accent-2))',
                  color: '#ffffff',
                  fontFamily: "'Sora'",
                  fontWeight: 600,
                  fontSize: 12,
                  padding: '5px 16px',
                  borderRadius: 100,
                }}
              >
                ★ Most Popular
              </span>
            )}
            <h4 style={{ fontSize: 20, margin: '0 0 6px' }}>{plan.name}</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '14px 0' }}>
              <span className="mono" style={{ fontSize: 38, fontWeight: 600 }}>
                {yearly ? plan.priceYearly : plan.priceMonthly}
              </span>
              <span className="muted">/mo</span>
            </div>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.5, margin: '0 0 22px', minHeight: 42 }}>
              {plan.desc}
            </p>
            <a href="#" className={`btn ${plan.ctaVariant}`} style={{ width: '100%', justifyContent: 'center', marginBottom: 24 }}>
              {plan.ctaLabel}
            </a>
            <div className="divider" style={{ marginBottom: 22 }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 13, fontSize: 14 }}>
              {plan.features.map((feature) => (
                <li key={feature} style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--muted)' }}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
