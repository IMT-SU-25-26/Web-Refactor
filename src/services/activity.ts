"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { ActivitySchema } from "@/types/db/activity";

export async function getLatestActivities(limit: number = 3) {
  return await prisma.activity.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  });
}

export async function getAllActivities() {
  return await prisma.activity.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      title: true,
    },
  });
}

export async function getActivityById(activityId: string) {
  return await prisma.activity.findUnique({
    where: { id: activityId },
  });
}

export async function createActivity(data: z.infer<typeof ActivitySchema>) {
  const result = ActivitySchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid activity data submitted." };
  }

  const { images, ...rest } = result.data;
  const activityData = { ...rest, startDate: new Date(rest.startDate) };

  try {
    const activity = await prisma.activity.create({
      data: {
        ...activityData,
        images: images ? { create: images } : undefined,
      },
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true, activity };
  } catch (err) {
    return { error: "Failed to create activity: " + (err as Error).message };
  }
}

export async function updateActivity(
  activityId: string,
  data: z.infer<typeof ActivitySchema>,
) {
  const result = ActivitySchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid activity data submitted." };
  }

  const { images, ...rest } = result.data;
  const activityData = { ...rest, startDate: new Date(rest.startDate) };

  try {
    const updateData: Record<string, unknown> = { ...activityData };
    if (images !== undefined) {
      updateData.images = { deleteMany: {}, create: images };
    }

    const activity = await prisma.activity.update({
      where: { id: activityId },
      data: updateData,
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true, activity };
  } catch (err) {
    return { error: "Failed to update activity: " + (err as Error).message };
  }
}

export async function deleteActivity(activityId: string) {
  try {
    await prisma.activity.delete({
      where: { id: activityId },
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true };
  } catch (err) {
    return { error: "Failed to delete activity: " + (err as Error).message };
  }
}
