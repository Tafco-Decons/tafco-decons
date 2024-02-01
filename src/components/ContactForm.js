"use client";
import React, { useState } from "react";
import styles from "@/components/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="nameandemail">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={5}
            required
            autoComplete="off"
          ></textarea>
        </div>
        <button className="contactSubmitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
