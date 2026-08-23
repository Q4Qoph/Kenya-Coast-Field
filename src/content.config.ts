// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the Announcements collection
const announcements = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/announcements' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        excerpt: z.string().optional(),
        author: z.string().optional(),
        category: z.string().optional(),
    }),
});

// Define the Camp Meetings collection
const campMeetings = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/camp-meetings' }),
    schema: z.object({
        title: z.string(),
        district: z.string(),
        county: z.string().optional(),
        theme: z.string().optional(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        speaker: z.string().optional(),
        speakerTitle: z.string().optional(),
        venue: z.string(),
        givingPaybill: z.string().optional(),
        givingAccount: z.string().optional(),
    }),
});

export const collections = { announcements, campMeetings };