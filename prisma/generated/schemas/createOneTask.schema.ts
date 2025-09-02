import { z } from 'zod';
import { TaskSelectObjectSchema } from './objects/TaskSelect.schema';
import { TaskCreateInputObjectSchema } from './objects/TaskCreateInput.schema';
import { TaskUncheckedCreateInputObjectSchema } from './objects/TaskUncheckedCreateInput.schema';

export const TaskCreateOneSchema = z.object({ select: TaskSelectObjectSchema.optional(),  data: z.union([TaskCreateInputObjectSchema, TaskUncheckedCreateInputObjectSchema])  })