import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const pdfUrl = '/PORTFOLIO-BHATHIYA-MANETH-RANAWEERA.pdf';

  return (
    <main className="portfolio-page">
      <h2 className="portfolio-page-title">PORTFOLIO</h2>
      <div className="portfolio-actions">
        <a href={pdfUrl} download className="portfolio-btn">
          Download Portfolio
        </a>
      </div>
      <div className="portfolio-pdf-wrapper">
        <iframe
          className="portfolio-pdf-iframe"
          src={pdfUrl}
          title="Portfolio - Bhathiya Maneth Ranaweera"
        />
      </div>
    </main>
  );
}

export default Portfolio;
