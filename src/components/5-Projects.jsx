import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaEye,
  FaImages,
  FaAward,
  FaLaptopCode,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import ShinyText from "./animations/ShinyText";
import SpotlightCard from "./animations/SpotlightCard";

const PROJECTS = [
  {
    id: 9,
    title: "EasyCare Healthcare Platform",
    category: "Full-Stack / Healthcare",
    badge: "Production",
    accent: "#64ffda",
    glowColor: "rgba(100, 255, 218, 0.2)",
    borderColor: "rgba(100, 255, 218, 0.45)",
    description:
      "A full-stack MERN healthcare management platform supporting 3 role-scoped user types (patient, doctor, admin), concurrency-safe bookings via MongoDB multi-document transactions, Google OAuth / JWT auth, real-time messaging with Socket.IO, and an analytics dashboard with aggregation pipelines.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT / OAuth", "Recharts", "Leaflet"],
    liveUrl: "https://easy-care-theta.vercel.app",
    images: [
      "/imgs/easycare1.png",
      "/imgs/easycare2.png",
      "/imgs/easycare3.png",
      "/imgs/easycare4.png",
      "/imgs/easycare5.png",
      "/imgs/easycare6.png",
      "/imgs/easycare7.png",
      "/imgs/easycare8.png",
      "/imgs/easycare9.png",
      "/imgs/easycare10.png",
      "/imgs/easycare11.png",
      "/imgs/easycare12.png",
      "/imgs/easycare13.png",
      "/imgs/easycare14.png",
      "/imgs/easycare15.png",
      "/imgs/easycare16.png",
      "/imgs/easycare17.png",
      "/imgs/easycare18.png",
      "/imgs/easycare19.png",
      "/imgs/easycare20.png",
      "/imgs/easycare21.png",
      "/imgs/easycare22.png",
    ],
  },
  {
    id: 7,
    title: "Najm Wedding Halls",
    category: "Full-Stack / Booking",
    badge: "Freelance",
    accent: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.2)",
    borderColor: "rgba(251, 191, 36, 0.45)",
    description:
      "A full-stack booking and management system for wedding venues. Features an interactive reservation calendar, packages catalog, automated client billing, and an admin dashboard.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
    liveUrl: "https://github.com/essammoussa/wedding-halls-api",
    images: ["/imgs/NajmWeddingHalls.png"],
  },
  {
    id: 8,
    title: "War of Life E-Commerce",
    category: "Streetwear Brand",
    badge: "Freelance",
    accent: "#f43f5e",
    glowColor: "rgba(244, 63, 94, 0.2)",
    borderColor: "rgba(244, 63, 94, 0.45)",
    description:
      "A premium, responsive clothing web platform engineered as a freelance client project featuring an interactive product showcase, smooth animated transitions, dynamic cart management, and a sleek checkout system.",
    tags: ["React.js", "TailwindCSS", "Framer Motion", "Redux Toolkit", "Vite"],
    liveUrl: "https://essammoussa.github.io/streetwear-brand/",
    images: ["/imgs/WarOfLife1.png", "/imgs/WarOfLife2.png"],
  },
  {
    id: 1,
    title: "Admin Analytics Dashboard",
    category: "Analytics & Admin",
    badge: "Dashboard",
    accent: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.2)",
    borderColor: "rgba(56, 189, 248, 0.45)",
    description:
      "A responsive admin dashboard built with React.js and Material UI, featuring interactive charts, calendar management, and validated forms for efficient data administration.",
    tags: ["React.js", "Material UI", "Nivo Charts", "FullCalendar", "Formik", "Yup"],
    liveUrl: "https://essammoussa.github.io/admin-dashboard/",
    images: ["/imgs/Admin.png"],
  },
  {
    id: 2,
    title: "Luxe E-Commerce Store",
    category: "Luxury E-Commerce",
    badge: "Store",
    accent: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.2)",
    borderColor: "rgba(167, 139, 250, 0.45)",
    description:
      "A sleek, responsive online store with smooth animations, advanced product filtering, interactive cart state, and a modern shopping experience.",
    tags: ["React", "TailwindCSS", "Framer", "Shadcn/UI"],
    liveUrl: "https://essammoussa.github.io/luxe-ecommerce/",
    images: ["/imgs/Ecommerce.png"],
  },
  {
    id: 3,
    title: "Library Management System",
    category: "Management App",
    badge: "Full-Stack UI",
    accent: "#818cf8",
    glowColor: "rgba(129, 140, 248, 0.2)",
    borderColor: "rgba(129, 140, 248, 0.45)",
    description:
      "An intuitive frontend library management system with a sleek, interactive admin dashboard for easy catalog and user management, separated UI and server states.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
      "Radix UI",
      "Recharts",
      "Redux",
      "ReactQuery",
      "Zod",
    ],
    liveUrl: "https://essammoussa.github.io/library-management-system/",
    images: [
      "/imgs/Library.png",
      "/imgs/libr1.png",
      "/imgs/libr2.png",
      "/imgs/libr3.png",
      "/imgs/libr4.png",
      "/imgs/libr5.png",
      "/imgs/libr6.png",
      "/imgs/libr7.png",
      "/imgs/libr8.png",
    ],
  },
  {
    id: 4,
    title: "Travel Companion",
    category: "Travel Landing",
    badge: "Interactive",
    accent: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.2)",
    borderColor: "rgba(52, 211, 153, 0.45)",
    description:
      "Full-featured travel landing page with intelligent search, dynamic content filtering, and real-time local time for destinations worldwide.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://essammoussa.github.io/Travel-recommedation-company/",
    images: ["/imgs/Travel.png"],
  },
  {
    id: 6,
    title: "Plant Paradise",
    category: "Plant Store",
    badge: "Catalog",
    accent: "#4ade80",
    glowColor: "rgba(74, 222, 128, 0.2)",
    borderColor: "rgba(74, 222, 128, 0.45)",
    description:
      "A responsive and user-friendly landing page for plant enthusiasts, offering a curated collection of plants and information about their care.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://essammoussa.github.io/plant-paradise-project/",
    images: ["/imgs/Plant.png"],
  },
  {
    id: 5,
    title: "Weather Dashboard",
    category: "Weather & Forecast",
    badge: "Live API",
    accent: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.2)",
    borderColor: "rgba(96, 165, 250, 0.45)",
    description:
      "An interactive weather app that displays current conditions, forecasts, and historical data with beautiful visualizations and charts.",
    tags: ["JavaScript", "API", "Chart.js"],
    liveUrl: "https://essammoussa.github.io/weather-dashboard/",
    images: ["/imgs/Weather.png"],
  },
];

