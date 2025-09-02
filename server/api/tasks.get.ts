import db from "../../lib/db"

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  // return sendError(
  //   event,
  //   createError({
  //     statusCode: 500,
  //     statusMessage: "Oh no!",
  //   }),
  // );
  //

  const tasks = await db.task.findMany();

  return tasks
});
