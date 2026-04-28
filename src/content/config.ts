import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/work' }),
  schema: z.object({
    number: z.string(), // "01", "02", "03"
    title: z.string(),
    summary: z.string(),
    client: z.string(),
    role: z.string(),
    year: z.string(),
    result: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
    thumbColor: z.string(),
    thumbRatio: z.string().default('16 / 10'),
    services: z.string(),
    context: z.array(z.string()),
    approach: z.object({
      intro: z.string(),
      steps: z.array(
        z.object({
          num: z.string(),
          text: z.string(),
        }),
      ),
    }),
    visualNote: z.string().optional(),
    detailNote: z.string().optional(),
    outcome: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    closing: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { work };
