import { integer, pgTable, pgEnum, varchar } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status', ['pending', 'approved', 'rejected']);

export const roleEnum = pgEnum('role', ['student', 'tech', 'sa', 'pr', 'lecturer']);

export const categoryEnum = pgEnum('category', ['activity', 'research']);

export const formatEnum = pgEnum('format', ['individual', 'group']);


