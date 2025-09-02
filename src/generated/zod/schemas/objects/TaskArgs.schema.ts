import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskSelectObjectSchema } from './TaskSelect.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => TaskSelectObjectSchema).optional()
}).strict();
export const TaskArgsObjectSchema = makeSchema();
export const TaskArgsObjectZodSchema = makeSchema();
