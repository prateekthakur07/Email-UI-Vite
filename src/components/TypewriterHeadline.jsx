import { useEffect, useState } from 'react';

// Hero headline that types itself out character-by-character (real typewriter
// cadence) with a blinking caret tracking the cursor. Typing runs across both
// lines in sequence; the second line keeps the accent gradient text-fill.
// Respects prefers-reduced-motion by rendering the full headline instantly.
const GRADIENT = {
  background: 'linear-gradient(120deg,var(--accent-3) 10%,var(--accent) 90%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

const LINES = [
  { text: 'Land in Inbox.', gradient: false },
  { text: 'Not Spam.', gradient: true },
];
const SPEED = 60; // ms per character

export default function TypewriterHeadline() {
  const total = LINES.reduce((n, l) => n + l.text.length, 0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCount(total);
      return;
    }
    setCount(0);
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= total) clearInterval(id);
    }, SPEED);
    return () => clearInterval(id);
  }, [total]);

  const done = count >= total;
  let before = 0; // characters consumed by earlier lines

  return (
    <h1
      className="tw-head"
      style={{ fontSize: 'clamp(44px,8vw,86px)', fontWeight: 800, lineHeight: 0.98, margin: '26px 0 0' }}
    >
      {LINES.map((line, li) => {
        const charsBefore = before;
        before += line.text.length;
        const shown = Math.max(0, Math.min(line.text.length, count - charsBefore));
        const isLast = li === LINES.length - 1;
        const typingHere = count >= charsBefore && count < charsBefore + line.text.length;
        const showCaret = typingHere || (done && isLast);
        return (
          <span key={li} className="tw-line">
            <span style={line.gradient ? GRADIENT : undefined}>{line.text.slice(0, shown)}</span>
            {showCaret && <span className="tw-caret" />}
            {!isLast && <br />}
          </span>
        );
      })}
    </h1>
  );
}
