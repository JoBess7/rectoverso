# Project guidance

## Context
This is an iterative rebuild of the French-language public website for Clinique Recto Verso in Québec. Preserve the clinic's existing identity, navigation, and factual content unless the owner approves a change. The current Next.js homepage is an early visual iteration; the CMS and hosting architecture remain undecided.

## Working principles
- Use Next.js App Router and TypeScript. Keep the project understandable and avoid unnecessary dependencies.
- Keep design tokens in `app/globals.css`; build and review layouts at phone, tablet, and desktop widths.
- Use `next/image` for local raster photography, semantic HTML, keyboard-operable controls, visible focus states, and reduced-motion support.
- Use the assets in `public/assets/` and preserve their supplied brand colors and font files.
- Do not invent clinic facts, staff, services, addresses, booking URLs, or policies. Verify public-facing content against the current site and owner-provided assets.
- Never collect patient or medical information through this site.
- Keep copy and presentation separate as the content model grows; preserve French Canadian accents and typography.
- Keep the static first pass in `archive/static-prototype/` as a reference; do not restore it as the app entry point.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
