import React from "react";
import SkillOrbit from "./SkillOrbit";

const Skills = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title font-bonny-bold">
          Skills Of Mine
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
};

export default Skills;
