# AI Usage Report — Assignment 2

## AI Tools Used

- **Claude (Anthropic, Claude Code CLI — model: Sonnet 5)** — the only AI tool used
  for this assignment, in an interactive back-and-forth conversation (not a
  single one-shot generation). How it was used, in order:
  1. Explained Chapter 4/5 (JavaScript fundamentals and JavaScript in the
     Browser) concepts and suggested realistic feature ideas that stay
     within those chapters, so I could decide what to build.
  2. Reviewed code **I wrote myself** for three of the four required features
     (project filter, theme persistence, form validation) line by line,
     confirmed correctness, and made small, explained edits where something
     was inconsistent or would break (see Usage Log below for exactly what
     each edit was).
  3. Designed and wrote the Animation/Transitions feature **for me**, at my
     explicit request — I told Claude I had no idea what to add for
     animations and asked it to propose something and implement it, which
     it did after explaining the plan first.
  4. Ran automated browser tests (Playwright) after every feature and found
     one real bug (native email validation silently blocking my custom
     error message), which it explained and fixed.
  5. Helped assemble this report and the final `README.md`.

## Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|----|--------------|------|---------|-----------------|--------------------------------------------|
| A01 | Claude (Sonnet 5) | 2026-10-25 | Review my HTML/CSS/JS for the **Project Filter** feature (Dynamic Content requirement — filter projects by Completed/In Progress/All) | `index.html`, `css/styles.css`, `js/script.js` | I wrote the filter buttons, `data-status` attributes, filter CSS, and the `filterProjects()` function myself. Claude reviewed it and changed one CSS value (`color: white` → `color: #ffffff`) for consistency with the hex-only color convention used everywhere else in the stylesheet. Everything else in this feature is my unedited code. Verified by re-reading the logic against the HTML and by browser testing (see A05). |
| A02 | Claude (Sonnet 5) | 2026-10-25 | Merge my `localStorage` theme-persistence code into `script.js` (Data Handling requirement) | `js/script.js`, `docs/technical-documentation.md` | I wrote the new `updateTheme()` function and the `localStorage.getItem`/`setItem` calls myself. Claude's only change was replacing the *old* (non-persisted) theme-toggle block in `script.js` with my new one — needed because both blocks declared `const themeToggle`, which would otherwise crash the whole script with a duplicate-declaration error. Claude also removed an outdated line in the technical docs that said dark mode "resets on reload" (no longer true). Verified with an automated browser test: toggled dark mode, reloaded the page, confirmed the theme stayed dark and the button text updated correctly. |
| A03 | Claude (Sonnet 5) | 2026-10-25 | Design and write the **Animation/Transitions** feature from scratch (Animation requirement) | `css/styles.css`, `docs/technical-documentation.md` | I told Claude I had no idea what animation to add and asked it to propose and build one. Claude explained the plan first (smooth `transition` on hover for nav links/buttons/project cards, plus a `@keyframes fadeIn` animation on the hero section on page load) before writing anything, I approved it, then Claude wrote the CSS. **This is the one feature in this assignment where the code itself — not just a review or an edit — was written by the AI.** I verified it by watching it work in the browser screenshots and by checking the computed `transition-property`/`animation-name` values in a Playwright test. |
| A04 | Claude (Sonnet 5) | 2026-10-25 | Review my per-field **contact form validation** code (Error Handling & User Feedback requirement) | `js/script.js`, `css/styles.css`, `docs/technical-documentation.md` | I wrote the full `if/else if` validation chain myself (separate messages for empty name, empty email, invalid email format, empty message, plus a success message), including `.trim()` and the `.includes('@')`/`.includes('.')` email check — Claude made zero edits to this logic. Claude's only change was swapping my `formStatus.style.color = 'red'/'green'` for `formStatus.className = 'form-status error'/'success'` with matching CSS rules, to match the project's existing "JS toggles a class, CSS owns the colors" pattern (same reasoning as the A01 fix). Verified with a Playwright test covering every validation path. |
| A05 | Claude (Sonnet 5) | 2026-10-25 | Full browser testing of all four features before considering the assignment done | `index.html` | Claude wrote and ran an automated Playwright test script covering the filter, theme persistence (including a real page reload), mobile nav, animations, and every contact-form validation path. It found a real bug: because the email `<input>` uses `type="email"`, the browser's own built-in validation silently blocked the form's `submit` event whenever the email looked invalid — so my custom "Please enter a valid email." message could never actually appear in a real browser, even though the JavaScript logic for it was correct. Claude explained this, fixed it by adding `novalidate` to the `<form>` tag (consistent with the assignment's design choice of letting JavaScript handle all validation), then re-ran the full test suite to confirm every path — including the previously-broken one — now works. |

## AI Usage Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Hammad Albalawi
**ID:** 202340110
**Date:** 2026-10-25

## What I Wrote Myself vs. What the AI Wrote

Being precise about this, since it matters for academic integrity:

- **Written entirely by me, reviewed by Claude**: the project filter (HTML +
  CSS + JS), the `localStorage` theme persistence logic, and the entire
  contact-form validation logic. In every one of these, Claude's edits were
  small, explained, consistency-only changes (one CSS color value, merging
  a duplicate block, swapping inline styles for a CSS class) — never a
  change to my actual logic.
- **Written by Claude, at my explicit request**: the Animation/Transitions
  feature (hover `transition`s and the `fadeIn` `@keyframes` animation). I
  asked Claude to design and build this one because I didn't have a
  starting idea, after it explained what it planned to do and why, before
  writing any code.
- **Found and fixed by Claude during testing**: the `novalidate` fix for
  the email-validation bug described in A05.

## Benefits & Challenges

**Benefits**
- Having Claude review code I wrote myself caught two real issues I
  wouldn't have noticed on my own: a color-consistency slip (`white` vs.
  `#ffffff`) and, much more importantly, a real functional bug (the native
  email validation silently swallowing my form submission) that only
  showed up under actual browser testing, not by reading the code.
