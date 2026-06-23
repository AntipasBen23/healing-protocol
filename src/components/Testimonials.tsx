const testimonials = [
  {
    initial: 'A', name: 'Adaeze N.', role: 'Civil Servant · Abuja',
    quote: 'I had been managing type 2 diabetes with medication for six years. After three months on the THP protocol, my doctor reduced my medication by half. I never expected food alone could do this.',
    result: '✓ Blood sugar normalised · 90 days',
  },
  {
    initial: 'B', name: 'Babatunde O.', role: 'Bank Executive · Abuja',
    quote: 'As a bank executive, I was always tired, always stressed, and always reaching for something to cope. THP gave me a system — not just advice — and now I perform better than I did at 30.',
    result: '✓ Energy restored · Platinum Member',
  },
  {
    initial: 'C', name: 'Chisom I.', role: 'Business Owner · Abuja',
    quote: 'My blood pressure was at stroke level. Three doctors told me I would be on medication for life. THP rebuilt my entire diet and lifestyle. Six months later, I am medication-free and my doctor is asking questions.',
    result: '✓ BP normalised · 6 months',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Client Results</span>
          <h2 className="section-title">Real people.<br />Real results.</h2>
          <span className="gold-rule" />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testi-card reveal" key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <div className="testi-quote">&ldquo;{t.quote}&rdquo;</div>
              <div className="testi-author">
                <div className="testi-avatar">{t.initial}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
              <span className="testi-result">{t.result}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
