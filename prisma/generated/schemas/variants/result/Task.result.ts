import { z } from 'zod';

// prettier-ignore
export const TaskResultSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    done: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TaskResultType = z.infer<typeof TaskResultSchema>;
