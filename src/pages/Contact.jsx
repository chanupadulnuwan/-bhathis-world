import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      {/* LEFT COLUMN */}
      <div className="contact-left">
        <h1 className="contact-title">Contact Me....</h1>

        <div className="contact-info">
          <p className="contact-email">bhathiyamr@gmail.com</p>
          <p className="contact-roles">
            Director / Cinematographer / Vfx Artist / Content Creator
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* Mail */}
            <a
              href="mailto:bhathiyamr@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="22,4 12,13 2,4" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="4" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Chat Form */}
        <div className="quick-chat">
          <h2 className="quick-chat-heading">Quick Chat</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              className="quick-chat-textarea"
              placeholder="Type Here.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="quick-chat-send">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="contact-right">
        <img
          src="/images/contact/contact-photo.jpg"
          alt="Contact portrait"
          className="contact-portrait"
        />
      </div>
    </div>
  );
}

export default Contact;
