import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Terminal.css";

const lines = [
  { text: "$ whoami", delay: 0, color: "#63b3ed" },
  { text: "essam-moussa", delay: 600, color: "#e2e8f0" },
  { text: "$ cat skills.txt", delay: 1400, color: "#63b3ed" },
  { text: "→ React, Javascript, TypeScript", delay: 2000, color: "#64ffda" },
  { text: "→ Node.js, Express, MongoDB", delay: 2400, color: "#64ffda" },
  { text: "→ Python, Data Science", delay: 2800, color: "#64ffda" },
  { text: "$ cat status.txt", delay: 3600, color: "#63b3ed" },
  { text: "✦ Open to opportunities", delay: 4200, color: "#a78bfa" },
  { text: "$ _", delay: 4800, color: "#63b3ed", cursor: true },
];

function TerminalLine({ line, started }) {
  const [displayed, setDisplayed] = useState("");
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!started) return;
    const showTimer = setTimeout(() => {
      setVisible(true);
      if (line.cursor) { setDisplayed(line.text); return; }
      const type = () => {
        if (indexRef.current < line.text.length) {
          setDisplayed(line.text.slice(0, indexRef.current + 1));
          indexRef.current++;
          setTimeout(type, 28);
        }
      };
      type();
    }, line.delay);
    return () => clearTimeout(showTimer);
  }, [started, line]);

  if (!visible) return null;

  return (
    <div className="term-line">
      <span style={{ color: line.color }}>{displayed}</span>
      {line.cursor && <span className="term-cursor" />}
    </div>
  );
}

export default function Terminal() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="terminal"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      {/* Title bar */}
      <div className="term-bar">
        <div className="term-dots">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
        </div>
        <span className="term-title">essam@portfolio ~ </span>
      </div>

      {/* Body */}
      <div className="term-body">
        {lines.map((line, i) => (
          <TerminalLine key={i} line={line} started={started} />
        ))}
      </div>
    </motion.div>
  );
}