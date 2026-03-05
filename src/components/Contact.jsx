import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-us" id="contact">
      <div className="contact-us__container wrap">
        <div className="contact-us__content">
          <h2 className="contact-us__heading">Contact Us</h2>
          <ul className="contact-list">
            <li className="contact-list__item">
              <div className="contact-list__item-icon">
                <FaMapMarkerAlt />
              </div>
              <p className="contact-list__item-text">
                3, 5th Cross Rd, Nagashetty Halli, R.M.V. 2nd Stage, Bengaluru,
                Karnataka 560094
              </p>
            </li>
            <li className="contact-list__item">
              <div className="contact-list__item-icon">
                <FaEnvelope />
              </div>
              <a
                className="contact-list__item-text"
                href="mailto:bhatbhaibuilders@gmail.com"
              >
                bhatbhaibuilders@gmail.com
              </a>
              <p className="contact-list__item-text"></p>
            </li>
            <li className="contact-list__item">
              <div className="contact-list__item-icon">
                <FaPhone />
              </div>
              <p className="contact-list__item-text">
                <a href="tel://+916362377418">+91 6362377418</a>
              </p>
            </li>
            <a href="https://wa.me/+916362377418" className="whatsapp-button">
              <div className="walogo">
                <FaWhatsapp style={{ height: "25px", width: "25px" }} />
              </div>
              <div classname="waspan">Whatsapp Us</div>
            </a>
          </ul>
        </div>
        <iframe
          className="contact-us__maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.919719353329!2d77.57179607586544!3d13.040781913356122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17ef438767c7%3A0x42d073cc1a097123!2sBhat%20Bhai%20Builders!5e0!3m2!1sen!2sin!4v1706157003998!5m2!1sen!2sin"
          width="600px"
          height="500px"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
