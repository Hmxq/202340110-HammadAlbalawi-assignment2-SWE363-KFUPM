# Hammad Albalawi — Personal Portfolio (Assignment 2)

A personal portfolio website, continuing from Assignment 1, with added
interactivity and dynamic behavior for Assignment 2: a project filter,
persisted theme preference, hover/fade-in animations, and per-field form
validation.

## Features

### Carried over from Assignment 1
- **About Me** section with a short intro and tagline.
- **Projects** section featuring the Bank Management System (C++) and a
  Hospital Management System (Java).
- **Skills** section listing core technologies.
- **Time-based greeting** ("Good morning/afternoon/evening") generated with JavaScript.
- **Responsive design** using CSS Flexbox — tested on desktop, tablet, and mobile widths.
- **Mobile navigation menu** with a toggle button.

### New in Assignment 2
- **Project filter** — "All Projects" / "Completed" / "In Progress" buttons
  show/hide project cards based on a `data-status` attribute.
- **Persisted dark/light theme** — the chosen theme is saved to
  `localStorage` and automatically re-applied the next time the page loads.
- **Hover transitions & fade-in animation** — smooth color/transform
  transitions on buttons, links, and project cards, plus a fade-in effect
  on the hero section when the page loads.
- **Per-field contact form validation** — specific error messages for a
  missing name, missing email, invalid email format, or missing message,
  color-coded red/green, with no backend involved.

## Project Structure

```
.
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup Instructions (Run Locally)

No build tools or dependencies are required — this is a static HTML/CSS/JS site.

1. Clone the repository:
   ```bash
   git clone https://github.com/Hmxq/202340110-HammadAlbalawi-assignment2-SWE363-KFUPM.git
   cd 202340110-HammadAlbalawi-assignment2-SWE363-KFUPM
   ```
2. Open `index.html` directly in your browser, **or** serve it locally for a
   more accurate preview:
   ```bash
   # Python 3
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```
3. That's it — no installation, no dependencies.

## AI Usage

This project was built with help from an AI assistant (Claude, Sonnet 5).
Three of the four Assignment 2 features (project filter, theme persistence,
form validation) were written by me and reviewed by Claude, which made small,
explained consistency edits. The Animation/Transitions feature was written
by Claude at my explicit request, after it explained its plan to me first.
Claude also found and fixed a real bug during browser testing (native email
validation silently blocking the custom error message). Full details,
including a row-by-row usage log, are in
[`docs/ai-usage-report.md`](docs/ai-usage-report.md). Technical
implementation notes are in
[`docs/technical-documentation.md`](docs/technical-documentation.md).

## Tech Stack

- HTML5 (semantic markup, `data-*` attributes)
- CSS3 (Flexbox, media queries, transitions, `@keyframes` animations)
- Vanilla JavaScript (no frameworks), including the Web Storage API (`localStorage`)

## License

This project is for educational purposes as part of a course assignment.
