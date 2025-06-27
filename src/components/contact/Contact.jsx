import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  // updates state while user inputting values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    // validate input fields
    const isValid = form.current.checkValidity();
    if (!isValid) {
      form.current.reportValidity(); // triggers browser validation messages
      return;
    }

    // emailJs data
    const serviceId = "service_2g60j3i";
    const templateId = "template_dieuue4";
    const pbKey = "IJ8WKBncKULbV7iuT";

    emailjs.sendForm(serviceId, templateId, form.current, pbKey).then(
      (result) => {
        alert("Email sent successfully. Thank you.");
        setFormData({
          name: "",
          email: "",
          title: "",
          message: "",
        });
      },
      (error) => {
        alert("Email sent failed. Please try again later.");
        console.error(error.text);
      }
    );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email!</p>
        </div>

        <form action="" className="contact_form" ref={form}>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Insert your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Insert your subject"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn" onClick={onSubmitClick}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
