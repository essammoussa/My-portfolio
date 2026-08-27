import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
  SiPostman,
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
  { name: "Next.js", icon: <TbBrandNextjs color="#FFFFFF" /> },
  { name: "Redux / Query", icon: <SiRedux color="#764ABC" /> },
  { name: "Socket.IO", icon: <SiSocketdotio color="#FFFFFF" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
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
