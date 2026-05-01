# Assets manifest

Generate assets separately and place them in `public/assets/...` using the file names below.

Important:

- Do not generate text inside images.
- Use transparent background for icons, badges, and avatar when possible.
- Keep a consistent 32-bit RPG / pixel art style.
- Do not use copyrighted game characters, game logos, or recognizable game UI.
- Labels and readable text should be rendered in HTML/CSS, not in the image.

## Required assets

| File path | Size | Format | Purpose |
|---|---:|---|---|
| `public/assets/avatar/ba-avatar.png` | 1024×1024 | PNG/WebP | Main player avatar |
| `public/assets/backgrounds/hero-map.webp` | 1920×1080 | WebP | Low-contrast hero background |
| `public/assets/patterns/pixel-texture.webp` | 512×512 | WebP | Subtle repeating texture |
| `public/assets/icons/icon-profile.png` | 512×512 | PNG/WebP | Profile section icon |
| `public/assets/icons/icon-stats.png` | 512×512 | PNG/WebP | Skills section icon |
| `public/assets/icons/icon-inventory.png` | 512×512 | PNG/WebP | Tools section icon |
| `public/assets/icons/icon-quests.png` | 512×512 | PNG/WebP | Case studies section icon |
| `public/assets/icons/icon-achievements.png` | 512×512 | PNG/WebP | Achievements section icon |
| `public/assets/icons/icon-contact.png` | 512×512 | PNG/WebP | Contact section icon |
| `public/assets/cases/case-reporting.webp` | 800×600 | WebP | Quest card illustration: reporting automation |
| `public/assets/cases/case-crm.webp` | 800×600 | WebP | Quest card illustration: CRM process |
| `public/assets/cases/case-portal.webp` | 800×600 | WebP | Quest card illustration: client portal |
| `public/assets/brand/favicon.png` | 256×256 | PNG | Favicon source |
| `public/assets/brand/og-image.webp` | 1200×630 | WebP | Social preview image |

## Optional assets

| File path | Size | Format | Purpose |
|---|---:|---|---|
| `public/assets/badges/badge-requirements.png` | 512×512 | PNG/WebP | Achievement badge |
| `public/assets/badges/badge-stakeholders.png` | 512×512 | PNG/WebP | Achievement badge |
| `public/assets/badges/badge-process.png` | 512×512 | PNG/WebP | Achievement badge |
| `public/assets/badges/badge-data.png` | 512×512 | PNG/WebP | Achievement badge |
| `public/assets/badges/badge-delivery.png` | 512×512 | PNG/WebP | Achievement badge |

## Generation prompts

### Main avatar

Prompt:

```text
32-bit pixel art portrait of a modern business analyst as an RPG character, smart casual outfit, holding a tablet and a scroll with diagrams, confident but friendly expression, subtle fantasy RPG character profile style, dark navy and gold palette, clean silhouette, transparent background, no text, no logos, no copyrighted characters, high detail pixel art
```

Negative prompt:

```text
no text, no watermark, no brand logos, no existing game characters, no blurry face, no extra fingers, no childish cartoon style
```

### Hero background

Prompt:

```text
dark 32-bit pixel art RPG world map inspired by business analysis, abstract process roads, small nodes, document scrolls, dashboard crystals, data towers, stakeholder village, subtle fog of war, dark navy background, low contrast, cinematic but not busy, suitable as website hero background, no text, no logos, no copyrighted game references
```

Negative prompt:

```text
no text, no labels, no logos, no characters, no bright noisy colors, no existing game map
```

### Pixel texture

Prompt:

```text
seamless dark pixel art texture for a professional RPG interface, subtle navy and charcoal pattern, low contrast, tiny pixel noise, suitable as repeating website background, no text, no logos
```

### Section icons pack

Generate each icon separately or as a consistent pack.

Shared prompt prefix:

```text
32-bit pixel art icon, transparent background, professional RPG interface style, dark navy gold cyan palette, crisp silhouette, no text, no logos, no copyrighted references
```

Individual icon ideas:

- `icon-profile.png`: character profile card with small portrait frame
- `icon-stats.png`: RPG stat bars and small chart
- `icon-inventory.png`: inventory bag with analysis tools
- `icon-quests.png`: quest board with pinned scrolls
- `icon-achievements.png`: medal or trophy badge
- `icon-contact.png`: glowing portal or message scroll

### Case illustration — reporting automation

Prompt:

```text
32-bit pixel art illustration of a business reporting automation quest, dark RPG interface style, dashboard crystals connected to data nodes, scrolls transforming into charts, professional navy gold cyan palette, no text, no logos, no copyrighted references
```

### Case illustration — CRM process

Prompt:

```text
32-bit pixel art illustration of a CRM process improvement quest, abstract customer journey path, stakeholder village, workflow gates, connected cards, professional dark RPG palette, no text, no logos, no copyrighted references
```

### Case illustration — client portal

Prompt:

```text
32-bit pixel art illustration of a client portal quest, glowing portal interface, user journey path, status checkpoints, service desk icons, professional dark RPG palette, no text, no logos, no copyrighted references
```

### Achievement badges

Shared prompt prefix:

```text
32-bit pixel art achievement badge, transparent background, professional RPG UI style, dark navy gold cyan palette, no text, no logos, no copyrighted references
```

Badge ideas:

- requirements scroll;
- stakeholder handshake;
- process map compass;
- data crystal;
- delivery shield.

### Favicon

Prompt:

```text
simple 32-bit pixel art favicon icon, quest compass combined with document scroll, dark navy background, gold and green accents, clean silhouette, no text, no logos
```

### Open Graph image

Prompt:

```text
wide 32-bit pixel art website preview image for a Business Analyst RPG Portfolio, dark professional RPG dashboard, character profile card, quest log, stats and inventory panels, navy gold cyan palette, no readable text, no logos, no copyrighted references, clean composition with empty space for HTML overlay
```
