import { z } from 'zod';
export const TaskUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  done: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));