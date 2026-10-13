// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const buildDate = new Date().toISOString();

/** Last git commit date for a file, or null. */
function gitDate(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf8' }).trim();
    return out ? new Date(out).toISOString() : null;
  } catch {
    return null;
  }
}

/** Frontmatter updatedDate/pubDate from a content file, or null. */
function frontmatterDate(file) {
  const fm = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return null;
  const m = fm[1].match(/^updatedDate:\s*["']?([^"'\n]+)/m) || fm[1].match(/^pubDate:\s*["']?([^"'\n]+)/m);
  const d = m ? new Date(m[1].trim()) : null;
  return d && !isNaN(d.getTime()) ? d.toISOString() : null;
}

/** lastmod: content pubDate/updatedDate (insights), else git date of the source file, else build date. */
function lastmodFor(url) {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '');
  const candidates = [];
  const insight = path.match(/^insights\/(.+)$/);
  const area = path.match(/^areas\/([^/]+)$/);
  if (insight) {
    for (const ext of ['md', 'mdx']) {
      const f = `src/content/insights/${insight[1]}.${ext}`;
      if (existsSync(f)) {
        const d = frontmatterDate(f);
        if (d) return d;
        candidates.push(f);
      }
    }
  }
  if (area) candidates.push(`src/content/areas/${area[1]}.md`);
  if (path === '') candidates.push('src/pages/index.astro');
  candidates.push(`src/pages/${path}.astro`, `src/pages/${path}/index.astro`);
  for (const f of candidates) {
    if (!existsSync(f)) continue;
    const d = (area ? frontmatterDate(f) : null) || gitDate(f);
    if (d) return d;
  }
  return buildDate;
}

export default defineConfig({
  site: 'https://alvaradorealtygroup.com',
  integrations: [
    mdx(),
    // /rental-tour pages are noindex (sent directly to renters); keep them out of the sitemap.
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/rental-tour'),
      serialize(item) {
        item.lastmod = lastmodFor(item.url);
        return item;
      },
    }),
  ],
  output: 'static',
});
