const values = [
  { icon: '🤝', name: 'Humanity First',  desc: 'People before profits. Every protocol is built around your life, not our revenue targets.' },
  { icon: '⭐', name: 'Excellence',       desc: 'World-class service in an African context. Every touchpoint is premium and intentional.' },
  { icon: '📋', name: 'Accountability',  desc: 'Every promise is measurable. Clients see results or we do not rest.' },
  { icon: '🌿', name: 'Nurturing Care',  desc: 'Compassionate, patient, non-judgemental care. We hold space for the full human being.' },
]

export default function Positioning() {
  return (
    <section id="positioning">
      <div className="container">
        <div className="pos-grid">
          <div className="pos-left reveal">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">We are not what<br />you think we are.</h2>
            <span className="gold-rule" />
            <p className="pos-body">
              The Healing Protocol is not a weight-loss centre. It is not an alternative medicine shop.
              It is not a nutrition consultation office. It is{' '}
              <strong>Nigeria&apos;s Premier Food and Lifestyle Medicine Institution</strong> — the place
              executives, families, and organisations come when they are serious about health as a
              long-term asset.
            </p>
            <p className="pos-body">We do not sell appointments. We build transformation ecosystems.</p>
            <div className="not-list">
              <div className="not-item"><span className="x">✗</span> Not a quick-fix weight loss centre</div>
              <div className="not-item"><span className="x">✗</span> Not an alternative medicine guessing game</div>
              <div className="not-item"><span className="x">✗</span> Not a place that masks symptoms with more pills</div>
              <div className="not-item"><span className="chk">✓</span> A personalised, evidence-based food medicine institution</div>
              <div className="not-item"><span className="chk">✓</span> Built on Nigerian foods, herbs, and lifestyle realities</div>
              <div className="not-item"><span className="chk">✓</span> Trusted by executives, families, and organisations in Abuja</div>
            </div>
          </div>

          <div className="pos-right reveal">
            {values.map((v) => (
              <div className="value-card" key={v.name}>
                <div className="value-icon">{v.icon}</div>
                <div>
                  <div className="value-name">{v.name}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
