import React, { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Land in the primary inbox",
    body: "Automated warmup builds sender reputation so your campaigns stop hitting spam.",
    gradient: "linear-gradient(135deg,#8b5cf6,#6366f1)",
  },
  {
    title: "Real conversations, real signal",
    body: "Replies, opens, and engagement that mirror human behavior — at scale.",
    gradient: "linear-gradient(135deg,#c026d3,#8b5cf6)",
  },
  {
    title: "Insights you can act on",
    body: "Track deliverability across every provider with a live reputation score.",
    gradient: "linear-gradient(135deg,#6366f1,#a855f7)",
  },
];

const AUTOPLAY_MS = 5000;

const DummyFun = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const drag = useRef({ active: false, startX: 0, dx: 0 });
  const [dragOffset, setDragOffset] = useState(0);

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay (pauses on hover / interaction)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  // Keyboard arrows
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Pointer drag / swipe
  const onPointerDown = (e) => {
    drag.current = { active: true, startX: e.clientX, dx: 0 };
    setPaused(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    drag.current.dx = e.clientX - drag.current.startX;
    setDragOffset(drag.current.dx);
  };
  const onPointerUp = () => {
    if (!drag.current.active) return;
    const { dx } = drag.current;
    drag.current.active = false;
    setDragOffset(0);
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
    setPaused(false);
  };

  return (
    <section className="wrap" style={{ padding: "60px 24px 90px" }}>
      <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
        <span className="eyebrow">Interactive</span>
        <h2 className="section-title" style={{ margin: "16px 0" }}>
          Swipe, click, or use your arrow keys.
        </h2>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Feature highlights"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ position: "relative", maxWidth: 720, margin: "0 auto", outline: "none" }}
      >
        {/* Viewport */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            overflow: "hidden",
            borderRadius: 20,
            border: "1px solid var(--border)",
            cursor: drag.current.active ? "grabbing" : "grab",
            touchAction: "pan-y",
          }}
        >
          {/* Track */}
          <div
            style={{
              display: "flex",
              transform: `translateX(calc(${-index * 100}% + ${dragOffset}px))`,
              transition: drag.current.active ? "none" : "transform .5s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.title}
                aria-hidden={i !== index}
                style={{
                  flex: "0 0 100%",
                  minWidth: 0,
                  padding: "56px 48px",
                  background: s.gradient,
                  color: "#ffffff",
                  userSelect: "none",
                }}
              >
                <h3 style={{ fontSize: 28, margin: "0 0 14px", lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0, maxWidth: 460, opacity: 0.92 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button onClick={prev} aria-label="Previous slide" style={arrowStyle("left")}>
          ‹
        </button>
        <button onClick={next} aria-label="Next slide" style={arrowStyle("right")}>
          ›
        </button>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 22 }}>
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              style={{
                width: i === index ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                padding: 0,
                background: i === index ? "var(--accent)" : "var(--border-strong)",
                transition: "all .35s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const arrowStyle = (side) => ({
  position: "absolute",
  top: "calc(50% - 11px)",
  [side]: -18,
  transform: "translateY(-50%)",
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "1px solid var(--border)",
  background: "var(--panel)",
  color: "var(--text)",
  fontSize: 24,
  lineHeight: 1,
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  boxShadow: "0 6px 20px rgba(124,58,237,.15)",
});

export default DummyFun;
