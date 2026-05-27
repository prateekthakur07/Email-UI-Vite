// Centralised content for the Mailzen landing page.
// Keeping copy/data here (instead of inline JSX) keeps components small and
// makes the marketing content editable in one place.

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export const freeTools = [
  { icon: '✍️', label: 'Email Signature Generator' },
  { icon: '🔐', label: 'SPF, DKIM & MX Checker' },
  { icon: '📝', label: 'Subject Line Tester' },
  { icon: '🚫', label: 'Spam Blacklist Checker' },
];

export const stats = [
  { value: '12M+', label: 'Emails Warmed' },
  { value: '98.2%', label: 'Inbox Placement' },
  { value: '5,000+', label: 'Domains Optimized' },
  { value: '3x', label: 'Reply Rate Boost' },
];

export const logos = ['Loom', 'Vercel', 'Linear', 'Raycast', 'Resend', 'Notion'];

export const features = [
  { icon: '🤖', title: 'AI Email Warmup', desc: 'Human-like AI conversations that graduate your inboxes from zero to high-volume safely.' },
  { icon: '📡', title: 'Inbox Monitoring', desc: 'Real-time tracking of where your emails land across Google, Outlook, and private servers.' },
  { icon: '🛡️', title: 'Domain Reputation', desc: 'Proactive domain health monitoring to catch deliverability drops before they hit your pipe.' },
  { icon: '🔄', title: 'Multi-Inbox Rotation', desc: 'Intelligent sending across multiple accounts to keep per-mailbox volume optimal.' },
  { icon: '🔍', title: 'Automated DNS Checks', desc: 'Live verification of SPF, DKIM, and DMARC settings with one-click repair guides.' },
  { icon: '💡', title: 'AI Recommendations', desc: 'Smart insights on subject lines and body copy that trigger spam filters.' },
  { icon: '🚨', title: 'Blacklist Alerts', desc: 'Instant notifications if your IP or domain hits any of the 100+ global blacklists.' },
  { icon: '🌍', title: 'Global Testing', desc: 'Deliverability tests reaching every major provider across 40+ countries.' },
  { icon: '📈', title: 'Advanced Analytics', desc: 'Deep dive into reply rates, open rates, and conversion trends per sender.' },
];

export const steps = [
  {
    number: '1',
    title: 'Connect Inboxes',
    desc: 'OAuth integration for Google Workspace & Microsoft Outlook, or SMTP/IMAP for everything else.',
    icon: (
      <>
        <circle cx="9" cy="8" r="4" />
        <path d="M2 21v-1a6 6 0 0 1 6-6h2" />
        <path d="M19 8v6M16 11h6" />
      </>
    ),
    style: {
      '--ring-color': 'rgba(99,102,241,.3)',
      '--ring-stroke': 'rgba(99,102,241,.5)',
      '--core-light': 'rgba(99,102,241,.3)',
      '--core-dark': 'rgba(49,46,129,.4)',
      '--ring-delay': '0s',
    },
  },
  {
    number: '2',
    title: 'AI Warmup & Monitoring',
    desc: 'Our proprietary AI starts sending human-like conversations and monitoring domain reputation.',
    icon: (
      <>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
        <path d="M18 14l.7 1.8L20.5 16.5l-1.8.7L18 19l-.7-1.8L15.5 16.5l1.8-.7L18 14z" />
      </>
    ),
    style: {
      '--ring-color': 'rgba(168,85,247,.32)',
      '--ring-stroke': 'rgba(168,85,247,.55)',
      '--core-light': 'rgba(168,85,247,.32)',
      '--core-dark': 'rgba(88,28,135,.4)',
      '--ring-delay': '1.1s',
    },
  },
  {
    number: '3',
    title: 'Scale Outreach Safely',
    desc: 'Consistent primary inbox placement allows you to scale volume without fear of being blocked.',
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M17 7h4v4" />
      </>
    ),
    style: {
      '--ring-color': 'rgba(217,70,239,.3)',
      '--ring-stroke': 'rgba(217,70,239,.55)',
      '--core-light': 'rgba(217,70,239,.3)',
      '--core-dark': 'rgba(112,26,117,.4)',
      '--ring-delay': '2.2s',
    },
  },
];

export const comparisonRows = [
  'AI Conversational Flow',
  'Provider Pattern Recognition',
  'Automated DNS Correction',
  'Real-time Spam Alerts',
  'Scalability (100+ accounts)',
  'Safety (No detection)',
];

