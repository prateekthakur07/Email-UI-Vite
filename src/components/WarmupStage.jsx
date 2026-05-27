import { useCallback, useRef, useState } from 'react';
import { useWarmupAnimation } from '../hooks/useWarmupAnimation.js';
import { EnvelopeLarge, EnvelopeSmall } from './icons.jsx';

const INBOX_COUNT = 100;

// The "1 → 100" centrepiece: one mailbox warming a hundred inboxes.
// Boxes are rendered declaratively; the packet-flight animation + landed
// counting live in useWarmupAnimation, which reports progress via `onLanded`.
export default function WarmupStage() {
  const stageRef = useRef(null);
  const gridRef = useRef(null);
  const senderRef = useRef(null);
  const [landed, setLanded] = useState(0);

  const onLanded = useCallback((count) => setLanded(count), []);
  useWarmupAnimation({ stageRef, gridRef, senderRef, onLanded });

  return (
    <div className="warmup-stage reveal" id="warmupStage" ref={stageRef}>
      <div className="sender">
        <div className="sender-core" ref={senderRef}>
          <EnvelopeLarge />
        </div>
        <div className="sender-label">Your Mailbox</div>
        <div className="sender-ring r1" />
        <div className="sender-ring r2" />
      </div>

      <div className="inbox-grid" id="inboxGrid" ref={gridRef}>
        {Array.from({ length: INBOX_COUNT }, (_, i) => (
          <div className="ibx" key={i}>
            <EnvelopeSmall />
          </div>
        ))}
      </div>

      <div className="warmup-counter">
        <span className="wc-num" id="wcNum">
          {landed}
        </span>
        <span className="wc-label">/ 100 landed in inbox</span>
        <span className="wc-rate" id="wcRate">
          100% placement
        </span>
      </div>
    </div>
  );
}
