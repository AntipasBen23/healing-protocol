export default function Footer() {
  return (
    <footer>
      <div className="gold-stripe" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="name">The Healing Protocol</div>
            <div className="handle">@HealingProtocol</div>
            <p className="footer-tagline">
              Nigeria&apos;s premier food therapy and lifestyle medicine institution.
              Food is medicine. Healing is protocol. The institution endures.
            </p>
          </div>

          <div>
            <div className="footer-heading">Services</div>
            <ul className="footer-links">
              <li><a href="#services">Consultations</a></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#corporate">Corporate Wellness</a></li>
              <li><a href="#academy">Academy</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Conditions</div>
            <ul className="footer-links">
              <li><a href="#booking">Diabetes</a></li>
              <li><a href="#booking">Hypertension</a></li>
              <li><a href="#booking">Weight Management</a></li>
              <li><a href="#booking">Gut Health</a></li>
              <li><a href="#booking">Hormonal Balance</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <ul className="footer-links">
              <li><a href="https://wa.me/2348064095522" target="_blank" rel="noopener noreferrer">WhatsApp: 08064095522</a></li>
              <li><a href="#booking">Dreamland Suites, Jabi</a></li>
              <li><a href="#booking">Abuja, Nigeria</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 The Healing Protocol. All rights reserved. Food therapy is not a substitute for medical advice.
          </div>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
