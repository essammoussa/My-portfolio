import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
   {
    id: 9,
    title: "EasyCare Hospital Management System",
    description:
      "A comprehensive full-stack hospital management system. Features a responsive React dashboard for patient intake, staff schedules, and prescriptions, backed by a secure MongoDB/Express API.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful API"],
    liveUrl: "https://github.com/essammoussa/easycare-hospital-management",
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
    description:
      "A full-stack booking and management system for wedding venues. Features an interactive reservation calendar, packages catalog, automated client billing, and an admin dashboard.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    liveUrl: "https://github.com/essammoussa/wedding-halls-api",
    images: ["/imgs/NajmWeddingHalls.png"],
  },
  {
    id: 8,
    title: "War of Life E-Commerce",
    description:
      "A premium, responsive clothing web platform featuring an interactive product showcase, smooth animated transitions, dynamic cart management, and a sleek checkout system.",
    tags: ["React.js", "TailwindCSS", "Framer Motion", "Redux Toolkit", "Vite"],
    liveUrl: "https://github.com/essammoussa/streetwear-ecommerce",
    images: ["/imgs/WarOfLife1.png", "/imgs/WarOfLife2.png"],
  },
 
  {
    id: 1,
    title: "Admin Dashboard",
    description:
      "A responsive admin dashboard built with React.js and Material UI, featuring interactive charts, calendar management, and validated forms for efficient data administration.",
    tags: ["React.js", "Material UI", "Nivo Charts", "FullCalendar", "Formik", "Yup"],
    liveUrl: "https://essammoussa.github.io/admin-dashboard/",
    images: ["/imgs/Admin.png"],
  },

  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A sleek, responsive online store with smooth animations and an interactive shopping experience.",
    tags: ["React", "TailwindCSS", "Framer", "Shadcn/UI"],
    liveUrl: "https://essammoussa.github.io/luxe-ecommerce/",
    images: ["/imgs/Ecommerce.png"],
  },

  {
    id: 3,
    title: "Library Management System",
    description:
      "An intuitive frontend library management system with a sleek, interactive admin dashboard for easy catalog and user management.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
      "Radix UI",
      "Lucide React",
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
    description:
      "Full-featured travel landing page with intelligent search, dynamic content filtering, and real-time local time for destinations worldwide.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://essammoussa.github.io/Travel-recommedation-company/",
    images: ["/imgs/Travel.png"],
  },
  {
    id: 6,
    title: "Plant Paradise",
    description:
      "A responsive and user-friendly landing page for plant enthusiasts, offering a curated collection of plants and information about their care.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://essammoussa.github.io/plant-paradise-project/",
    images: ["/imgs/Plant.png"],
  },

  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "An interactive weather app that displays current conditions, forecasts, and historical data with beautiful visualizations.",
    tags: ["JavaScript", "API", "Chart.js"],
    liveUrl: "https://essammoussa.github.io/weather-dashboard/",
    images: ["/imgs/Weather.png"],
  },
];

const CERTIFICATES = [
  {
    id: 1,
    title: "Introduction to software engineering",
    organization: "IBM",
    description:
      "Covered software development principles, life cycle models, and best practices for designing and maintaining quality software.",
    certificateUrl: "https://coursera.org/share/94e2d7b74576af074e879bff04ad52ad",
    images: ["/imgs/Coursera4.png"],
  },
  {
    id: 2,
    title: "Introduction to HTML, CSS, & JavaScript",
    organization: "IBM",
    description:
      "Fundamentals of web development, building responsive web pages with HTML, styling with CSS, and adding interactivity with JavaScript.",
    certificateUrl: "https://coursera.org/share/4d32875d22543e006636017caf01a3e0",
    images: ["/imgs/Coursera3.png"],
  },
  {
    id: 3,
    title: "JavaScript Algorithms",
    organization: "IBM",
    description:
      "Advanced certification covering data structures, algorithms, and problem-solving techniques in JavaScript.",
    certificateUrl: "https://coursera.org/share/6d5c10af2cd88feaa7b1bc99d53b8f91",
    images: ["/imgs/Coursera2.png"],
  },
  {
    id: 4,
    title: "Developing front end apps with React",
    organization: "IBM",
    description:
      "Advanced certification covering React design patterns and performance optimization techniques.",
    certificateUrl: "https://coursera.org/share/f3d9e34497afb0c3c8ba44a24e400baf",
    images: ["/imgs/Coursera1.png"],
  },
  {
    id: 5,
    title: "Developing Back-End Apps with Node.js and Express",
    organization: "IBM",
    description:
      "Comprehensive certification covering React, Node.js, databases, and modern web development practices.",
    certificateUrl: "https://coursera.org/share/98466e9e4d249d0306927ea45e841b9b",
    images: ["/imgs/Coursera5.png"],
  },
];

