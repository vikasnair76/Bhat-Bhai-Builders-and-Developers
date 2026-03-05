import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.png";

function Footer() {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (element) {
      // element.scrollIntoView({ behavior: "smooth" });
      const offsetTop = element.offsetTop - navbarHeight; // Subtract navbar height from the offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="footer">
      <div className="footer-container wrap">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-links">
          <a
            href="#home"
            className="footer-item"
            onClick={(e) => scrollToSection("home", e)}
          >
            Home
          </a>
          <a
            href="#about"
            className="footer-item"
            onClick={(e) => scrollToSection("about", e)}
          >
            About
          </a>
          <a
            href="#services"
            className="footer-item"
            onClick={(e) => scrollToSection("services", e)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="footer-item"
            onClick={(e) => scrollToSection("projects", e)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="footer-item"
            onClick={(e) => scrollToSection("contact", e)}
          >
            Contact
          </a>
          <a
            href="#quote"
            className="footer-item cta"
            onClick={(e) => scrollToSection("quote", e)}
          >
            Get Quote
          </a>
        </div>
      </div>
      <div className="footer-copyright">© 2024 Bhat Bhai Builders</div>
    </section>
  );
}

export default Footer;
