import Reveal from "./Reveal";

const experience = {
  company: "Digiflute",
  role: "Frontend Developer Intern",
  type: "INTERNSHIP · FRONTEND",
  focus: "React & UI Development",
  description:
    "Worked as part of the frontend team, contributing to reusable interfaces, application workflows, and product-facing UI development.",
  contributions: [
    "Built and worked with reusable React components",
    "Worked with props, state, and React hooks",
    "Contributed to frontend application workflows",
    "Integrated frontend interfaces with APIs",
    "Worked on responsive and structured user interfaces",
  ],
  technologies: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "REST APIs",
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="content-section experience-section"
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">04</span>

          <div>
            <p className="section-label">EXPERIENCE</p>

            <h2>
              Where I&apos;ve
              <span> worked.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <span className="experience-type">
                  {experience.type}
                </span>

                <h3>{experience.company}</h3>

                <p className="experience-role">
                  {experience.role}
                </p>
              </div>

              <div className="experience-header-side">
                <span className="experience-index">
                  01
                </span>

                <span className="experience-status">
                  <span></span>
                  Internship
                </span>
              </div>
            </div>

            <div className="experience-intro">
              <p>{experience.description}</p>
            </div>

            <div className="experience-body">
              <div className="experience-contributions">
                <span className="experience-section-label">
                  CONTRIBUTIONS
                </span>

                <ul>
                  {experience.contributions.map(
                    (contribution) => (
                      <li key={contribution}>
                        <span>↗</span>
                        <p>{contribution}</p>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="experience-details">
                <div className="experience-detail">
                  <span>ROLE</span>
                  <strong>{experience.role}</strong>
                </div>

                <div className="experience-detail">
                  <span>FOCUS</span>
                  <strong>{experience.focus}</strong>
                </div>

                <div className="experience-detail">
                  <span>WORK</span>
                  <strong>
                    React Components &amp; API Integration
                  </strong>
                </div>
              </div>
            </div>

            <div className="experience-tech">
              {experience.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ),
              )}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}