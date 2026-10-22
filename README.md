# Abdul Haq — Growth Engineer

A responsive, single-page portfolio built with React, TypeScript and Vite.

## Stack

- **React + TypeScript** for the portfolio UI and the small interactive growth-practice map.
- **Vite** for local development and static production builds.
- **CSS design tokens and component styles** for the art-directed layout; Tailwind is not needed for this implementation.
- **Lucide React** for interface icons.

This is intentionally a static site with no server or database to maintain. The case-study content is separate from the page rendering, so projects can be updated without changing the components. The stack can later consume a CMS API without requiring a UI rewrite. Consider a CMS when non-developers need to publish directly; consider Astro or another static-site framework if each case study needs its own statically rendered, search-optimised page. Neither is needed for the current six-project, single-page portfolio.

## Update projects

Edit the project entries in [`src/content/projects.ts`](src/content/projects.ts). Each entry has a TypeScript-checked shape:

- `number`, `title`, `client`, `category`, and `description` identify the work.
- `context`, `role`, `execution`, `outcome`, and `reflection` provide the case-study narrative.
- `visual` selects one of the existing treatments: `system`, `resume`, `dashboard`, `web`, `web-two`, or `brand`.
- `label` makes clear when a visual is illustrative rather than a real product screenshot.

To add a project, copy an entry, update its content, use the next number, and select a visual treatment. Add a new `ProjectVisual` and matching visual component in `src/App.tsx` only when the project needs a genuinely new treatment. Keep metrics, client details, links and outcomes grounded in verified information; the website frames and identity board are illustrative portfolio studies, not screenshots or client deliverables.

The two website entries are currently placeholders for project names, live URLs, screenshots and outcomes. Replace them in `src/content/projects.ts` with the real details and genuine site imagery before publishing. The identity board is explicitly a self-directed concept, not a client logo. The contact section uses the supplied email and LinkedIn profile; no phone number is displayed.

## Local development

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
npm run preview
```

The production-ready static output is written to `dist/`.

## Deploy

The site can be hosted on any static host, including Cloudflare Pages, Netlify, or Vercel. Configure the build command as `npm run build` and the output directory as `dist`. No environment variables or server runtime are required. Configure the chosen host to serve `index.html` for `/`.

The canonical URL is intentionally omitted until the final production domain is known. Add it to `index.html` when that domain is verified.