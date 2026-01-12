"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { AchievementSchema } from "@/types/db/achievement";

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

export async function createAchievement(
  data: z.infer<typeof AchievementSchema>,
) {
  const result = AchievementSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid achievement data submitted." };
  }

  const { images, ...rest } = result.data;

  try {
    const achievement = await prisma.achievement.create({
      data: {
        ...rest,
        images: images ? { create: images } : undefined,
      },
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
  data: z.infer<typeof AchievementSchema>,
) {
  const result = AchievementSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid achievement data submitted." };
  }

  const { images, ...rest } = result.data;

  try {
    const updateData: Record<string, unknown> = { ...rest };
    if (images !== undefined) {
      updateData.images = { deleteMany: {}, create: images };
    }

    const achievement = await prisma.achievement.update({
      where: { id: achievementId },
      data: updateData,
    });

    revalidatePath("/achievements");
    revalidatePath("/dashboard/pr");

    return { success: true, achievement };
  } catch (err) {
    return { error: "Failed to update achievement: " + (err as Error).message };
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
    return { error: "Failed to delete achievement: " + (err as Error).message };
  }
}
