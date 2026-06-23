const packages = [
  { tier: 'Bronze',   name: 'Starter',       price: '₦500K',  desc: '2 wellness talks + health screening',                     gold: false },
  { tier: 'Silver',   name: 'Standard',      price: '₦1.2M',  desc: '4 talks, quarterly screening, staff meal guide',          gold: false },
  { tier: 'Gold',     name: 'Full Programme', price: '₦2.5M',  desc: 'Monthly wellness, staff assessments, HR reports',         gold: true  },
  { tier: 'Platinum', name: 'Enterprise',    price: '₦5M+',   desc: 'Dedicated officer, custom programme, weekly engagement',  gold: false },
]

const sectors = [
  'Banks & Finance', 'Oil & Gas', 'Embassies', 'Government Agencies',
  'Technology Firms', 'Private Schools', 'Hospitals', 'Telecoms',
]

export default function Corporate() {
  return (
    <section id="corporate">
      <div className="container">
        <div className="corporate-grid">
          <div className="corporate-left reveal">
            <span className="section-label">For Organisations</span>
            <h2 className="section-title">Corporate Wellness Contracts</h2>
            <span className="gold-rule" />
            <p className="corporate-body">
              Healthy staff are productive staff. Our annual corporate wellness programmes are designed
              for organisations that understand that employee health is not a cost — it is the
              highest-return investment a company can make. One contract can transform the health
              culture of your entire organisation.
            </p>
            <a
              href={`https://wa.me/2348064095522?text=${encodeURIComponent('Hello, I would like to request a Corporate Wellness proposal from The Healing Protocol.')}`}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Proposal →
            </a>
            <div className="sectors">
              {sectors.map((s) => <span className="sector-tag" key={s}>{s}</span>)}
            </div>
          </div>

          <div className="corporate-packages reveal">
            {packages.map((p) => (
              <div key={p.name} className={`pkg-card${p.gold ? ' gold-pkg' : ''}`}>
                <div>
                  <div className="pkg-tier">{p.tier}</div>
                  <div className="pkg-name">{p.name}</div>
                  <div className="pkg-desc">{p.desc}</div>
                </div>
                <div className="pkg-price">
                  {p.price}<span className="pkg-period">/year</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
