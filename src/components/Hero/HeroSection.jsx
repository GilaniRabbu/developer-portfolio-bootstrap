import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section
      id="intro"
      className="hero-section style-3 d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 d-none d-md-block">
            <div className="hero-image-box text-center">
              <img src="/profile.png" alt="Images" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="hero-content-box">
              <span className="hero-sub-title">Hi, I am Gilani.</span>
              <h1 className="hero-title">
                <TypeAnimation
                  sequence={[
                    "Web Dev.",
                    2000,
                    "React.js",
                    2000,
                    "Next.js",
                    2000,
                    "Mern Dev.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <div className="hero-image-box d-md-none text-center mb-4">
                <img src="/profile.png" alt="Images" />
              </div>
              <p className="lead">
                I am a proficient MERN stack developer with expertise in
                building dynamic and scalable web applications.
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="#" className="btn tj-btn-secondary">
                  Download CV
                </a>
                <a href="#" className="btn tj-btn-primary">
                  Lets talk!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
