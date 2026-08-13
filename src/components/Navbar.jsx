import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="navbar__logo">
        <img src="/images/icons/logo.png" alt="Bhathi's World" className="navbar__logo-img" />
      </NavLink>

      {/* Center navigation */}
      <div className="navbar__center">
        <div className="navbar__links">
          <NavLink to="/" end className="navbar__link">
            <img
              src="/images/icons/projects.png"
              alt=""
              className="navbar__link-icon"
            />
            <span>PROJECTS</span>
          </NavLink>

          <NavLink to="/gallery" className="navbar__link">
            <img
              src="/images/icons/artworks.png"
              alt=""
              className="navbar__link-icon"
            />
            <span>GALLERY</span>
          </NavLink>

          <NavLink to="/about" className="navbar__link">
            <img
              src="/images/icons/aboutme.png"
              alt=""
              className="navbar__link-icon"
            />
            <span>ABOUT ME</span>
          </NavLink>

          <NavLink to="/contact" className="navbar__link">
            <img
              src="/images/icons/contactme.png"
              alt=""
              className="navbar__link-icon"
            />
            <span>CONTACT ME</span>
          </NavLink>
        </div>

        {/* Decorative diamond divider below nav links */}
        <div className="navbar__divider" aria-hidden="true">
          <svg
            className="navbar__diamond"
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <rect
              x="5"
              y="0"
              width="7"
              height="7"
              rx="1"
              transform="rotate(45 5 0)"
              fill="var(--gold)"
            />
          </svg>
          <div className="navbar__divider-line" />
          <svg
            className="navbar__diamond"
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <rect
              x="5"
              y="0"
              width="7"
              height="7"
              rx="1"
              transform="rotate(45 5 0)"
              fill="var(--gold)"
            />
          </svg>
        </div>
      </div>

      {/* Social icons */}
      <div className="navbar__socials">
        {/* Instagram */}
        <a
          href="https://instagram.com/bhathimr"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__social-icon"
          aria-label="Instagram"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="var(--gold)" stroke="none" />
          </svg>
        </a>

        {/* Mail */}
        <a
          href="mailto:bhathimr@gmail.com"
          className="navbar__social-icon"
          aria-label="Email"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,4 12,13 2,4" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@BhathiMr"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__social-icon"
          aria-label="YouTube"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
