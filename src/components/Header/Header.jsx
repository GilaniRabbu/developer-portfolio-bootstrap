import React, { useEffect, useState } from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import "./Header.css";
import "../../styles/hamburgers.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setMenuOpen(false);
      }, 400);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolios", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <FaXTwitter /> },
    { name: "Facebook", href: "#", icon: <FaFacebookF /> },
    { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
    { name: "Github", href: "#", icon: <FaGithub /> },
  ];

  return (
    <header
      className={`header-area header-3 header-absolute ${
        isScrolled ? "bg-header" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
            <div className="logo-box">
              <a href="#" className="d-inline-block">
                <img src="./logo.png" alt="Admin Logo" className="w-100" />
              </a>
            </div>

            <div className="d-none d-lg-inline-flex">
              <nav className="d-flex gap-4 align-items-center position-relative nav-links">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-decoration-none text-nav text-nav-be"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="d-none d-lg-inline-flex">
              <ul className="social-icons ul-reset">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.icon}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-bar d-lg-none">
              <button
                class={`hamburger hamburger--emphatic-r ${
                  isActive ? "is-active" : ""
                }`}
                type="button"
                onClick={toggleMenu}
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>

            <div
              className={`header-menu d-lg-none ${
                menuOpen ? "menu-open" : ""
              } ${closing ? "menu-closing" : ""}`}
            >
              <nav className="container">
                <ul className="ul-reset d-flex flex-column gap-5 py-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-decoration-none h2 text-nav"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
