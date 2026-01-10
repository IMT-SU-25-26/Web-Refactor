import { z } from "zod";

export const ImageSchema = z.object({
  url: z.url("Invalid URL"),
  publicId: z.string().min(1, "Public ID is required"),
});

export type Image = z.infer<typeof ImageSchema>;
