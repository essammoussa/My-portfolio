import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useRef, useEffect } from "react";

const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/essam-moussa-8424572a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: "rgba(10,102,194,0.6)",
    glow: "rgba(10,102,194,0.3)",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1FbHiTN3wX/?mibextid=wwXIfr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
    color: "rgba(24,119,242,0.6)",
    glow: "rgba(24,119,242,0.3)",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/essam__moussa?igsh=MWp3M2JydWRyNDJiYg%3D%3D&utm_source=qr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "rgba(225,48,108,0.6)",
    glow: "rgba(225,48,108,0.3)",
  },
  {
    label: "GitHub",
    href: "https://github.com/essammoussa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
    color: "rgba(255,255,255,0.3)",
    glow: "rgba(255,255,255,0.15)",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-glow" />

      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-text">Essam<span>.dev</span></span>
          </div>
          <p className="footer-tagline">
            Building scalable, clean web experiences —<br />
            one commit at a time.
          </p>
          <div className="footer-socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                style={{ "--hover-color": s.color, "--hover-glow": s.glow }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="footer-nav">
          <p className="footer-col-title">Navigation</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="footer-nav-link">
                  <span className="footer-nav-arrow">→</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <p className="footer-col-title">Get In Touch</p>
          <ul>
            <li>
              <a href="mailto:essammoussamahmond1@gmail.com" className="footer-contact-link">
                essammoussamahmoud1@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+201025343475" className="footer-contact-link">
                +20 1025343475
              </a>
            </li>
            <li>
              <span className="footer-contact-link">
                Alexandria, Egypt
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            © {year} Essam Moussa.
          </p>
          <p className="footer-stack">
            Built with <span>React</span> · <span>Vite</span> · <span>CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}