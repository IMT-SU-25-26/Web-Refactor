import { z } from "zod";
import { Category } from "@/generated/prisma/enums";

export const ActivitySchema = {
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be at most 255 characters long"),
  description: z.string().min(1, "Description is required"),
  location: z
    .string()
    .min(1, "Location is required")
    .max(255, "Location must be at most 255 characters long"),
  creditPoint: z.number().min(1, "Credit point must be at least 1"),
  quota: z.number().min(1, "Quota must be at least 1"),
  startDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Start date must be a valid date",
    }),
  category: z.enum(Category, "Category is required"),
};

export type Activity = z.infer<typeof ActivitySchema>;
