import { defineCollection, z } from "astro:content"

const deCollection = defineCollection({
    type: "data",
    schema: z
        .object({
            header: z.any().optional(),
            content: z.any().optional(),
            header1: z.any().optional(),
            header2: z.any().optional(),
            text1: z.any().optional(),
            text2: z.any().optional(),
            text3: z.any().optional(),
            title1: z.any().optional(),
            title2: z.any().optional(),
        })
        .passthrough(),
})

export const collections = {
    de: deCollection,
}
