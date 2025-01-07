import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const educationData = [
    {
      institution: "National University",
      period: "2023 - Current",
      degree: "MBA",
      description:
        "Pursuing a Master of Business Administration with a focus on advanced management strategies and business leadership skills.",
    },
    {
      institution: "National University",
      period: "2017-2021",
      degree: "BBA",
      description:
        "Gaining comprehensive knowledge in management principles, business operations, and organizational strategies.",
    },
    {
      institution: "Kabi Nazrul College",
      period: "2015-2017",
      degree: "Business Studies",
      description:
        "Completed HSC in Business Studies, building a strong foundation in accounting, finance, and business principles.",
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5 font-bonny-bold">
          My Education
        </h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-left">
                <h3 className="timeline-title">{item.institution}</h3>
                <p
                  style={{
                    color: "var(--tr-timeline-para)",
                    fontSize: "0.875rem",
                  }}
                >
                  {item.period}
                </p>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-right">
                <h3 className="timeline-title">{item.degree}</h3>
                <p
                  style={{
                    color: "var(--tr-timeline-para)",
                    fontSize: "0.875rem",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
