// Site content.
//
// Standing rules for the copy:
//   - Title is Staff Software Engineer at Infinite Red (since June 2025).
//   - Total experience is worded "over ten years".
//   - Wise Technologies / MyWell is described neutrally, with no domain claims.
//   - No client names.
//
// Blocks marked `draft: true` are placeholders for Dan to rewrite; the page
// renders them with an editor's mark so they are not mistaken for final copy.

export interface Block {
  heading?: string;
  text: string;
  /** Shown in the margin beside this block. */
  note?: string;
  draft?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  role: string;
  stack: string[];
  standfirst: string;
  pull?: string;
  blocks: Block[];
  link?: { href: string; label: string };
}

// The points the home page leads with.
export interface Strength {
  title: string;
  text: string;
}

export const STRENGTHS: Strength[] = [
  {
    title: "Agentic engineering",
    text: "Most of my work now runs through coding agents. I write the specs, context files, skills and automated checks that let agents ship production code, run them in parallel on isolated worktrees, and validate everything before it merges. I brought the practice into my team's workflow and built a workshop to teach it.",
  },
  {
    title: "Mobile architecture",
    text: "I own mobile architecture end to end across iOS and Android with React Native and Expo: component patterns, state management and the release process. I led a greenfield move from native apps to React Native that cut maintenance costs by 30%.",
  },
  {
    title: "Design systems",
    text: "I architected a design system and component library from the ground up, as part of the team that built it. It cut development time by 40% and became the org-wide standard for cross-platform UI.",
  },
  {
    title: "Teams that ship",
    text: "I set the CI/CD pipelines, testing requirements and release benchmarks that keep a team shipping, and I mentor engineers through code review and pairing. In open source I contribute to Ignite and react-native-mlkit, and I created Ignite Cookbook.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "design-system",
    title: "A design system, built from the ground up",
    kind: "Infinite Red",
    role: "Staff software engineer",
    stack: ["React Native", "TypeScript", "Storybook", "Design tokens"],
    standfirst:
      "A design system and component library for consumer apps, built while those apps moved from separate native codebases to React Native.",
    pull: "The library had to be easier to use than to work around.",
    blocks: [
      {
        heading: "The problem",
        text: "The product was moving from separate native iOS and Android apps to one React Native codebase. Without a shared component library, every team would rebuild the same controls on its own, and the two platforms would drift apart.",
      },
      {
        heading: "Decisions",
        text: "I architected the system as part of the team that built it. Design tokens were versioned and came straight from Figma: an export from the design files, then an import step in the project that reconciled the tokens and brought every component back into line. The library shipped as a versioned package that product teams installed, with Storybook documenting each component and its accessibility standards. I led the React Native migration alongside it and coordinated the App Store and Play Store releases.",
      },
      {
        heading: "Result",
        text: "Development time fell by 40%, and the library became the org-wide standard for cross-platform UI. The migration reduced maintenance costs by 30%.",
      },
    ],
  },
  {
    slug: "agentic-workflow",
    title: "An agentic workflow that ships production code",
    kind: "Practice",
    role: "Staff software engineer",
    stack: ["Claude Code", "Cursor", "MCP", "Git worktrees", "React Native"],
    standfirst:
      "A way of working where coding agents do most of the typing, and the engineering goes into the specs, context and checks around them.",
    pull: "The skill is engineering the context around the model.",
    blocks: [
      {
        heading: "The problem",
        text: "Agents write plausible code quickly. Speed stops being the limit and confidence takes its place: a team needs to know the work is correct before it ships, and reviewing everything by hand gives the time back.",
      },
      {
        heading: "Decisions",
        text: "Every task starts from a written spec. Each project carries context files and reusable skills, so an agent begins with the conventions a new teammate would have to learn. Each ticket runs in its own git worktree with its own simulator and Metro port, which lets several agents work in parallel without colliding. Automated checks gate the output: lint, types and tests, plus custom checkers that block a result when it breaks a rule. Agents drive the simulator to verify UI changes, and nothing merges without review.",
      },
      {
        heading: "Teaching it",
        text: "I built The New Stack, a hands-on workshop for senior and staff engineers on context engineering: how to give an agent context, how to give it tools, and how to break work down for it. Participants run the same task with and without a context file and compare the results.",
      },
      {
        heading: "Result",
        text: "Agentic development is now part of how my team at Infinite Red works every day, and the workshop gives other engineers a structured way to start.",
      },
    ],
  },
  {
    slug: "real-time-chat",
    title: "Real-time chat for thousands at once",
    kind: "Infinite Red",
    role: "Staff software engineer",
    stack: ["React Native", "Next.js", "Stream", "TypeScript"],
    standfirst:
      "Real-time chat on web and mobile, built on Stream, for thousands of people using it at the same moment.",
    blocks: [
      {
        heading: "The problem",
        text: "Chat only works if it feels instant. Messages arrive constantly from thousands of people at once, and the interface has to keep up on web and mobile without slowing the rest of the app.",
      },
      {
        heading: "Decisions",
        text: "Stream handles the messaging infrastructure, so the work went into the client: integrating it on web and mobile and optimizing rendering performance so the interface kept up with the message volume.",
      },
      {
        heading: "Result",
        text: "Chat shipped for thousands of concurrent users and drove a 40% increase in engagement.",
      },
    ],
  },
  {
    slug: "ignite-cookbook",
    title: "Ignite Cookbook",
    kind: "Open source",
    role: "Creator",
    stack: ["React", "TypeScript", "Docs"],
    standfirst:
      "An educational resource for the React Native community: tested recipes for Ignite, Infinite Red's React Native boilerplate.",
    blocks: [
      {
        heading: "The problem",
        text: "Ignite gives a team a starting point for a React Native app. The questions that come next (how to add this library, how to structure that feature) were answered in scattered issues and chat threads.",
      },
      {
        heading: "Decisions",
        text: "I created the Cookbook as an open source site of short recipes that anyone can contribute to. Each recipe solves one problem in an Ignite app.",
      },
      {
        heading: "Result",
        text: "The community has one shared reference for working patterns, and Infinite Red has a public record of how it builds React Native apps.",
      },
    ],
  },
  {
    slug: "codeword",
    title: "Codeword",
    kind: "Personal project",
    role: "Design and engineering",
    stack: ["React Native", "Expo Router", "Supabase", "Zustand", "Zod"],
    standfirst:
      "A multiplayer word game. Every player gets a secret target and a word, and you eliminate your target by getting them to say it out loud.",
    pull: "The app keeps score. The game happens in the room.",
    blocks: [
      {
        heading: "The problem",
        text: "The game is played in person over hours or days, so the app has to stay out of the way. Players open it for a few seconds to check a word or report an elimination, then put the phone down.",
      },
      {
        heading: "Decisions",
        text: "Supabase handles auth and realtime game state, Zustand holds client state, Zod validates everything that crosses the network, and Expo Router handles navigation.",
      },
      {
        heading: "Result",
        text: "The game is built, and a TestFlight beta is next.",
      },
    ],
    link: { href: "https://github.com/cdanwards/Codeword", label: "Source on GitHub" },
  },
];

