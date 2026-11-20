import type { Metadata } from "next";
import { EDUCATION, EXPERIENCE, Job, SKILLS } from "../content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Experience, education and skills of Dan Edwards, staff software engineer at Infinite Red.",
  alternates: { canonical: "/resume" },
};

function Entry({ job }: { job: Job }) {
  return (
    <section className="ed-job">
      <p className="ed-label ed-when">{job.when}</p>
      <div className="ed-job-body">
        <h3>{job.company}</h3>
        <p className="ed-label ed-job-title">
          {job.title}
          {job.place ? `, ${job.place}` : ""}
        </p>
        {job.points.length > 0 && (
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default function Resume() {
  return (
    <article className="ed-grid ed-article ed-resume">
      <h1>Resume</h1>
      <p className="ed-download">
        <a className="ed-link ed-label" href="/dan-edwards-resume.pdf" download>
          Download as PDF
        </a>
      </p>

      <h2 className="ed-label ed-resume-head">Experience</h2>
      {EXPERIENCE.map((job) => (
        <Entry key={job.company} job={job} />
      ))}

      <h2 className="ed-label ed-resume-head">Education</h2>
      {EDUCATION.map((job) => (
        <Entry key={job.company} job={job} />
      ))}

      <h2 className="ed-label ed-resume-head">Skills</h2>
      {SKILLS.map((group) => (
        <section key={group.title} className="ed-skill">
          <h3 className="ed-label">{group.title}</h3>
          <p>{group.skills.join(", ")}</p>
        </section>
      ))}
    </article>
  );
}
