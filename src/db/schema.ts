import { pgTable, pgEnum, varchar, integer } from "drizzle-orm/pg-core";

export * as userSchema from "./auth-schema";

export const statusEnum = pgEnum('status', ['pending', 'approved', 'rejected']);

export const roleEnum = pgEnum('role', ['student', 'tech', 'sa', 'pr', 'lecturer']);

export const categoryEnum = pgEnum('category', ['activity', 'research']);

export const formatEnum = pgEnum('format', ['individual', 'group']);