import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  done: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const TaskCreateManyInputObjectSchema: z.ZodType<Prisma.TaskCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyInput>;
export const TaskCreateManyInputObjectZodSchema = makeSchema();
