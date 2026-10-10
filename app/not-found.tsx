
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="not-found-label">
          <span className="not-found-dot" />
          PAGE NOT FOUND
        </p>

        <h1>
          Lost in the
          <span> digital space.</span>
        </h1>

        <p className="not-found-description">
          This page may have moved or the link may be incorrect.
          Let's get you back to exploring my work.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="not-found-button">
            Back to Home <span aria-hidden="true">↗</span>
          </Link>

          <Link href="/#work" className="not-found-secondary">
            Explore Projects
          </Link>
        </div>

        <div className="not-found-code" aria-hidden="true">
          <span>404</span>
          <span className="not-found-line" />
          <span>ROUTE_NOT_FOUND</span>
        </div>
      </div>
    </main>
  );
}