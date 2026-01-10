import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db"; 
import * as schema from "./db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // Change to "mysql" or "sqlite" if needed
        schema: schema,
    }),
    emailAndPassword: { enabled: true },
    // Adding a custom field to the User table
    user: {
        additionalFields: {
            subscriptionTier: {
                type: "string",
                defaultValue: "free",
                required: false,
            }
        }
    }
});