function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + images.length) % images.length);
  }, [images.length]);

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
        <div className="modal-image-overlay" />
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

      <div className="modal-image-overlay" />

      {/* Arrows */}
      <button className="gallery-arrow left" onClick={() => go(-1)} aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="gallery-arrow right" onClick={() => go(1)} aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery-dot ${i === current ? "active" : ""}`}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="gallery-counter">{current + 1} / {images.length}</span>
    </div>
  );
}

function Modal({ item, type, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const url = type === "project" ? item.liveUrl : item.certificateUrl;
  const btnLabel = type === "project" ? "Live Demo" : "View Certificate";
  const images = item.images || [item.imageUrl];

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <ImageGallery images={images} />

        <div className="modal-body">
          {type === "certificate" && (
            <p className="modal-org">{item.organization}</p>
          )}
          <h2 className="modal-title">{item.title}</h2>
          <p className="modal-desc">{item.description}</p>

          {item.tags && (
            <div className="modal-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="modal-tag">{tag}</span>
              ))}
            </div>
          )}

          <a href={url} target="_blank" rel="noopener noreferrer" className="modal-btn">
            <span>{btnLabel}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="pc2-card"
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="pc2-image">
        <img src={project.images[0]} alt={project.title} loading="lazy" />
        <div className="pc2-overlay">
          <span className="pc2-view">View Details</span>
        </div>
      </div>
      <div className="pc2-footer">
        <h3 className="pc2-title">{project.title}</h3>
        <div className="pc2-btn-group">
          <button className="pc2-btn" onClick={(e) => { e.stopPropagation(); onClick(); }}>
            View Details
          </button>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pc2-btn" onClick={(e) => e.stopPropagation()}>
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CertificateCard({ certificate, onClick }) {
  return (
    <motion.div
      className="pc2-card"
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="pc2-image">
        <img src={certificate.images[0]} alt={certificate.title} loading="lazy" />
        <div className="pc2-overlay">
          <span className="pc2-view">View Details</span>
        </div>
      </div>
      <div className="pc2-footer">
        <h3 className="pc2-title">{certificate.title}</h3>
        <a href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer" className="pc2-btn" onClick={(e) => e.stopPropagation()}>
          Show Certificate
        </a>
      </div>
    </motion.div>
  );
}

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selected, setSelected] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const openModal = (item, type) => { setSelected(item); setSelectedType(type); };

  return (
    <>
      <section id="projects" className="pc2-section">
        <span className="about-eyebrow">// My Work</span>
        <motion.h2
          className="pc2-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects & Certificates
        </motion.h2>

        <div className="pc2-tabs">
          {["projects", "certificates"].map((tab) => (
            <button
              key={tab}
              className={`pc2-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div className="pc2-tab-indicator" layoutId="tab-indicator" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="pc2-grid"
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            {activeTab === "projects"
              ? PROJECTS.map((p) => (
                  <motion.div key={p.id} variants={cardItem}>
                    <ProjectCard project={p} onClick={() => openModal(p, "project")} />
                  </motion.div>
                ))
              : CERTIFICATES.map((c) => (
                  <motion.div key={c.id} variants={cardItem}>
                    <CertificateCard certificate={c} onClick={() => openModal(c, "certificate")} />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {selected && (
          <Modal item={selected} type={selectedType} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}