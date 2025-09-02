import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const TaskSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskSumOrderByAggregateInput>;
export const TaskSumOrderByAggregateInputObjectZodSchema = makeSchema();
