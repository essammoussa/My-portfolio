import React, { useEffect } from "react";
import "./styles.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import LightPillar from "./components/LightPillar.jsx";
import Header from "./components/1-Header.jsx";
import Hero from "./components/2-Hero.jsx";
import About from "./components/3-About.jsx";
import Projects from "./components/4-Projects.jsx";
import Contact from "./components/5-Contact.jsx";
import Footer from "./components/6-Footer.jsx";
import SEO from "./components/SEO.jsx";

const RECAPTCHA_SITE_KEY = "6LcjNnosAAAAACXwLBVv84EuOJu3geA1ovCQO-vf";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      {/* ↓ SEO: manages <title>, <meta description>, and <link rel="canonical"> */}
      <SEO
        title="Home"
        description="Welcome to Essam Moussa's portfolio — fullstack developer building modern, accessible web experiences."
        canonical="/"
      />
      <main className="app-container">
        <LightPillar />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </GoogleReCaptchaProvider>
  );
}