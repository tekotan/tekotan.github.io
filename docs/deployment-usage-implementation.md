# Deployment, usage, implementation style

## Local development

- Ruby/Jekyll:
  - `bundle install`
  - `bundle exec jekyll serve`
- Docker (recommended by the theme):
  - `docker compose up` or `docker compose -f docker-compose-slim.yml up`
- The dev container config lives in `.devcontainer/`.

## Build and deployment

- Production build: `bundle exec jekyll build` -> output in `_site/`.
- CSS cleanup (optional): `purgecss -c purgecss.config.js`.
- GitHub Actions deploy workflow: `.github/workflows/deploy.yml`.
  - Builds on push to `main`/`master` and deploys `_site/` to `gh-pages`.
  - Uses Ruby 3.2.2, installs Jupyter, then builds and purges CSS.

## Implementation style (project conventions)

- Jekyll + Liquid templates (al-folio theme).
- Content is data-driven:
  - Pages in `_pages/` with front matter flags.
  - Collections for news/projects/posts.
  - Publications from BibTeX via `jekyll-scholar`.
  - CV from JSON resume via `jekyll_get_json`.
- Styling is SCSS-first with a single entry file (`assets/css/main.scss`).
- Static assets are kept in `assets/` and referenced directly from pages/includes.
- Feature toggles (dark mode, search, progress bar, masonry, etc.) are set in `_config.yml`.
