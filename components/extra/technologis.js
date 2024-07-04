import React from "react";

const TECHNOLOGIES = [
  "JavaScript",
  "Typescript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Expo",
  "React Query",
  "Prisma",
  "GraphQL",
  "Redux",
  "Storybook",
  "Sanity",
  "Jest",
  "Cypress",
  "React Testing Library",
];

const LANGUAGES = [
  "Polish (native)",
  "English (fluent)",
  "Russian (native)",
  "Ukrainean (fluent )",
];

const TOOLS = ["Jira", "Git", "GitHub", "Figma"];

export default function TechBadge() {
  return (
    <div className="flex flex-col mx-auto text-center laptop:max-w-[60%]">
      <div className="flex flex-wrap justify-center items-center gap-2">
        {TECHNOLOGIES.map((el, idx) => {
          return (
            <div
              key={idx}
              className="bg-neutral-500/10 hover:text-zinc-300 hover:bg-neutral-900/10 hover:border-slate-50/30 max-w-fit scale-250 border-[1px] transition-all duration-150 border-slate-50/10   py-[3.4px] px-4 rounded-full"
            >
              {el}
            </div>
          );
        })}
        <span className="bg-neutral-100/10 hover:text-zinc-300 hover:bg-neutral-900/10 hover:border-slate-50/30 max-w-fit scale-250 border-[1px] transition-all duration-150 border-slate-50/10   py-[3.4px] px-4 rounded-full">
          I can use a lot more then just this, if you looking for something
          spetial... LET&apos;S TALK ;)
        </span>
      </div>

      <p className="text-center mt-3 text-neutral-500/50">
        I&apos;m always open for something new...
      </p>

      <h3 className="text-2xl mt-8">Languages</h3>
      <div className="flex flex-wrap justify-center items-center mt-4 gap-2">
        {LANGUAGES.map((el, idx) => {
          return (
            <div
              className="bg-neutral-500/10 hover:text-zinc-300 hover:bg-neutral-900/10 hover:border-slate-50/30 max-w-fit scale-250 border-[1px] transition-all duration-150 border-slate-50/10   py-[3.4px] px-4 rounded-full"
              key={idx}
            >
              {el}
            </div>
          );
        })}
      </div>

      <h3 className="text-2xl mt-8">Tool</h3>
      <div className="flex flex-wrap justify-center items-center mt-4 gap-2">
        {TOOLS.map((el, idx) => {
          return (
            <div
              className="bg-neutral-500/10 hover:text-zinc-300 hover:bg-neutral-900/10 hover:border-slate-50/30 max-w-fit scale-250 border-[1px] transition-all duration-150 border-slate-50/10   py-[3.4px] px-4 rounded-full"
              key={idx}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
}
