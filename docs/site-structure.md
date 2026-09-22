# Site structure and rendering flow

## Top-level layout

- `_config.yml`: Site configuration, collections, plugin list, theme flags, and external data (resume JSON).
- `_pages/`: Primary pages rendered by Jekyll (About, Publications, CV, News, Projects, 404).
- `_news/`: News collection (used for homepage/news page and individual news posts).
- `_projects/`: Project collection (demo/sample content, rendered if the projects page is used).
- `_posts/`: Blog posts (demo/sample content; posts are still rendered unless disabled).
- `_bibliography/`: BibTeX sources for the publications page.
- `_data/`: YAML data used by layouts/includes (some files are theme defaults).
- `_includes/`: Reusable Liquid components (news list, publications list, project cards, header, footer, etc.).
- `_layouts/`: Page layouts (about, cv, post, bib, default, etc.).
- `_sass/`: SCSS partials used by `assets/css/main.scss`.
- `assets/`: Static assets (images, JS, CSS, fonts, PDFs, JSON data, media, etc.).
- `_plugins/`: Custom Ruby helpers used by the theme.
- `.github/workflows/`: CI and deployment workflows for GitHub Actions.
- `Dockerfile`, `docker-compose*.yml`, `Gemfile`: Local build and containerized dev setup.
- `_site/`, `.jekyll-cache/`, `.tweet-cache/`: Generated artifacts/caches (not source of truth).

## Rendering flow (high level)

1. Jekyll reads `_config.yml` to establish site settings, enabled features, collections, and plugins.
2. Pages in `_pages/` are rendered using layouts in `_layouts/`.
3. Collections (`_news`, `_projects`) are rendered and/or embedded via `_includes/`.
4. Publications are generated via `jekyll-scholar` from `_bibliography/papers.bib`.
5. The CV page uses JSON resume data loaded by `jekyll_get_json` from `assets/json/resume.json`.
6. SCSS in `assets/css/main.scss` pulls from `_sass/` and compiles into site CSS.
7. Static files in `assets/` are copied into the output unless excluded.
8. Output is written to `_site/` during build.
