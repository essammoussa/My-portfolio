import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import SpotlightCard from "./animations/SpotlightCard";
import ShinyText from "./animations/ShinyText";

const EDUCATION_DATA = [
  {
    id: "alex-uni",
    title: "B.Sc. in Computer and Data Science",
    institution: "Alexandria University",
    period: "Oct 2023 – Expected Jun 2027",
    location: "Alexandria, Egypt",
    badge: "In Progress",
    glowColor: "rgba(100, 255, 218, 0.2)",
    borderColor: "rgba(100, 255, 218, 0.4)",
    accent: "#64ffda",
    description:
      "Pursuing a specialized degree combining rigorous Computer Science fundamentals with modern Data Science methodologies, software engineering principles, and distributed web architecture.",
    highlights: [
      "Data Structures, Algorithms & Problem Solving with C++ and JavaScript",
      "Database Design, Schema Architecture (SQL & MongoDB NoSQL)",
      "Object-Oriented Programming (OOP) & Clean Architecture Patterns",
      "Data Science Foundations, Statistical Analysis & Python",
      "Modern Web Engineering & Full-Stack System Design",
    ],
    tags: [
      "Computer Science",
      "Data Science",
      "Algorithms",
      "Data Structures",
      "SQL",
      "Python",
      "C++",
      "Software Engineering",
    ],
  },
];

