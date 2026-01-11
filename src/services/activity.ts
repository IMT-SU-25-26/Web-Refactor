"use server";

import prisma from "@/lib/prisma";
import { ActivitySchema } from "@/types/db/activity";
import { revalidatePath } from "next/cache"; 
import { z } from "zod";

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

  try {
    const activity = await prisma.activity.create({
      data: result.data,
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
  data: z.infer<typeof ActivitySchema>
) {
  const result = ActivitySchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid activity data submitted.");
  }

  try {
    const activity = await prisma.activity.update({
      where: { id: activityId },
      data: result.data,
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true, activity };
  } catch (err) {
    throw new Error("Failed to update activity: " + (err as Error).message);
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
    throw new Error("Failed to delete activity: " + (err as Error).message);
  }
}