const CERTIFICATES = [
  {
    id: 1,
    title: "Introduction to Software Engineering",
    organization: "IBM",
    year: "2025",
    accent: "#64ffda",
    glowColor: "rgba(100, 255, 218, 0.2)",
    borderColor: "rgba(100, 255, 218, 0.45)",
    badge: "Verified",
    description:
      "Covered core software development principles, life cycle models (SDLC), architecture, and industry best practices for designing and maintaining high-quality software.",
    certificateUrl: "https://coursera.org/share/94e2d7b74576af074e879bff04ad52ad",
    images: ["/imgs/Coursera4.png"],
    tags: ["Software Engineering", "SDLC", "Agile", "Architecture"],
  },
  {
    id: 2,
    title: "Introduction to HTML, CSS, & JavaScript",
    organization: "IBM",
    year: "2025",
    accent: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.2)",
    borderColor: "rgba(56, 189, 248, 0.45)",
    badge: "Verified",
    description:
      "Fundamentals of modern web development, building responsive web pages with semantic HTML5, styling with advanced CSS3, and adding interactivity with JavaScript.",
    certificateUrl: "https://coursera.org/share/4d32875d22543e006636017caf01a3e0",
    images: ["/imgs/Coursera3.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    id: 3,
    title: "JavaScript Programming & Algorithms",
    organization: "IBM",
    year: "2025",
    accent: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.2)",
    borderColor: "rgba(251, 191, 36, 0.45)",
    badge: "Verified",
    description:
      "Advanced certification covering data structures, algorithmic complexity, ES6+ features, and problem-solving techniques in JavaScript.",
    certificateUrl: "https://coursera.org/share/6d5c10af2cd88feaa7b1bc99d53b8f91",
    images: ["/imgs/Coursera2.png"],
    tags: ["JavaScript", "Data Structures", "Algorithms", "ES6+"],
  },
  {
    id: 4,
    title: "Developing Front-End Apps with React",
    organization: "IBM",
    year: "2025",
    accent: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.2)",
    borderColor: "rgba(167, 139, 250, 0.45)",
    badge: "Verified",
    description:
      "Advanced professional certification covering React component architecture, custom hooks, state management, design patterns, and performance optimization.",
    certificateUrl: "https://coursera.org/share/f3d9e34497afb0c3c8ba44a24e400baf",
    images: ["/imgs/Coursera1.png"],
    tags: ["React.js", "Hooks", "Component Design", "Performance"],
  },
  {
    id: 5,
    title: "Developing Back-End Apps with Node.js & Express",
    organization: "IBM",
    year: "2026",
    accent: "#f43f5e",
    glowColor: "rgba(244, 63, 94, 0.2)",
    borderColor: "rgba(244, 63, 94, 0.45)",
    badge: "Verified",
    description:
      "Comprehensive certification covering Node.js event-driven architecture, Express.js REST API engineering, asynchronous programming, databases, and secure authentication.",
    certificateUrl: "https://coursera.org/share/98466e9e4d249d0306927ea45e841b9b",
    images: ["/imgs/Coursera5.png"],
    tags: ["Node.js", "Express.js", "REST APIs", "Async Programming"],
  },
  {
    id: 6,
    title: "Cloud Native, DevOps, Agile, & NoSQL",
    organization: "IBM",
    year: "2025",
    accent: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.2)",
    borderColor: "rgba(52, 211, 153, 0.45)",
    badge: "Verified",
    description:
      "Certification covering DevOps automation, Cloud Native architecture, Agile sprint practices, CI/CD fundamentals, and NoSQL database management.",
    certificateUrl: "https://coursera.org/share/d364b9aad092a9dc483647178e9adfcd",
    images: ["/imgs/Coursera6.png"],
    tags: ["Cloud Native", "DevOps", "Agile/Scrum", "NoSQL"],
  },
];

