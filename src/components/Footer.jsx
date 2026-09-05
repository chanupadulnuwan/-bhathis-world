import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" />

      <div className="footer__content">
        {/* Left - Brand */}
        <div className="footer__brand">
          <img src="/images/icons/logo.png" alt="Bhathi's World" className="footer__logo" />
          <p className="footer__tagline">Creative Filmmaker &amp; VFX Artist</p>
          <p className="footer__description">
            Transforming simple ideas into immersive visual experiences
            that inspire, entertain, and spark imagination.
          </p>
        </div>

        {/* Center - Nav columns */}
        <div className="footer__nav-columns">
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Explore</h4>
            <NavLink to="/" end className="footer__link">Projects</NavLink>
            <NavLink to="/gallery" className="footer__link">Gallery</NavLink>
            <NavLink to="/showreel" className="footer__link">Showreel</NavLink>
            <NavLink to="/portfolio" className="footer__link">Portfolio</NavLink>
          </div>
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Connect</h4>
            <NavLink to="/about" className="footer__link">About Me</NavLink>
            <NavLink to="/contact" className="footer__link">Contact Me</NavLink>
            <a href="mailto:bhathimr@gmail.com" className="footer__link">bhathimr@gmail.com</a>
          </div>
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Services</h4>
            <span className="footer__link footer__link--static">Cinematography</span>
            <span className="footer__link footer__link--static">VFX &amp; Compositing</span>
            <span className="footer__link footer__link--static">Video Editing</span>
            <span className="footer__link footer__link--static">Directing</span>
          </div>
        </div>

        {/* Right - Social & contact */}
        <div className="footer__right">
          <h4 className="footer__nav-heading">Follow Me</h4>
          <div className="footer__socials">
            <a href="https://instagram.com/bhathimr" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="mailto:bhathimr@gmail.com" className="footer__social-icon" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="22,4 12,13 2,4" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@BhathiMr" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
              </svg>
            </a>
          </div>
          <p className="footer__location">Galle, Sri Lanka</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Bhathi's World. All rights reserved.</p>
        <p className="footer__credit">Designed &amp; Developed by Chanupa Dulnuwan</p>
      </div>
    </footer>
  );
}

export default Footer;
