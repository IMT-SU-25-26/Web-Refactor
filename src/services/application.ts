"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { ApplicationSchema } from "@/types/db/application";

export async function getAllApplications() {
  return await prisma.application.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      userId: true,
      status: true,
    },
  });
}

export async function getApplicationById(applicationId: string) {
  return await prisma.application.findUnique({
    where: { id: applicationId },
  });
}

export async function createApplication(
  data: z.infer<typeof ApplicationSchema>
) {
  const result = ApplicationSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid application data submitted." };
  }

  if (!result.data.activityId && !result.data.competitionId) {
    return {
      error:
        "Application must be associated with either an activity or a competition.",
    };
  }

  try {
    const application = await prisma.application.create({
      data: result.data,
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true, application };
  } catch (err) {
    return { error: "Failed to create application: " + (err as Error).message };
  }
}

export async function updateApplication(
  applicationId: string,
  data: z.infer<typeof ApplicationSchema>
) {
  const result = ApplicationSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid application data submitted." };
  }

  if (!result.data.activityId && !result.data.competitionId) {
    return {
      error:
        "Application must be associated with either an activity or a competition.",
    };
  }

  try {
    const application = await prisma.application.update({
      where: { id: applicationId },
      data: result.data,
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true, application };
  } catch (err) {
    return { error: "Failed to update application: " + (err as Error).message };
  }
}

export async function deleteApplication(applicationId: string) {
  try {
    await prisma.application.delete({
      where: { id: applicationId },
    });

    revalidatePath("/activities");
    revalidatePath("/dashboard/sa");

    return { success: true };
  } catch (err) {
    return { error: "Failed to delete application: " + (err as Error).message };
  }
}
