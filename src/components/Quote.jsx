import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Quote.css";

function Quote() {
  // const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userID = import.meta.env.VITE_EMAIL_PUBLIC_ID;
    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

    // Send the email using Email.js
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    // Reset the form after submission
    setFormData({
      form_name: "",
      form_email: "",
      form_subject: "",
      message: "",
    });
  };

  return (
    <section className="quote" id="quote">
      <div className="quote-container wrap">
        <div className="quote-text">
          <h2 className="quote-text-content">Get a quote !</h2>
          <br />
          <p className="quote-text-content">
            Send us a mail with your project requirements to get a quote from
            our expert
          </p>
        </div>
        <div className="quote-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="form_name"
              value={formData.form_name}
              onChange={handleChange}
              className="form-item text-field"
              placeholder="Name"
            />

            <input
              type="email"
              name="form_mail"
              value={formData.form_email}
              onChange={handleChange}
              className="form-item text-field"
              placeholder="Your E-mail"
            />
            <input
              type="text"
              name="form_subject"
              value={formData.form_subject}
              onChange={handleChange}
              className="form-item text-field"
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              className="form-item text-field"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="form-item cta">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Quote;
