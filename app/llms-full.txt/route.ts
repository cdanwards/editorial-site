import {
  EDUCATION,
  EXPERIENCE,
  Job,
  LINKS,
  MORE_PROJECTS,
  PROJECTS,
  SKILLS,
  STRENGTHS,
} from "../content";

// /llms-full.txt: the whole site as one markdown file for AI crawlers and
// agents. Built from content.ts at build time, so it cannot drift from the
// pages. The short index is public/llms.txt.

export const dynamic = "force-static";

const BASE = "https://danedwards.us";

function job(j: Job): string {
  const head = `### ${j.company}${j.place ? ` (${j.place})` : ""}\n\n${j.title}, ${j.when}`;
  const points = j.points.map((p) => `- ${p}`).join("\n");
  return points ? `${head}\n\n${points}` : head;
}

function build(): string {
  const parts: string[] = [
    "# Dan Edwards",
    "> Staff Software Engineer at Infinite Red. Over ten years of experience building production apps for web and mobile. Owns mobile architecture, design systems and engineering standards for consumer products that serve hundreds of thousands of users, and builds the agentic workflows that let coding agents ship that work with confidence. Based in Greenville, SC, working remotely.",
    `Site: ${BASE}\nEmail: ${LINKS.email}\nGitHub: ${LINKS.github}\nLinkedIn: ${LINKS.linkedin}\nBluesky: ${LINKS.bluesky}`,

    "## Focus",
    STRENGTHS.map((s) => `### ${s.title}\n\n${s.text}`).join("\n\n"),

    "## Selected work",
    PROJECTS.map((p) => {
      // Draft blocks are unfinished copy, so they stay out of this file.
      const blocks = p.blocks
        .filter((b) => !b.draft)
        .map((b) => (b.heading ? `**${b.heading}.** ${b.text}` : b.text))
        .join("\n\n");
      const meta = `${p.kind}. Role: ${p.role}. Stack: ${p.stack.join(", ")}.`;
      return [`### ${p.title}`, `${BASE}/work/${p.slug}`, meta, p.standfirst, blocks]
        .filter(Boolean)
        .join("\n\n");
    }).join("\n\n"),

    "## More projects",
    MORE_PROJECTS.map(
      (p) => `- [${p.title}](${p.href}): ${p.text} Stack: ${p.stack.join(", ")}.`
    ).join("\n"),

    "## Experience",
    EXPERIENCE.map(job).join("\n\n"),

    "## Education",
    EDUCATION.map(job).join("\n\n"),

    "## Skills",
    SKILLS.map((g) => `- ${g.title}: ${g.skills.join(", ")}`).join("\n"),
  ];
  return parts.join("\n\n") + "\n";
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
