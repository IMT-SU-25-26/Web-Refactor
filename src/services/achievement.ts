"use server";

import prisma from "@/lib/prisma";
import { AchievementSchema } from "@/types/db/achievement";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getAllAchievements() {
  return await prisma.achievement.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      title: true,
    },
  });
}

export async function getAchievementById(achievementId: string) {
  return await prisma.achievement.findUnique({
    where: { id: achievementId },
  });
}

export async function createAchievement(data: z.infer<typeof AchievementSchema>) {
  const result = AchievementSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid achievement data submitted." };
  }

  try {
    const achievement = await prisma.achievement.create({
      data: result.data,
    });

    revalidatePath("/achievements");
    revalidatePath("/dashboard/pr");

    return { success: true, achievement };
  } catch (err) {
    return { error: "Failed to create achievement: " + (err as Error).message };
  }
}

export async function updateAchievement(
  achievementId: string,
  data: z.infer<typeof AchievementSchema>
) {
  const result = AchievementSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid achievement data submitted.");
  }

  try {
    const achievement = await prisma.achievement.update({
      where: { id: achievementId },
      data: result.data,
    });

    revalidatePath("/achievements");
    revalidatePath("/dashboard/pr");

    return { success: true, achievement };
  } catch (err) {
    throw new Error("Failed to update achievement: " + (err as Error).message);
  }
}

export async function deleteAchievement(achievementId: string) {
  try {
    await prisma.achievement.delete({
      where: { id: achievementId },
    });

    revalidatePath("/achievements");
    revalidatePath("/dashboard/pr");
    
    return { success: true };
  } catch (err) {
    throw new Error("Failed to delete achievement: " + (err as Error).message);
  }
}
