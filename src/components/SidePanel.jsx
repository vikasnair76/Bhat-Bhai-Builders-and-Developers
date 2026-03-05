import React from "react";
import "./SidePanel.css";

function SidePanel({ isOpen, onClose, scrollToSection }) {
  return (
    <div className={`side-panel ${isOpen ? "open" : ""}`}>
      <div className="side-panel-close" onClick={onClose}>
        &times;
      </div>
      <ul className="side-panel-ul">
        <li className="side-panel-li">
          <a
            href="#home"
            className="side-panel-text"
            onClick={(e) => {
              scrollToSection("home", e);
              onClose();
            }}
          >
            Home
          </a>
        </li>
        <li className="side-panel-li">
          <a
            href="#about"
            className="side-panel-text"
            onClick={(e) => {
              scrollToSection("about", e);
              onClose();
            }}
          >
            About
          </a>
        </li>
        <li className="side-panel-li">
          <a
            href="#projects"
            className="side-panel-text"
            onClick={(e) => {
              scrollToSection("projects", e);
              onClose();
            }}
          >
            Projects
          </a>
        </li>
        <li className="side-panel-li">
          <a
            href="#contact"
            className="side-panel-text"
            onClick={(e) => {
              scrollToSection("contact", e);
              onClose();
            }}
          >
            Contact
          </a>
        </li>
        <li className="side-panel-li">
          <a
            href="#quote"
            className="side-panel-text cta"
            onClick={(e) => {
              scrollToSection("quote", e);
              onClose();
            }}
          >
            Get a quote !
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
