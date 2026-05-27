import { useState } from 'react';
import { navLinks, freeTools } from '../data/content.jsx';
import { useScrolled } from '../hooks/useScrolled.js';
import { BrandLogo, ChevronDown } from './icons.jsx';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : undefined}>
      <div
        className="wrap"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <BrandLogo box={32} radius={9} text={19} />
        </a>

        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navlink">
              {link.label}
            </a>
          ))}
          <div className="dropdown">
            <span className="navlink" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
              Free Tools
              <ChevronDown />
            </span>
            <div className="dropdown-menu glass" style={{ borderRadius: 16 }}>
              {freeTools.map((tool) => (
                <a key={tool.label} href="#" className="dropdown-item">
                  <span>{tool.icon}</span>
                  <div>
                    <div style={{ color: 'var(--text)', fontSize: 14 }}>{tool.label}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <a href="#faq" className="navlink">
            FAQ
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#" className="navlink hide-mobile">
            Log in
          </a>
          <a href="#" className="btn btn-primary nav-cta">
            Start 14-Day Trial
          </a>
          <button
            className={`menu-btn${mobileOpen ? ' open' : ''}`}
            id="menuBtn"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' show' : ''}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>
            {link.label}
          </a>
        ))}
        <a href="#faq" onClick={closeMobile}>
          FAQ
        </a>
        <div className="divider" />
        {freeTools.map((tool) => (
          <a key={tool.label} href="#" onClick={closeMobile}>
            {tool.label}
          </a>
        ))}
        <div className="divider" />
        <a href="#" onClick={closeMobile}>
          Log in
        </a>
      </div>
    </nav>
  );
}
