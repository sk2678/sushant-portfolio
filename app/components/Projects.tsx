"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

type Project = {
  number: string;
  title: string;
  category: string;
  visual: "dashboard" | "security" | "code" | "voice";
  featured: boolean;
  status: "LIVE" | "IN DEVELOPMENT";
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Heallio AI Health Dashboard",
    category: "AI / FULL-STACK",
    visual: "dashboard",
    featured: true,
    status: "LIVE",
    description:
      "A full-stack health dashboard combining a React frontend, FastAPI backend, REST APIs, and MongoDB.",
    overview:
      "Heallio is a full-stack health dashboard designed to bring health-related information into a structured and practical interface.",
    problem:
      "Health information can become difficult to organize when data and useful insights are spread across different places.",
    solution:
      "I built a full-stack application with a React frontend, FastAPI backend, REST APIs, and MongoDB to create a centralized dashboard experience.",
    features: [
      "Interactive health dashboard",
      "REST API integration",
      "FastAPI backend",
      "MongoDB data layer",
      "Responsive frontend",
    ],
    technologies: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "REST APIs",
    ],
    github:
      "https://github.com/sk2678/Heallio-AI-Health-Dashboard",
    live:
      "https://sushant-heallio-3.onrender.com/docs",
  },

  {
    number: "02",
    title: "PixCrypt Image Security",
    category: "FULL-STACK / SECURITY",
    visual: "security",
    featured: false,
    status: "LIVE",
    description:
      "A full-stack image security application focused on protecting and processing image data.",
    overview:
      "PixCrypt is a web application built around image security and processing.",
    problem:
      "Users need simple ways to process and protect image data without dealing with complicated workflows.",
    solution:
      "I developed a full-stack application that provides an accessible interface for image security operations.",
    features: [
      "Image security workflow",
      "Web-based interface",
      "Backend processing",
      "Responsive UI",
      "Live deployment",
    ],
    technologies: [
      "React.js",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
    github:
      "https://github.com/sk2678/PixCrypt-Image-Security",
    live:
      "https://sushant-pixcrypt.onrender.com",
  },

  {
    number: "03",
    title: "DevForge-AI",
    category: "AI / FULL-STACK",
    visual: "code",
    featured: false,
    status: "IN DEVELOPMENT",
    description:
      "An AI-powered development platform concept focused on turning software requirements into structured project output.",
    overview:
      "DevForge-AI is an ambitious full-stack AI project focused on automating parts of the software development workflow.",
    problem:
      "Starting a software project often requires repetitive planning, structure creation, and setup work before development can begin.",
    solution:
      "The project explores how AI can help transform requirements into structured development artifacts and project output.",
    features: [
      "AI-powered workflow",
      "Project generation",
      "Structured software output",
      "Database integration",
      "Modern SaaS interface",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "AI",
    ],
    github: "#",
    live: "#",
  },

  {
    number: "04",
    title: "Voice AI Insurance Claim Agent",
    category: "AI / MULTI-AGENT",
    visual: "voice",
    featured: false,
    status: "IN DEVELOPMENT",
    description:
      "A voice-enabled multi-agent system designed to simplify insurance claim initiation through conversational input.",
    overview:
      "The project explores a voice AI workflow where users can describe an insurance incident naturally and the system converts the information into structured claim data.",
    problem:
      "Traditional insurance claim initiation can involve repetitive forms and manually entering information across different fields.",
    solution:
      "The system uses conversational input to extract relevant incident information, identify missing fields, and guide the user toward a structured claim.",
    features: [
      "Voice/text incident input",
      "Information extraction",
      "Missing-field detection",
      "Claim form mapping",
      "Multi-agent workflow",
    ],
    technologies: [
      "AI Agents",
      "Gemini",
      "Python",
      "APIs",
    ],
    github: "#",
    live: "#",
  },
];

function ProjectVisual({
  type,
}: {
  type: Project["visual"];
}) {
  if (type === "dashboard") {
    return (
      <div className="project-visual visual-dashboard">
        <div className="dashboard-sidebar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-top">
            <div></div>
            <div></div>
          </div>

          <div className="dashboard-cards">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="dashboard-chart">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "security") {
    return (
      <div className="project-visual visual-security">
        <div className="security-lock">
          <span>+</span>
        </div>

        <div className="security-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="security-label">
          IMAGE SECURED
        </div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="project-visual visual-code">
        <div className="code-window-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="code-window-body">
          <p>
            <i>const</i> project = <b>generate</b>();
          </p>

          <p className="code-line-small">
            requirements → architecture
          </p>

          <p className="code-line-small">
            architecture → implementation
          </p>

          <div className="code-progress">
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-voice">
      <div className="voice-center">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="voice-wave">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <div className="voice-label">
        LISTENING...
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="work"
      className="content-section projects-section"
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Things I&apos;ve
              <span> built.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="projects-intro">
            <p>
              A selection of projects where I&apos;ve worked
              across frontend, backend, databases, APIs, and
              AI-powered application workflows.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isLive = project.status === "LIVE";

            return (
              <Reveal
                key={project.number}
                delay={index * 80}
              >
                <article
                  className={`project-card ${
                    project.featured
                      ? "project-featured"
                      : ""
                  }`}
                >
                  <div className="project-card-top">
                    <div className="project-card-meta">
                      <span className="project-number">
                        {project.number}
                      </span>

                      <span className="project-category">
                        {project.category}
                      </span>
                    </div>

                    <span
                      className={`project-status ${
                        isLive
                          ? "project-status-live"
                          : "project-status-development"
                      }`}
                    >
                      <span></span>
                      {project.status}
                    </span>
                  </div>

                  <ProjectVisual
                    type={project.visual}
                  />

                  <div className="project-card-content">
                    {project.featured && (
                      <span className="project-featured-label">
                        FEATURED PROJECT
                      </span>
                    )}

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ),
                      )}
                    </div>

                    <div className="project-card-actions">
                      <button
                        type="button"
                        className="project-view-button"
                        onClick={() =>
                          setSelectedProject(project)
                        }
                      >
                        View Case Study
                        <span>↗</span>
                      </button>

                      <div className="project-links">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        )}

                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live
                          </a>
                        )}

                        {!isLive && (
                          <span className="project-development-label">
                            In development
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}