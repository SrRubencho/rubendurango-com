# rubendurango.com

Source for [rubendurango.com](https://rubendurango.com) — Rubén Durango's (`@srrubencho`) digital garden. Notes, not polished posts: applied AI for Latin American industry.

Built with [Quartz v4](https://quartz.jzhao.xyz/).

## Stack

- **Generator:** Quartz v4 (v4.5.2)
- **Hosting:** Cloudflare Pages — auto-deploys on push to `main`
- **Content:** Markdown in `content/` — Git is the source of truth
- **Type:** Fraunces (headings) · DM Sans (body) · JetBrains Mono (code)
- **Color:** "Tinta & oro" — warm editorial palette (ivory paper, espresso ink, gold accent), light + dark, defined in `quartz.config.ts`

## Local development

```bash
nvm use 22
npm install
npx quartz build --serve   # http://localhost:8080
```

## Content conventions

- **Links over folders.** File path = URL. Notes live in `content/notas/` (→ `/notas`); top-level pages are `index`, `about`, `now`. Add topic folders only when a cluster of notes emerges.
- **Tags** (`tags:` in frontmatter) are the cross-cutting axis — each generates a page at `/tags/<tag>`.
- **Wikilinks** `[[note-name]]` connect notes (shortest-path resolution, so moving a note doesn't break links). They also drive the graph view and backlinks panel.
- **Images** live in `content/images/`, referenced relatively — e.g. `![alt](images/file.avif)`.
- **Drafts, two tiers:**
  - `draft: true` in frontmatter → versioned in Git but excluded from the build. Start from `content/templates/nota.md`.
  - `content/private/` → local-only scratch (gitignored; not synced, not published).

## Authoring in Obsidian

Open `content/` as an Obsidian vault. A local CSS snippet (`content/.obsidian/snippets/rubencho-garden.css`) styles the editor to match the published site. Note: `.obsidian/` is gitignored, so the snippet stays local to each machine.

## License

Site content © Rubén Durango. The Quartz engine (in `quartz/`) is MIT licensed — see `LICENSE.txt`.
