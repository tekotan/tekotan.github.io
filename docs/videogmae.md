# Video-GMAE project page

The project source stays in the separate `tekotan/video-gmae.github.io` repository, checked out locally at `../video-gmae-project.github.io`. Edit and push that repository to update the project page.

The personal website's deploy workflow fetches the project repository's `master` branch into `_project-site/`, builds the personal site, then copies the project's `index.html`, `files/`, and `build/` into `_site/videogmae/`. Jekyll excludes the temporary source checkout. The project retains its own styles, scripts, media, and downloads; its `CNAME` is not copied.

The project repository stays private. Add a fine-grained GitHub token with **Contents: Read-only** access to `tekotan/video-gmae.github.io` as the `VIDEOGMAE_READ_TOKEN` Actions secret in `tekotan/tekotan.github.io`.

The published URL is <https://tekotan.github.io/videogmae/>. After pushing project changes, run the personal website's **Deploy site** workflow from GitHub Actions to refresh this copy. Personal website deployments also fetch the latest project version automatically.

The project repository keeps its `CNAME` for `videogmae.org` and its current GitHub Pages and DNS configuration. A hostname-specific browser redirect in its homepage sends visitors from `videogmae.org` or `www.videogmae.org` to the new URL, preserving query strings and section anchors. It does not redirect visitors at the new URL.

Publish and verify the personal website first, then publish the project repository's redirect. GitHub Pages does not provide configurable HTTP redirects; this redirect uses JavaScript.
