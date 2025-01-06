import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaCodepen } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
    infinite: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="footer"
    >
      <motion.div className="footer-links" variants={itemVariants}>
        <a
          href="https://codepen.io/GilaniRabbu"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/toufiq-gilani-rabbu/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://github.com/GilaniRabbu"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/GilaniRabbu"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaCodepen size={24} />
        </a>
      </motion.div>

      <div className="line"></div>

      <motion.nav className="footer-nav" variants={itemVariants}>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolios">Portfolios</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </motion.nav>

      <motion.p className="copyright" variants={itemVariants}>
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="author">Gilani Rabbu</span>
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
