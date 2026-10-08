import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="content-section education-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-label">EDUCATION</p>

            <h2>
              Where I&apos;m
              <span> learning.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="education-card">
            <div className="education-main">
              <div className="education-mark">
                <span>JIIT</span>
              </div>

              <div className="education-content">
                <span className="education-type">
                  B.TECH · ENGINEERING
                </span>

                <h3>
                  Jaypee Institute of Information Technology
                </h3>

                <p className="education-degree">
                  Electronics &amp; Communication Engineering
                </p>

                <p className="education-description">
                  Engineering education with a focus spanning electronics,
                  computing, software development, and emerging technology.
                </p>
              </div>
            </div>

            <div className="education-meta">
              <div>
                <span>PROGRAM</span>
                <strong>B.Tech</strong>
              </div>

              <div>
                <span>BRANCH</span>
                <strong>ECE / CS</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Final Year</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}