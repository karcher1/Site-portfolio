# AGENTS.md

## Project identity

This project is a personal portfolio website for a Business Analyst using a **Business Analyst RPG Portfolio** concept.

The site should feel like a professional 32-bit RPG character profile, not like a childish arcade game.

Core metaphor:

> A Business Analyst turns unclear business needs into clear requirements, process maps, user stories, and delivery-ready solutions.

## Read these files before coding

Before implementing or changing anything, read:

1. `docs/01-project-brief.md`
2. `docs/02-content-ru.md`
3. `docs/03-style-guide.md`
4. `docs/04-assets-manifest.md`
5. `docs/05-codex-tasks.md`

## Expected tech stack

Use:

- React
- TypeScript
- Vite
- Tailwind CSS

Do not add heavy UI frameworks unless explicitly requested.

## Architecture preferences

Create a clean, editable structure:

- `src/components/` — reusable UI components
- `src/sections/` — page sections
- `src/data/portfolioContent.ts` — all editable content
- `src/styles/` or Tailwind config — design tokens and shared style rules
- `public/assets/` — generated static assets

The site is a single-page landing portfolio. Routing is not needed.

## Visual rules

- Use a dark professional background.
- Use pixel-inspired panels, borders, labels, icons, and stat cards.
- Use pixel-style typography only for short headings, labels, buttons, or UI chips.
- Use a readable sans-serif font for body text.
- Do not place body text inside generated images.
- Do not use copyrighted game characters, logos, or direct references to existing games.
- Do not make the UI childish, noisy, or hard to read.
- Use generated assets only as supporting visuals; the portfolio content must stay clear and professional.

## UX rules

The visitor should understand within 30 seconds:

- who the person is;
- what business analysis problems they solve;
- which skills and tools they use;
- what project/case-study experience they have;
- how to contact them.

## Accessibility and quality

- Keep strong color contrast.
- Make the layout responsive for desktop, tablet, and mobile.
- Ensure keyboard-focus states are visible.
- Use semantic HTML where possible.
- Avoid excessive animations.
- Respect `prefers-reduced-motion` if adding motion.

## Quality checks

After implementation, run available checks, typically:

- `npm run build`
- `npm run lint` if configured
- `npm run test` if tests are configured

If a command fails, fix the issue or clearly explain why it could not be fixed.

## Reporting format

At the end of each task, summarize:

- files changed;
- key implementation decisions;
- commands run;
- remaining issues or assumptions.
