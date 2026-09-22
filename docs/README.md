# Docs index

This folder documents the current structure of the repository and the live site.
Crawl date for the live site: 2026-01-17.

## Where to look

- `docs/site-structure.md`: Top-level repo map and how Jekyll renders the site.
- `docs/front-facing-components.md`: What is currently visible on tekotan.github.io and where it comes from.
- `docs/content-sources.md`: Content inputs (pages, collections, data files, bibliography, resume JSON).
- `docs/assets-and-styling.md`: CSS/JS, images, fonts, and other static assets.
- `docs/deployment-usage-implementation.md`: Build, deployment, and implementation conventions.
- `docs/unused-and-extra.md`: Files and assets not currently used by front-facing components.

## Quick map of the live site

- Home (About): `_pages/about.md` + `_layouts/about.liquid`
- Publications: `_pages/publications.md` + `_bibliography/papers.bib`
- CV: `_pages/cv.md` + `assets/json/resume.json` (via `jekyll_get_json`)
- News listing: `_pages/news.md` + `_news/*.md`
