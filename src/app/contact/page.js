"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./contact.css"; // Plain CSS

export default function AnimatedForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Main section with form */}
      <motion.div
        className="formWrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact Us</h2>
        <form className="form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <motion.input
            type="text"
            placeholder="Your Name"
            className="input"
            name="name"
            required
            pattern="^[A-Za-z\s]{3,}$"
            title="Please enter a valid name (at least 3 letters)"
            aria-label="Your Name"
            whileFocus={{ scale: 1.03 }}
          />
          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Your Email"
            className="input"
            name="email"
            required
            aria-label="Your Email"
            whileFocus={{ scale: 1.03 }}
          />
          {/* Phone Number Input */}
          <motion.input
            type="tel"
            placeholder="Mobile Number"
            className="input"
            name="phone"
            required
            pattern="[0-9]{10}"
            title="Please enter a 10-digit mobile number"
            aria-label="Mobile Number"
            whileFocus={{ scale: 1.03 }}
          />
          {/* Message Textarea */}
          <motion.textarea
            placeholder="Your Message"
            className="textarea"
            name="message"
            rows={5}
            required
            aria-label="Your Message"
            whileFocus={{ scale: 1.03 }}
          />
          {/* Submit Button */}
          <motion.button
            type="submit"
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
          {/* Success Message */}
          {submitted && <p className="success">Message sent!</p>}
        </form>
      </motion.div>

      {/* Bubble Animation for Background */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </>
  );
}
