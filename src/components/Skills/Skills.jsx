import React from "react";
import { IconCloud } from "./IconCloud";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title font-bonny-bold">
          Skills Of Mine
        </h2>
        <div className="position-relative w-100 justify-content-center mx-auto d-flex">
          <IconCloud
            containerProps={{
              className: "bg-transparent mx-auto cursor",
            }}
            style={{ maxWidth: "560px;" }}
            canvasWidth={560}
            iconSize={88}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
