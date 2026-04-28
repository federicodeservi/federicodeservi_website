# Federico de Servi — Portfolio

Sito-validatore freelance. Astro 5 + Lenis + GSAP + OGL.
Source of truth visiva: [fromanother.love](https://www.fromanother.love/).

Spec completa: `_handoff/00-build-spec.md` (incluso nel ticket).

---

## Stack

- **Framework:** Astro 5 (multi-page, content collections JSON, view transitions native)
- **Smooth scroll:** Lenis 1.x
- **Animation:** GSAP 3.13+ (ScrollTrigger gratis dal 2024)
- **WebGL hover:** OGL (fallback CSS no-WebGL incluso)
- **Cursor:** vanilla JS, `mix-blend-mode: difference`
- **Page transitions:** Astro `<ClientRouter />` + GSAP curtain
- **Fonts:** Switzer + Instrument Serif Italic + JetBrains Mono (self-hosted via Fontsource)
- **Deploy:** GitHub Pages (workflow incluso)

---

## Sviluppo

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

---

## Struttura

```
src/
├── components/        # PageLoader, Cursor, SmoothScroll, Curtain,
│                      # WordsMorph, SectionNumber, Marquee, CaseThumb,
│                      # Reveals, Footer
├── content/
│   ├── config.ts      # Zod schema for work collection
│   └── work/          # 3 JSON case studies
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   └── motion.ts      # reducedMotion / isDesktop guards
├── pages/
│   ├── index.astro    # home: 6 sezioni numerate
│   ├── about.astro
│   ├── contact.astro
│   ├── 404.astro
│   └── work/
│       ├── index.astro
│       └── [slug].astro
└── styles/
    ├── tokens.css     # palette, easings, fluid font-size, layout
    └── base.css       # reset, typography helpers, .btn
```

---

## Aggiungere un case study

1. Crea `src/content/work/<slug>.json` seguendo lo schema in `src/content/config.ts`
2. Aggiorna `order` (1, 2, 3, …)
3. Linkalo dalla home (`src/pages/index.astro`) se è in selected work

---

## Cambiare palette / tipografia

Tutti i tokens vivono in `src/styles/tokens.css`. Niente hardcode altrove.

---

## Microcopy

Tutto in IT. Le label EN (`work`, `about`, `CLIENT/ROLE/YEAR/RESULT`) sono fisse — vedi spec §9.

---

## Deploy

Push su `main` → GitHub Action `withastro/action@v3` → `actions/deploy-pages@v4`.
Repo `Settings → Pages → Source: GitHub Actions`.

---

## Acceptance criteria

Vedi spec §12. In sintesi:

- Lighthouse mobile ≥ 90 perf, ≥ 95 a11y/seo/best-practices
- LCP < 2.5s, CLS < 0.1, TBT < 200ms
- JS bundle initial route < 150kb gz
- `prefers-reduced-motion` rispettato (loader skip, words fade only, no parallax)
- Custom cursor disattivato ≤ 900px
- Tutti i link interni vivi, mailto funzionante
