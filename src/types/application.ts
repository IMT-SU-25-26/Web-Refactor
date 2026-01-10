import { z } from "zod";
import { Status } from "@/generated/prisma/enums";

export const ApplicationSchema = z.object ({
    userId: z.string().min(1, "User ID is required"),
    status: z.enum(Status, "Status is required"),
});