import React, { useState } from "react";
import "./Contact.css";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); 
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      {sent && <div className="success">Message sent successfully!</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Message
          <textarea
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
