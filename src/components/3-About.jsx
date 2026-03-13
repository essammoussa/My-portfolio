import { useRef } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    glow: "#64ffda",
    icon: "⬡",
    iconBg: "rgba(100,255,218,0.12)",
    iconBorder: "rgba(100,255,218,0.25)",
    title: "Frontend Architecture",
    desc: "Crafting fast, accessible interfaces with React & Next.js. From pixel-perfect UIs to seamless state management.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    glow: "#a78bfa",
    icon: "⚙",
    iconBg: "rgba(167,139,250,0.12)",
    iconBorder: "rgba(167,139,250,0.25)",
    title: "Backend & APIs",
    desc: "Building robust REST & GraphQL APIs with Node.js, Express, and PostgreSQL. Scalable and secure by design.",
    tags: ["Node.js", "Express", "GraphQL", "Redis"],
  },
  {
    glow: "#64ffda",
    icon: "⌗",
    iconBg: "rgba(100,255,218,0.12)",
    iconBorder: "rgba(100,255,218,0.25)",
    title: "Custom Web Apps",
    desc: "Need a full product built from scratch? I'll take your idea from wireframe to deployed app — fast, clean, and scalable.",
    tags: ["Full-Stack", "SaaS", "MVP", "Dashboards"],
  },
  {
    glow: "#ff6b9d",
    icon: "◈",
    iconBg: "rgba(255,107,157,0.12)",
    iconBorder: "rgba(255,107,157,0.25)",
    title: "Scalable & Clean Apps",
    desc: "I write code that grows with your business — modular architecture, clean patterns, and zero shortcuts. Built to last.",
    tags: ["Architecture", "Clean Code", "Modular", "Maintainable"],
  },
  {
    glow: "#6b5bff",
    icon: "✹",
    iconBg: "rgba(107,91,255,0.12)",
    iconBorder: "rgba(107,91,255,0.25)",
    title: "React UI Development",
    desc: "Interactive, accessible React components with modern styling and animations.",
    tags: ["React", "Chakra UI", "Framer Motion", "Redux"],
  },
  {
    glow: "#fbbf24",
    icon: "⌥",
    iconBg: "rgba(251,191,36,0.12)",
    iconBorder: "rgba(251,191,36,0.25)",
    title: "Open Source",
    desc: "Contributing to and maintaining open-source libraries. Sharing knowledge and tools with the dev community.",
    tags: ["GitHub", "Git", "npm"],
  },
];

const stats = [
  { value: "1+", label: "Years Coding" },
  { value: "5+", label: "Projects Built" },
  { value: "2k+", label: "Lines of Code" },
  { value: "∞", label: "Cups of Coffee" },
];

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 60 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 70 },
  { name: "C++", level: 70 },
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
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};


function Card({ card }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mx", `${x}%`);
    ref.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.div
      ref={ref}
      className="pc-card"
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="pc-card-glow" style={{ background: card.glow }} />

      <div
        className="pc-icon-wrap"
        style={{ background: card.iconBg, borderColor: card.iconBorder }}
      >
        <span>{card.icon}</span>
      </div>

      <div className="pc-card-title">{card.title}</div>
      <div className="pc-card-desc">{card.desc}</div>

      <div className="pc-tags">
        {card.tags.map((tag) => (
          <span key={tag} className="pc-tag">{tag}</span>
        ))}
      </div>
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
          <span className="about-eyebrow">// who I am</span>
          <h2 className="about-heading">About Me</h2>
        </motion.div>

        <div className="about-grid">

          {/* Left — bio + stats */}
          <motion.div
            className="about-left"
            variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true }} custom={1}
          >
            <p className="about-bio">
              I'm a passionate <span className="about-highlight">full-stack developer</span> with
              expertise in React, JavaScript, and modern web technologies. Currently pursuing a
              degree in <span className="about-highlight">Data Science</span> while building
              scalable applications and creating beautiful user experiences.
            </p>
            <p className="about-bio">
              I love turning complex problems into elegant, performant solutions — whether that's
              architecting a backend API or crafting a pixel-perfect UI. Always learning, always shipping.
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
      <section className="pc-section">
        <span className="about-eyebrow">// Services</span>
        <div className="pc-header">
          <motion.p
            className="pc-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          
          </motion.p>
          <motion.h2
            className="pc-heading"
            id="services"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            My Services
          </motion.h2>
        </div>

        <motion.div
          className="pc-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </motion.div>
      </section>
    </>
  );
}