import { educationData } from '../data/portfolioData'

export default function Education() {
    return (
        <section className="section education" id="education">
            <div className="container">
                <h2 className="section-title animate-fade-up">
                    <span className="title-number">05.</span>
                    Education
                </h2>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div className={`education-card animate-fade-up delay-${index + 1}`} key={index}>
                            <div className="education-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div className="education-content">
                                <span className={`education-badge ${edu.status}`}>{edu.status === 'pursuing' ? 'Pursuing' : 'Completed'}</span>
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-field">{edu.field}</p>
                                <p className="education-institution">{edu.institution}</p>
                                <p className="education-duration">{edu.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
