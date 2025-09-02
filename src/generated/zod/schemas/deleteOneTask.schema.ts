import { z } from 'zod';
import { TaskSelectObjectSchema } from './objects/TaskSelect.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';

export const TaskDeleteOneSchema = z.object({ select: TaskSelectObjectSchema.optional(),  where: TaskWhereUniqueInputObjectSchema  })