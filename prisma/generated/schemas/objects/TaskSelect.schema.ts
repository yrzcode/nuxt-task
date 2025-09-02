import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  done: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const TaskSelectObjectSchema: z.ZodType<Prisma.TaskSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskSelect>;
export const TaskSelectObjectZodSchema = makeSchema();
