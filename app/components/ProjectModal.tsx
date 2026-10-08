"use client";

import { useEffect } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: readonly string[];
  technologies: readonly string[];
  github: string;
  live: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const hasGithub =
    Boolean(project.github) && project.github !== "#";

  const hasLive =
    Boolean(project.live) && project.live !== "#";

  const isInDevelopment = !hasGithub && !hasLive;

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="project-modal-header">
          <div>
            <span className="project-modal-category">
              {project.category}
            </span>

            <h2 id="project-modal-title">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        <div className="project-modal-content">
          <div className="project-modal-section">
            <span className="project-modal-label">
              OVERVIEW
            </span>

            <p>{project.overview}</p>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">
              PROBLEM
            </span>

            <p>{project.problem}</p>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">
              SOLUTION
            </span>

            <p>{project.solution}</p>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">
              FEATURES
            </span>

            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">
              TECHNOLOGIES
            </span>

            <div className="project-tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-modal-footer">
          {isInDevelopment ? (
            <div className="project-development-status">
              <span></span>
              Currently in development
            </div>
          ) : (
            <div className="project-modal-actions">
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-button"
                >
                  GitHub
                  <span>↗</span>
                </a>
              )}

              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-button project-modal-button-primary"
                >
                  Live Project
                  <span>↗</span>
                </a>
              )}
            </div>
          )}

          <button
            type="button"
            className="project-modal-close-text"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}