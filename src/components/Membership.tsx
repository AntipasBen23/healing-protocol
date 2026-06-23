const plans = [
  {
    tier: 'Entry', name: 'Silver', amount: '₦20,000', period: '/ month',
    annual: '₦216,000 (save 10%)', featured: false,
    features: [
      '1 monthly consultation',
      'Personalised meal protocol',
      'WhatsApp wellness support',
      'Monthly wellness webinar access',
      'Priority appointment booking',
    ],
  },
  {
    tier: 'Growth', name: 'Gold', amount: '₦50,000', period: '/ month',
    annual: '₦540,000 (save 10%)', featured: true,
    features: [
      '2 monthly consultations',
      'Lab result review & analysis',
      'Priority & same-day booking',
      'Members-only WhatsApp community',
      'Monthly group webinar (live Q&A)',
      '90-day transformation review',
    ],
  },
  {
    tier: 'Elite', name: 'Platinum', amount: '₦150,000', period: '/ month',
    annual: '₦1,620,000 (save 10%)', featured: false,
    features: [
      'Unlimited consultations',
      'Home visit option (Abuja)',
      'Bi-weekly wellness check-in',
      'Quarterly executive health report',
      'VIP access to all THP events',
      'Direct founder access',
    ],
  },
]

export default function Membership() {
  return (
    <section id="membership">
      <div className="container">
        <div className="membership-intro reveal">
          <span className="section-label">Recurring Wellness</span>
          <h2 className="section-title">Membership Plans</h2>
          <span className="gold-rule" />
          <p>
            Healing is not a one-time event. It is a sustained practice. Our membership plans give you
            the continuity, support, and accountability that make transformation permanent — at a price
            that protects against inflation with our annual lock-in.
          </p>
        </div>

        <div className="plans-grid reveal">
          {plans.map((p) => (
            <div key={p.name} className={`plan-card${p.featured ? ' featured' : ''}`}>
              {p.featured && <div className="plan-badge">Most Popular</div>}
              <div className="plan-tier">{p.tier}</div>
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <div className="plan-amount">{p.amount}</div>
                <div className="plan-period">{p.period}</div>
              </div>
              <div className="plan-annual">Annual plan: {p.annual}</div>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}><span className="feat-tick">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#booking" className="plan-btn">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
