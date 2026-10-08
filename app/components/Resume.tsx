import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section
      id="resume"
      className="content-section resume-section"
    >
      <div className="section-container">
        <Reveal>
          <div className="resume-card">
            <div className="resume-main">
              <p className="section-label">
                RESUME
              </p>

              <h2>
                A closer look at
                <span> my work.</span>
              </h2>

              <p className="resume-description">
                Explore my technical background, projects,
                experience, education, and skills through my
                latest resume.
              </p>

              <div className="resume-meta">
                <span>FULL-STACK DEVELOPMENT</span>
                <span>AI / SOFTWARE ENGINEERING</span>
              </div>
            </div>

            <div className="resume-action">
              <a
                href="/Sushant-Kapil-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                <span>View Resume</span>
                <span>↗</span>
              </a>

              <a
                href="/Sushant-Kapil-Resume.pdf"
                download
                className="resume-download"
              >
                Download PDF
                <span>↓</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}