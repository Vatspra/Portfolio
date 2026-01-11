import { projectsData } from '../data/portfolioData'

const icons = {
    chat: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="10" r="1" />
            <circle cx="8" cy="10" r="1" />
            <circle cx="16" cy="10" r="1" />
        </svg>
    ),
    blockchain: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    upload: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
    ),
    layout: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
    )
}

export default function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title animate-fade-up">
                    <span className="title-number">04.</span>
                    Featured Projects
                </h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className={`project-card ${project.featured ? 'featured' : ''} animate-scale-in delay-${Math.min(index + 1, 5)}`} key={index}>
                            {project.featured ? (
                                <>
                                    <div className="project-image">
                                        {project.image ? (
                                            <img src={project.image} alt={project.title} className="project-logo" />
                                        ) : (
                                            <div className="project-icon-large">
                                                {icons[project.icon]}
                                            </div>
                                        )}
                                    </div>
                                    <div className="project-content">
                                        <span className="project-label">{project.label}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />
                                        <div className="project-tech">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span key={techIndex}>{tech}</span>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                                View Project
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="project-content">
                                    <span className="project-label">{project.label}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />
                                    <div className="project-tech">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span key={techIndex}>{tech}</span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">
                                            Visit Project
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
