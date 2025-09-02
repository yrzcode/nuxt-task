import { z } from 'zod';
export const TaskDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  done: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));