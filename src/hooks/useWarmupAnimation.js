import { useEffect } from 'react';

// Drives the "1 → 100" hero animation: packets fly from the sender mailbox to
// each inbox box in organic bursts, lighting them up as they "land". Starts
// when the stage scrolls into view and loops. Ported from app-logic.js, with
// proper teardown (timeouts + observer) for React's lifecycle.
//
// `onLanded` receives the running landed count (0..100) so the caller can
// render the counter declaratively.
export function useWarmupAnimation({ stageRef, gridRef, senderRef, onLanded }) {
  useEffect(() => {
    const stage = stageRef.current;
    const grid = gridRef.current;
    const sender = senderRef.current;
    if (!stage || !grid || !sender) return undefined;

    const boxes = Array.from(grid.querySelectorAll('.ibx'));
    if (boxes.length === 0) return undefined;

    let landed = 0;
    let running = false;
    let waveTimer = null;
    let tickTimer = null;
    const animations = new Set();

    // Shuffled order so inboxes light up organically rather than left-to-right.
    const order = [...boxes.keys()];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    const fly = (box) => {
      const sr = sender.getBoundingClientRect();
      const br = box.getBoundingClientRect();
      const st = stage.getBoundingClientRect();

      const packet = document.createElement('div');
      packet.className = 'packet-fly';
      const x0 = sr.left + sr.width / 2 - st.left;
      const y0 = sr.top + sr.height / 2 - st.top;
      const x1 = br.left + br.width / 2 - st.left;
      const y1 = br.top + br.height / 2 - st.top;
      packet.style.left = `${x0}px`;
      packet.style.top = `${y0}px`;
      stage.appendChild(packet);

      const duration = 420 + Math.random() * 260;
      const animation = packet.animate(
        [
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: `translate(${x1 - x0}px,${y1 - y0}px) scale(.7)`, opacity: 0.9 },
        ],
        { duration, easing: 'cubic-bezier(.4,.1,.2,1)' }
      );
      animations.add(animation);
      animation.onfinish = () => {
        animations.delete(animation);
        packet.remove();
        box.classList.add('landed');
        landed += 1;
        onLanded(landed);
      };
    };

    const runWave = () => {
      if (running) return;
      running = true;
      boxes.forEach((b) => b.classList.remove('landed'));
      landed = 0;
      onLanded(0);

      let i = 0;
      const tick = () => {
        if (i >= boxes.length) {
          running = false;
          waveTimer = setTimeout(runWave, 2600);
          return;
        }
        const burst = Math.min(2 + Math.floor(Math.random() * 2), boxes.length - i);
        for (let k = 0; k < burst; k++) {
          fly(boxes[order[i]]);
          i += 1;
        }
        tickTimer = setTimeout(tick, 90);
      };
      tick();
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && runWave()),
      { threshold: 0.3 }
    );
    observer.observe(stage);

    return () => {
      observer.disconnect();
      clearTimeout(waveTimer);
      clearTimeout(tickTimer);
      animations.forEach((a) => a.cancel());
      stage.querySelectorAll('.packet-fly').forEach((p) => p.remove());
    };
  }, [stageRef, gridRef, senderRef, onLanded]);
}
