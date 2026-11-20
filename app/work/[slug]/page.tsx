/* eslint-disable @next/next/no-html-link-for-pages -- plain anchors keep
   navigations as real page loads for cross-document view transitions. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "../../content";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Params): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  return project
    ? {
        title: project.title,
        description: project.standfirst,
        alternates: { canonical: `/work/${project.slug}` },
      }
    : {};
}

export default function CaseStudy({ params }: Params) {
  const index = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (index < 0) notFound();
  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  // The pull quote goes after the first block, where it breaks the column.
  const [first, ...rest] = project.blocks;

  const renderBlock = (b: (typeof project.blocks)[number]) => (
    <section
      key={b.heading ?? b.text}
      className={`ed-block${b.draft ? " ed-draft" : ""}`}
    >
      {b.heading && <h2 className="ed-label">{b.heading}</h2>}
      <p>{b.text}</p>
      {b.note && <aside>{b.note}</aside>}
    </section>
  );

  return (
    <article className="ed-grid ed-article">
      <a className="ed-label ed-link ed-back" href="/#work">
        Back to all work
      </a>

      <h1 style={{ viewTransitionName: `title-${project.slug}` }}>
        {project.title}
      </h1>

      <dl className="ed-meta ed-label">
        <div>
          <dt className="sr-only">Type</dt>
          <dd>
            <b>{project.kind}</b>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className="sr-only">Stack</dt>
          <dd>{project.stack.join(" / ")}</dd>
        </div>
      </dl>

      <p className="ed-standfirst">{project.standfirst}</p>

      {renderBlock(first)}
      {project.pull && (
        <blockquote className="ed-pull">{project.pull}</blockquote>
      )}
      {rest.map(renderBlock)}

      {project.link && (
        <p className="ed-block">
          <a
            className="ed-link ed-label"
            style={{ gridColumn: "3 / span 6" }}
            href={project.link.href}
          >
            {project.link.label}
          </a>
        </p>
      )}

      <nav className="ed-next" aria-label="Next project">
        <span className="ed-label">Next</span>
        <a href={`/work/${next.slug}`}>
          <span
            className="ed-next-title"
            style={{ viewTransitionName: `title-${next.slug}` }}
          >
            {next.title}
          </span>
        </a>
      </nav>
    </article>
  );
}
