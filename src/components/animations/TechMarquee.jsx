import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiZod,
  SiSocketdotio,
  SiPostman,
  SiVite,
  SiGit,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TECH_ITEMS = [
  { name: "React.js", icon: <SiReact color="#61DAFB" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#5FA04E" /> },
  { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
  { name: "React Query", icon: <SiReactquery color="#FF4154" /> },
  { name: "PHP", icon: <SiPhp color="#777BB4" /> },
  { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "Next.js", icon: <TbBrandNextjs color="#FFFFFF" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Socket.IO", icon: <SiSocketdotio color="#38bdf8" /> },
  { name: "Zod", icon: <SiZod color="#3E67B1" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Git & GitHub", icon: <SiGit color="#F05032" /> },
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper" aria-label="Technologies and tools">
      <div className="tech-marquee-track">
        {/* First copy */}
        <div className="tech-marquee-content">
          {TECH_ITEMS.map((item, idx) => (
            <div key={`tech-1-${idx}`} className="tech-marquee-item">
              <span className="tech-marquee-icon">{item.icon}</span>
              <span className="tech-marquee-name">{item.name}</span>
            </div>
          ))}
        </div>
        {/* Second copy for seamless infinite loop */}
        <div className="tech-marquee-content" aria-hidden="true">
          {TECH_ITEMS.map((item, idx) => (
            <div key={`tech-2-${idx}`} className="tech-marquee-item">
              <span className="tech-marquee-icon">{item.icon}</span>
              <span className="tech-marquee-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
