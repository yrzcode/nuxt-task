import db from "../../lib/db"
import { z } from "zod";
import { TaskCreateInputObjectZodSchema } from "../../src/generated/zod/schemas/";

export default defineEventHandler(async (event) => {
  const CreateTaksApiSchema = TaskCreateInputObjectZodSchema.pick({
    title: true,
    done: true,
  }).extend({
    title: (TaskCreateInputObjectZodSchema.shape.title as z.ZodString)
      .min(1)
      .max(500),
  });

  const res = await readValidatedBody(event, (b) =>
    CreateTaksApiSchema.safeParse(b),
  );

  if (!res.success) {
    return sendError(
      event,
      createError({
        statusCode: 422,
        statusMessage: "Invalid task",
      }),
    );
  }

   const created = await db.task.create({
    data: res.data,
  });

  return created;
});
