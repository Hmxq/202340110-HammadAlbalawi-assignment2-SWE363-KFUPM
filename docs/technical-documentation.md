# Technical Documentation

## Overview

This is a static, single-page portfolio built with plain HTML, CSS, and
JavaScript — no frameworks, build tools, or external libraries beyond a
Google Fonts stylesheet. This version builds on Assignment 1 by adding
interactive features for Assignment 2.

## File Structure

| Path                          | Purpose                                            |
| ------------------------------ | --------------------------------------------------- |
| `index.html`                  | Page markup — Home/Hero, About, Projects, Skills, Contact sections. |
| `css/styles.css`               | All styling: layout, colors, responsive rules, dark/light theme. |
| `js/script.js`                 | Interactivity: nav toggle, theme toggle, greeting, contact form handling, project filter. |
| `assets/images/`               | Placeholder SVG images (profile + project thumbnails). |
| `docs/ai-usage-report.md`      | AI tool usage documentation. |
| `docs/technical-documentation.md` | This file. |

## HTML Structure

The page is a single `index.html` with five main sections, each identified
by an `id` used for navigation:

1. `#home` — hero section with greeting, name, tagline, and buttons.
2. `#about` — short bio and profile image.
3. `#projects` — list of project cards (image, title, description, tags),
   plus a filter control (`.project-filters`) above the card list.
4. `#skills` — list of core skills/technologies.
5. `#contact` — a client-side-only contact form.

Basic semantic elements (`header`, `nav`, `main`, `section`, `footer`) are
used to keep the structure clear and readable. Each project card carries a
`data-status` attribute (`completed` or `progress`) used by the filter
feature.

## CSS Architecture

- **Colors**: plain hex color values, kept consistent across the page
  (e.g. `#4f46e5` as the main accent color).
- **Layout**: Flexbox (`display: flex`, `flex-wrap: wrap`, `gap`) is used
  throughout — the navbar, the About section, the project cards, the
  skills list, and the hero buttons — so the layout wraps naturally on
  smaller screens.
- **Dark mode**: a `.dark-mode` class is added to `<body>` by JavaScript;
  CSS rules under `body.dark-mode` override the background and text colors
  for the header, sections, cards, and form fields.
- **Responsiveness**: two `@media` breakpoints (`max-width: 768px` for the
  mobile navigation menu, `max-width: 480px` for tighter spacing on small
  phones).
- **Animations** (Assignment 2): `transition` is used on nav links, buttons,
  project filter buttons, and project cards so hover color/transform changes
  are smooth instead of instant. A `fadeIn` `@keyframes` animation plays once
  on the hero section when the page loads (fade + slight upward slide).

## JavaScript Behavior

`js/script.js` contains the following independent features:

1. **Mobile navigation toggle** — a `click` listener on the menu button
   toggles an `.open` class on the nav list.
2. **Dark/light theme toggle** — a `click` listener toggles a `.dark-mode`
   class on `<body>` and updates the button's text ("Dark Mode" /
   "Light Mode"). The chosen theme is saved to `localStorage` and re-applied
   automatically the next time the page loads.
3. **Time-of-day greeting** — uses `new Date().getHours()` with a simple
   `if / else if / else` to show "Good morning!", "Good afternoon!", or
   "Good evening!" above the hero heading.
4. **Contact form handling** — listens for the form's `submit` event, calls
   `event.preventDefault()`, then checks each field individually (name,
   email, email format via `.includes('@')`/`.includes('.')`, message) with
   `if / else if`, showing a specific error message for the first problem
   found. A `.form-status` class (`error` red / `success` green) is toggled
   to color-code the feedback. No data is sent anywhere (no backend, as per
   assignment scope).
5. **Footer year** — sets the copyright year using `new Date().getFullYear()`.
6. **Project filter** (Assignment 2) — reads each project card's
   `data-status` attribute via `.dataset.status` and shows/hides cards
   based on which filter button (`All`, `Completed`, `In Progress`) was
   clicked.

## Browser/Device Testing

Manually verified via browser DevTools responsive mode at:
- Desktop (≥1200px)
- Tablet (~768px)
- Mobile (~375px)

## Known Limitations

- The contact form does not send data anywhere (by design — the assignment
  does not require a backend).
- Images are lightweight placeholder SVGs; they should be replaced with
  real project screenshots and a real profile photo in future iterations.
