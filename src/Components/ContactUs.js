import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_id", "template_id", form.current, "api_key").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset();
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
