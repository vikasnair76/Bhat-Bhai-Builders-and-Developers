import React from "react";
import Logo from "../assets/logo.png";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Navbar() {
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
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="navbar">
      <div className="navbar-container wrap">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div
          className="hamburger"
          style={{ position: isOpen ? "fixed" : "static" }}
        >
          <Hamburger
            toggled={isOpen}
            color={isOpen ? "white" : "black"}
            toggle={setOpen}
            size={24}
          />
        </div>
        <div className="navbar-buttons">
          <ul className={`navbar-buttons ${isOpen ? "open" : ""}`}>
            <li className="navbar-li">
              <a
                href="#home"
                className="navbar-buttons-text"
                onClick={(e) => scrollToSection("home", e) & setOpen()}
              >
                Home
              </a>
            </li>
            <li className="navbar-li">
              <a
                href="#about"
                className="navbar-buttons-text"
                onClick={(e) => scrollToSection("about", e) & setOpen()}
              >
                About
              </a>
            </li>
            <li className="navbar-li">
              <a
                href="#services"
                className="navbar-buttons-text"
                onClick={(e) => scrollToSection("services", e) & setOpen()}
              >
                Services
              </a>
            </li>
            <li className="navbar-li">
              <a
                href="#projects"
                className="navbar-buttons-text"
                onClick={(e) => scrollToSection("projects", e) & setOpen()}
              >
                Projects
              </a>
            </li>
            <li className="navbar-li">
              <a
                href="#contact"
                className="navbar-buttons-text"
                onClick={(e) => scrollToSection("contact", e) & setOpen()}
              >
                Contact
              </a>
            </li>
            <li className="navbar-li">
              <a
                href="#quote"
                className="navbar-buttons-text cta"
                onClick={(e) => scrollToSection("quote", e) & setOpen()}
              >
                Get a quote !
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
