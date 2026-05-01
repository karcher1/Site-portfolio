# Codex tasks

Use these tasks in order. Start Codex from the project root.

## Task 1 — Initialize the local project

```text
You are in the root folder of a new portfolio project.

First, read:
- AGENTS.md
- docs/01-project-brief.md
- docs/02-content-ru.md
- docs/03-style-guide.md
- docs/04-assets-manifest.md

Create a new React + TypeScript + Vite + Tailwind CSS single-page portfolio project in the current directory.

Important:
- Do not delete the existing docs folder.
- Do not delete public/assets.
- If the Vite generator refuses to initialize because the directory is not empty, create the project files manually.
- Use a clean structure:
  - src/components
  - src/sections
  - src/data/portfolioContent.ts
  - src/styles if needed
- Store all editable portfolio content in src/data/portfolioContent.ts.
- Use placeholder asset paths from docs/04-assets-manifest.md even if actual files are not present yet.
- Implement only the basic foundation and layout shell in this task.
- Run npm install if needed.
- Run npm run build and fix errors.

At the end, summarize changed files and commands run.
```

## Task 2 — Implement the RPG visual system

```text
Implement the professional 32-bit RPG-inspired visual design for the portfolio.

Read AGENTS.md and docs/03-style-guide.md before coding.

Design requirements:
- dark professional background;
- pixel-inspired panels and borders;
- RPG section labels;
- hero as a Player Profile card;
- skill stat bars;
- inventory-style tool cards;
- quest-style case study cards;
- achievement badges/cards;
- contact section as Start a Quest;
- responsive layout for desktop, tablet, and mobile;
- visible focus states;
- readable body text.

Keep the style playful but suitable for recruiters and hiring managers.
Do not overuse pixel fonts.
Do not make long paragraphs look pixelated.
Run npm run build and fix errors.

At the end, summarize changed files, design decisions, and commands run.
```

## Task 3 — Connect generated assets

```text
Connect generated assets from public/assets according to docs/04-assets-manifest.md.

Requirements:
- use ba-avatar.png in the hero/player profile area;
- use hero-map.webp as a subtle background layer;
- use pixel-texture.webp as a subtle page or panel texture if it does not reduce readability;
- use section icons where appropriate;
- use case illustrations in Completed Quests cards;
- use badges if files are present;
- gracefully handle missing optional assets with CSS fallback or text/icon fallback;
- do not hardcode external image URLs.

Make sure images have useful alt text or empty alt text when decorative.
Run npm run build and fix errors.

At the end, summarize changed files and any missing assets.
```

## Task 4 — Improve content and recruiter clarity

```text
Review the portfolio from the perspective of a recruiter and hiring manager.

Read docs/01-project-brief.md and docs/02-content-ru.md.

Improve:
- hero clarity;
- section headings;
- case study scannability;
- CTA wording;
- mobile readability;
- visual hierarchy.

Do not change the fixed concept: Business Analyst RPG Portfolio.
Keep the text in Russian for now.
Keep all content editable in src/data/portfolioContent.ts.
Run npm run build and fix errors.

At the end, summarize what you improved and why.
```

## Task 5 — Add metadata, README, and deployment readiness

```text
Prepare the project for first deployment.

Please:
- add page title and meta description;
- add Open Graph metadata using public/assets/brand/og-image.webp if available;
- add favicon using public/assets/brand/favicon.png if available;
- update README.md with:
  - how to install dependencies;
  - how to run locally;
  - how to edit portfolio content;
  - how to replace assets;
  - how to build for production;
- ensure there are no placeholder external links that look real;
- ensure production build succeeds.

Run npm run build and fix errors.

At the end, summarize deployment readiness and remaining manual steps.
```

## Task 6 — Final QA pass

```text
Do a final QA pass for the portfolio.

Check:
- responsive layout;
- broken images;
- contrast/readability;
- hover/focus states;
- semantic HTML;
- missing alt text;
- spelling and consistency in Russian content;
- build errors.

Run all available checks.
If there is no lint/test command, say so and do not invent one.

At the end, provide a concise QA report with:
- passed checks;
- fixed issues;
- remaining recommendations.
```
