# danedwards.us

Dan Edwards' personal site: a type-led editorial portfolio with case studies, an about page and a resume.

## Features

- Large expressive headlines set in Fraunces, a variable font whose weight and softness change on scroll and hover
- Case studies with margin notes and pull quotes
- Page-to-page view transitions in plain CSS, where a project title grows into its case study headline
- Light and dark color schemes that follow the system setting
- All motion disabled when the visitor prefers reduced motion
- Static pages, a generated social card, sitemap, JSON-LD and `llms.txt`

## Technologies

- Next.js 14 (App Router) and React 18
- TypeScript
- Plain CSS for layout, type and motion, with Tailwind for the base reset
- `next/font` for Fraunces, Instrument Sans and JetBrains Mono

## Pages

| Route | Content |
|---|---|
| `/` | Headline, focus list, selected work, more projects, currently, contact |
| `/work/[slug]` | A case study per selected project |
| `/about` | Bio |
| `/resume` | Experience, education, skills, PDF download |

## Getting started

```bash
git clone https://github.com/cdanwards/editorial-site.git
cd editorial-site
yarn install
yarn dev
```

Open http://localhost:3000.

Other commands:

```bash
yarn build   # production build
yarn start   # serve the production build
yarn lint    # ESLint
```

## Editing content

All content is typed data in `app/content.ts`.

- Add a case study by adding an entry to `PROJECTS`. The page, the home page row and the sitemap entry are generated from it.
- A block with `draft: true` is placeholder copy. It renders with a wavy underline and a "Draft" margin note so it cannot ship unnoticed. Remove the flag once the text is final.
- Smaller projects go in `MORE_PROJECTS`, jobs in `EXPERIENCE`, skills in `SKILLS`.
- Update `public/llms.txt` and the "Last edited" date in the footer (`app/layout.tsx`) when content changes.

## Project structure

- `app/layout.tsx`: fonts, metadata, header and footer
- `app/content.ts`: site content
- `app/editorial.css`: site styles
- `app/page.tsx`, `app/about/`, `app/resume/`, `app/work/[slug]/`: pages
- `app/opengraph-image.tsx`: social card
- `app/llms-full.txt/route.ts`: the whole site as markdown for AI crawlers, generated from `content.ts`
- `public/`: headshot, resume PDF, `robots.txt`, `llms.txt`

## Browser support

View transitions between pages and the scroll-driven headline are progressive enhancements. Browsers without them get normal page loads and a static headline.

## License

MIT
