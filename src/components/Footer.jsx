import { footerColumns } from '../data/content.jsx';
import { BrandLogo } from './icons.jsx';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', position: 'relative', zIndex: 2 }}>
      <div className="wrap" style={{ padding: '64px 24px 40px' }}>
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr repeat(4,1fr)', gap: 40 }}>
          <div>
            <a
              href="#"
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 16 }}
            >
              <BrandLogo box={30} radius={8} text={18} />
            </a>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>
              The premium deliverability operating system for high-performance sales and growth teams.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {['𝕏', 'in', '⌥'].map((glyph, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    border: '1px solid var(--border)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--muted)',
                  }}
                >
                  {glyph}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontSize: 13, color: 'var(--text)', margin: '0 0 16px' }}>{col.title}</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.links.map((link) => (
                  <a key={link} href="#" className="navlink" style={{ fontSize: 14 }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: '44px 0 24px' }} />
        <div
          className="foot-bottom"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}
        >
          <span className="muted" style={{ fontSize: 13 }}>
            © 2026 Mailzen. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Changelog'].map((link) => (
              <a key={link} href="#" className="navlink" style={{ fontSize: 13 }}>
                {link}
              </a>
            ))}
          </div>
          <span className="pill" style={{ fontSize: 12 }}>
            <span className="dot" /> All Systems Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