export const LINKS = {
  email: "cdaniel.edwards@gmail.com",
  github: "https://github.com/cdanwards",
  linkedin: "https://www.linkedin.com/in/cdanwards/",
  bluesky: "https://bsky.app/profile/cdanwards.bsky.social",
};

// Smaller projects, listed on the home page with a link to the source.
export interface SideProject {
  title: string;
  text: string;
  stack: string[];
  href: string;
}

export const MORE_PROJECTS: SideProject[] = [
  {
    title: "HeyNbr",
    text: "A SaaS platform for neighborhood associations and HOAs to manage their communities, with subdomain-based multi-tenancy.",
    stack: ["React", "tRPC", "PostgreSQL", "Prisma"],
    href: "https://github.com/cdanwards/heynbr",
  },
  {
    title: "Inspiration",
    text: "A mobile app that helps you process feelings and serves helpful inspiration.",
    stack: ["React Native", "Expo", "Kotlin", "Swift"],
    href: "https://github.com/cdanwards/Inspiration",
  },
  {
    title: "Simple Honest Games",
    text: "Browser games for young kids learning to read, type and use a computer. Zero dependencies, works offline.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/cdanwards/simple-honest-games",
  },
  {
    title: "Psychosocial",
    text: "A parody social platform with a metal-inspired interface for sharing thoughts and images.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/cdanwards/psychosocial",
  },
  {
    title: "Animation Practice",
    text: "React Native animation experiments built on the Animated API.",
    stack: ["React Native", "TypeScript", "Expo"],
    href: "https://github.com/cdanwards/animation-practice",
  },
];

export interface Job {
  company: string;
  place?: string;
  title: string;
  when: string;
  points: string[];
}

