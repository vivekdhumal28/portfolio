/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactMain.css";
import { ContactUs } from "../ContactUs";

const ContactMain = () => {
  return (
    <div className="contact-main-container">
      <h1 className="common-heading">Contact</h1>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.18649111116!2d75.30520145!3d19.870096249999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692685568764!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactUs />
    </div>
  );
};

export default ContactMain;
