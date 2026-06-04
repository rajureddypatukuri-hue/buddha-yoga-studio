import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./whatsapp.css";

const Whatsapp = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {showChat && (
        <div className="chat-box">
         <div className="chat-header">
  <div className="header-content">
    <h3>Buddha Yoga Studio</h3>
    <p className="reply-text">Typically replies instantly</p>
  </div>

  <span className="close-btn" onClick={() => setShowChat(false)}>
    ✕
  </span>
</div>

          <div className="chat-body">
            <p>Hi there! How can we help you today?</p>
            <div className="message-box">
              Hello! I would like to know more about Buddha Yoga Studio
              Services.
            </div>

            <a
              href="https://wa.me/917995691589?text=Hello! I would like to know more about Buddha Yoga Studio Services."
              target="_blank"
              rel="noreferrer"
              className="send-btn"
            >
              Send Message
            </a>
          </div>
          <div className="quick-messages">
            <p>Quick Messages</p>

            <a
              href="https://wa.me/917995691589?text=I want to know about Yoga Classes"
              target="_blank"
              rel="noreferrer"
              className="quick-btn"
            >
              Yoga
            </a>

            <a
              href="https://wa.me/918897546853?text=I want to know about Meditation Classes"
              target="_blank"
              rel="noreferrer"
              className="quick-btn"
            >
              Meditation Practicing
            </a>

            <a
              href="https://wa.me/918897546853?text=I want to know about Exercise Programs"
              target="_blank"
              rel="noreferrer"
              className="quick-btn"
            >
              Exercise
            </a>
          </div>
        </div>
      )}

      <div className="whatsapp-btn" onClick={() => setShowChat(!showChat)}>
        <FaWhatsapp />
      </div>
    </>
  );
};

export default Whatsapp;
