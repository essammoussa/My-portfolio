import { useRef } from "react";
import { motion } from "framer-motion";
import ShinyText from "./animations/ShinyText";
import SpotlightCard from "./animations/SpotlightCard";

const cards = [
  {
    glow: "#64ffda",
    glowColor: "rgba(100, 255, 218, 0.18)",
    borderColor: "rgba(100, 255, 218, 0.4)",
    accent: "#64ffda",
    iconBg: "rgba(100,255,218,0.1)",
    iconBorder: "rgba(100,255,218,0.25)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
      </svg>
    ),
    title: "Frontend Architecture",
    desc: "Crafting fast, accessible interfaces from pixel-perfect React UIs with Tailwind, Shadcn/UI, and seamless state management.",
    tags: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "React Query"],
  },
  {
    glow: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.18)",
    borderColor: "rgba(167, 139, 250, 0.4)",
    accent: "#a78bfa",
    iconBg: "rgba(167,139,250,0.1)",
    iconBorder: "rgba(167,139,250,0.25)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: "Backend & REST APIs",
    desc: "Building robust, secure RESTful APIs with Node.js, Express, JWT auth, role-based access control, and Socket.IO real-time features.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT"],
  },
  {
    glow: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.18)",
    borderColor: "rgba(56, 189, 248, 0.4)",
    accent: "#38bdf8",
    iconBg: "rgba(56,189,248,0.1)",
    iconBorder: "rgba(56,189,248,0.25)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Full-Stack Web Apps",
    desc: "Taking ideas from database schema design & REST APIs to responsive interactive React interfaces and live production deployments.",
    tags: ["MERN Stack", "Transactions", "Aggregation", "Vercel", "Clean Code"],
  },
  {
    glow: "#ff6b9d",
    glowColor: "rgba(255, 107, 157, 0.18)",
    borderColor: "rgba(255, 107, 157, 0.4)",
    accent: "#ff6b9d",
    iconBg: "rgba(255,107,157,0.1)",
    iconBorder: "rgba(255,107,157,0.25)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Database & Concurrency",
    desc: "Implementing concurrency-safe operations with MongoDB transactions, schema optimization, and analytical aggregation pipelines.",
    tags: ["MongoDB", "SQL", "Mongoose", "Transactions", "Aggregation"],
  },
  {
    glow: "#6b5bff",
    glowColor: "rgba(107, 91, 255, 0.18)",
    borderColor: "rgba(107, 91, 255, 0.4)",
    accent: "#818cf8",
    iconBg: "rgba(107,91,255,0.1)",
    iconBorder: "rgba(107,91,255,0.25)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "React UI Development",
    desc: "Interactive, accessible React components with modern animations, responsive layouts, and typed architectures.",
    tags: ["React.js", "Framer Motion", "Material UI", "Shadcn/UI", "Zod"],
  },
  {
    glow: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.18)",
    borderColor: "rgba(251, 191, 36, 0.4)",
    accent: "#fbbf24",
    iconBg: "rgba(251,191,36,0.1)",
    iconBorder: "rgba(251,191,36,0.25)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Agile & Team Workflows",
    desc: "Collaborating via Git & GitHub workflows, sprint milestones, peer code reviews, and structured problem solving.",
    tags: ["Git", "GitHub", "Postman", "Agile/Scrum", "Code Reviews"],
  },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "6+", label: "Production Projects" },
  { value: "5+", label: "Verified Certificates" },
  { value: "100%", label: "Dedication" },
];

const skills = [
  { name: "React.js & Hooks", level: 92 },
  { name: "Node.js & Express.js", level: 88 },
  { name: "MongoDB & Aggregations", level: 85 },
  { name: "JavaScript (ES6+) & TS", level: 90 },
  { name: "HTML5 & Tailwind CSS", level: 94 },
  { name: "Python & Data Science", level: 78 },
  { name: "SQL & Databases", level: 80 },
  { name: "C++ & Data Structures", level: 75 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function ServiceCard({ card }) {
  return (
    <motion.div variants={cardVariants} className="svc-card-wrap">
      <SpotlightCard
        spotlightColor={card.glowColor}
        borderColor={card.borderColor}
        className="svc-card"
      >
        {/* Ambient glow blob */}
        <div
          className="svc-card-glow-blob"
          style={{ background: card.glow }}
        />

        {/* Icon */}
        <div
          className="svc-icon-wrap"
          style={{
            background: card.iconBg,
            borderColor: card.iconBorder,
            color: card.accent,
          }}
        >
          {card.icon}
        </div>

        {/* Category pill */}
        <div className="svc-badge-row">
          <span
            className="svc-category-pill"
            style={{
              color: card.accent,
              backgroundColor: `${card.accent}15`,
              borderColor: `${card.accent}40`,
            }}
          >
            Service
          </span>
        </div>

        {/* Title */}
        <h3 className="svc-card-title">{card.title}</h3>

        {/* Description */}
        <p className="svc-card-desc">{card.desc}</p>

        {/* Tags */}
        <div className="svc-tags">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="svc-tag"
              style={{ borderColor: `${card.accent}30`, color: `${card.accent}cc` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      {/* ---- About Section ---- */}
      <section id="about" className="about-section">

        <motion.div
          className="about-header"
          variants={fadeUp} initial="hidden"
          whileInView="show" viewport={{ once: true }} custom={0}
        >
          <span className="about-eyebrow">
            // <ShinyText text="who I am" />
          </span>
          <h2 className="about-heading">
            About <span className="edu-title-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="about-grid">

          {/* Left — bio + stats */}
          <motion.div
            className="about-left"
            variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true }} custom={1}
          >
            <p className="about-bio">
              I'm a passionate <span className="about-highlight">Full-Stack MERN Developer</span> with
              hands-on experience building role-based, real-time, and API-driven web applications.
              Currently pursuing my B.Sc. in <span className="about-highlight">Computer &amp; Data Science</span> at
              Alexandria University.
            </p>
            <p className="about-bio">
              I specialize in secure authentication (JWT, OAuth, bcrypt), concurrency-safe MongoDB
              transactions, and aggregation pipelines. Comfortable owning features end-to-end — from schema design
              and REST API architecture to responsive React interfaces deployed live.
            </p>

            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="about-stat"
                  variants={fadeUp} initial="hidden"
                  whileInView="show" viewport={{ once: true }} custom={i * 0.1 + 2}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
                >
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — skill bars */}
          <motion.div
            className="about-right"
            variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true }} custom={2}
          >
            <p className="about-skills-title">Tech I work with</p>
            <div className="about-skills">
              {skills.map((skill, i) => (
                <div key={skill.name} className="about-skill">
                  <div className="about-skill-top">
                    <span className="about-skill-name">{skill.name}</span>
                    <span className="about-skill-pct">{skill.level}%</span>
                  </div>
                  <div className="about-skill-track">
                    <motion.div
                      className="about-skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ---- Services Section ---- */}
      <section id="services" className="pc-section">
        <span className="about-eyebrow">
          // <ShinyText text="Services & Capabilities" />
        </span>
        <div className="pc-header">
          <motion.h2
            className="pc-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            My <span className="edu-title-gradient">Services</span>
          </motion.h2>
        </div>

        <motion.div
          className="svc-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </motion.div>
      </section>
    </>
  );
}