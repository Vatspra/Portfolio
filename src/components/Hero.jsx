import { useState, useEffect } from 'react'
import { socialLinks } from '../data/portfolioData'
import { scrollToSection } from '../utils/scrollUtils'

const roles = ['Frontend Developer', 'Full Stack Engineer', 'AI Enthusiast']

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)
        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])

    const handleScroll = (e, id) => {
        e.preventDefault()
        scrollToSection(id)
    }

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting animate-fade-up">Hello, I'm</p>
                    <h1 className="hero-name animate-fade-up delay-1">Prashant Jha</h1>
                    <div className="hero-title-wrapper animate-fade-up delay-2">
                        <span className="hero-title-static">Senior </span>
                        <div className="typewriter-container">
                            <span className="typewriter">{displayText}</span>
                            <span className="cursor">|</span>
                        </div>
                    </div>
                    <p className="hero-description animate-fade-up delay-3">
                        Engineering <span className="highlight">products</span>, not just features. With <span className="highlight">6+ years</span> of expertise,
                        I blend technical excellence with product thinking to build
                        solutions that drive real business impact.
                    </p>
                    <div className="hero-cta animate-fade-up delay-4">
                        <a
                            href="#projects"
                            className="btn btn-primary"
                            onClick={(e) => handleScroll(e, 'projects')}
                        >
                            <span>View My Work</span>
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary"
                            onClick={(e) => handleScroll(e, 'contact')}
                        >
                            <span>Get In Touch</span>
                        </a>
                    </div>
                    <div className="hero-social animate-fade-up delay-5">
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="hero-visual animate-fade-left delay-2">
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="window-title">developer.js</span>
                        </div>
                        <div className="window-content">
                            <pre><code>
                                <span className="code-keyword">const</span> engineer = {'{'}{'\n'}
                                {'    '}name: <span className="code-string">"Prashant Jha"</span>,{'\n'}
                                {'    '}role: <span className="code-string">"Product-Minded Engineer"</span>,{'\n'}
                                {'    '}experience: <span className="code-string">"6+ years"</span>,{'\n'}
                                {'    '}frontend: [<span className="code-string">"Vue"</span>, <span className="code-string">"Angular"</span>, <span className="code-string">"React"</span>, <span className="code-string">"TypeScript"</span>],{'\n'}
                                {'    '}backend: [<span className="code-string">"Node.js"</span>, <span className="code-string">"PostgreSQL"</span>],{'\n'}
                                {'    '}productThinking: <span className="code-boolean">true</span>,{'\n'}
                                {'    '}aiTooling: <span className="code-boolean">true</span>,{'\n'}
                                {'    '}impactDriven: <span className="code-boolean">true</span>{'\n'}
                                {'}'};
                            </code></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse"><div className="wheel"></div></div>
                <span>Scroll</span>
            </div>
        </section>
    )
}
