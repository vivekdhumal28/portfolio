import React, { useState, useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_KEY;
const apiKey = process.env.REACT_APP_API_KEY;

export const ContactUs = () => {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.user_name.value ||
      !form.current.user_email.value ||
      !form.current.message.value
    ) {
      setValidationError("Please fill out all fields");
      return;
    }

    setValidationError("");

    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        setConfirmationMessage("Email has been sent successfully!");

        setTimeout(() => {
          setConfirmationMessage("");
        }, 3000);
      },
      (error) => {
        console.log(error.text);

        alert("Email could not be sent. Please try again.");
      }
    );
  };

  return (
    <>
      <h1 className="contact">Get In Touch</h1>
      <div className="contact-us-main">
        {confirmationMessage && (
          <div className="confirmation-alert">{confirmationMessage}</div>
        )}
        <form className="form-container" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here with your contact to get back to you"
          />
          {validationError && (
            <div className="validation-error">{validationError}</div>
          )}
          <input type="submit" value="Send"></input>
        </form>
      </div>
    </>
  );
};