export const comparisonHighlights = [
  { title: 'Low Detection', desc: 'Legacy patterns are easily flagged by SpamAssassin & Google AI.' },
  { title: 'Human Content', desc: 'Traditional tools use gibberish. We use contextual AI chains.' },
  { title: 'Dynamic IP Mesh', desc: 'We route through domestic residential IPs to simulate real traffic.' },
];

export const testimonials = [
  {
    quote: 'Mailzen changed our business. We were hitting spam for 40% of our clients. Within 3 weeks of using their AI warmup, we hit 98% primary inbox across 50+ domains.',
    initial: 'S',
    name: 'Sarah Chen',
    role: 'Founder @ LeadFlow Agency',
    gradient: 'linear-gradient(135deg,#a855f7,#6366f1)',
  },
  {
    quote: 'The domain reputation monitoring is a lifesaver. We actually get notified before things go bad. It saved us from a disastrous $1M pipeline drop last quarter.',
    initial: 'M',
    name: 'Michael Ross',
    role: 'Head of Growth @ SaaS.ai',
    gradient: 'linear-gradient(135deg,#d946ef,#6366f1)',
  },
  {
    quote: 'Cleanest UX I have seen in the deliverability space. The AI subject line recommendations alone are worth the Growth plan. Our reply rates have tripled.',
    initial: 'D',
    name: 'David Aris',
    role: 'VP Sales @ UnicornScale',
    gradient: 'linear-gradient(135deg,#f59e0b,#a855f7)',
  },
];

export const plans = [
  {
    name: 'Starter',
    priceMonthly: '$39',
    priceYearly: '$31',
    desc: 'Perfect for solo founders and small SDR teams starting out.',
    ctaLabel: 'Start Free Trial',
    ctaVariant: 'btn-ghost',
    featured: false,
    features: [
      'Up to 3 inboxes',
      'AI Warmup (25 emails/day)',
      'Basic Deliverability Check',
      'Domain Reputation Monitoring',
      'Slack Notifications',
      '7-day data retention',
    ],
  },
  {
    name: 'Growth',
    priceMonthly: '$99',
    priceYearly: '$79',
    desc: 'Best for growing sales agencies and mid-size SaaS companies.',
    ctaLabel: 'Start Growth Trial',
    ctaVariant: 'btn-primary',
    featured: true,
    features: [
      'Up to 20 inboxes',
      'AI Warmup (unlimited)',
      'Advanced Inbox Rotation',
      'DKIM/SPF Repair Agent',
      'Priority Email Support',
      '30-day data retention',
      'Detailed API access',
    ],
  },
  {
    name: 'Scale',
    priceMonthly: '$399',
    priceYearly: '$319',
    desc: 'Bespoke solutions for high-volume lead gen companies.',
    ctaLabel: 'Talk to Sales',
    ctaVariant: 'btn-ghost',
    featured: false,
    features: [
      'Unlimited inboxes',
      'Dedicated Infrastructure',
      'White-glove DNS Setup',
      '1-on-1 Deliverability Audit',
      'SLA Guaranteed Uptime',
      'Lifetime data retention',
      'Custom Integrations',
    ],
  },
];

export const faqs = [
  {
    q: 'How long does the warmup process take?',
    a: 'For a new domain, we recommend a 3-week ramp-up period. Our AI starts with 2-5 emails/day and gradually increases to 50+ while monitoring deliverability signals daily.',
  },
  {
    q: 'Is this compliant with Google and Outlook?',
    a: 'Yes. We use standard OAuth connections and our traffic follows human-like behavior patterns. We focus on real engagement (replies, marks as not-spam) which is what providers want to see.',
  },
  {
    q: 'Can I connect my CRM?',
    a: 'Mailzen integrates directly with HubSpot, Salesforce, and Outreach via our native connectors. You can also use our API to build custom flows.',
  },
  {
    q: 'What happens if my domain gets blacklisted?',
    a: 'Our proactive monitoring alerts you the moment any issues arise. If you hit a blacklist, we provide automated remediation guides and stop warmup activity to let the domain cool down.',
  },
  {
    q: 'Do you offer white-label for agencies?',
    a: 'Our Scale plan includes a white-label dashboard option where you can invite your clients to see their deliverability reports under your own brand.',
  },
];

export const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Warmup Engine', 'Reputation Repair', 'Pricing', 'API'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Deliverability Guide', 'Success Stories', 'Affiliate', 'Blog'],
  },
  {
    title: 'Free Tools',
    links: ['Email Signature', 'SPF & DKIM Checker', 'Subject Line Tester', 'Spam Blacklist'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'],
  },
];
