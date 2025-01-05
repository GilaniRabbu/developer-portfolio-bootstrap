import React from "react";
import { FaGithub, FaLink, FaServer } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "FurStore",
      stack: "Full Stack",
      image: "./profile.png",
      description:
        "AnimeFig is an anime figurine buying website. It allows users to view and buy anime figurines. It is a full stack web application built with React.js, Node.js, Express.js, MongoDB, and Firebase.",
      frontend: "Next.js, Typescript, Bootstrap",
      backend: "Node.js, Express.js, MongoDB, Mongoose",
      link: "#",
      iconLink: <FaLink />,
      iconGit: <FaGithub />,
      iconServer: <FaServer />,
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title font-bonny-bold">
          Recent Work
        </h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <div className="portfolio-item">
                <div className="portfolio-content">
                  <div className="image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="visit-overlay">
                      <button className="visit-btn">
                        <span className="icon">✨</span>
                        Visit
                      </button>
                    </div>
                  </div>

                  <div className="portfolio-details">
                    <p className="project-tag mb-3">{project.stack}</p>
                    <h2 className="project-title mb-4">{project.title}</h2>
                    <p className="project-description">{project.description}</p>

                    <div className="tech-stack">
                      <p className="stack-fr">
                        <b>Frontend:</b> {project.frontend}
                      </p>
                      <p className="stack-be">
                        <b>Backend:</b> {project.backend}
                      </p>
                    </div>

                    <div className="action-buttons">
                      <button className="action-btn link">
                        <span className="icon">{project.iconLink}</span>
                        <span className="">Link</span>
                      </button>
                      <div className="button-group">
                        <button className="action-btn client">
                          <span className="icon">{project.iconGit}</span>
                          <span className="">Client</span>
                        </button>
                        <button className="action-btn server">
                          <span className="icon">{project.iconServer}</span>
                          <span className="">Server</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
