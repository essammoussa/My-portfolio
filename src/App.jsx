import React, { useEffect } from "react";
import Lenis from "lenis";
import "./styles.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MoltenMetal from "./components/MoltenMetal.jsx";
import LightPillar from "./components/LightPillar.jsx";
import Header from "./components/1-Header.jsx";
import Hero from "./components/2-Hero.jsx";
import TechMarquee from "./components/animations/TechMarquee.jsx";
import About from "./components/3-About.jsx";
import Education from "./components/4-Education.jsx";
import Projects from "./components/5-Projects.jsx";
import Contact from "./components/6-Contact.jsx";
import Footer from "./components/7-Footer.jsx";
import SEO from "./components/SEO.jsx";
import ScrollProgress from "./components/animations/ScrollProgress.jsx";
import BackToTop from "./components/animations/BackToTop.jsx";

const RECAPTCHA_SITE_KEY = "6LcjNnosAAAAACXwLBVv84EuOJu3geA1ovCQO-vf";

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Global anchor smooth scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.length > 1 && href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -30, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, true);

    // Section visibility observer
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      threshold: 0.02,
      rootMargin: "0px 0px -20px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      sections.forEach((section) => observer.unobserve(section));
      lenis.destroy();
    };
  }, []);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      {/* Scroll Progress Bar at Top */}
      <ScrollProgress />

      {/* SEO: manages <title>, <meta description>, and <link rel="canonical"> */}
      <SEO
        title="Essam Moussa | Full-Stack Developer (MERN Stack)"
        description="Essam Moussa Mahmoud — Full-Stack Developer with hands-on MERN stack expertise (MongoDB, Express.js, React.js, Node.js) and Data Science student at Alexandria University."
        canonical="/"
      />
      <main className="app-container">
        {/* Ambient Molten Metal Canvas Background */}
        <div
          className="molten-bg-wrapper"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.6,
          }}
        >
          <MoltenMetal
            color1="#0a1026"
            color2="#0284c7"
            color3="#64ffda"
            speed={0.2}
            scale={3.2}
            detail={3}
            glow={1.5}
            coreSize={0.1}
            swirl={0.7}
            fold={-0.2}
            blackPoint={0.06}
            brightness={1.25}
            colorMode="molten"
            grain={true}
            grainIntensity={0.06}
            mouseInteraction={true}
            mouseStrength={0.2}
            opacity={0.7}
          />
        </div>
        <Header />
        <Hero />
        <TechMarquee />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </GoogleReCaptchaProvider>
  );
}