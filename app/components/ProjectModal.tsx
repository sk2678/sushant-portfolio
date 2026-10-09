
"use client";

import { useEffect, useRef } from "react";

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = document.querySelector<HTMLElement>(
        ".project-modal"
      );

      if (!dialog) return;

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

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
        aria-describedby="project-modal-overview"
      >
        <div className="project-modal-header">
          <div>
            <span className="project-modal-category">
              {project.category}
            </span>

            <p className="project-modal-label">PROJECT CASE STUDY</p>

            <h2 id="project-modal-title">{project.title}</h2>
          </div>

          <button
            ref={closeButtonRef}
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
            <span className="project-modal-label">OVERVIEW</span>
            <p id="project-modal-overview">{project.overview}</p>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">THE PROBLEM</span>
            <p>{project.problem}</p>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">MY APPROACH</span>
            <p>{project.solution}</p>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">
              KEY FEATURES
            </span>

            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-label">
              TECH STACK
            </span>

            <div className="project-tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-modal-footer">
          {isInDevelopment ? (
            <div className="project-development-status">
              <span />
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
                  View Source Code <span>↗</span>
                </a>
              )}

              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-button project-modal-button-primary"
                >
                  View Live Demo <span>↗</span>
                </a>
              )}
            </div>
          )}

          <button
            type="button"
            className="project-modal-close-text"
            onClick={onClose}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}