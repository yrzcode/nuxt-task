import { z } from 'zod';

// prettier-ignore
export const TaskInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    done: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TaskInputType = z.infer<typeof TaskInputSchema>;
