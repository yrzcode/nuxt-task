import { z } from 'zod';
export const TaskUpdateManyResultSchema = z.object({
  count: z.number()
});