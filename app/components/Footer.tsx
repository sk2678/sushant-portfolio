export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              SK<span>.</span>
            </a>

            <p>
              Full-Stack Developer &amp; AI Enthusiast building
              practical digital products.
            </p>

            <a
              href="mailto:sk0261901@gmail.com"
              className="footer-email"
            >
              sk0261901@gmail.com
              <span>↗</span>
            </a>
          </div>

          <div className="footer-navigation">
            <div className="footer-column">
              <span className="footer-heading">
                NAVIGATION
              </span>

              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#resume">Resume</a>
            </div>

            <div className="footer-column">
              <span className="footer-heading">
                CONNECT
              </span>

              <a
                href="https://github.com/sk2678"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="https://linkedin.com/in/sushant-kapil-195b5428b"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a href="mailto:sk0261901@gmail.com">
                Email
                <span>↗</span>
              </a>

              <a href="#contact">
                Contact
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Sushant Kapil</p>

          <div className="footer-status">
            <span className="status-dot"></span>
            <span>Available for opportunities</span>
          </div>

          <a href="#top" className="back-to-top">
            Back to top
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}