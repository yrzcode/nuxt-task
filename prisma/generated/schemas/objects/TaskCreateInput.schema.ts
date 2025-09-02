import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  title: z.string(),
  done: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const TaskCreateInputObjectSchema: z.ZodType<Prisma.TaskCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateInput>;
export const TaskCreateInputObjectZodSchema = makeSchema();
