
import Reveal from "./Reveal";

export default function Resume() {
  const resumePath = "/Sushant-Kapil-Resume.pdf";

  return (
    <section
      id="resume"
      className="content-section resume-section"
      aria-labelledby="resume-heading"
    >
      <div className="section-container">
        <Reveal>
          <div className="resume-card">
            <div className="resume-main">
              <p className="section-label">RESUME</p>

              <h2 id="resume-heading">
                A closer look at
                <span> my work.</span>
              </h2>

              <p className="resume-description">
                Explore my technical skills, projects, education,
                and experience. I'm open to software engineering
                internships, full-stack development opportunities,
                and AI-focused roles.
              </p>

              <div className="resume-meta">
                <span>FULL-STACK DEVELOPMENT</span>
                <span>AI / SOFTWARE ENGINEERING</span>
              </div>
            </div>

            <div className="resume-action">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
                aria-label="View Sushant Kapil's resume in a new tab"
              >
                <span>View Resume</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={resumePath}
                download="Sushant-Kapil-Resume.pdf"
                className="resume-download"
                aria-label="Download Sushant Kapil's resume as a PDF"
              >
                Download PDF
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}