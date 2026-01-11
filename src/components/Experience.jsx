import { experienceData } from '../data/portfolioData'

export default function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <h2 className="section-title animate-fade-up">
                    <span className="title-number">03.</span>
                    Work Experience
                </h2>
                <div className="timeline">
                    {experienceData.map((job, index) => (
                        <div className={`timeline-item animate-slide-right delay-${Math.min(index + 1, 5)}`} key={index}>
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div className="company-info">
                                        <h3 className="company-name">
                                            {job.company}
                                            {job.companyNote && <span className="company-note"> {job.companyNote}</span>}
                                        </h3>
                                        <p className="job-title">{job.title}</p>
                                    </div>
                                    <div className="timeline-date">
                                        <span className={`date-badge ${job.current ? 'current' : ''}`}>{job.period}</span>
                                        {job.duration && <span className="duration">{job.duration}</span>}
                                    </div>
                                </div>
                                <div className="timeline-body">
                                    <p className="job-description">{job.description}</p>



                                    {job.roles && (
                                        <div className="role-progression">
                                            {job.roles.map((role, roleIndex) => (
                                                <div className="role" key={roleIndex}>
                                                    <span className="role-badge">{role.title}</span>
                                                    <span className="role-date">{role.period}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <ul className="job-highlights">
                                        {job.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} dangerouslySetInnerHTML={{ __html: highlight }} />
                                        ))}
                                    </ul>

                                    <div className="tech-stack">
                                        {job.techStack.map((tech, techIndex) => (
                                            <span key={techIndex}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
