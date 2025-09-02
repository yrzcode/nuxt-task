import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  done: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TaskOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskOrderByWithRelationInput>;
export const TaskOrderByWithRelationInputObjectZodSchema = makeSchema();
