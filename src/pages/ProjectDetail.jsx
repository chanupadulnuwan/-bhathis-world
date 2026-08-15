import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsBySlug } from '../data/projectsData';
import './ProjectDetail.css';

function formatSlugAsTitle(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function ProjectDetail() {
  const { slug } = useParams();
  const [showFullTechnical, setShowFullTechnical] = useState(false);

  const project = projectsBySlug[slug];

  /* Coming Soon fallback for slugs without data */
  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail__container project-detail__coming-soon">
          <Link to="/" className="project-detail__back-link">
            &larr; Back to Projects
          </Link>
          <h1 className="project-detail__coming-soon-title">
            {formatSlugAsTitle(slug)}
          </h1>
          <p className="project-detail__coming-soon-text">Coming Soon</p>
        </div>
      </div>
    );
  }

  const PREVIEW_LENGTH = 200;
  const technicalPreview = project.technical.slice(0, PREVIEW_LENGTH);
  const hasTechnicalOverflow = project.technical.length > PREVIEW_LENGTH;

  return (
    <div className="project-detail">
      <div className="project-detail__container">
        <Link to="/" className="project-detail__back-link">
          &larr; Back to Projects
        </Link>

        {/* Top section: info + video */}
        <div className="project-detail__top">
          <div className="project-detail__info">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__description">{project.description}</p>
          </div>

          <div className="project-detail__video">
            <div className="project-detail__video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Technical section */}
        <section className="project-detail__technical">
          <h2 className="project-detail__technical-heading">
            Behind the Wall (Technical Side)
          </h2>
          <p className="project-detail__technical-text">
            {showFullTechnical || !hasTechnicalOverflow
              ? project.technical
              : technicalPreview}
            {hasTechnicalOverflow && !showFullTechnical && (
              <span
                className="project-detail__see-more"
                onClick={() => setShowFullTechnical(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setShowFullTechnical(true);
                  }
                }}
              >
                ...See More
              </span>
            )}
            {hasTechnicalOverflow && showFullTechnical && (
              <span
                className="project-detail__see-more"
                onClick={() => setShowFullTechnical(false)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setShowFullTechnical(false);
                  }
                }}
              >
                {' '}
                See Less
              </span>
            )}
          </p>
        </section>

        {/* Photo gallery */}
        <section className="project-detail__gallery">
          <div className="project-detail__gallery-grid">
            {project.gallery.map((src, index) => (
              <div key={index} className="project-detail__gallery-item">
                <img
                  src={src}
                  alt={`${project.title} gallery ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetail;
