import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-container wrap">
          <div className="hero-text">
            <div className="hero-text-heading">
              <h2>You dream it, we build it</h2>
            </div>
            <div className="hero-text-content">
              <p>
                {/* From
                residential to commercial, our commitment to quality
                craftsmanship and client satisfaction remains unwavering.*/}
                We have been dedicated to turning visions into reality. Let us
                bring your dream project to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
