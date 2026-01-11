export const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
        const navbarHeight = 80
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 1600
        let start = null

        const animation = (currentTime) => {
            if (!start) start = currentTime
            const progress = currentTime - start
            const easedProgress = easeInOutQuart(progress / duration)
            window.scrollTo(0, startPosition + distance * easedProgress)
            if (progress < duration) requestAnimationFrame(animation)
        }

        const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2

        requestAnimationFrame(animation)
    }
}
