
"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
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
    technologies: ["React.js", "FastAPI", "MongoDB", "REST APIs"],
    github: "https://github.com/sk2678/Heallio-AI-Health-Dashboard",
    live: "https://sushant-heallio-3.onrender.com/docs",
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
    technologies: ["React.js", "Python", "FastAPI", "REST APIs"],
    github: "https://github.com/sk2678/PixCrypt-Image-Security",
    live: "https://sushant-pixcrypt.onrender.com",
  },
  {
    number: "03",
    title: "DevForge-AI",
    category: "AI / FULL-STACK",
    visual: "code",
    featured: false,
    status: "IN DEVELOPMENT",
    description:
      "An AI-powered development platform exploring how software requirements can become structured project output.",
    overview:
      "DevForge-AI explores automating parts of the software development workflow.",
    problem:
      "Starting a software project often requires repetitive planning, structure creation, and setup work.",
    solution:
      "The project explores how AI can help transform requirements into structured development artifacts.",
    features: [
      "AI-powered workflow",
      "Project generation",
      "Structured software output",
      "Database integration",
      "Modern SaaS interface",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AI"],
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
      "The project explores converting natural descriptions of insurance incidents into structured claim information.",
    problem:
      "Traditional insurance claim initiation can involve repetitive forms and manual data entry.",
    solution:
      "The system explores conversational input to extract incident information, identify missing fields, and guide users toward a structured claim.",
    features: [
      "Voice/text incident input",
      "Information extraction",
      "Missing-field detection",
      "Claim form mapping",
      "Multi-agent workflow",
    ],
    technologies: ["AI Agents", "Gemini", "Python", "APIs"],
    github: "#",
    live: "#",
  },
];

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "dashboard") {
    return (
      <div className="project-visual visual-dashboard artwork-3d">
        <div className="artwork-orb orb-blue" />
        <div className="artwork-orb orb-violet" />

        <div className="dashboard-sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="dashboard-main">
          <div className="dashboard-top">
            <div />
            <div />
          </div>

          <div className="dashboard-cards">
            <span />
            <span />
            <span />
          </div>

          <div className="dashboard-chart">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="artwork-caption">
          <span className="artwork-pulse" />
          HEALTH INTELLIGENCE
        </div>

        <div className="artwork-floating-tag">✳ AI INSIGHTS</div>
      </div>
    );
  }

  if (type === "security") {
    return (
      <div className="project-visual visual-security artwork-3d">
        <div className="artwork-orb orb-blue" />
        <div className="artwork-orb orb-violet" />

        <div className="security-image-frame">
          <div className="security-image-surface">
            <span className="security-mountain mountain-one" />
            <span className="security-mountain mountain-two" />
            <span className="security-sun" />
          </div>
        </div>

        <div className="security-shield" aria-hidden="true">
          <svg viewBox="0 0 100 112">
            <path
              d="M50 5 L88 20 V51 C88 76 72 95 50 106 C28 95 12 76 12 51 V20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M34 55 L45 66 L68 41"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="artwork-caption">
          <span className="artwork-pulse" />
          ENCRYPTION ACTIVE
        </div>

        <div className="artwork-floating-tag">✦ IMAGE PROTECTED</div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="project-visual visual-code artwork-3d">
        <div className="artwork-orb orb-blue" />
        <div className="artwork-orb orb-violet" />

        <div className="code-floating-panel">
          <div className="code-window-header">
            <span />
            <span />
            <span />
            <small>devforge.ts</small>
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
              <span />
            </div>
          </div>
        </div>

        <div className="code-node node-one">AI</div>
        <div className="code-node node-two">&lt;/&gt;</div>
        <div className="code-connector connector-one" />
        <div className="code-connector connector-two" />

        <div className="artwork-caption">
          <span className="artwork-pulse" />
          PROJECT GENERATION
        </div>

        <div className="artwork-floating-tag">✳ BUILD WITH AI</div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-voice artwork-3d">
      <div className="artwork-orb orb-blue" />
      <div className="artwork-orb orb-violet" />

      <div className="voice-rings">
        <span />
        <span />
        <span />
      </div>

      <div className="voice-center">
        <span />
        <span />
        <span />
      </div>

      <div className="voice-wave">
        {Array.from({ length: 19 }, (_, index) => (
          <i
            key={index}
            style={{ "--bar-index": index } as CSSProperties}
          />
        ))}
      </div>

      <div className="artwork-caption">
        <span className="artwork-pulse" />
        VOICE AI · MULTI-AGENT
      </div>

      <div className="artwork-floating-tag">◉ CONVERSATIONAL AI</div>
    </div>
  );
}

export default function Projects() {
const [selectedProject, setSelectedProject] = useState<Project | null>(null);

const [activeFilter, setActiveFilter] = useState<
  "ALL" | "FULL-STACK" | "AI"
>("ALL");

const filteredProjects = projects.filter((project) => {
  if (activeFilter === "ALL") return true;

  if (activeFilter === "FULL-STACK") {
    return project.category.includes("FULL-STACK");
  }

  return project.category.includes("AI");
});

  return (
    <section id="work" className="content-section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-label">SELECTED WORK</p>
            <h2>
              Things I&apos;ve
              <span> built.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="projects-intro">
            <p>
              A selection of projects where I&apos;ve worked across frontend,
              backend, databases, APIs, and AI-powered application workflows.
            </p>

            <span className="projects-count">
              <span className="projects-count-dot" />
              04 PROJECTS · 02 LIVE
            </span>
          </div>
        </Reveal>

        <div
  className="project-filters"
  role="group"
  aria-label="Filter projects by category"
>
  {(
    [
      { label: "All Projects", value: "ALL" },
      { label: "Full-Stack", value: "FULL-STACK" },
      { label: "AI Projects", value: "AI" },
    ] as const
  ).map((filter) => (
    <button
      key={filter.value}
      type="button"
      className={`project-filter ${
        activeFilter === filter.value ? "project-filter-active" : ""
      }`}
      onClick={() => setActiveFilter(filter.value)}
      aria-pressed={activeFilter === filter.value}
    >
      {filter.label}
    </button>
  ))}
</div>

<div className="projects-grid">
  {filteredProjects.map((project, index) => {
            const isLive = project.status === "LIVE";
            const hasGithub =
              Boolean(project.github) && project.github !== "#";
            const hasLiveDemo =
              Boolean(project.live) && project.live !== "#";

            return (
              <Reveal key={project.number} delay={index * 80}>
                <article
                  className={`project-card ${
                    project.featured ? "project-featured" : ""
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
                      <span />
                      {project.status}
                    </span>
                  </div>

                  <ProjectVisual type={project.visual} />

                  <div className="project-card-content">
                    {project.featured && (
                      <span className="project-featured-label">
                        FEATURED PROJECT
                      </span>
                    )}

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-card-actions">
                      <button
                        type="button"
                        className="project-view-button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View ${project.title} case study`}
                      >
                        View Case Study
                        <span aria-hidden="true">↗</span>
                      </button>

                      <div className="project-links">
                        {hasGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            GitHub <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        {hasLiveDemo && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                          >
                            Demo <span aria-hidden="true">↗</span>
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