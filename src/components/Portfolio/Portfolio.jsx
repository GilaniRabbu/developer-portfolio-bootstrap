import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css"; // For custom hover styles

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AnimeFig",
      stack: "Full-Stack",
      image: "./profile.png",
      description:
        "AnimeFig is an anime figurine buying website. It allows users to view and buy anime figurines. It is a full stack web application built with React.js, Node.js, Express.js, MongoDB, and Firebase.",
      frontend: "React.js, Vite, TailwindCSS, react-router",
      backend: "Node.js, Express.js, MongoDB, Mongoose, Firebase",
      link: "#",
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <h2 className="text-center mb-4">Recent Work</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <div className="portfolio-item">
                <div className="portfolio-content">
                  <div className="image-container">
                    <img
                      src={project.image}
                      alt="AnimeFig Project"
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
                    <div className="project-header">
                      <h2>{project.title}</h2>
                      <span className="tag">{project.stack}</span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="tech-stack">
                      <p>{project.frontend}</p>
                      <p>{project.backend}</p>
                    </div>

                    <div className="action-buttons">
                      <button className="action-btn link">
                        <span className="icon">🔗</span>
                        Link
                      </button>
                      <div className="button-group">
                        <button className="action-btn client">
                          <span className="icon">💻</span>
                          Client
                        </button>
                        <button className="action-btn server">
                          <span className="icon">🖥️</span>
                          Server
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
