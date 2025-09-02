import { z } from 'zod';

// prettier-ignore
export const TaskModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    done: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TaskModelType = z.infer<typeof TaskModelSchema>;
