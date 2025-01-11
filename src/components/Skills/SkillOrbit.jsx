import { useEffect, useState } from "react";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
  FaCode,
  FaSass,
  FaGithub,
  FaFigma,
  FaPlus,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiJquery,
} from "react-icons/si";
import "./Skill.css";

export default function SkillOrbit() {
  const [outerRotation, setOuterRotation] = useState(0);
  const [middleRotation, setMiddleRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);

  useEffect(() => {
    const outerInterval = setInterval(() => {
      setOuterRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    const middleInterval = setInterval(() => {
      setMiddleRotation((prev) => (prev - 0.75) % 360);
    }, 50);
    const innerInterval = setInterval(() => {
      setInnerRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => {
      clearInterval(outerInterval);
      clearInterval(middleInterval);
      clearInterval(innerInterval);
    };
  }, []);

  const outerIcons = [
    { Icon: BiLogoTypescript, angle: 0 },
    { Icon: BiLogoJavascript, angle: 45 },
    { Icon: FaReact, angle: 90 },
    { Icon: SiNextdotjs, angle: 135 },
    { Icon: FaNodeJs, angle: 180 },
    { Icon: SiExpress, angle: 225 },
    { Icon: SiMongodb, angle: 270 },
    { Icon: SiFirebase, angle: 315 },
  ];

  const middleIcons = [
    { Icon: FaGitAlt, angle: 0 },
    { Icon: FaGithub, angle: 60 },
    { Icon: FaFigma, angle: 120 },
    { Icon: SiPostman, angle: 180 },
    { Icon: SiJquery, angle: 240 },
    { Icon: FaSass, angle: 300 },
  ];

  const innerIcons = [
    { Icon: FaHtml5, angle: 0 },
    { Icon: FaCss3Alt, angle: 90 },
    { Icon: SiTailwindcss, angle: 180 },
    { Icon: FaBootstrap, angle: 270 },
  ];

  const renderIcons = (icons, rotation, radius) => {
    return icons.map(({ Icon, color, angle }, index) => {
      const adjustedAngle = angle + rotation;
      const x = `calc(50% + ${radius} * cos(${adjustedAngle}deg))`;
      const y = `calc(50% + ${radius} * sin(${adjustedAngle}deg))`;

      return (
        <div
          key={`${radius}-${index}`}
          className="position-absolute"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s linear",
          }}
        >
          <Icon className="orbit-icon" />
        </div>
      );
    });
  };

  return (
    <section>
      <div className="position-relative h-screen w-100 d-flex align-items-center justify-content-center">
        <div className="position-relative orbit">
          {/* Outer orbit circle */}
          <div
            className="position-absolute"
            style={{
              inset: "0",
              border: "2px solid var(--tr-skill-border)",
              borderRadius: "50%",
            }}
          />
          <div
            className="position-absolute middle-orbit"
            style={{
              border: "2px solid var(--tr-skill-border)",
              borderRadius: "50%",
            }}
          />
          <div
            className="position-absolute inner-orbit"
            style={{
              border: "2px solid var(--tr-skill-border)",
              borderRadius: "50%",
            }}
          />

          {/* Center text */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              position: "absolute",
              inset: "0",
            }}
          >
            <h1 className="orbit-title">
              <FaCode />
            </h1>
          </div>

          {renderIcons(outerIcons, outerRotation, "calc(50% - 2px)")}
          {renderIcons(middleIcons, middleRotation, "calc(50% - 42px)")}
          {renderIcons(innerIcons, innerRotation, "calc(50% - 82px)")}
        </div>
      </div>
    </section>
  );
}
