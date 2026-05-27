// Reusable inline SVG icons. Each accepts standard SVG props (size, className…)
// so callers can size/style them without duplicating path data.

export function LogoMark({ size = 18, stroke = '#ffffff', strokeWidth = 2.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

export function ChevronDown({ size = 12, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function EnvelopeLarge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function EnvelopeSmall() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 8l9 5 9-5" />
    </svg>
  );
}

export function CheckCircle({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function CrossIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#b3a8c9" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// Tick used inside comparison table / pricing lists. `className="check"` pulls
// the accent colour + sizing from index.css.
export function CheckIcon({ size = 18, strokeWidth = 2.5, className = 'check' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function PlusIcon({ size = 20 }) {
  return (
    <svg className="faq-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

// Brand logo: a white envelope inside a gradient tile + the two-tone "Mailzen"
// wordmark ("Mail" in text colour, "zen" in the accent gradient). Sizing props
// let each placement (navbar / footer / dashboard sidebar) scale it.
export function BrandLogo({ box = 32, radius = 9, text = 19, gap = 10 }) {
  return (
    <span className="brand" style={{ gap }}>
      <span className="brand-icon" style={{ width: box, height: box, borderRadius: radius }}>
        <svg viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M3.5 7.5l8.5 6 8.5-6" />
        </svg>
      </span>
      <span className="brand-word" style={{ fontSize: text }}>
        Mail<span className="brand-grad">zen</span>
      </span>
    </span>
  );
}
