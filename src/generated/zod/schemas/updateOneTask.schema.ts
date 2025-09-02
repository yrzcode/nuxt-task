import { z } from 'zod';
import { TaskSelectObjectSchema } from './objects/TaskSelect.schema';
import { TaskUpdateInputObjectSchema } from './objects/TaskUpdateInput.schema';
import { TaskUncheckedUpdateInputObjectSchema } from './objects/TaskUncheckedUpdateInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';

export const TaskUpdateOneSchema = z.object({ select: TaskSelectObjectSchema.optional(),  data: z.union([TaskUpdateInputObjectSchema, TaskUncheckedUpdateInputObjectSchema]), where: TaskWhereUniqueInputObjectSchema  })