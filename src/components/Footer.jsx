export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <p>Designed & Built by <strong>Prashant Jha</strong> &copy; {currentYear}</p>
            </div>
        </footer>
    )
}
