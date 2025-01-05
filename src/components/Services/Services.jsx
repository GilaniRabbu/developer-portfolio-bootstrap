import React from "react";
import { motion } from "framer-motion";
import { MdOutlineWeb } from "react-icons/md";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineWeb />,
    },
    {
      id: 2,
      title: "Product Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineWeb />,
    },
    {
      id: 3,
      title: "UI UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineWeb />,
    },
    {
      id: 4,
      title: "Motion Graphic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineWeb />,
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title font-bonny-bold">
          Services
        </h2>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6">
              <div className="service-card">
                <div className="mb-4 service-icon">{service.icon}</div>
                <h3 className="mb-3 service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
