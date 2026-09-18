# Diego Alvarado — REALTOR® website

Astro static site for **Diego Alvarado / Alvarado Realty Group** (Flower Mound & North DFW).

## Stack

- Astro + MDX content collections
- Netlify Forms (contact + home value)
- Sitemap + `llms.txt` + JSON-LD

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Connect Netlify

1. Log in to Netlify → Add new site → Import from GitHub
2. Select `diealvarado/alvarado-realty-website`
3. Build command: `npm run build` · Publish directory: `dist`
4. Deploy — use the Netlify preview URL until Cloudflare DNS cutover is approved
5. Forms: verify `contact` and `home-value` appear under Netlify → Forms after first submit

## Cloudflare cutover (later)

Keep `alvaradorealtygroup.com` on the Monument redirect until Diego approves switching DNS to Netlify.

## Notes

- No IDX at launch
- Hablo Español mention only (English site)
- Reviews CTA: Google first, then Zillow
- Replace headshot placeholders when assets are ready
