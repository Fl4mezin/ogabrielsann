// src/ai/flows/generate-pixelated-headline.ts
'use server';

/**
 * @fileOverview Generates multiple pixelated headline options for a landing page.
 *
 * - generatePixelatedHeadline - A function that generates pixelated headline options.
 * - GeneratePixelatedHeadlineInput - The input type for the generatePixelatedHeadline function.
 * - GeneratePixelatedHeadlineOutput - The return type for the generatePixelatedHeadline function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePixelatedHeadlineInputSchema = z.object({
  description: z
    .string()
    .describe('A brief description of the landing page and its purpose.'),
});

export type GeneratePixelatedHeadlineInput = z.infer<
  typeof GeneratePixelatedHeadlineInputSchema
>;

const GeneratePixelatedHeadlineOutputSchema = z.object({
  headlines: z
    .array(z.string())
    .describe('An array of pixelated headline options.'),
});

export type GeneratePixelatedHeadlineOutput = z.infer<
  typeof GeneratePixelatedHeadlineOutputSchema
>;

export async function generatePixelatedHeadline(
  input: GeneratePixelatedHeadlineInput
): Promise<GeneratePixelatedHeadlineOutput> {
  return generatePixelatedHeadlineFlow(input);
}

const generatePixelatedHeadlinePrompt = ai.definePrompt({
  name: 'generatePixelatedHeadlinePrompt',
  input: { schema: GeneratePixelatedHeadlineInputSchema },
  output: { schema: GeneratePixelatedHeadlineOutputSchema },
  prompt: `You are a creative marketing expert specializing in pixel art and retro aesthetics.

  Generate 3 different attention-grabbing, pixelated headline options for a landing page with the following description:
  Description: {{{description}}}

  The headlines should be short, impactful, and suitable for a pixelated/8-bit design.
  The headlines must be attention grabbing and make the user want to learn more.
`,
});

const generatePixelatedHeadlineFlow = ai.defineFlow(
  {
    name: 'generatePixelatedHeadlineFlow',
    inputSchema: GeneratePixelatedHeadlineInputSchema,
    outputSchema: GeneratePixelatedHeadlineOutputSchema,
  },
  async input => {
    const { output } = await generatePixelatedHeadlinePrompt(input);
    return output!;
  }
);
