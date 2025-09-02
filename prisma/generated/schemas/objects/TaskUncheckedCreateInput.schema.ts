import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  done: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const TaskUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateInput>;
export const TaskUncheckedCreateInputObjectZodSchema = makeSchema();
