export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-pattern" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <span className="hero-eyebrow">Nigeria&apos;s Premier Food &amp; Lifestyle Medicine Institution</span>
            <h1 className="hero-title">
              Your body was<br />designed to<br /><em>heal itself.</em><br />We show it how.
            </h1>
            <p className="hero-subtitle">
              The Healing Protocol is Abuja&apos;s most trusted food therapy and lifestyle medicine institution.
              We do not manage symptoms — we reverse causes through evidence-based nutrition,
              personalised protocols, and holistic transformation.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-primary">
                <span>Book Assessment</span>
                <span>→</span>
              </a>
              <a href="#membership" className="btn-outline">View Memberships</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">500+</div>
                <div className="stat-label">Clients Transformed</div>
              </div>
              <div>
                <div className="stat-num">14+</div>
                <div className="stat-label">Conditions Addressed</div>
              </div>
              <div>
                <div className="stat-num">90</div>
                <div className="stat-label">Day Protocol Cycle</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card featured">
              <div className="hero-card-label">Most Popular</div>
              <div className="hero-card-title">Gold Membership</div>
              <div className="hero-card-desc">Full protocol support, lab reviews &amp; priority booking</div>
              <div className="hero-card-price">
                ₦50,000 <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>/&nbsp;month</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-label">Entry Point</div>
              <div className="hero-card-title">Food Therapy Assessment</div>
              <div className="hero-card-desc">90 minutes · Full report · Personalised protocol</div>
              <div className="hero-card-price">₦35,000</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-label">For Organisations</div>
              <div className="hero-card-title">Corporate Wellness</div>
              <div className="hero-card-desc">Annual programmes for teams, banks &amp; embassies</div>
              <div className="hero-card-price">
                From ₦500K <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>/yr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
