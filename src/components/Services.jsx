import React from "react";
import "./Services.css";
import { FiCheckSquare } from "react-icons/fi";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-content wrap">
          <div className="service">
            <div className="service-bullet">
              <FiCheckSquare size={30} />
            </div>
            <div className="service-text">Residential building contact</div>
          </div>
          <div className="service">
            <div className="service-bullet">
              <FiCheckSquare size={30} />
            </div>
            <div className="service-text"> Commercial building contact</div>
          </div>
          <div className="service">
            <div className="service-bullet">
              <FiCheckSquare size={30} />
            </div>
            <div className="service-text">Joint venture for apartments</div>
          </div>
          <div className="service">
            <div className="service-bullet">
              <FiCheckSquare size={30} />
            </div>
            <div className="service-text">
              Joint venture for Residential Layout
            </div>
          </div>
          <div className="service">
            <div className="service-bullet">
              <FiCheckSquare size={30} />
            </div>
            <div className="service-text">Interiors</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