function ImageGallery({ images, accent = "#64ffda" }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [go]);

  if (images.length === 1) {
    return (
      <div className="modal-gallery single">
        <img src={images[0]} alt="preview" />
        <div className="modal-gallery-gradient" />
      </div>
    );
  }

  return (
    <div className="modal-gallery">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`preview ${current + 1}`}
          custom={direction}
          variants={{
            enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="modal-gallery-gradient" />

      {/* Navigation Arrows */}
      <button
        className="gallery-arrow left"
        onClick={() => go(-1)}
        aria-label="Previous"
        style={{ borderColor: `${accent}40` }}
      >
        <FaChevronLeft size={13} color="#fff" />
      </button>
      <button
        className="gallery-arrow right"
        onClick={() => go(1)}
        aria-label="Next"
        style={{ borderColor: `${accent}40` }}
      >
        <FaChevronRight size={13} color="#fff" />
      </button>

      {/* Dots Indicator */}
      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery-dot ${i === current ? "active" : ""}`}
            style={{
              background: i === current ? accent : "rgba(255, 255, 255, 0.3)",
              boxShadow: i === current ? `0 0 10px ${accent}` : "none",
            }}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="gallery-counter">
        <FaImages size={10} style={{ marginRight: 4, color: accent }} />
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

function Modal({ item, type, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [onClose]);

  const accent = item.accent || (type === "project" ? "#64ffda" : "#a78bfa");
  const glowColor = item.glowColor || `${accent}25`;
  const borderColor = item.borderColor || `${accent}50`;
  const url = type === "project" ? item.liveUrl : item.certificateUrl;
  const btnLabel = type === "project" ? "Launch Live Platform" : "View Certificate";
  const images = item.images || [item.imageUrl];

  return (
    <motion.div
      className="modal-backdrop"
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-card-container"
        data-lenis-prevent
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <SpotlightCard
          spotlightColor={glowColor}
          borderColor={borderColor}
          className="modal-card"
        >
          {/* Ambient Glow Blob */}
          <div className="modal-glow-blob" style={{ background: accent }} />

          {/* Close Button */}
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
            style={{ borderColor: `${accent}40` }}
          >
            <FaTimes size={13} />
          </button>

          {/* Gallery View */}
          <ImageGallery images={images} accent={accent} />

          {/* Body Content with independent scroll */}
          <div
            className="modal-body-content"
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="modal-top-badges">
              <span
                className="edu-category-pill"
                style={{
                  color: accent,
                  backgroundColor: `${accent}15`,
                  borderColor: `${accent}40`,
                }}
              >
                {type === "project" ? (
                  <>
                    <FaLaptopCode size={12} /> {item.category || "Full-Stack Project"}
                  </>
                ) : (
                  <>
                    <FaAward size={12} /> {item.organization || "IBM Verified"}
                  </>
                )}
              </span>
              <span className="edu-status-pill">{item.badge || "Verified"}</span>
            </div>

            <h2 className="modal-header-title">{item.title}</h2>
            <p className="modal-body-desc">{item.description}</p>

            {item.tags && item.tags.length > 0 && (
              <div className="modal-tags-container">
                <span className="modal-tags-label">Technologies &amp; Highlights:</span>
                <div className="modal-tags-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="modal-tag-pill"
                      style={{
                        borderColor: `${accent}35`,
                        color: `${accent}ee`,
                        backgroundColor: `${accent}0d`,
                      }}
                    >
                      <FaCheckCircle size={10} style={{ color: accent, marginRight: 5 }} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-footer-actions">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn"
                style={{
                  background: `linear-gradient(135deg, ${accent}30, ${accent}15)`,
                  borderColor: `${accent}70`,
                  color: "#fff",
                  boxShadow: `0 0 20px ${accent}25`,
                }}
              >
                <span>{btnLabel}</span>
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  const accent = project.accent || "#64ffda";
  const glowColor = project.glowColor || "rgba(100, 255, 218, 0.18)";
  const borderColor = project.borderColor || "rgba(100, 255, 218, 0.4)";

  return (
    <div className="proj-card-wrap">
      <SpotlightCard
        spotlightColor={glowColor}
        borderColor={borderColor}
        className="proj-card"
        onClick={onClick}
      >
        {/* Glow Blob */}
        <div className="proj-card-glow-blob" style={{ background: accent }} />

        {/* Image Box */}
        <div className="proj-image-box">
          <img src={project.images[0]} alt={project.title} loading="lazy" />
          <div className="proj-image-overlay">
            <span
              className="proj-quick-view-btn"
              style={{
                borderColor: `${accent}80`,
                color: "#fff",
              }}
            >
              <FaEye size={12} style={{ marginRight: 6, color: accent }} />
              Quick View
            </span>
          </div>
          {project.images && project.images.length > 1 && (
            <span className="proj-photo-count">
              <FaImages size={10} /> {project.images.length}
            </span>
          )}
        </div>

        {/* Content Box */}
        <div className="proj-content">
          <div className="proj-badge-row">
            <span
              className="proj-category-pill"
              style={{
                color: accent,
                backgroundColor: `${accent}15`,
                borderColor: `${accent}40`,
              }}
            >
              {project.category || "Full-Stack"}
            </span>
            {project.badge && <span className="proj-status-pill">{project.badge}</span>}
          </div>

          <h3 className="proj-title">{project.title}</h3>
          <p className="proj-desc">{project.description}</p>

          <div className="proj-tags">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="proj-tag"
                style={{ borderColor: `${accent}30`, color: `${accent}ee` }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span
                className="proj-tag more"
                style={{
                  borderColor: `${accent}25`,
                  color: "rgba(226, 232, 240, 0.6)",
                }}
              >
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="proj-actions">
            <button
              className="proj-btn proj-btn-details"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              style={{
                borderColor: `${accent}40`,
                color: "#fff",
              }}
            >
              <span>Details</span>
              <FaEye size={11} color={accent} />
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn proj-btn-demo"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: `linear-gradient(135deg, ${accent}25, ${accent}10)`,
                  borderColor: `${accent}60`,
                  color: accent,
                }}
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt size={10} />
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

function CertificateCard({ certificate, onClick }) {
  const accent = certificate.accent || "#a78bfa";
  const glowColor = certificate.glowColor || "rgba(167, 139, 250, 0.18)";
  const borderColor = certificate.borderColor || "rgba(167, 139, 250, 0.4)";

  return (
    <div className="proj-card-wrap">
      <SpotlightCard
        spotlightColor={glowColor}
        borderColor={borderColor}
        className="proj-card cert-card"
        onClick={onClick}
      >
        {/* Glow Blob */}
        <div className="proj-card-glow-blob" style={{ background: accent }} />

        {/* Image Box */}
        <div className="proj-image-box cert-image-box">
          <img src={certificate.images[0]} alt={certificate.title} loading="lazy" />
          <div className="proj-image-overlay">
            <span
              className="proj-quick-view-btn"
              style={{
                borderColor: `${accent}80`,
                color: "#fff",
              }}
            >
              <FaEye size={12} style={{ marginRight: 6, color: accent }} />
              Inspect Certificate
            </span>
          </div>
        </div>

        {/* Content Box */}
        <div className="proj-content">
          <div className="proj-badge-row">
            <span
              className="proj-category-pill"
              style={{
                color: accent,
                backgroundColor: `${accent}15`,
                borderColor: `${accent}40`,
              }}
            >
              <FaAward size={11} style={{ marginRight: 4 }} />
              {certificate.organization || "IBM Verified"}
            </span>
            <span className="proj-status-pill">{certificate.year || "2025"}</span>
          </div>

          <h3 className="proj-title">{certificate.title}</h3>
          <p className="proj-desc">{certificate.description}</p>

          <div className="proj-tags">
            {certificate.tags &&
              certificate.tags.map((tag) => (
                <span
                  key={tag}
                  className="proj-tag"
                  style={{ borderColor: `${accent}30`, color: `${accent}ee` }}
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="proj-actions">
            <button
              className="proj-btn proj-btn-details"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              style={{
                borderColor: `${accent}40`,
                color: "#fff",
                background: `linear-gradient(135deg, ${accent}22, ${accent}0a)`,
                width: "100%",
              }}
            >
              <span>Show Certificate</span>
              <FaEye size={12} color={accent} />
            </button>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selected, setSelected] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const openModal = (item, type) => {
    setSelected(item);
    setSelectedType(type);
  };

  return (
    <>
      <section id="projects" className="pc2-section">
        {/* Background glow */}
        <div className="proj-bg-glow" />

        <div className="pc2-header-container">
          <span className="about-eyebrow">
            // <ShinyText text="Featured Work & Credentials" />
          </span>
          <motion.h2
            className="pc2-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects &amp; <span className="edu-title-gradient">Certificates</span>
          </motion.h2>
          <motion.p
            className="edu-subtitle"
            style={{ maxWidth: "620px", margin: "0 auto 32px", textAlign: "center" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore production-grade full-stack platforms, client projects, and verified professional certifications.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="edu-tabs-wrapper" style={{ marginBottom: "40px" }}>
          <div className="edu-tabs">
            {[
              { id: "projects", label: "Projects Portfolio" },
              { id: "certificates", label: "Verified Credentials" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`edu-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="edu-tab-active-bg"
                    layoutId="proj-tab-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="edu-tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="proj-main-grid"
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            {activeTab === "projects"
              ? PROJECTS.map((p) => (
                  <motion.div key={p.id} variants={cardItem} style={{ height: "100%" }}>
                    <ProjectCard project={p} onClick={() => openModal(p, "project")} />
                  </motion.div>
                ))
              : CERTIFICATES.map((c) => (
                  <motion.div key={c.id} variants={cardItem} style={{ height: "100%" }}>
                    <CertificateCard certificate={c} onClick={() => openModal(c, "certificate")} />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Modern Modal */}
      <AnimatePresence>
        {selected && (
          <Modal item={selected} type={selectedType} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}