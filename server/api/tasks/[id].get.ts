import db from "../../../lib/db";
import { object, z } from "zod";

const IdParamsSchema = z.object({
  id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const res = await getValidatedRouterParams(event, IdParamsSchema.safeParse);

  if (!res.success) {
    return sendError(
      event,
      createError({
        statusCode: 422,
        statusMessage: "Invalid id",
      }),
    );
  }

  const task = await db.task.findFirst({
    where: {
      id: res.data.id,
    },
  });

  if (!task) {
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: "Task not found",
      }),
    );
  }

  return task;
});
