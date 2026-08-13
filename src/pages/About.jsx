import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* TOP SECTION */}
      <section className="about-top">
        <div className="about-top-left">
          <h1 className="about-title">The Mind Behind the Magic</h1>
          <p className="about-bio">
            My name is Bhathiya Maneth Ranaweera, a 23-year-old creative filmmaker
            and visual effects artist from Galle, Sri Lanka. From a young age, I was
            fascinated by movies, cameras, and the magic of visual storytelling. What
            began as a childhood passion gradually evolved into a journey of learning
            cinematography, directing, video editing, and VFX production.
          </p>
          <p className="about-bio">
            I completed my school education at Siridhamma College, Galle, and am
            currently pursuing higher education at AMDT School of Creativity.
            Throughout my academic and creative journey, I have continuously explored
            new techniques in filmmaking and digital media to enhance my skills.
          </p>
          <p className="about-bio">
            Under the creative identity &quot;Bhathi&apos;s World&quot;, I produce cinematic
            content that combines storytelling with visual effects and creative
            editing. My goal is to transform simple ideas into immersive visual
            experiences that inspire, entertain, and spark imagination. Every project
            I create is an opportunity to learn something new while sharing my passion
            for filmmaking with audiences around the world.
          </p>
        </div>
        <div className="about-top-right">
          <img
            src="/images/about/aboutme-bg.png"
            alt="Bhathiya Maneth Ranaweera"
            className="about-portrait"
          />
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="quote-banner">
        <p className="quote-text">
          &ldquo;Creativity begins where imagination refuses to accept limits.&rdquo;
        </p>
      </section>

      {/* CV SECTION */}
      <section className="cv-section">
        <h2 className="cv-heading">Curriculum Vitae</h2>
        <div className="cv-buttons">
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
            View CV
          </a>
          <a href="/CV.pdf" download className="cv-button">
            Download CV
          </a>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="about-gallery">
        <div className="gallery-grid">
          <div className="gallery-item gi-1">
            <img src="/images/about/gallery1.jpg" alt="Gallery 1" />
          </div>
          <div className="gallery-item gi-2">
            <img src="/images/about/gallery2.jpg" alt="Gallery 2" />
          </div>
          <div className="gallery-item gi-3">
            <img src="/images/about/gallery3.jpg" alt="Gallery 3" />
          </div>
          <div className="gallery-item gi-4">
            <img src="/images/about/gallery4.jpg" alt="Gallery 4" />
          </div>
          <div className="gallery-item gi-5">
            <img src="/images/about/gallery5.jpg" alt="Gallery 5" />
          </div>
          <div className="gallery-item gi-6">
            <img src="/images/about/gallery6.jpg" alt="Gallery 6" />
          </div>
          <div className="gallery-item gi-7">
            <img src="/images/about/gallery7.jpg" alt="Gallery 7" />
          </div>
        </div>
      </section>

      {/* BOTTOM TEXT */}
      <section className="about-bottom-text">
        <p className="about-bio">
          I completed my school education at Siridhamma College, Galle, and am
          currently pursuing higher education at AMDT School of Creativity.
          Throughout my academic and creative journey, I have continuously explored
          new techniques in filmmaking and digital media to enhance my skills.
        </p>
        <p className="about-bio">
          Under the creative identity &quot;Bhathi&apos;s World&quot;, I produce cinematic
          content that combines storytelling with visual effects and creative
          editing. My goal is to transform simple ideas into immersive visual
          experiences that inspire, entertain, and spark imagination. Every project
          I create is an opportunity to learn something new while sharing my passion
          for filmmaking with audiences around the world.
        </p>
      </section>
    </div>
  );
}

export default About;
