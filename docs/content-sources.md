# Content sources

This file lists the primary content inputs and how they map into rendered pages.

## Pages and collections

- Pages live in `_pages/` and are included because `_config.yml` sets `include: ["_pages"]`.
- News entries live in `_news/` (collection `news`).
- Projects live in `_projects/` (collection `projects`).
- Blog posts live in `_posts/` (collection `posts`).

## Publications

- BibTeX source: `_bibliography/papers.bib`.
- Layout: `_layouts/bib.liquid`.
- Filters and options are configured under `scholar:` in `_config.yml`.

## Resume / CV data

- JSON resume file: `assets/json/resume.json`.
- Loaded into `site.data.resume` via `jekyll_get_json` in `_config.yml`.
- Rendered by `_layouts/cv.liquid` using includes in `_includes/resume/`.

## Data files

- `_data/coauthors.yml`: Used by publication rendering when author names match.
- `_data/venues.yml`: Used by publication rendering for venue badges/colors.
- `_data/repositories.yml`: Used by repository cards if included.
- `_data/cv.yml`: Used by the CV layout only if `site.data.resume` is not present.

## Media

- Profile + news images: `assets/img/`.
- CV PDF downloads: `assets/pdf/`.
- Audio/video/plotly/jupyter demo assets: `assets/audio`, `assets/video`, `assets/plotly`, `assets/jupyter`.

