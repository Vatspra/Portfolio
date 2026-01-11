import { useState, useEffect } from 'react'
import { scrollToSection } from '../utils/scrollUtils'

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
]

export default function Navbar({ activeSection }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const updateIndicator = () => {
            if (window.innerWidth <= 768) return

            const activeLink = document.querySelector(`.nav-link.active`)
            const menuWrapper = document.querySelector(`.nav-menu-wrapper`)

            if (activeLink && menuWrapper) {
                const linkRect = activeLink.getBoundingClientRect()
                const wrapperRect = menuWrapper.getBoundingClientRect()

                const left = linkRect.left - wrapperRect.left
                const width = linkRect.width

                document.documentElement.style.setProperty('--indicator-left', `${left}px`)
                document.documentElement.style.setProperty('--indicator-width', `${width}px`)

                // Update color based on section
                const sectionColors = {
                    home: 'var(--accent-primary)',
                    about: 'var(--color-indigo)',
                    skills: 'var(--color-emerald)',
                    experience: 'var(--color-amber)',
                    projects: 'var(--color-rose)',
                    education: 'var(--color-purple)',
                    contact: 'var(--color-cyan)'
                }
                document.documentElement.style.setProperty('--indicator-color', sectionColors[activeSection] || 'var(--accent-primary)')
            }
        }

        updateIndicator()
        window.addEventListener('resize', updateIndicator)
        return () => window.removeEventListener('resize', updateIndicator)
    }, [activeSection])

    const scrollTo = (id) => {
        scrollToSection(id)
        setIsMenuOpen(false)
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
                    <span className="logo-bracket">&lt;</span>PJ<span className="logo-bracket">/&gt;</span>
                </a>
                <div className="nav-menu-wrapper">
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <button
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={() => scrollTo(link.id)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-indicator" style={{
                        width: isMenuOpen ? '0' : 'var(--indicator-width, 0)',
                        left: isMenuOpen ? '0' : 'var(--indicator-left, 0)',
                        opacity: isMenuOpen ? '0' : '1'
                    }}></div>
                </div>
                <button
                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="hamburger"></span>
                </button>
            </div>
        </nav>
    )
}
