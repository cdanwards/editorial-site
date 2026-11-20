# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

Dan Edwards' personal site at danedwards.us: a type-led editorial portfolio. Built with Next.js 14 (App Router), React 18 and TypeScript. All pages are static. Yarn 3.6.4 is the package manager.

This repo started on 2026-11-20 as a fresh copy of the editorial redesign. The previous site, a terminal simulator, lives in the `cdanwards/terminal-site` repo. Design notes are in `plans/`, a symlink into the sibling notes folder that git does not track.

## Commands

```bash
yarn dev          # Start dev server on localhost:3000
yarn build        # Production build
yarn start        # Start production server
yarn lint         # Run ESLint (next/core-web-vitals)
```

No test framework is configured. Check changes with `yarn lint`, `npx tsc --noEmit` and `yarn build`.

## Layout of the code

- `app/layout.tsx`: root layout. Loads the fonts through `next/font` (Fraunces for display, Instrument Sans for text, JetBrains Mono for labels), sets site metadata and the JSON-LD `Person` block, and renders the header and colophon footer.
- `app/content.ts`: all site content as typed data. `STRENGTHS` (the home page focus list), `PROJECTS` (case studies), `MORE_PROJECTS`, `EXPERIENCE`, `EDUCATION`, `SKILLS` and `LINKS`.
- `app/page.tsx`: home. Headline, focus list, selected work, more projects, currently, contact.
- `app/work/[slug]/page.tsx`: case study pages, generated from `PROJECTS`.
- `app/about/page.tsx`: bio and headshot.
- `app/resume/page.tsx`: experience, education and skills, with a link to `public/dan-edwards-resume.pdf`.
- `app/editorial.css`: all site styling, scoped under `.ed` (set on `<body>`).
- `app/globals.css`: Tailwind base and utilities only. Tailwind is here for its reset and `sr-only`.
- `app/opengraph-image.tsx`: the social card, generated at build time.
- `app/sitemap.ts`, `public/robots.txt`, `public/llms.txt`: discovery files. Update all three when pages are added.
- `app/llms-full.txt/route.ts`: serves `/llms-full.txt`, the whole site as markdown for AI crawlers and agents. It is generated from `content.ts`, so it needs no manual upkeep. `public/llms.txt` is the short hand-written index and links to it.

## Design rules

- Type is the artwork. Headlines are very large Fraunces with tight tracking. Labels are small uppercase mono. Keep images few and plain.
- Colors follow `prefers-color-scheme`: deep teal page with cream ink in dark, warm off-white with teal ink in light. Mustard is the accent, magenta appears on hover and focus. The values are CSS custom properties at the top of `editorial.css`.
- Layout is a 12-column grid (`.ed-grid`). Break it only on purpose, as the pull quote does.
- Motion is CSS only: view transitions between pages, a scroll-driven change to the home headline, and short hover transitions. All of it is switched off under `prefers-reduced-motion`.

## Conventions

- Internal links are plain `<a>` elements, never `next/link`. Cross-document view transitions need real page loads. Files that link internally carry an eslint-disable comment for `@next/next/no-html-link-for-pages` that says so.
- A project title has the same `view-transition-name` (`title-<slug>`) on the home page and on its case study, which is what makes it morph between pages.
- Career facts come from Dan's own profile documents, which live outside this repo. Check copy against them and ask Dan when something is not covered. Use career facts and public interests only, and never client names.
- This repo is public. Keep private notes, paths and personal details out of code comments, docs and commit messages.
- Standing facts: the title is Staff Software Engineer at Infinite Red (since June 2025). Total experience is worded "over ten years" on this site (Dan's instruction, 2026-11-20). Wise Technologies / MyWell is described neutrally, with no logistics, healthcare or finance domain. German is parked, so it does not appear in the copy.
- Agentic engineering is a lead selling point (Dan, 2026-11-20). What is true: he designs and runs agentic workflows (specs, context files, skills, parallel agents on worktrees, automated checks) and built the workshop "The New Stack". Do not claim he builds agent orchestration infrastructure or eval frameworks, and do not name Infinite Red's internal tooling.
- Describe the Infinite Red work as product ownership (architecture, standards, releases), not as client or agency work.
- Do not invent facts about Dan's work. Unknown details go into a case study as a block with `draft: true` and a `note` saying what is missing. Draft blocks render with a wavy underline and a "Draft" margin note, and should all be resolved before a release.
- Resume wording in `EXPERIENCE` follows the master profile for software roles. Do not add metrics or techniques that are not in the profile.
- Page components are server components. Add `"use client"` only when a page needs browser state.
- Update the "Last edited" date in the footer colophon when content changes.
