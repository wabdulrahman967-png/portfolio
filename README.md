# Abdulrahman Wael Nabil — Cybersecurity Portfolio

A personal portfolio site for **Abdulrahman Wael Nabil**, an Information Technology student specializing in Cybersecurity at Hit Academy, focused on penetration testing and Red Team operations.

Live structure: single-page site with a terminal-themed hero, About, Education & Training timeline, Certification detail, Skills, Project, and Contact.

## Structure

```
.
├── index.html              # All page content/sections
├── css/
│   └── style.css           # Design system (tokens, layout, responsive rules)
├── js/
│   └── script.js           # Terminal boot animation, role typewriter, mobile nav
├── assets/
│   ├── profile.jpeg                     # Photo used in the About section
│   ├── Abdulrahman_Wael_Nabil_CV.pdf    # Downloadable CV (Download CV button)
│   └── Red_Team_Certificate.pdf         # EDUX Academy Red Team certificate (View certificate)
└── README.md
```

## Design

- **Palette:** near-black navy background (`#0A0E14`), signal red accent (`#FF3B3B`) for Red Team/alert moments, muted cyan (`#00D9C0`) for terminal/network accents, slate greys for secondary text.
- **Type:** IBM Plex Mono for headings, labels and terminal text; IBM Plex Sans for body copy.
- **Motif:** the site is framed as a terminal session — section labels read like shell commands (`$ cat about.md`), and the hero includes a simulated `whoami` / `cat` session that types itself out on load.

## Content sources

All copy, links, and credentials are taken directly from the CV and the EDUX Academy Red Team certificate provided:

- Contact: email, phone, GitHub (`wabdulrahman967-png`), TryHackMe (`wabdulrahman967`), LinkedIn (name only — no profile URL was provided, so it is shown as text, not a link).
- Certification topics list matches the certificate exactly (60 hours, Feb 2026 – Jul 2026, Credential ID Ed00001257).
- The Password Security Tool project has no live demo URL in the source CV, so it is marked "Live demo coming soon" rather than linked.

Nothing was invented: no fabricated projects, stats, CVEs, or work experience were added.

## Running locally

No build step — it's static HTML/CSS/JS.

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` directly in a browser.

## Notes for future updates

- To add the LinkedIn URL, project demo link, or work experience later, search `index.html` for the relevant section (`#contact`, `#project`) and add the `href`.
- Colors and type scale are defined as CSS custom properties at the top of `css/style.css` under `:root`.