- For the one feature I had no idea how to approach (animations), asking
  Claude to explain its plan *before* writing any code let me understand
  the two CSS concepts involved (`transition` and `@keyframes`) well enough
  to extend them myself later, instead of just getting a black box.

**Challenges**
- Staying disciplined about writing the core logic myself first, and only
  asking for a review, took more time than asking Claude to generate
  everything up front — but it's the reason I can explain every line below.
- Merging new code into an existing file without creating duplicate
  variable declarations (as happened with the `localStorage` theme code)
  is a real, easy-to-miss mistake when adding a feature that touches
  something already in the file.

## Learning Outcomes

- Learned how `localStorage.getItem`/`setItem` work, that they only store
  strings, and how to use a stored value to set initial state on page load.
- Learned the difference between a CSS `transition` (smooths a property
  change that already happens, like `:hover`) and a `@keyframes` animation
  (defines a sequence of states that plays automatically).
- Learned that `<input type="email">` triggers native browser validation
  even without `required`, and that `novalidate` on the `<form>` is needed
  to hand full control to custom JavaScript validation — something that
  never came up with `type="text"` inputs.
- Practiced reading and verifying someone else's (the AI's) explanation of
  *why* a change was needed, not just accepting it — e.g. asking for and
  understanding the exact mechanism behind the duplicate-`const` crash risk
  before agreeing to the merge.

## Responsible Use & Understanding

I can explain every feature in this project:
- The project filter, theme persistence, and form validation logic are
  mine — I wrote them, Claude only reviewed and made small consistency
  edits, each explained to me before being applied.
- The animation feature's CSS (`transition`, `@keyframes fadeIn`) was
  written by Claude at my request, and Claude explained what each property
  does and why, before writing it, so I can explain it too.
- I tested every feature myself in the rendered site (not just by reading
  code), and reviewed the automated browser test results Claude produced
  before accepting the work as done.

This is disclosed per the assignment's academic integrity policy: AI use in
this assignment is fully declared above, nothing here is submitted as
unmodified AI output represented as entirely my own unassisted work, and I
take responsibility for understanding and being able to explain the
resulting solution.
