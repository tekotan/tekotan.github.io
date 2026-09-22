# Unused and extra items (front-facing scope)

This list focuses on content not currently used by the **front-facing** site as deployed.
Some items are still useful for development or future features.

## Explicitly excluded from the site build

These are excluded via `_config.yml` and do not render into the live site:

- `_pages/about_einstein.md`
- `_pages/blog.md`
- `CONTRIBUTING.md`, `CUSTOMIZE.md`, `FAQ.md`, `INSTALL.md`, `README.md`
- `docker-compose*.yml`, `Dockerfile`, `Gemfile`, `Gemfile.lock`, `package*.json`, `purgecss.config.js`
- `lighthouse_results/`, `readme_preview/`, `bin/`

## Not linked from the current navigation

These are rendered by Jekyll but have no links from the live navbar or homepage:

- Projects index: `_pages/projects.md` (nav is `false`)
- Project pages: `_projects/*.md`
- Blog posts: `_posts/*.md` (blog index is excluded; latest-posts block is commented out)

## Theme sample data not used by current content

- `_data/cv.yml` is not used because the CV layout prefers `site.data.resume` from JSON.
- `_data/coauthors.yml` and `_data/venues.yml` are defaults from the theme; none of the current BibTeX entries match them.
- `_data/repositories.yml` is only used if repository cards are included, which they are not.

## Sample/demo assets not referenced by front-facing pages

- `assets/img/1.jpg` through `assets/img/12.jpg` (used by demo projects/posts).
- `assets/img/prof_pic_color.png` and `assets/img/publication_preview/*` (demo use only).
- `assets/audio/`, `assets/video/`, `assets/plotly/`, `assets/jupyter/`, `assets/bibliography/` (demo post assets).
- Extra CV PDF: `assets/pdf/BaranwalTanish_ResumeJun2025.pdf` (current CV points to the Sep 2025 file).

## Generated artifacts and caches

- `_site/` (Jekyll output)
- `.jekyll-cache/`
- `.tweet-cache/`

## Note on CV content

The markdown body of `_pages/cv.md` is not rendered by `_layouts/cv.liquid`. The CV page uses JSON data from `assets/json/resume.json` instead.
