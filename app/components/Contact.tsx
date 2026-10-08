import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sk2678",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sushant-kapil-195b5428b",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-main">
              <p className="section-label">GET IN TOUCH</p>

              <h2>
                Let&apos;s build something
                <span> useful.</span>
              </h2>

              <p className="contact-description">
                I&apos;m open to internship opportunities, full-time roles,
                freelance projects, and collaborations involving full-stack
                development and AI-powered applications.
              </p>

              <div className="contact-email-wrapper">
                <span className="contact-email-label">EMAIL</span>

                <a
                  href="mailto:sk0261901@gmail.com"
                  className="contact-email"
                >
                  sk0261901@gmail.com
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="contact-side">
              <div className="contact-status">
                <span className="status-dot"></span>

                <div>
                  <strong>Open to opportunities</strong>
                  <p>Let&apos;s start a conversation.</p>
                </div>
              </div>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}