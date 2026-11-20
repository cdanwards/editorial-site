/* eslint-disable @next/next/no-html-link-for-pages -- plain anchors keep
   navigations as real page loads for cross-document view transitions. */
import { LINKS, MORE_PROJECTS, PROJECTS, STRENGTHS } from "./content";

export default function EditorialHome() {
  return (
    <>
      <section className="ed-grid ed-hero">
        <p className="ed-label">Staff software engineer, Infinite Red</p>
        <h1>
          I take mobile products from architecture to the{" "}
          <em>App Store</em>, and keep them shipping.
        </h1>
        <p className="ed-lede">
          Over ten years of experience building production apps for web and
          mobile. At Infinite Red I own mobile architecture, design systems
          and engineering standards for consumer products that serve hundreds
          of thousands of users, and I build the agentic workflows that let
          coding agents ship that work with confidence.
        </p>
      </section>

      <section aria-labelledby="focus-label">
        <div className="ed-grid ed-section-head">
          <h2 id="focus-label" className="ed-label">
            Focus
          </h2>
        </div>
        <ul className="ed-focus">
          {STRENGTHS.map((s) => (
            <li key={s.title} className="ed-grid">
              <h3 className="ed-focus-title">{s.title}</h3>
              <p className="ed-focus-text">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" aria-labelledby="work-label">
        <div className="ed-grid ed-section-head">
          <h2 id="work-label" className="ed-label">
            Selected work
          </h2>
        </div>
        <ol className="ed-work">
          {PROJECTS.map((p, i) => (
            <li key={p.slug}>
              <a className="ed-grid" href={`/work/${p.slug}`}>
                <span className="ed-label ed-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="ed-title"
                  style={{ viewTransitionName: `title-${p.slug}` }}
                >
                  {p.title}
                </span>
                <span className="ed-label ed-kind">{p.kind}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="more-label">
        <div className="ed-grid ed-section-head" style={{ borderTop: 0 }}>
          <h2 id="more-label" className="ed-label">
            More projects
          </h2>
        </div>
        <ul className="ed-more">
          {MORE_PROJECTS.map((p) => (
            <li key={p.title}>
              <a className="ed-grid" href={p.href}>
                <span className="ed-more-title">{p.title}</span>
                <span className="ed-more-text">{p.text}</span>
                <span className="ed-label ed-more-stack">
                  {p.stack.join(" / ")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="ed-grid ed-currently">
        <h2 className="ed-label">Currently</h2>
        <p>
          Staff engineer at Infinite Red, working remotely from Greenville,
          South Carolina. Off the clock: lifting, running, learning to draw,
          and playing Magic with my kids.
        </p>
      </section>

      <section className="ed-grid ed-contact">
        <h2 className="ed-label">Contact</h2>
        <a className="ed-mail" href={`mailto:${LINKS.email}`}>
          {LINKS.email}
        </a>
        <div className="ed-elsewhere ed-label">
          <a className="ed-link" href={LINKS.github}>
            GitHub
          </a>
          <a className="ed-link" href={LINKS.linkedin}>
            LinkedIn
          </a>
          <a className="ed-link" href={LINKS.bluesky}>
            Bluesky
          </a>
          <a className="ed-link" href="/resume">
            Resume
          </a>
        </div>
      </section>
    </>
  );
}
