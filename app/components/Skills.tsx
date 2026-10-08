import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Core programming languages",
    skills: ["JavaScript", "Python", "C++", "TypeScript"],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Interfaces & web applications",
    skills: ["React.js", "Next.js", "HTML5", "CSS3"],
  },
  {
    number: "03",
    title: "Backend",
    description: "APIs & server-side development",
    skills: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    number: "04",
    title: "Databases",
    description: "Data storage & management",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    number: "05",
    title: "Tools",
    description: "Development workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    number: "06",
    title: "Engineering",
    description: "Building & connecting systems",
    skills: [
      "API Design",
      "Full-Stack Architecture",
      "Debugging",
      "API Integration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="content-section skills-section"
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-label">
              TECHNICAL SKILLS
            </p>

            <h2>
              Tools I use to
              <span> build.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="skills-intro">
            <p>
              A practical stack spanning frontend development,
              backend APIs, databases, development tools, and
              software engineering fundamentals.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article
                className="skill-group"
                key={group.number}
              >
                <div className="skill-group-top">
                  <span className="skill-group-number">
                    {group.number}
                  </span>

                  <div>
                    <h3>{group.title}</h3>

                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}