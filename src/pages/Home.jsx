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

      {/* Action Buttons */}
      <section className="home-actions">
        <Link to="/showreel" className="home-action-btn">
          Watch Showreel
        </Link>
        <Link to="/portfolio" className="home-action-btn">
          Watch Portfolio
        </Link>
      </section>
    </main>
  );
}

export default Home;
