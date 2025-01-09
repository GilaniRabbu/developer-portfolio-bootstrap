import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "nodedotjs",
  "jquery",
  "express",
  "nextdotjs",
  "mongodb",
  "php",
  "firebase",
  "vercel",
  "netlify",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "dart",
  "java",
  "flutter",
  "android",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "jira",
  "gitlab",
  "androidstudio",
  "sonarqube",
];

function IconSlugs() {
  return (
    <div
      style={{
        maxWidth: "32rem",
      }}
      className="position-relative d-flex w-100 mx-auto align-items-center justify-content-center overflow-hidden rounded px-5 pb-5 pt-2 bg-transparent"
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconSlugs;
