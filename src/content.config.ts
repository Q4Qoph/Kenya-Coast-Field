// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the Announcements/News collection
const announcements = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/announcements' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        excerpt: z.string().optional(),
        author: z.string().optional(),
        category: z.enum(['news', 'announcement', 'camp-meeting', 'event']).default('announcement'),
        image: z.string().optional(),
        isPinned: z.boolean().optional(),
        eventDetails: z.object({
            startDate: z.coerce.date(),
            endDate: z.coerce.date(),
            venue: z.string(),
            district: z.string(),
            county: z.string().optional(),
            theme: z.string().optional(),
            speaker: z.string().optional(),
            speakerTitle: z.string().optional(),
            givingPaybill: z.string().optional(),
            givingAccount: z.string().optional(),
        }).optional(),
    }),
});

export const collections = { announcements };