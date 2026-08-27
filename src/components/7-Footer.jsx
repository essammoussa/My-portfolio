import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useRef, useEffect } from "react";

const navLinks = ["Home", "About", "Education", "Services", "Projects", "Contact"];

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
    label: "WhatsApp",
    href: "https://wa.me/201025343475",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: "rgba(37, 211, 102, 0.6)",
    glow: "rgba(37, 211, 102, 0.3)",
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
                <a
                  href={`#${link.toLowerCase()}`}
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(`#${link.toLowerCase()}`);
                    if (target) {
                      if (window.__lenis) {
                        window.__lenis.scrollTo(target, { offset: -30, duration: 1.2 });
                      } else {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
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