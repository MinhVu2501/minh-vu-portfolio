import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <a key={p.title} className="project-card" href={p.live} target="_blank" rel="noreferrer">
          <div className="project-icon" aria-hidden>{p.icon}</div>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-desc">{p.description}</p>
          <div className="project-tech">
            {p.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}


