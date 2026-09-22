# Front-facing components (live site)

This section describes what is visible on the deployed site and where it is sourced in the repo.
Crawl date: 2026-01-17.

## Navigation and global UI

- Navbar entries are built from pages that have `nav: true` in their front matter.
  - Logic lives in `_includes/header.liquid`.
- Global UI elements (search modal, dark-mode toggle, progress bar) are enabled by flags in `_config.yml`.

## Home / About ( `/` )

Source files:

- `_pages/about.md`
- `_layouts/about.liquid`
- `_includes/news.liquid`
- `_includes/selected_papers.liquid`

Behavior notes:

- The profile block is driven by `profile` front matter in `_pages/about.md`.
- The homepage includes the **News** list and **Selected publications**.
- The **Latest posts** block is commented out in `_layouts/about.liquid`.

## Publications ( `/publications/` )

Source files:

- `_pages/publications.md`
- `_bibliography/papers.bib`
- `_layouts/bib.liquid`

Behavior notes:

- `jekyll-scholar` renders entries from `papers.bib`.
- `selected: true` entries are used for the homepage “Selected publications” list.

## CV ( `/cv/` )

Source files:

- `_pages/cv.md`
- `_layouts/cv.liquid`
- `assets/json/resume.json` (loaded by `jekyll_get_json` in `_config.yml`)

Behavior notes:

- The layout prefers `site.data.resume` (JSON resume) when available.
- The markdown body of `_pages/cv.md` is not rendered because the layout does not include `{{ content }}`.

## News ( `/news/` and `/news/*` )

Source files:

- `_pages/news.md`
- `_news/*.md`
- `_includes/news.liquid`

Behavior notes:

- Inline announcements (`inline: true`) show on the homepage news list.
- Non-inline announcements (`inline: false`) create full post pages under `/news/`.
