# Tobams Group Website

A single-page marketing site for Tobams Group, rebuilt from the [Figma design](https://www.figma.com/file/wuqCLKk1feTgB6xxSRRwZu). The whole point was to get as close to the design as possible: the type sizes, line heights, colors, spacing, and hover behavior all come from the source file rather than being approximated by eye.

The page is made up of self-contained sections, each in its own component:

- Header with dropdowns and a mobile menu
- Hero
- Learning Management System (TG Academy)
- Corporate trainings, individual training, and capacity development
- Management Development Program
- Transformation Hub webinar (Learning With Our CEO)
- Training the Consultant
- CTA
- Testimonials
- Footer

## Stack

- [Next.js](https://nextjs.org) (App Router) with TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 for styling
- Nunito and Nunito Sans loaded with `next/font`, so the fonts match the design and there's no layout shift while they load

## Running it

Requires a recent LTS version of Node.js (18.18 or newer).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Useful scripts:

| Command        | What it does                       |
| -------------- | ---------------------------------- |
| `npm run dev`  | Start the dev server              |
| `npm run build`| Create a production build         |
| `npm run lint` | Run ESLint                        |

## How it was built

A few notes on the approach, because the details matter:

- The design data was pulled directly from the Figma file through the Figma REST API. That gave exact font sizes, weights, line heights, letter spacing, colors, and frame dimensions, which were then mapped onto Tailwind utilities. Most of the arbitrary-looking values in the classNames come straight from that data.
- Colors are limited and consistent (the brand purple `#571244`, accent red `#ef4353`, and a few neutrals), defined once as theme tokens so the palette can't drift.
- A few parts of the Figma file were messy — duplicate text layers, overlapping frames, stale variants. Where the raw file was ambiguous, I went with what actually renders correctly on the page rather than blindly copying the node data.
- The layout is responsive at mobile and desktop; several sections have their own distinct treatment at each breakpoint.

## Project structure

```
public/images       Design assets used by the sections
src/app             Next.js App Router entry point (layout, page, global styles)
src/components      One component per section + a shared icons file
```

## Deploying

The site is a fully static Next.js build, so it deploys cleanly to Vercel or Netlify. Push the repo and connect it, or run `npm run build` and host the output anywhere static files are served.

## AI usage disclosure

To be upfront about it: AI tooling was used to build this. I used Claude, working through an opencode coding agent, to write and iterate on the React components, translate the Figma export into Tailwind classes, and catch small fidelity gaps against the design (things like a wrong line height or a missing gap). The work was reviewed before landing, and the repository passes `tsc`, ESLint, and a production build. The Figma access token used during development was kept out of version control.