
"use client";

import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Programming foundations",
    skills: ["JavaScript", "Python", "C++"],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Interfaces & user experience",
    skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    number: "03",
    title: "Backend",
    description: "Server-side development",
    skills: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    number: "04",
    title: "Databases",
    description: "Data storage & querying",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    number: "05",
    title: "AI & Integration",
    description: "AI-enabled workflows",
    skills: ["AI APIs", "AI Agents", "API Integration"],
  },
  {
    number: "06",
    title: "Tools & Engineering",
    description: "Development workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Debugging",
      "Responsive UI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="content-section skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <p className="section-label">TECHNICAL TOOLKIT</p>
            <h2>
              Skills I bring
              <span> to the table.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="skills-intro">
            <p>
              The technologies, tools, and engineering practices I use while
              building full-stack applications and exploring AI-powered
              features.
            </p>

            <span className="skills-intro-note">
              LEARN · BUILD · IMPROVE
            </span>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 65}>
              <article className="skill-group-card">
                <div className="skill-group-top">
                  <span className="skill-group-number">
                    {group.number}
                  </span>
                  <span className="skill-group-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3>{group.title}</h3>
                <p className="skill-group-description">
                  {group.description}
                </p>

                <div className="skill-chip-list">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="skills-bottom-note">
            <span className="skills-bottom-icon" aria-hidden="true">
              ✳
            </span>
            <p>
              <strong>My approach</strong>
              <span>
                Learn the fundamentals, build practical projects, and keep
                improving through hands-on development.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}