// Software roles follow the canonical profile. The two finance roles are
// carried over from the previous site unchanged.
export const EXPERIENCE: Job[] = [
  {
    company: "Infinite Red",
    place: "Remote",
    title: "Staff Software Engineer (June 2025 to present), Senior Software Engineer (July 2022 to June 2025)",
    when: "July 2022 to present",
    points: [
      "Own mobile architecture end to end across iOS and Android using React Native and Expo, defining component patterns, state management strategies and release processes that scale across product teams.",
      "Architected and built a scalable design system and reusable component library from the ground up, reducing development time by 40% and establishing the org-wide standard for cross-platform UI.",
      "Led a greenfield native-to-React Native migration, reducing maintenance costs by 30% while coordinating App Store and Play Store releases.",
      "Shipped real-time chat for thousands of concurrent users, driving a 40% increase in engagement with optimized rendering performance across web and mobile.",
      "Owned authentication and onboarding features including SSO. Premature logouts went down 70%.",
      "Defined and enforced CI/CD pipelines, testing requirements and deployment benchmarks using GitHub Actions, EAS Build and Update, and feature flagging with LaunchDarkly.",
      "Integrated AI-augmented development practices (Claude Code, Cursor) into team workflows, with rigorous validation of AI-generated code before production.",
      "Built an agentic development workflow of written specs, project context files, reusable skills and parallel agents on isolated worktrees, and created The New Stack, a workshop on context engineering for senior and staff engineers.",
      "Championed spec-driven development, writing feature specifications before implementation to reduce ambiguity and prevent rework.",
      "Mentored junior and mid-level engineers through code reviews, pairing sessions and architectural guidance.",
      "Open source: contributor to Ignite and react-native-mlkit, and creator of Ignite Cookbook.",
    ],
  },
  {
    company: "Wise Technologies / MyWell",
    place: "Greenville, SC",
    title: "Software Engineer",
    when: "September 2020 to August 2022",
    points: [
      "Built full-stack mobile and web features using React Native, Next.js and Apollo GraphQL with Prisma and PostgreSQL in a serverless architecture.",
      "Architected onboarding flows critical to user activation and retention, with analytics tracking through Firebase and Amplitude.",
      "Led the TypeScript migration of 70% of the codebase, improving type safety and speeding up feature development.",
      "Delivered 50+ features and bug fixes informed by user behavior data, reducing complaints by 35%.",
    ],
  },
  {
    company: "Orange Bees",
    place: "Greenville, SC",
    title: "Software Engineer",
    when: "October 2019 to September 2020",
    points: [
      "Developed a full-stack web application using Angular 2+ and NestJS, accelerating client onboarding by 50% through streamlined signup and activation flows.",
      "Improved deployment processes with Docker, reducing deployment errors by 60%.",
    ],
  },
  {
    company: "NewSpring Church",
    place: "Anderson, SC",
    title: "Junior Web Developer",
    when: "January 2018 to October 2019",
    points: [
      "Developed a React Native mobile app that drove a 20% increase in user engagement.",
      "Led the decommissioning of 3 legacy apps, streamlining the application portfolio.",
    ],
  },
  {
    company: "Edward Jones",
    place: "Greenville, SC",
    title: "Financial Advisor",
    when: "November 2016 to September 2017",
    points: [
      "Built and maintained client relationships, creating tailored investment portfolios that aligned with their financial goals.",
    ],
  },
  {
    company: "Resurgent Capital Services",
    place: "Greenville, SC",
    title: "Data Analyst",
    when: "September 2015 to May 2016",
    points: [
      "Analyzed credit data for over 80,000,000 client accounts, and compiled reports using Excel, SQL and Report Builder for the executive vice president staff.",
      "Created and submitted monthly data reports to Experian, Equifax and TransUnion.",
    ],
  },
];

export const EDUCATION: Job[] = [
  {
    company: "The Iron Yard",
    title: "Front-End Web Development",
    when: "2015",
    points: [],
  },
  {
    company: "Anderson University (SC)",
    title: "Bachelor of Science, Finance",
    when: "2009 to 2013",
    points: [],
  },
];

export const SKILLS: { title: string; skills: string[] }[] = [
  {
    title: "Mobile",
    skills: ["React Native", "Expo (EAS Build, EAS Update, config plugins)", "iOS and Android release management", "Deep linking", "Push notifications", "OTA updates", "MobX-State-Tree", "Zustand", "Redux"],
  },
  {
    title: "Frontend and design systems",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Storybook", "Design tokens", "Component library architecture", "Accessibility standards", "Figma collaboration"],
  },
  {
    title: "Backend and data",
    skills: ["Node.js", "GraphQL", "Apollo", "REST", "PostgreSQL", "Prisma", "Supabase", "Firebase Functions", "AWS Lambda", "Redis", "SQLite"],
  },
  {
    title: "Agentic and AI-augmented engineering",
    skills: ["Claude Code", "Cursor", "GitHub Copilot", "Agentic workflows (parallel agents, worktrees, skills, MCP)", "Context engineering", "Spec-driven development", "AI-assisted code review and generation", "Validation of AI output"],
  },
  {
    title: "CI/CD and platform",
    skills: ["GitHub Actions", "GitLab CI/CD", "CircleCI", "Docker", "App Store and Play Store deployment", "LaunchDarkly feature flags", "A/B experimentation", "Phased rollouts"],
  },
  {
    title: "Testing and quality",
    skills: ["Jest", "React Native Testing Library", "Detox", "Amplitude", "DataDog", "Bugsnag"],
  },
];
