'use client'

import { useState } from 'react'

const steps = [
  { title: 'You Reach Out',            desc: 'Send us a WhatsApp message or book via the form. We respond within one hour during business hours. No exceptions.' },
  { title: 'Booking Confirmed',        desc: 'Your consultation is confirmed with a deposit. A pre-assessment form is sent immediately so we arrive prepared for your session.' },
  { title: 'Food Therapy Assessment',  desc: 'A thorough, compassionate session exploring your health history, current condition, lifestyle, and goals. This is where the real work begins.' },
  { title: 'Your Protocol Delivered',  desc: 'Within 48 hours, your personalised healing protocol arrives — specific foods, timing, quantities, and lifestyle adjustments built around your life.' },
  { title: 'Follow-Up & Membership',   desc: 'Check-ins at Day 3, 7, and 14. At Day 21, we present your personalised membership recommendation to accelerate your transformation.' },
  { title: 'Transformation & Referral',desc: 'Your 60-day and 90-day results are documented. You become part of the THP community — and you share what worked with the people you love.' },
]

const timeline = [
  { day: '7',  desc: 'Energy improves. Sleep begins to stabilise. Bloating reduces.' },
  { day: '14', desc: 'Inflammation visibly reduces. Skin often clears. Cravings shift.' },
  { day: '30', desc: 'Blood markers begin to shift. Weight normalises. Mood stabilises.' },
  { day: '60', desc: 'Measurable health improvements documented. Clients report feeling like themselves again.' },
  { day: '90', desc: 'Sustainable lifestyle embedded. Conditions managed or reversed. Transformation documented.' },
]

export default function Journey() {
  const [active, setActive] = useState(0)

  return (
    <section id="journey">
      <div className="container">
        <div className="reveal">
          <span className="section-label">The Process</span>
          <h2 className="section-title">Your healing journey,<br />step by step.</h2>
          <span className="gold-rule" />
        </div>

        <div className="journey-grid">
          <div className="journey-steps reveal">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`journey-step${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="step-content">
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="journey-visual reveal">
            <div className="journey-visual-title">90-Day Healing Timeline</div>
            <div className="journey-visual-sub">What most clients experience</div>
            <div className="journey-timeline">
              {timeline.map((t) => (
                <div className="tl-item" key={t.day}>
                  <div className="tl-dot">{t.day}</div>
                  <div className="tl-label">
                    <strong>Day {t.day}</strong>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
