import { z } from 'zod';
import { TaskSelectObjectSchema } from './objects/TaskSelect.schema';
import { TaskCreateManyInputObjectSchema } from './objects/TaskCreateManyInput.schema';

export const TaskCreateManyAndReturnSchema = z.object({ select: TaskSelectObjectSchema.optional(), data: z.union([ TaskCreateManyInputObjectSchema, z.array(TaskCreateManyInputObjectSchema) ]),  }).strict()