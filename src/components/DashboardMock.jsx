import { CheckCircle } from './icons.jsx';

const sideNav = [
  { label: '▣ Dashboard', active: true },
  { label: '✉ Inboxes' },
  { label: '📊 Analytics' },
  { label: '👥 Teams' },
  { label: '⚙ Settings' },
];

const summaryStats = [
  { label: 'Inbox Rate', value: '98.4%', delta: '+4.1%', deltaColor: 'var(--accent)' },
  { label: 'Spam Score', value: '0.2%', delta: '-12%', deltaColor: 'var(--accent)' },
  { label: 'Open Rate', value: '64.1%', delta: 'Optimal', deltaColor: 'var(--accent-2)' },
];

const volumeBars = [
  { day: 'Mon', height: '45%', delay: '.1s' },
  { day: 'Tue', height: '62%', delay: '.2s' },
  { day: 'Wed', height: '55%', delay: '.3s' },
  { day: 'Thu', height: '78%', delay: '.4s' },
  { day: 'Fri', height: '90%', delay: '.5s' },
  { day: 'Sat', height: '40%', delay: '.6s' },
  { day: 'Sun', height: '50%', delay: '.7s' },
];

const statCardLabel = { fontSize: 11, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.1em' };

export default function DashboardMock() {
  return (
    <div className="reveal mock floaty" style={{ marginTop: 60, display: 'flex', textAlign: 'left', minHeight: 440 }}>
      <div className="mock-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '0 4px' }}>
          <div
            style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,var(--accent),var(--accent-2))' }}
          />
          <span style={{ fontFamily: "'Sora'", fontWeight: 700, fontSize: 14 }}>Mailzen</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {sideNav.map((item) => (
            <div key={item.label} className={`mock-nav${item.active ? ' active' : ''}`}>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="mock-main" style={{ flex: 1, padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div
            className="glass"
            style={{ padding: '9px 14px', borderRadius: 10, fontSize: 13, color: 'var(--faint)', maxWidth: 220, width: '100%' }}
          >
            Search analytics...
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(124,58,237,.07)' }} />
            <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg,var(--violet),var(--accent-2))' }} />
          </div>
        </div>

        <div
          className="mock-stats"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 14 }}
        >
          {summaryStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div style={statCardLabel}>{stat.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
                <span style={{ fontFamily: "'Sora'", fontSize: 26, fontWeight: 700 }}>{stat.value}</span>
                <span style={{ color: stat.deltaColor, fontSize: 12, fontFamily: "'JetBrains Mono'" }}>{stat.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mock-lower" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 12 }}>
          <div className="stat-card">
            <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "'Sora'", marginBottom: 4 }}>Weekly Warmup Volume</div>
            <div style={{ fontSize: 10, color: 'var(--faint)', letterSpacing: '.1em', marginBottom: 14 }}>VOLUME</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 120 }}>
              {volumeBars.map((bar) => (
                <div
                  key={bar.day}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
                >
                  <div className="bar" style={{ height: bar.height, animationDelay: bar.delay }} />
                  <span style={{ fontSize: 10, color: 'var(--faint)' }}>{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="stat-card" style={{ borderColor: 'rgba(217,70,239,.25)', background: 'rgba(217,70,239,.06)' }}>
              <div style={{ fontSize: 11, color: 'var(--violet)', fontFamily: "'JetBrains Mono'", marginBottom: 6 }}>
                ⚡ AI RECOMMENDATION
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.4 }}>Update SPF & DKIM records immediately.</div>
            </div>
            <div className="stat-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--faint)' }}>Security Status</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>SSL Verified</div>
              </div>
              <span className="check">
                <CheckCircle />
              </span>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: 11, color: 'var(--faint)' }}>Placement Rate</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>
                99.8% <span style={{ color: 'var(--accent)' }}>Primary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
