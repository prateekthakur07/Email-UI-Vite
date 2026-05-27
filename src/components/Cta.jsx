export default function Cta() {
  return (
    <section className="wrap" style={{ padding: '40px 24px 100px' }}>
      <div
        className="reveal glass cta-pad"
        style={{ borderRadius: 28, padding: '64px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(600px circle at 50% 0%,rgba(168,85,247,.12),transparent 60%)',
          }}
        />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, lineHeight: 1.05 }}>
            Your emails deserve
            <br />
            the <span style={{ color: 'var(--accent)' }}>primary inbox.</span>
          </h2>
          <p className="muted" style={{ fontSize: 17, maxWidth: 520, margin: '20px auto 0', lineHeight: 1.6 }}>
            Join 5,000+ teams who have optimized their deliverability and tripled their reply rates with Mailzen.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary" style={{ padding: '15px 28px', fontSize: 15 }}>
              Start Free Warmup →
            </a>
            <a href="#" className="btn btn-ghost" style={{ padding: '15px 28px', fontSize: 15 }}>
              Open Dashboard
            </a>
          </div>
          <p className="mono" style={{ fontSize: 12, color: 'var(--faint)', marginTop: 18 }}>
            No credit card required · 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}
