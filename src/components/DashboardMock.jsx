import { CheckCircle, BrandLogo } from './icons.jsx';

/* ── dashboard-only line icons (currentColor so the CSS tints them) ── */
const IconDashboard = () => (
  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>
);
const IconInbox = () => (
  <svg viewBox="0 0 24 24"><path d="M4 13l2-8h12l2 8M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M4 13h4l1.5 3h5L16 13h4" /></svg>
);
const IconAnalytics = () => (
  <svg viewBox="0 0 24 24"><path d="M4 17l5-5 3 3 7-7" /><path d="M16 8h4v4" /></svg>
);
const IconTeams = () => (
  <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6M17.5 20a6 6 0 0 0-3-5.2" /></svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /></svg>
);
const IconWarning = () => (
  <svg viewBox="0 0 24 24"><path d="M12 3l9 16H3l9-16z" /><path d="M12 10v4M12 17h.01" /></svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></svg>
);

const sideNav = [
  { label: 'Dashboard', icon: <IconDashboard />, active: true },
  { label: 'Inboxes', icon: <IconInbox /> },
  { label: 'Analytics', icon: <IconAnalytics /> },
  { label: 'Teams', icon: <IconTeams /> },
  { label: 'Settings', icon: <IconSettings /> },
];

const summaryStats = [
  {
    label: 'Inbox Rate', value: '98.4%', delta: '+4.1%', deltaClass: 'up',
    icon: <CheckCircle size={16} />, tone: 'rgba(16,185,129,.12)', toneColor: 'var(--success)',
    bar: '95%', barFill: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
  },
  {
    label: 'Spam Score', value: '0.2%', delta: '-12%', deltaClass: 'down',
    icon: <IconWarning />, tone: 'rgba(244,63,94,.12)', toneColor: 'var(--danger)',
    bar: '6%', barFill: 'var(--danger)',
  },
  {
    label: 'Open Rate', value: '64.1%', delta: 'Optimal', deltaClass: 'flat',
    icon: <IconShield />, tone: 'rgba(139,92,246,.13)', toneColor: 'var(--accent)',
    bar: '64%', barFill: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
  },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const points = [
  [20, 108], [127, 98], [233, 103], [340, 82], [447, 64], [553, 53], [660, 40],
];
const linePath = points.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
const areaPath = `${linePath} L660,160 L20,160 Z`;

const statCardLabel = { fontSize: 11, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.1em' };

export default function DashboardMock() {
  return (
    <div className="reveal mock-shell">
      <div className="mock floaty" style={{ display: 'flex', textAlign: 'left', minHeight: 440 }}>
        <div className="mock-side">
          <div style={{ marginBottom: 24, padding: '0 4px' }}>
            <BrandLogo box={26} radius={8} text={14} gap={9} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {sideNav.map((item) => (
              <div key={item.label} className={`mock-nav${item.active ? ' active' : ''}`}>
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mock-main" style={{ flex: 1, padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div className="glass mock-search">
              <IconSearch />
              Search analytics...
            </div>
            <div className="mock-avatar" />
          </div>

          <div
            className="mock-stats"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 14 }}
          >
            {summaryStats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-head">
                  <div style={statCardLabel}>{stat.label}</div>
                  <span className="stat-ico" style={{ background: stat.tone, color: stat.toneColor }}>
                    {stat.icon}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <span style={{ fontFamily: "'Sora'", fontSize: 26, fontWeight: 700 }}>{stat.value}</span>
                  <span className={`delta ${stat.deltaClass}`}>{stat.delta}</span>
                </div>
                <div className="stat-bar">
                  <i style={{ width: stat.bar, background: stat.barFill }} />
                </div>
              </div>
            ))}
          </div>

          <div className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "'Sora'", letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                Weekly Warmup Volume
              </div>
              <span className="chart-legend">
                <span className="dot" /> VOLUME
              </span>
            </div>
            <svg className="mock-chart" viewBox="0 0 680 168" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mzArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="area" d={areaPath} />
              <path className="line" d={linePath} />
              {points.map((p) => (
                <circle key={p[0]} className="pt" cx={p[0]} cy={p[1]} r="4" />
              ))}
            </svg>
            <div className="chart-x">
              {days.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating callouts that spill past the panel edges */}
      <div className="mock-float float-ai">
        <span className="ai-ico"><IconWarning /></span>
        <div>
          <div style={{ fontSize: 11, color: 'var(--warn)', fontFamily: "'JetBrains Mono'", letterSpacing: '.08em', marginBottom: 5 }}>
            AI RECOMMENDATION
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.4, fontWeight: 600 }}>Update SPF &amp; DKIM records immediately.</div>
        </div>
      </div>

      <div className="mock-float float-place">
        <span className="pl-ico"><IconTarget /></span>
        <div>
          <div style={{ fontSize: 11, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>
            Placement Rate
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "'Sora'" }}>
            99.8% <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Primary</span>
          </div>
        </div>
      </div>
    </div>
  );
}
