import { z } from 'zod';
import { TaskSelectObjectSchema } from './objects/TaskSelect.schema';
import { TaskUpdateManyMutationInputObjectSchema } from './objects/TaskUpdateManyMutationInput.schema';
import { TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';

export const TaskUpdateManyAndReturnSchema = z.object({ select: TaskSelectObjectSchema.optional(), data: TaskUpdateManyMutationInputObjectSchema, where: TaskWhereInputObjectSchema.optional()  }).strict()