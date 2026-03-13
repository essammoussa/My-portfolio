import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const LINES = [
  { text: "> BOOTING SYSTEM...",          color: "#4ade80" },
  { text: "> LOADING ESSAM.OS v2.0",      color: "#4ade80" },
  { text: "> CHECKING MODULES...",        color: "#4ade80" },
  { text: "  [OK] React.............90%", color: "#63b3ed" },
  { text: "  [OK] Node.js............80%",color: "#63b3ed" },
  { text: "  [OK] C++.............75%",color: "#63b3ed" },
  { text: "  [OK] Python.........72%",color: "#63b3ed" },
  { text: "> ALL SYSTEMS NOMINAL",        color: "#4ade80" },
  { text: "",                             color: "#4ade80" },
  { text: "  ███████╗███████╗███████╗",   color: "#a78bfa" },
  { text: "  ██╔════╝██╔════╝██╔════╝",   color: "#a78bfa" },
  { text: "  █████╗  ███████╗███████╗",   color: "#a78bfa" },
  { text: "  ██╔══╝  ╚════██║╚════██║",   color: "#a78bfa" },
  { text: "  ███████╗███████║███████║",   color: "#a78bfa" },
  { text: "  ╚══════╝╚══════╝╚══════╝",   color: "#a78bfa" },
  { text: "",                             color: "#4ade80" },
  { text: "> ESSAM MOUSSA",               color: "#fff"    },
  { text: "> FULL STACK DEVELOPER",      color: "#fff"    },
  { text: "> STATUS: OPEN TO WORK ●",    color: "#4ade80" },
  { text: "",                             color: "#4ade80" },
  { text: "> AWAITING INPUT_",           color: "#4ade80" },
];

function TypedLine({ text, onDone }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (text === "") { onDone?.(); return; }
    if (shown >= text.length) { onDone?.(); return; }
    const t = setTimeout(() => setShown(s => s + 1), 18);
    return () => clearTimeout(t);
  }, [shown, text, onDone]);

  return <>{text.slice(0, shown)}</>;
}

export default function CRTMonitor() {
  const [visibleLines, setVisibleLines] = useState(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisibleLines(1), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [visibleLines]);

  const lineFinished = () => {
    setTimeout(() => setVisibleLines(v => Math.min(v + 1, LINES.length)), 80);
  };

  return (
    <div style={{ padding: "20px" }}>
      <style>{`
        .crt-wrap { width: min(420px, 92vw); }
        .crt-screen-h { height: clamp(220px, 40vw, 300px); }
        .crt-text { font-size: clamp(0.52rem, 1.6vw, 0.72rem); }
        .crt-brand { font-size: clamp(0.42rem, 1.2vw, 0.55rem); }
        @media (max-width: 480px) {
          .crt-ascii { display: none; }
        }
      `}</style>

      <motion.div
        className="crt-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Monitor shell */}
        <div style={{
          background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 60%, #111 100%)",
          borderRadius: "16px 16px 8px 8px",
          padding: "clamp(10px,2vw,16px) clamp(10px,2vw,16px) clamp(16px,3vw,24px)",
          boxShadow: "0 0 0 1px #333, 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
          border: "2px solid #2a2a2a",
        }}>

          {/* Brand */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
            <span className="crt-brand" style={{ fontFamily: "'DM Mono',monospace", color: "rgba(255,255,255,0.2)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              ESSAMTECH · MODEL EM-01
            </span>
          </div>

          {/* Bezel */}
          <div style={{ background: "#0a0a0a", borderRadius: 8, padding: 3, boxShadow: "inset 0 0 20px rgba(0,0,0,0.9), 0 0 0 1px #000" }}>
            {/* Screen */}
            <div className="crt-screen-h" style={{ position: "relative", background: "#000d00", borderRadius: 6, overflow: "hidden" }}>

              {/* Scanlines */}
              <div style={{ position: "absolute", inset: 0, zIndex: 3, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)", pointerEvents: "none" }} />
              {/* Glow */}
              <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "radial-gradient(ellipse at 50% 40%, rgba(74,222,128,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
              {/* Vignette */}
              <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)", pointerEvents: "none" }} />
              {/* Flicker */}
              <motion.div
                style={{ position: "absolute", inset: 0, zIndex: 5, background: "rgba(74,222,128,0.015)", pointerEvents: "none" }}
                animate={{ opacity: [0,0,0,0,0,0,0.4,0,0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear", times: [0,0.3,0.5,0.55,0.57,0.6,0.61,0.62,1] }}
              />

              {/* Text */}
              <div ref={bodyRef} style={{ padding: "clamp(8px,2vw,14px) clamp(10px,2.5vw,16px)", height: "100%", overflowY: "hidden", position: "relative", zIndex: 1 }}>
                {LINES.slice(0, visibleLines).map((line, i) => {
                  const isAscii = line.text.startsWith("  █") || line.text.startsWith("  ╚") || line.text.startsWith("  ██");
                  return (
                    <div
                      key={i}
                      className={`crt-text${isAscii ? " crt-ascii" : ""}`}
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        lineHeight: 1.7,
                        color: line.color,
                        textShadow: `0 0 8px ${line.color}`,
                        whiteSpace: "pre",
                        minHeight: "1.2em",
                      }}
                    >
                      {i === visibleLines - 1 ? (
                        <>
                          <TypedLine text={line.text} onDone={lineFinished} />
                          <motion.span
                            style={{ display: "inline-block", width: 7, height: "0.85em", background: "#4ade80", verticalAlign: "middle", marginLeft: 1, boxShadow: "0 0 6px #4ade80" }}
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                          />
                        </>
                      ) : line.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, padding: "0 8px" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {[10, 10, 28].map((w, i) => (
                <div key={i} style={{ width: w, height: 10, borderRadius: 3, background: "#333", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }} />
              ))}
            </div>
            <motion.div
              style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.8)" }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Stand */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 50, height: 18, background: "linear-gradient(180deg,#1a1a1a,#111)", borderRadius: "0 0 4px 4px" }} />
          <div style={{ width: 90, height: 8, background: "#111", borderRadius: 4, boxShadow: "0 4px 12px rgba(0,0,0,0.6)" }} />
        </div>
      </motion.div>
    </div>
  );
}