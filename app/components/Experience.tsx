
"use client";

import Reveal from "./Reveal";

const experiences = [
  {
    number: "01",
    role: "Frontend Development Intern",
    company: "Digiflute — AcuSpecs / PackSpec",
    type: "INTERNSHIP",
    summary:
      "Contributing to frontend development for a packaging specification and workflow platform.",
    responsibilities: [
      "Building and refining React-based user interfaces.",
      "Working with reusable components, props, and state.",
      "Understanding product, component, and specification workflows.",
      "Collaborating with the team on frontend implementation.",
    ],
    stack: ["React", "TypeScript", "UI Components"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">04</span>
          <div>
            <p className="section-label">EXPERIENCE</p>
            <h2>
              Learning by
              <span> building.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <p className="experience-intro">
            Practical experience, collaborative development, and lessons
            learned while building real software interfaces.
          </p>
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal key={experience.number} delay={index * 90}>
              <article className="experience-card">
                <div className="experience-card-top">
                  <span className="experience-number">
                    {experience.number}
                  </span>
                  <span className="experience-type">
                    {experience.type}
                  </span>
                </div>

                <div className="experience-main">
                  <div className="experience-heading">
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>

                  <p className="experience-summary">
                    {experience.summary}
                  </p>

                  <p className="experience-subheading">
                    AREAS OF CONTRIBUTION
                  </p>

                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">↗</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="experience-stack">
                    {experience.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}