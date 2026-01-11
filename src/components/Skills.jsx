import { skillsData } from '../data/portfolioData'

// Category icons
const categoryIcons = {
    frontend: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
        </svg>
    ),
    backend: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    product: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    ),
    ai: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M4.93 4.93l2.83 2.83" />
            <path d="M16.24 16.24l2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
        </svg>
    ),
    blockchain: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    devops: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
}

// Skill-specific icons
const skillIcons = {
    'React': <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5" /><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" /><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" /></svg>,
    'Next.js': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5L12 12V7h1v4.5l4 4.5-.5.5z" /></svg>,
    'Vue.js': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 3h3.5L12 14l6.5-11H22L12 21 2 3z" /></svg>,
    'TypeScript': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111v2.111c-.473-.093-.972-.14-1.493-.14-.339 0-.61.058-.813.174-.204.117-.305.303-.305.56 0 .193.075.343.226.45s.471.256.96.447c.545.213 1.01.396 1.402.55.385.153.722.378 1.018.674.296.296.444.683.444 1.162 0 .624-.223 1.109-.668 1.455-.449.346-1.128.52-2.039.52-.645 0-1.347-.074-2.106-.221v-2.144c.411.267.955.4 1.637.4.43 0 .741-.078.933-.235s.288-.381.288-.673c0-.184-.049-.335-.145-.453s-.24-.225-.43-.322c-.191-.097-.565-.258-1.122-.484-.461-.188-.865-.367-1.21-.535-.35-.171-.645-.405-.887-.703-.242-.298-.363-.673-.363-1.125 0-.585.226-1.048.674-1.386.448-.339 1.082-.508 1.904-.508zM6.11 9.75h7.332V11.8h-2.435v9.849H8.547V11.8H6.11V9.75z" /></svg>,
    'Tailwind CSS': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z" /></svg>,
    'State Management': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="4" r="2" /><circle cx="20" cy="12" r="2" /><circle cx="12" cy="20" r="2" /><circle cx="4" cy="12" r="2" /><path d="M12 6v3m3-1.5l1.5-1.5m-9 0L9 7.5M6 12h3m6 0h3m-7.5 4.5L9 18m6-1.5l1.5 1.5" /></svg>,
    'Node.js': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6 3.3v6.4l-6 3.3-6-3.3V7.8l6-3.3z" /></svg>,
    'MongoDB': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s-2.5-3.5-2.5-8.5c0-4.5 2.5-8.5 2.5-8.5s2.5 4 2.5 8.5c0 5-2.5 8.5-2.5 8.5zM12 0c-3.5 0-6.5 3-6.5 6.5 0 2 1 4 2.5 5.5l1.5 1.5V24h5v-10.5l1.5-1.5c1.5-1.5 2.5-3.5 2.5-5.5C18.5 3 15.5 0 12 0z" /></svg>,
    'PostgreSQL': <svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    'GraphQL': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 2.5l6.5 3.3L12 11.2 5.5 7.8 12 4.5zm0 17L22 17l-10-5-10 5 10 5zm0-2.5l-6.5-3.3 6.5-3.4 6.5 3.4-6.5 3.3z" /></svg>,
    'REST APIs': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16" /><path d="M8 8l-4 4 4 4" /><path d="M16 8l4 4-4 4" /></svg>,
    'GitHub': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
    'Jenkins': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    'TDD': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    'Jest': <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><text x="12" y="16" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">J</text></svg>,
    'Blockchain': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="6" height="6" rx="1" /><rect x="16" y="7" width="6" height="6" rx="1" /><rect x="9" y="14" width="6" height="6" rx="1" /><path d="M8 10h8M12 7v7" /></svg>,
    'Smart Contracts': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 15l2 2 4-4" /></svg>,
    'AI Agents': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="12" rx="2" /><circle cx="9" cy="14" r="2" /><circle cx="15" cy="14" r="2" /><path d="M9 4v4m6-4v4" /></svg>,
    'Git': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M6 8v5a3 3 0 0 0 3 3h1" /><path d="M18 16v-5a3 3 0 0 0-3-3h-1" /></svg>,
    'CI/CD': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>
}

// Default icon for skills without specific icons
const defaultIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /></svg>

export default function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title animate-fade-up">
                    <span className="title-number">02.</span>
                    Skills & Expertise
                </h2>
                <p className="section-subtitle animate-fade-up delay-1">
                    A unique blend of <strong>technical excellence</strong> and <strong>product thinking</strong> —
                    I don't just build features, I craft solutions that drive business impact.
                </p>
                <div className="skills-grid animate-fade-up delay-2">
                    {skillsData.map((category, index) => {
                        // Create a slug from category name for data attribute
                        const categorySlug = category.category.toLowerCase()
                            .replace(/\s+&\s+/g, '-')
                            .replace(/\s+/g, '-')

                        return (
                            <div
                                className="skill-category"
                                key={index}
                                data-category={categorySlug}
                                style={{ '--category-color': category.color }}
                            >
                                <div className="category-header">
                                    <div className="category-icon" style={{ background: `${category.color}20`, color: category.color }}>
                                        {categoryIcons[category.icon]}
                                    </div>
                                    <h3>{category.category}</h3>
                                </div>
                                <div className="skill-tags">
                                    {category.skills.map((skill, skillIndex) => {
                                        const skillName = typeof skill === 'string' ? skill : skill.name
                                        return (
                                            <span
                                                key={skillIndex}
                                                className="skill-tag"
                                                style={{ '--tag-color': category.color }}
                                            >
                                                <span className="skill-icon">
                                                    {skillIcons[skillName] || defaultIcon}
                                                </span>
                                                {skillName}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
