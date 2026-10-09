
"use client";

import Reveal from "./Reveal";

const strengths = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with reusable React components.",
    tags: ["React.js", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Creating APIs and connecting frontend applications to backend services.",
    tags: ["Python", "FastAPI", "Node.js"],
  },
  {
    number: "03",
    title: "Data & Databases",
    description:
      "Working with application data, database models, and API-driven workflows.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    number: "04",
    title: "AI-Powered Applications",
    description:
      "Exploring practical AI integrations and conversational application workflows.",
    tags: ["AI APIs", "AI Agents", "Automation"],
  },
];

export default function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <p className="section-label">A LITTLE ABOUT ME</p>
            <h2>
              Building things
              <span> that are useful.</span>
            </h2>
          </div>
        </div>

        <div className="about-intro-grid">
          <Reveal>
            <div className="about-main-copy">
              <span className="about-eyebrow">
                FULL-STACK DEVELOPER & AI ENTHUSIAST
              </span>

              <h3>
                I enjoy turning ideas into
                <span> working products.</span>
              </h3>

              <p>
                I&apos;m Sushant Kapil, an engineering student interested in
                full-stack development and practical AI applications. I enjoy
                building projects that bring together clean interfaces,
                reliable backend services, databases, and useful features.
              </p>

              <p>
                My focus is on learning by building: understanding how
                individual components work, connecting them through APIs, and
                improving the overall user experience.
              </p>

              <div className="about-focus-list">
                <span>
                  <i aria-hidden="true" />
                  Full-stack applications
                </span>
                <span>
                  <i aria-hidden="true" />
                  Backend & API integration
                </span>
                <span>
                  <i aria-hidden="true" />
                  AI-enabled product ideas
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="about-profile-panel">
              <div className="about-panel-top">
                <span className="about-panel-indicator" />
                <span>PROFILE SNAPSHOT</span>
              </div>

              <div className="about-profile-mark" aria-hidden="true">
                SK<span>.</span>
              </div>

              <h3>Sushant Kapil</h3>
              <p className="about-profile-role">
                Full-Stack Developer & AI Enthusiast
              </p>

              <div className="about-panel-divider" />

              <div className="about-profile-detail">
                <span>Currently focused on</span>
                <strong>Building & improving projects</strong>
              </div>

              <div className="about-profile-detail">
                <span>Core direction</span>
                <strong>Full-stack + AI</strong>
              </div>

              <a href="#work" className="about-project-link">
                Explore my projects <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </Reveal>
        </div>

        <div className="about-capabilities-heading">
          <div>
            <p className="section-label">WHAT I WORK WITH</p>
            <h3>My areas of focus</h3>
          </div>
          <span>FOUR CORE AREAS</span>
        </div>

        <div className="about-strengths-grid">
          {strengths.map((strength, index) => (
            <Reveal key={strength.number} delay={index * 70}>
              <article className="about-strength-card">
                <div className="about-strength-top">
                  <span>{strength.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <h4>{strength.title}</h4>
                <p>{strength.description}</p>

                <div className="about-strength-tags">
                  {strength.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="about-education">
            <div className="about-education-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                <path d="M6 11v5c3.5 3 8.5 3 12 0v-5" />
                <path d="M22 9v6" />
              </svg>
            </div>

            <div className="about-education-copy">
              <p className="section-label">EDUCATION</p>
              <h3>B.Tech — ECE-CS</h3>
              <p>Jaypee Institute of Information Technology (JIIT)</p>
            </div>

            <span className="about-education-status">
              Engineering
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}