import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    description: z.string(),
    county: z.string().optional(),
    wave: z.enum(['core']).default('core'),
    order: z.number().default(99),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { areas, insights };
