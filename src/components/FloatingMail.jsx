import { EnvelopeSmall } from './icons.jsx';

// A handful of envelope glyphs drifting in the hero background. Positions and
// timings are fixed (not random) so the composition stays balanced across
// renders; the gentle rise/drift motion is the CSS `mailFloat` animation.
const MAILS = [
  { left: '8%', top: '22%', size: 30, dur: '14s', delay: '0s', drift: '24px' },
  { left: '82%', top: '18%', size: 26, dur: '17s', delay: '-3s', drift: '-30px' },
  { left: '16%', top: '64%', size: 22, dur: '20s', delay: '-6s', drift: '18px' },
  { left: '72%', top: '70%', size: 34, dur: '16s', delay: '-2s', drift: '-22px' },
  { left: '46%', top: '12%', size: 20, dur: '22s', delay: '-9s', drift: '14px' },
  { left: '90%', top: '52%', size: 24, dur: '19s', delay: '-5s', drift: '20px' },
];

export default function FloatingMail() {
  return (
    <div className="floating-mail" aria-hidden="true">
      {MAILS.map((m, i) => (
        <span
          key={i}
          className="fmail"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            '--drift': m.drift,
            animationDuration: m.dur,
            animationDelay: m.delay,
          }}
        >
          <EnvelopeSmall />
        </span>
      ))}
    </div>
  );
}
