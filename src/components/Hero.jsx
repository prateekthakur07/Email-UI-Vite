import HeroParticles from './HeroParticles.jsx';
import HeroWaves from './HeroWaves.jsx';
import FloatingMail from './FloatingMail.jsx';
import TypewriterHeadline from './TypewriterHeadline.jsx';
import WarmupStage from './WarmupStage.jsx';
import DashboardMock from './DashboardMock.jsx';

export default function Hero() {
  return (
    <header className="wrap" style={{ paddingTop: 80, paddingBottom: 60, textAlign: 'center' }}>
      {/* calm ambient background */}
      <div className="hero-scene" aria-hidden="true">
        <div className="aura aura-1" />
        <div className="aura aura-2" />
        <div className="aura aura-3" />
        <HeroWaves />
        <HeroParticles />
        <FloatingMail />
      </div>

      <div className="reveal pill" style={{ margin: '0 auto' }}>
        <span className="dot" /> AI-Powered Deliverability Engine
      </div>
      <TypewriterHeadline />
      <p
        className="reveal muted"
        style={{ fontSize: 'clamp(16px,2vw,20px)', maxWidth: 600, margin: '24px auto 0', lineHeight: 1.6 }}
      >
        AI-powered email warmup, deliverability monitoring, and reputation repair for high-performance sales teams.
      </p>
      <div
        className="reveal hero-cta"
        style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}
      >
        <a href="#" className="btn btn-primary" style={{ padding: '15px 28px', fontSize: 15 }}>
          Start Free Warmup →
        </a>
        <a href="#how-it-works" className="btn btn-ghost" style={{ padding: '15px 28px', fontSize: 15 }}>
          See how it works
        </a>
      </div>
      <p className="reveal mono" style={{ fontSize: 12, color: 'var(--faint)', marginTop: 20, letterSpacing: '.05em' }}>
        TRUSTED BY 500+ SDR TEAMS
      </p>

      <WarmupStage />
      <DashboardMock />
    </header>
  );
}
