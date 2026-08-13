import React from 'react';
import './Showreel.css';

function Showreel() {
  return (
    <main className="showreel-page">
      <h2 className="showreel-page-title">SHOWREEL</h2>
      <div className="showreel-page-video-wrapper">
        <iframe
          className="showreel-page-iframe"
          src="https://www.youtube.com/embed/Ya_euL2Y7Vo"
          title="Showreel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}

export default Showreel;
