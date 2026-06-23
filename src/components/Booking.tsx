'use client'

import { useRef } from 'react'

const WA_NUMBER = '2348064095522'
const WA_BASE   = `https://wa.me/${WA_NUMBER}`

export default function Booking() {
  const nameRef    = useRef<HTMLInputElement>(null)
  const phoneRef   = useRef<HTMLInputElement>(null)
  const serviceRef = useRef<HTMLSelectElement>(null)
  const concernRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    const name    = nameRef.current?.value.trim()    || 'a prospective client'
    const phone   = phoneRef.current?.value.trim()   || ''
    const service = serviceRef.current?.value        || 'a consultation'
    const concern = concernRef.current?.value.trim() || 'general wellness'

    const msg = `Hello The Healing Protocol,\n\nMy name is ${name}${phone ? ` (${phone})` : ''}.\n\nI am interested in: ${service}\n\nMy primary health concern: ${concern}\n\nPlease advise on next steps. Thank you.`
    window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="booking">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-left reveal">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Book Your<br />Assessment</h2>
            <span className="gold-rule" style={{ background: 'linear-gradient(90deg,var(--gold),var(--gold2))' }} />
            <p className="booking-body">
              The first step is always the hardest. Once you book, everything becomes clear — what
              is happening in your body, why it is happening, and exactly what to do about it.
              We are ready when you are.
            </p>

            <div className="booking-methods">
              <a
                href={`${WA_BASE}?text=${encodeURIComponent('Hello, I would like to book a Food Therapy Assessment at The Healing Protocol.')}`}
                className="booking-method"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="method-icon wa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.107 1.519 5.836L.057 23.617c-.078.283.162.545.45.48l5.97-1.414A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.822 9.822 0 0 1-5.006-1.369l-.359-.213-3.723.882.937-3.618-.234-.371A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                  </svg>
                </div>
                <div>
                  <div className="method-label">WhatsApp</div>
                  <div className="method-value">08064095522</div>
                </div>
              </a>

              <div className="booking-method">
                <div className="method-icon phone">📞</div>
                <div>
                  <div className="method-label">Call Us</div>
                  <div className="method-value">08064095522</div>
                </div>
              </div>

              <div className="booking-method">
                <div className="method-icon loc">📍</div>
                <div>
                  <div className="method-label">Visit Us</div>
                  <div className="method-value">Dreamland Suites, Jabi, Abuja</div>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form reveal">
            <h3>Send an Enquiry</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input ref={nameRef} type="text" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>WhatsApp Number</label>
              <input ref={phoneRef} type="tel" placeholder="08XXXXXXXXX" />
            </div>
            <div className="form-group">
              <label>I Am Interested In</label>
              <select ref={serviceRef}>
                <option value="">Select a service...</option>
                <option>Standard Consultation (₦15,000)</option>
                <option>Premium Assessment (₦35,000)</option>
                <option>Executive Assessment (₦75,000)</option>
                <option>Silver Membership (₦20,000/mo)</option>
                <option>Gold Membership (₦50,000/mo)</option>
                <option>Platinum Membership (₦150,000/mo)</option>
                <option>Corporate Wellness Package</option>
                <option>Academy Enrolment</option>
              </select>
            </div>
            <div className="form-group">
              <label>Primary Health Concern</label>
              <textarea
                ref={concernRef}
                placeholder="Briefly describe what you want to address — e.g. diabetes, hypertension, weight, fatigue, hormonal issues..."
              />
            </div>
            <button className="form-submit" onClick={handleSubmit}>
              Send Enquiry via WhatsApp →
            </button>
            <noscript>
              <a
                href={`${WA_BASE}?text=${encodeURIComponent('Hello, I would like to book a Food Therapy Assessment at The Healing Protocol.')}`}
                className="form-submit"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: 8 }}
              >
                Send Enquiry via WhatsApp →
              </a>
            </noscript>
          </div>
        </div>
      </div>
    </section>
  )
}
