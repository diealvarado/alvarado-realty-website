// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alvaradorealtygroup.com',
  integrations: [
    mdx(),
    // /rental-tour pages are noindex (sent directly to renters); keep them out of the sitemap.
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/rental-tour') }),
  ],
  output: 'static',
});
