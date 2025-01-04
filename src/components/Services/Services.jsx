import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "fa-solid fa-wand-magic-sparkles",
    },
    {
      id: 2,
      title: "Product Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "fa-solid fa-cogs",
    },
    {
      id: 3,
      title: "UI UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "fa-solid fa-cube",
    },
    {
      id: 4,
      title: "Motion Graphic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "fa-solid fa-film",
    },
  ];

  return (
    <section className="services-section py-5 text-center">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-white mb-2">Services</h2>
        <p className="text-muted mb-5">OFFERED SERVICES</p>

        {/* Services Grid */}
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 mb-4">
              <motion.div
                className="service-card p-4 rounded"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  backgroundColor: "#1A1A2E",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#6C63FF",
                  boxShadow: "0px 8px 20px rgba(108, 99, 255, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Service Icon */}
                <div className="icon mb-3">
                  <i
                    className={`${service.icon} text-purple`}
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </div>
                {/* Service Title */}
                <h5 className="text-white mb-3">{service.title}</h5>
                {/* Service Description */}
                <p className="text-muted">{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
