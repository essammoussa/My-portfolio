import React from "react";
import { motion } from "framer-motion";
import TextType from "./TextType";
import Monitor from "./Monitor";
import ShinyText from "./animations/ShinyText";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/essam-moussa-8424572a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.4)",
  },
  {
    label: "GitHub",
    href: "https://github.com/essammoussa",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    color: "#ffffff",
    glow: "rgba(255,255,255,0.25)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(contactEl, { offset: -30, duration: 1.2 });
      } else {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        {/* Terminal Eyebrow */}
        <motion.div
          className="hero-eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="hero-code-bracket">&lt;</span>
          <ShinyText text="Full-Stack Engineer • MERN & Data Science" />
          <span className="hero-code-bracket">/&gt;</span>
        </motion.div>

        {/* Unique Holographic Headline */}
        <motion.div
          className="hero-name"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          <h1 className="hero-headline">
            <span className="hero-greeting-prefix">Hi, I'm</span>{" "}
            <span className="hero-name-highlight">
              <span className="hero-name-gradient">Essam Moussa</span>
              <span className="hero-name-aurora" aria-hidden="true">Essam Moussa</span>
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Typing Row */}
        <motion.div
          className="hero-type-row"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          <span className="hero-type-badge">Specializing in</span>
          <div className="hero-type-value">
            <TextType
              text={[
                "Full-Stack MERN Architecture",
                "Computer & Data Science",
                "React.js & Next.js Ecosystems",
                "Node.js, Express & REST APIs",
                "MongoDB & Database Optimization",
              ]}
              typingSpeed={40}
              pauseDuration={1600}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </motion.div>

        {/* Concise Pitch */}
        <motion.p
          className="hero-pitch"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          Undergraduate at <span className="hero-highlight">Alexandria University</span> building
          production-grade, role-based, and real-time full-stack web applications with modern
          architecture and clean design.
        </motion.p>

        {/* CTA Buttons & Social Strip */}
        <motion.div
          className="hero-cta-container"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          <div className="hero-buttons">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="hero-btn-primary"
            >
              <span>Contact Me</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="/imgs/EssamMoussa_CV.pdf"
              download="EssamMoussa_CV.pdf"
              className="hero-btn-secondary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero-social-strip">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                style={{ "--hover-color": s.color, "--hover-glow": s.glow }}
                aria-label={s.label}
              >
                {s.icon}
                <span className="hero-social-pill-name">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive CRT Monitor */}
      <motion.div
        className="hero-monitor-wrap"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <Monitor />
      </motion.div>
    </section>
  );
}