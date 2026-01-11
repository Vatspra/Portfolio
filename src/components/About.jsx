export default function About() {
    const stats = [
        { number: '6+', label: 'Years Experience' },
        { number: '15+', label: 'Products Shipped' },
        { number: '2.5M+', label: 'Users Impacted' }
    ]

    const highlights = [
        { icon: '🎯', title: 'Product-First Mindset', desc: 'I think beyond code — understanding user needs, business goals, and market dynamics.' },
        { icon: '⚡', title: 'Technical Excellence', desc: 'Deep expertise in modern frontend & full-stack technologies with focus on performance.' },
        { icon: '🚀', title: 'Impact Driven', desc: 'Every line of code I write is focused on delivering measurable business outcomes.' }
    ]

    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title animate-fade-up">
                    <span className="title-number">01.</span>
                    About Me
                </h2>
                <div className="about-content animate-fade-up delay-1">
                    <div className="about-text">
                        <p className="about-tagline">
                            <strong>Engineer with a Product Soul</strong> — I don't just write code, I build products that users love.
                        </p>
                        <p>
                            With <strong>6+ years</strong> of experience, I've evolved from a frontend developer into a
                            <strong> product-minded engineer</strong> who bridges the gap between technical implementation
                            and business strategy. My journey spans fintech, trading platforms, edtech, and AI applications.
                        </p>
                        <p>
                            I believe great products come from engineers who understand <strong>why</strong> they're building,
                            not just <strong>what</strong>. I actively participate in product discussions, user research,
                            and data-driven decision making — ensuring every feature delivers real value.
                        </p>
                        <p>
                            My technical expertise spans <strong>React</strong>, <strong>Vue</strong>, <strong>Angular</strong>,
                            <strong> Node.js</strong>, and <strong>Blockchain</strong>. Recently, I've been deep in
                            <strong> AI-powered applications</strong>, leveraging tools like <strong>Cursor AI</strong>,
                            <strong> MCP</strong>, and <strong>AI Agents</strong> to 10x development productivity.
                        </p>
                        <p>
                            Currently pursuing my <strong>MTech in Big Data and Blockchain</strong> from <strong>IIT Patna</strong>,
                            I continuously bridge academic research with real-world product innovation.
                        </p>


                    </div>
                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div className={`stat-card animate-scale-in delay-${index + 1}`} key={index}>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
