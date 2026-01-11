import { socialLinks } from '../data/portfolioData'

export default function Contact() {
    const contactLinks = [
        {
            id: 'email',
            label: 'Email',
            value: 'Send me an email',
            link: `mailto:${socialLinks.email}`,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15V6a2 2 0 00-2-2H5a2 2 0 00-2 2v9m18 0a2 2 0 01-2 2H5a2 2 0 01-2-2m18 0l-8.5-7L3 15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            color: 'var(--color-indigo)'
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'Connect with me',
            link: socialLinks.linkedin,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            color: 'var(--accent-primary)'
        },
        {
            id: 'github',
            label: 'GitHub',
            value: 'View my code',
            link: socialLinks.github,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            color: 'var(--text-primary)'
        }
    ]

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title animate-fade-up">
                    <span className="title-number">06.</span>
                    Get In Touch
                </h2>

                <div className="contact-grid-v3">
                    {contactLinks.map((item, index) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target={item.id !== 'email' ? "_blank" : undefined}
                            rel={item.id !== 'email' ? "noopener noreferrer" : undefined}
                            className={`contact-item-v3 animate-fade-up delay-${index + 1}`}
                            style={{ '--accent-color': item.color }}
                        >
                            <div className="item-icon-wrapper">
                                {item.icon}
                            </div>
                            <div className="item-info">
                                <span className="item-label">{item.label}</span>
                                <span className="item-value">{item.value}</span>
                            </div>
                            <div className="item-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
