"use client";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AskSushant from "./components/AskSushant";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
  <main id="top" className="site-shell">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="logo">
            SK<span>.</span>
          </Link>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-grid"></div>

          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="hero-code-card">
            <div className="code-card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-card-content">
              <p>
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                <span className="code-property">stack:</span>{" "}
                <span className="code-value">&quot;Full-Stack&quot;</span>,
              </p>

              <p className="code-indent">
                <span className="code-property">focus:</span>{" "}
                <span className="code-value">&quot;AI + Web&quot;</span>,
              </p>

              <p className="code-indent">
                <span className="code-property">build:</span>{" "}
                <span className="code-value">&quot;Useful Products&quot;</span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            {/* Availability */}
            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <p className="hero-label">Hello, I&apos;m</p>

            <h1>
              Sushant
              <span> Kapil.</span>
            </h1>

            <h2>Full-Stack Developer &amp; AI Enthusiast</h2>

            <p className="hero-description">
  I build full-stack web applications, backend systems, and
  AI-powered products with a focus on practical engineering,
  clean interfaces, and useful user experiences.
</p>

            {/* Main Actions */}
            <div className="hero-actions">
  <a href="#work" className="primary-button">
    View My Work
    <span>↗</span>
  </a>

  <a
    href="mailto:sk0261901@gmail.com"
    className="secondary-button"
  >
    Let&apos;s Talk
  </a>
</div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/sk2678"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/sushant-kapil-195b5428b"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:sk0261901@gmail.com">
  Email
</a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="profile-orbit orbit-one"></div>
            <div className="profile-orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-image-wrapper">
                <Image
                  src="/profile.jpg"
                  alt="Sushant Kapil"
                  width={500}
                    height={500}
                  className="profile-image"
                />
              </div>

              <div className="profile-info">
                <p>Sushant Kapil</p>
                <span>Full-Stack Developer</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">&lt;/&gt;</span>

              <div>
                <strong>Build</strong>
                <small>Web + AI</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">✦</span>

              <div>
                <strong>AI Enthusiast</strong>
                <small>Always learning</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <About />
      <Skills />
      <Projects />
      <AskSushant />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
