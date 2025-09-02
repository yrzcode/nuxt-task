import { z } from 'zod';
import { TaskSelectObjectSchema } from './objects/TaskSelect.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskCreateInputObjectSchema } from './objects/TaskCreateInput.schema';
import { TaskUncheckedCreateInputObjectSchema } from './objects/TaskUncheckedCreateInput.schema';
import { TaskUpdateInputObjectSchema } from './objects/TaskUpdateInput.schema';
import { TaskUncheckedUpdateInputObjectSchema } from './objects/TaskUncheckedUpdateInput.schema';

export const TaskUpsertSchema = z.object({ select: TaskSelectObjectSchema.optional(),  where: TaskWhereUniqueInputObjectSchema, create: z.union([ TaskCreateInputObjectSchema, TaskUncheckedCreateInputObjectSchema ]), update: z.union([ TaskUpdateInputObjectSchema, TaskUncheckedUpdateInputObjectSchema ])  })