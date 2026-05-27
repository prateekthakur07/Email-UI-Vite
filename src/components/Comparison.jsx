import { comparisonRows, comparisonHighlights } from '../data/content.jsx';
import { handleSpotlight } from '../utils/spotlight.js';
import { CheckIcon, CrossIcon } from './icons.jsx';

export default function Comparison() {
  return (
    <section className="wrap" style={{ padding: '60px 24px 90px' }}>
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
        <span className="eyebrow">The Evolution</span>
        <h2 className="section-title" style={{ margin: '16px 0' }}>
          Why Mailzen is smarter.
        </h2>
      </div>
      <div className="cmp-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, alignItems: 'start' }}>
        <div className="reveal glass" style={{ borderRadius: 20, overflow: 'hidden' }}>
          <table>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '18px 22px', fontFamily: "'Sora'", fontWeight: 600, fontSize: 14, color: 'var(--muted)' }}>
                  Capabilities
                </th>
                <th style={{ padding: '18px 12px', fontFamily: "'JetBrains Mono'", fontSize: 12, color: 'var(--faint)' }}>Legacy</th>
                <th style={{ padding: '18px 22px', fontFamily: "'Sora'", fontSize: 14, color: 'var(--accent)' }}>Mailzen</th>
              </tr>
            </thead>
            <tbody id="cmpBody">
              {comparisonRows.map((row, i) => (
                <tr key={row} style={{ borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td style={{ padding: '15px 22px', fontSize: 14, color: 'var(--muted)' }}>{row}</td>
                  <td style={{ textAlign: 'center', padding: '15px 12px' }}>
                    <CrossIcon />
                  </td>
                  <td style={{ textAlign: 'center', padding: '15px 22px' }}>
                    <CheckIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {comparisonHighlights.map((item) => (
            <div className="reveal feat" key={item.title} onMouseMove={handleSpotlight}>
              <h5 style={{ fontSize: 16, margin: '0 0 8px', color: 'var(--accent)' }}>{item.title}</h5>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
