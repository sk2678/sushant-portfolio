import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>

            <h2>
              Building things that
              <span> useful.</span>
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="about-grid">
            <div className="about-intro">
              <p className="large-text">
                I&apos;m Sushant Kapil, a Full-Stack Developer &amp; AI
                Enthusiast focused on building practical software products.
              </p>

              <p>
                My development journey has taken me across frontend
                development, backend APIs, databases, and AI-powered
                applications. I enjoy understanding how different parts of a
                product connect rather than focusing on only one layer.
              </p>

              <p>
                Currently, I&apos;m focused on strengthening my full-stack
                engineering skills while exploring how AI can be integrated
                into useful real-world applications.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span>01</span>

                <div>
                  <strong>Frontend</strong>
                  <p>React.js, Next.js, HTML, CSS</p>
                </div>
              </div>

              <div className="detail-item">
                <span>02</span>

                <div>
                  <strong>Backend</strong>
                  <p>FastAPI, Node.js, REST APIs</p>
                </div>
              </div>

              <div className="detail-item">
                <span>03</span>

                <div>
                  <strong>Data</strong>
                  <p>MongoDB, MySQL, PostgreSQL</p>
                </div>
              </div>

              <div className="detail-item">
                <span>04</span>

                <div>
                  <strong>AI</strong>
                  <p>AI &amp; LLM-powered applications</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}