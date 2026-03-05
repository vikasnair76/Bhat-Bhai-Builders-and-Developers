import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us__container wrap">
        <h2 className="about-us__heading">About Us</h2>
        <p className="about-us__description">
          Bhat Bhai Builders is a Bangalore based construction company
          established in 1997 which stands as a testament to a 25 years of
          excellence in the construction industry. With a steadfast commitment
          to quality, integrity, and innovation, we have emerged as a leading
          force in the sector. Over the years, we have meticulously crafted a
          diverse set of projects, ranging from residential complexes to
          commercial spaces, earning the trust and admiration of our clients.
          Our journey is marked by a relentless pursuit of perfection, fueled by
          a team of skilled professionals dedicated to delivering superior
          results on every project.
        </p>
      </div>
      {/* <div className="services-container">
        <div className="services-heading">
          Our Services
        </div>
        <div className="services-content">
          <ul className="services-ul">
            <li className="services-li"></li>
          </ul>
        </div>
      </div> */}
      {/* <div className="highlights">
        <div className="projects">
          <h2 className="highlight-heading">30+</h2>
        </div>
      </div> */}
      <div className="bg">
        <div className="highlight">
          <h2 className="highlight-heading">30+</h2>
          <p className="highlight-text">Projects done</p>
        </div>
      </div>
    </section>
  );
};

export default About;
