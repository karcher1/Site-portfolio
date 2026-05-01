# Style guide — Business Analyst RPG Portfolio

## Visual direction

Professional 32-bit RPG interface.

Keywords:

- dark RPG dashboard;
- character profile;
- quest log;
- pixel-inspired cards;
- glowing but restrained accents;
- readable professional typography.

Avoid:

- childish arcade look;
- too many animations;
- unreadable pixel fonts in paragraphs;
- copyrighted game characters or references;
- noisy backgrounds behind text.

## Palette

Use this palette as a starting point:

- Background: `#0B1020`
- Background secondary: `#10162A`
- Surface/card: `#151A2E`
- Surface elevated: `#1D2540`
- Border: `#3B426B`
- Text primary: `#F8FAFC`
- Text secondary: `#CBD5E1`
- Muted text: `#94A3B8`
- Accent green: `#7CFF6B`
- Accent gold: `#FFD166`
- Accent cyan: `#5EEAD4`
- Accent purple: `#A78BFA`
- Danger/alert accent, only if needed: `#FB7185`

## Typography

Recommended:

- Body: Inter, system-ui, Arial, sans-serif
- Display / pixel labels: a pixel-style font if available, but only for short labels and headings

Rules:

- Body copy must remain clean and readable.
- Pixel typography should be used as flavor, not as the main reading experience.
- Use uppercase micro-labels for RPG UI elements like `PLAYER PROFILE`, `CORE STATS`, `COMPLETED QUESTS`.

## UI components

### Panels

Panels should feel like RPG windows:

- dark surface;
- pixel-like border using CSS shadows or stepped corners;
- subtle inner glow;
- no heavy skeuomorphism.

### Buttons

Buttons can look like RPG menu buttons:

- rectangular;
- clear border;
- hover glow;
- visible focus state;
- concise labels.

### Skill bars

Use stat bars or segmented bars.

Example:

- label;
- value;
- horizontal bar;
- short supporting description.

### Inventory cards

Tools should appear as inventory items:

- icon;
- tool name;
- practical usage;
- optional tag.

### Quest cards

Case studies should be structured and scannable:

- quest title;
- challenge;
- role;
- artifacts;
- result;
- tools;
- status.

## Layout

Desktop:

- max width around 1120–1280px;
- hero can use two columns: profile text + avatar/card;
- section spacing should be generous.

Mobile:

- single column;
- keep cards compact;
- avoid horizontal scroll;
- CTAs should be easy to tap.

## Motion

Allowed:

- subtle hover glow;
- small card lift;
- soft animated background gradient;
- blinking cursor only if subtle.

Avoid:

- constant movement;
- aggressive parallax;
- animations that make reading hard.

Respect `prefers-reduced-motion`.
