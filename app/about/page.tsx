import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dan Edwards, a staff software engineer at Infinite Red working in React Native and TypeScript.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <article className="ed-grid ed-article ed-about">
      <h1>
        Staff engineer, dad, and a Magic player on the side.
      </h1>

      <div className="ed-bio">
        <p>
          I am a staff software engineer at Infinite Red with over ten years
          of experience building and shipping production apps for web and
          mobile. I own mobile architecture, design systems, CI/CD and
          engineering standards for consumer products that serve hundreds of
          thousands of users.
        </p>
        <p>
          Most of that work now runs through coding agents. I spend my time
          on the parts that make them reliable: written specs, project
          context, reusable skills and automated checks, with several agents
          working in parallel and everything validated before it merges. I
          teach the approach too: I built and led an internal workshop on it for
          25 engineers at Infinite Red.
        </p>
        <p>
          Before Infinite Red I built full-stack features in React Native,
          Next.js and GraphQL at Wise Technologies, shipped Angular and NestJS
          work at Orange Bees, and started out on a React Native app at
          NewSpring Church. I came to software from finance: a B.S. from
          Anderson University, then front-end training at The Iron Yard.
        </p>
        <p>
          I live in Greenville, South Carolina and work remotely. Away from
          the keyboard I lift, run, am learning to draw, and play Magic: the
          Gathering with my kids.
        </p>
      </div>

      <Image
        className="ed-portrait"
        src="/headshot.jpg"
        alt="Dan Edwards"
        width={320}
        height={400}
      />

    </article>
  );
}