const EXPERIENCE_DATA = [
  {
    id: "techtrek",
    role: "Full-Stack Development Intern",
    company: "TechTrek",
    period: "Jul 2026 – Present",
    location: "Remote / Hybrid",
    badge: "Current Role",
    glowColor: "rgba(56, 189, 248, 0.2)",
    borderColor: "rgba(56, 189, 248, 0.4)",
    accent: "#38bdf8",
    description:
      "Engaging in an intensive full-stack curriculum spanning frontend architecture through backend systems, database integration, and production deployment.",
    highlights: [
      "Developing scalable React applications with TypeScript and modern hook patterns",
      "Architecting state management workflows using Redux and React Query",
      "Designing backend services with Node.js, Express, and MongoDB authentication",
      "Collaborating on engineering capstone projects following production standards",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    id: "depi",
    role: "Full-Stack Web Development Training",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Nov 2025 – Jul 2026",
    location: "Egypt",
    badge: "Completed",
    glowColor: "rgba(167, 139, 250, 0.2)",
    borderColor: "rgba(167, 139, 250, 0.4)",
    accent: "#a78bfa",
    description:
      "Government-sponsored elite technical training initiative focused on shipping enterprise-grade MERN stack applications in collaborative agile teams.",
    highlights: [
      "Shipped full-stack MERN applications on sprint-style milestones with peer code reviews",
      "Designed RESTful APIs against SQL and NoSQL databases delivering end-to-end CRUD features",
      "Engineered reusable component libraries and robust client-side routing systems",
      "Debugged and resolved critical application defects under real deadline pressure",
    ],
    tags: [
      "MERN Stack",
      "Sprint Milestones",
      "Git & GitHub",
      "Code Reviews",
      "SQL & NoSQL",
      "Agile/Scrum",
    ],
  },
];

const CERTIFICATIONS_PREVIEW = [
  {
    title: "Full-Stack Web Development",
    issuer: "DEPI",
    year: "2026",
    iconColor: "#64ffda",
  },
  {
    title: "Developing Back-End Apps with Node.js & Express",
    issuer: "IBM / Coursera",
    year: "2026",
    iconColor: "#38bdf8",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM / Coursera",
    year: "2025",
    iconColor: "#a78bfa",
  },
  {
    title: "JavaScript Programming Essentials",
    issuer: "IBM / Coursera",
    year: "2025",
    iconColor: "#fbbf24",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Education() {
  const [activeTab, setActiveTab] = useState("all");
    const [selected, setSelected] = useState(null);
    
  return (
    <section id="education" className="education-section">
      {/* Background glow orb */}
      <div className="edu-bg-glow" />

      {/* Header */}
      <div className="edu-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="about-eyebrow">
            // <ShinyText text="Academic & Professional Path" />
          </span>
          <h2 className="edu-title">
            Education &amp; <span className="edu-title-gradient">Experience</span>
          </h2>
      </motion.div>

        {/* Tab switcher */}
        <div className="edu-tabs-wrapper">
          <div className="edu-tabs">
            {[
              { id: "all", label: "All Milestones" },
              { id: "education", label: "Education" },
              { id: "experience", label: "Experience" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`edu-tab ${activeTab === tab.id ? "active" : ""}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="edu-tab-active"
                    className="edu-tab-active-bg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="edu-tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid / Timeline */}
      <div className="edu-main-grid">
        {/* Left / Center Column: Timeline */}
        <div className="edu-timeline-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="edu-timeline-list"
            >
              {/* EDUCATION ITEM */}
              {(activeTab === "all" || activeTab === "education") &&
                EDUCATION_DATA.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="edu-timeline-card-wrap"
                  >
                    <div className="edu-node-indicator">
                      <div className="edu-node-icon" style={{ borderColor: item.accent }}>
                        <FaGraduationCap color={item.accent} size={15} />
                      </div>
                      <div className="edu-node-line" />
                    </div>

                    <SpotlightCard
                      spotlightColor={item.glowColor}
                      borderColor={item.borderColor}
                      className="edu-card"
                    >
                      <div className="edu-card-top">
                        <div className="edu-card-badge-row">
                          <span
                            className="edu-category-pill"
                            style={{
                              color: item.accent,
                              backgroundColor: `${item.accent}15`,
                              borderColor: `${item.accent}40`,
                            }}
                          >
                            <FaGraduationCap size={12} /> Education
                          </span>
                          <span className="edu-status-pill">{item.badge}</span>
                        </div>
                        <h3 className="edu-card-title">{item.title}</h3>
                        <h4 className="edu-card-org">{item.institution}</h4>
                        <div className="edu-card-meta">
                          <span>
                            <FaCalendarAlt size={12} /> {item.period}
                          </span>
                          <span>
                            <FaMapMarkerAlt size={12} /> {item.location}
                          </span>
                        </div>
                      </div>

                      <p className="edu-card-desc">{item.description}</p>

                      <div className="edu-highlights">
                        <p className="edu-highlights-heading">Key Focus &amp; Coursework:</p>
                        <ul>
                          {item.highlights.map((h, i) => (
                            <li key={i}>
                              <FaCheckCircle
                                className="edu-check-icon"
                                style={{ color: item.accent }}
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="edu-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="edu-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}

              {/* EXPERIENCE ITEMS */}
              {(activeTab === "all" || activeTab === "experience") &&
                EXPERIENCE_DATA.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="edu-timeline-card-wrap"
                  >
                    <div className="edu-node-indicator">
                      <div className="edu-node-icon" style={{ borderColor: item.accent }}>
                        <FaBriefcase color={item.accent} size={14} />
                      </div>
                      <div className="edu-node-line" />
                    </div>

                    <SpotlightCard
                      spotlightColor={item.glowColor}
                      borderColor={item.borderColor}
                      className="edu-card"
                    >
                      <div className="edu-card-top">
                        <div className="edu-card-badge-row">
                          <span
                            className="edu-category-pill"
                            style={{
                              color: item.accent,
                              backgroundColor: `${item.accent}15`,
                              borderColor: `${item.accent}40`,
                            }}
                          >
                            <FaBriefcase size={12} /> Experience
                          </span>
                          <span className="edu-status-pill">{item.badge}</span>
                        </div>
                        <h3 className="edu-card-title">{item.role}</h3>
                        <h4 className="edu-card-org">{item.company}</h4>
                        <div className="edu-card-meta">
                          <span>
                            <FaCalendarAlt size={12} /> {item.period}
                          </span>
                          <span>
                            <FaMapMarkerAlt size={12} /> {item.location}
                          </span>
                        </div>
                      </div>

                      <p className="edu-card-desc">{item.description}</p>

                      <div className="edu-highlights">
                        <p className="edu-highlights-heading">Impact &amp; Key Responsibilities:</p>
                        <ul>
                          {item.highlights.map((h, i) => (
                            <li key={i}>
                              <FaCheckCircle
                                className="edu-check-icon"
                                style={{ color: item.accent }}
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="edu-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="edu-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Fast Credentials & Academic Summary Sidebar */}
        <motion.div
          className="edu-sidebar"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Quick Academic Card */}
          <SpotlightCard
            spotlightColor="rgba(100, 255, 218, 0.12)"
            borderColor="rgba(100, 255, 218, 0.25)"
            className="edu-sidebar-card"
          >
            <div className="edu-sidebar-header">
              <div className="edu-sidebar-icon">
                <FaGraduationCap size={20} color="#64ffda" />
              </div>
              <div>
                <h4 className="edu-sidebar-title">Academic Profile</h4>
                <p className="edu-sidebar-sub">Alexandria University</p>
              </div>
            </div>

            <div className="edu-sidebar-stats">
              <div className="edu-stat-item">
                <span className="edu-stat-label">Degree</span>
                <span className="edu-stat-val">B.Sc.</span>
              </div>
              <div className="edu-stat-item">
                <span className="edu-stat-label">Major</span>
                <span className="edu-stat-val">Computer &amp; Data Science</span>
              </div>
              <div className="edu-stat-item">
                <span className="edu-stat-label">Expected Grad</span>
                <span className="edu-stat-val">Jun 2027</span>
              </div>
              <div className="edu-stat-item">
                <span className="edu-stat-label">English Level</span>
                <span className="edu-stat-val">C1 (Advanced)</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Quick Verified Certifications */}
          <SpotlightCard
            spotlightColor="rgba(167, 139, 250, 0.12)"
            borderColor="rgba(167, 139, 250, 0.25)"
            className="edu-sidebar-card"
          >
            <div className="edu-sidebar-header">
              <div className="edu-sidebar-icon" style={{ background: "rgba(167, 139, 250, 0.12)" }}>
                <FaAward size={20} color="#a78bfa" />
              </div>
              <div>
                <h4 className="edu-sidebar-title">Verified Certifications</h4>
                <p className="edu-sidebar-sub">DEPI &amp; IBM Professional Tracks</p>
              </div>
            </div>

            <div className="edu-cert-list">
              {CERTIFICATIONS_PREVIEW.map((cert, idx) => (
                <div key={idx} className="edu-cert-item">
                  <div className="edu-cert-dot" style={{ background: cert.iconColor }} />
                  <div className="edu-cert-info">
                    <span className="edu-cert-name">{cert.title}</span>
                    <span className="edu-cert-issuer">
                      {cert.issuer} • {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#projects" className="edu-view-all-certs">
              <span>View full credentials in Certificates</span>
              <FaExternalLinkAlt size={11} />
            </a>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
