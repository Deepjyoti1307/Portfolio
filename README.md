# Deepjyoti Dey — Developer Portfolio

Personal portfolio of **Deepjyoti Dey**, a Full-Stack Developer and CS undergraduate at RCCIIT, Kolkata. Built with a **Cyberpunk / Glitch design system** — neon accents, CRT scanlines, 3D card tilt, and chromatic aberration effects.

🔗 **Live:** [https://deepjyoti-dey-1307.vercel.app/](https://deepjyoti-dey-1307.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Vanilla CSS + CSS custom properties |
| Fonts | Orbitron · Share Tech Mono · JetBrains Mono |
| Icons | Lucide React |
| Deploy | Vercel |

---

## Sections

- **Hero** — intro, profile photo, CV download, social links
- **Projects** — Tarang, Eventic, Murder Mystery (3D tilt cards, live links)
- **Skills** — scrolling marquee of tech stack
- **Experience** — GoAvo internship (terminal log style)
- **Education & Activities** — academic background and club roles

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens, animations, glitch-btn
│   ├── layout.tsx       # Font loading, metadata
│   └── page.tsx         # Page assembly
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Projects, Skills, Experience, Education
│   └── ui/              # Button, Card, SectionLabel
└── lib/
    └── content.ts       # All hardcoded portfolio data
```

---

## Content Updates

All portfolio content lives in [`src/lib/content.ts`](src/lib/content.ts) — edit that single file to update personal info, projects, experience, and social links.

---

## License

MIT — free to use as a portfolio template with attribution.
