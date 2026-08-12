import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  { slug: 'story-behind-magic', title: 'THE STORY OF BEHIND THE MAGIC', thumbnail: '/images/projects/story-behind-magic.jpg' },
  { slug: 'behind-every-shot', title: 'BEHIND EVERY MAGICAL SHOT', thumbnail: '/images/projects/behind-every-shot.jpg' },
  { slug: 'pocket-fortress', title: 'THE POCKET FORTRESS', thumbnail: '/images/projects/pocket-fortress.jpg' },
  { slug: 'the-melody', title: 'THE MELODY', thumbnail: '/images/projects/the-melody.jpg' },
  { slug: 'transformation-sad-memories', title: 'TRANSFORMATION OF SAD MEMORIES', thumbnail: '/images/projects/transformation-sad-memories.jpg' },
  { slug: 'the-strange-tool', title: 'THE STRANGE TOOL', thumbnail: '/images/projects/the-strange-tool.jpg' },
];

function Home() {
  return (
    <main className="home-page">
      {/* Project Grid */}
      <section className="project-grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/project/${project.slug}`}
            className="project-card"
          >
            <div className="project-thumbnail-wrapper">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumbnail"
                loading="lazy"
              />
            </div>
            <h3 className="project-title">{project.title}</h3>
          </Link>
        ))}
      </section>

      {/* Showreel Section */}
      <section className="showreel-section">
        <h2 className="showreel-title">SHOWREEL</h2>
        <div className="showreel-video-wrapper">
          <iframe
            className="showreel-iframe"
            src="https://www.youtube.com/embed/Ya_euL2Y7Vo"
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
