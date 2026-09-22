# Adding photos

1. Put your images in `assets/photos/film/` or `assets/photos/digital/`. You can also use GitHub's **Add file → Upload files** inside either folder.
2. Commit and push your changes as usual. The Photos page updates automatically when the site deploys.

Use JPG, JPEG, PNG, or WebP. Export HEIC and TIFF images to JPG first. For quick loading, aim for about 2000 pixels on the long edge and under 1 MB per image. Remove location metadata before uploading if you do not want it public.

Images appear in reverse filename order within each section. Names like `2026-09-21-kyoto-street.jpg` keep recent photos first and give them readable fallback descriptions. Use unique filenames across both folders.

## Optional captions and accessible descriptions

Edit `_data/photos.yml`. Replace the empty `{}` with entries like:

```yaml
2026-09-21-kyoto-street.jpg:
  caption: "Kyoto, September 2026 · Kodak Gold 200"
  alt: "A narrow street in Kyoto at dusk"
```

Add one entry per photo you want to describe. Captions are optional; descriptive alt text is encouraged. Images keep their original proportions. Clicking a photo opens the full image. Empty sections stay hidden; until you add your first photo, the page says “Photos coming soon.”

To remove a photo, delete its image and any matching caption entry. This is a static GitHub Pages site: uploads happen in the repository, not through the public Photos page.
