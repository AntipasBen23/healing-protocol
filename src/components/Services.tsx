const services = [
  { num: '01', icon: '🩺', name: 'Standard Consultation',           price: '₦15,000', unit: '/ session', desc: '45-minute deep-dive for a primary health concern. You leave with clarity on what is happening in your body and exactly what to eat to address it.' },
  { num: '02', icon: '🔬', name: 'Premium Food Therapy Assessment',  price: '₦35,000', unit: '/ session', desc: '75-minute comprehensive assessment for complex or chronic conditions. Includes a written protocol report delivered within 48 hours.' },
  { num: '03', icon: '👔', name: 'Executive Wellness Assessment',    price: '₦75,000', unit: '/ session', desc: '90-minute consultation designed for high-performers. Includes full written executive health report, lab review, and personalised protocol delivery.' },
  { num: '04', icon: '🌱', name: 'Personalised Meal Protocol',       price: 'Included', unit: 'in all tiers', desc: 'A fully customised 30 to 90-day meal and lifestyle protocol built around Nigerian foods, your health condition, and your daily reality.' },
  { num: '05', icon: '📱', name: 'WhatsApp Wellness Support',        price: 'Members',  unit: 'only',       desc: 'Ongoing protocol support, accountability check-ins, and questions answered directly — between sessions, when you need it most.' },
  { num: '06', icon: '🏢', name: 'Corporate Wellness Programme',     price: 'From ₦500K', unit: '/ year',  desc: 'Annual wellness contracts for organisations — talks, screenings, meal guides, and dedicated wellness management for your entire team.' },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header reveal">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="services-intro">
              Every service is a door into the THP ecosystem. Choose your entry point. The protocol does the rest.
            </p>
          </div>
          <a href="#booking" className="btn-primary" style={{ flexShrink: 0 }}>Book a Session →</a>
        </div>

        <div className="services-grid reveal">
          {services.map((s) => (
            <div className="service-cell" key={s.num}>
              <div className="service-num">{s.num}</div>
              <span className="service-icon">{s.icon}</span>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-price">{s.price} <span>{s.unit}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
