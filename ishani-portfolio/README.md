# Ishani | Portfolio Website

Personal portfolio of **Ishani**, Computer Science undergraduate (Class of 2027) and aspiring full-stack developer.

**Sections:** Hero, About, Skills (animated marquee), Projects, Contact.
Built with plain **HTML, CSS and JavaScript**. No frameworks and no build step.

## Project structure

```
ishani-portfolio/
├── index.html
├── css/
│   ├── base.css         # reset, navbar, scroll progress
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── contact.css
│   └── animations.css   # load + scroll-reveal animations
├── js/
│   ├── config.js        # << edit your links / file paths here
│   ├── main.js          # navbar, scroll, animations, link wiring
│   └── skills.js        # skills list + marquee
└── assets/
    ├── images/          # hero illustration, photo, project thumbnails
    └── resume/          # Ishani_Resume.pdf
```

## Run locally

Just open `index.html` in a browser. (Internet is needed for Google Fonts.)

## Customise

| What | Where |
|---|---|
| GitHub / LinkedIn / email / resume / project links | `js/config.js` |
| Project thumbnails | replace files in `assets/images/projects/` (same names) |
| Resume | replace `assets/resume/Ishani_Resume.pdf` |
| Skills shown in the marquee | `js/skills.js` (`row1`, `row2`) |
| Text of About / Projects | `index.html` |
| Colours and fonts | CSS variables at the top of each file in `css/` |

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings, Pages**.
3. Under **Source** choose **Deploy from a branch**, then branch `main` and folder `/ (root)`.
4. Save. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Author

**Ishani** · [LinkedIn](https://www.linkedin.com/in/ishani-cse) · [GitHub](https://github.com/ishani-cse)
