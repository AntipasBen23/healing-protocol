'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#services',   label: 'Services' },
  { href: '#membership', label: 'Membership' },
  { href: '#corporate',  label: 'Corporate' },
  { href: '#academy',    label: 'Academy' },
  { href: '#products',   label: 'Products' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          current = s.id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <div className="container nav-inner">
          <a className="nav-logo" href="#hero">
            <svg className="nav-emblem" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="18" stroke="#B8892A" strokeWidth="1"/>
              <circle cx="19" cy="19" r="14" stroke="#1A5C32" strokeWidth="0.6"/>
              <path d="M19 8 C19 8 12 13 12 19 C12 25 15.5 28 19 30 C22.5 28 26 25 26 19 C26 13 19 8 19 8Z" fill="#1A5C32" opacity="0.9"/>
              <path d="M19 30 L19 19" stroke="#B8892A" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M14 21 C15 18.5 17 18 19 18 C21 18 23 18.5 24 21" stroke="#B8892A" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
            </svg>
            <div className="nav-brand">
              <div className="name">The Healing Protocol</div>
              <div className="tag">@HealingProtocol</div>
            </div>
          </a>

          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={activeSection === l.href.slice(1) ? 'active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#booking" className="nav-cta">Book Now</a>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" aria-label="Close menu" onClick={close}>×</button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#booking" onClick={close} style={{ color: 'var(--gold)' }}>Book Now</a>
      </div>
    </>
  )
}
