import React, { useState } from "react";
import "./ProjectCard.css";
import ImageGallery from "./ImageGallery";

const ProjectCard = ({ data }) => {
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
    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  };
  const [showGallery, setShowGallery] = useState(false);

  const openGallery = () => {
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <div className="project-card">
      {showGallery && <ImageGallery data={data} onClose={closeGallery} />}
      <div className="project-card__image" onClick={openGallery}>
        <img src={data.imageUrl[0]} alt="" />
      </div>
      <div className="project-card__description">
        <div className="project-card__text">{data.title}</div>
        {data.available && (
          <div
            className="available btn--jump"
            onClick={(e) => scrollToSection("contact", e)}
          >
            Book Now !
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
