const courses = [
  {
    duration: '8 Weeks · Hybrid',
    name: 'Certified Food Therapy Coach',
    price: '₦150,000', mode: 'Hybrid',
    desc: 'Master the science and practice of using food as medicine. Learn to design personalised protocols for common Nigerian health conditions including diabetes, hypertension, and gut disorders.',
  },
  {
    duration: '6 Weeks · Online',
    name: 'Corporate Wellness Consultant',
    price: '₦200,000', mode: 'Online',
    desc: 'Learn how to design, pitch, and deliver corporate wellness programmes for Nigerian organisations. Includes a complete proposal template and client acquisition framework.',
  },
  {
    duration: '12 Weeks · Hybrid',
    name: 'Lifestyle Medicine Practitioner',
    price: '₦350,000', mode: 'Hybrid',
    desc: 'The most comprehensive THP certification. Covers food therapy, lifestyle medicine principles, client assessment, protocol design, and business setup for your own practice.',
  },
  {
    duration: '2 Days · In-Person',
    name: 'Executive Wellness Masterclass',
    price: '₦80,000', mode: 'In-Person',
    desc: 'An intensive two-day experience designed for busy executives, HR leaders, and decision-makers who want to understand and apply wellness principles for themselves and their organisations.',
  },
]

export default function Academy() {
  return (
    <section id="academy">
      <div className="container">
        <div className="academy-header reveal">
          <div>
            <span className="section-label">Professional Training</span>
            <h2 className="section-title">HealingProtocol Academy</h2>
            <span className="gold-rule" />
            <p className="academy-sub">
              Train under Nigeria&apos;s most rigorous food therapy framework. Our certification
              programmes create the next generation of wellness practitioners built for the African context.
            </p>
          </div>
          <a href="#booking" className="btn-primary" style={{ flexShrink: 0 }}>Apply Now →</a>
        </div>

        <div className="courses-grid reveal">
          {courses.map((c) => (
            <div className="course-card" key={c.name}>
              <div className="course-duration">{c.duration}</div>
              <div className="course-name">{c.name}</div>
              <p className="course-desc">{c.desc}</p>
              <div className="course-footer">
                <div className="course-price">{c.price}</div>
                <div className="course-mode">{c.mode}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
