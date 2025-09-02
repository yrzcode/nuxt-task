import { z } from 'zod';
export const TaskUpsertResultSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  done: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
});