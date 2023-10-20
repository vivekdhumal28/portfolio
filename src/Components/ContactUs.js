import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_KEY;
const apiKey = process.env.REACT_APP_API_KEY;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();

        // Display a confirmation alert with styling
        const alertDiv = document.createElement("div");
        alertDiv.className = "confirmation-alert";
        alertDiv.innerHTML = "Email has been sent successfully!";
        document.body.appendChild(alertDiv);

        // Automatically remove the alert after 3 seconds
        setTimeout(() => {
          document.body.removeChild(alertDiv);
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        // Display an error alert
        alert("Email could not be sent. Please try again.");
      }
    );
  };

  return (
    <>
      <h1 className="contact">Get In Touch</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Email" />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write your message here with your contact to get back to you"
        />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};
