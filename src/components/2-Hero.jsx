import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TextType from "./TextType";
import Monitor from "./Monitor";


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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.13 },
  }),
};

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!imgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const handleLeave = () => {
      if (imgRef.current) imgRef.current.style.transform = "translate(0,0)";
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section id="home" className="hero-section">

      <div className="hero-text">

        {/* Name */}
        <motion.div
          className="hero-name"
          variants={fadeUp} initial="hidden" animate="show" custom={0}
        >
          <h1  className="hero-name">Hi ,I'm <br />
            Essam Moussa
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          className="hero-subtitle"
          variants={fadeUp} initial="hidden" animate="show" custom={1}
        >
          <TextType
            text={["Full Stack Developer", "Data Science Student", "Web Developer"]}
            typingSpeed={45}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.div>

        {/* Socials + Buttons */}
        <motion.div
          className="hero-cta-container"
          variants={fadeUp} initial="hidden" animate="show" custom={2}
        >
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

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-contact">
              <span>Contact Me</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="btn-icon" aria-hidden>
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <a href="/EssamMoussa_CV.pdf" download="EssamMoussa_CV.pdf" className="btn btn-resume">Download CV</a>
          </div>
        </motion.div>
      </div>

      <motion.div>
   
    <Monitor />
      </motion.div>

    </section>
  );
}