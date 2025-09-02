import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskCountOrderByAggregateInputObjectSchema } from './TaskCountOrderByAggregateInput.schema';
import { TaskAvgOrderByAggregateInputObjectSchema } from './TaskAvgOrderByAggregateInput.schema';
import { TaskMaxOrderByAggregateInputObjectSchema } from './TaskMaxOrderByAggregateInput.schema';
import { TaskMinOrderByAggregateInputObjectSchema } from './TaskMinOrderByAggregateInput.schema';
import { TaskSumOrderByAggregateInputObjectSchema } from './TaskSumOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  done: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TaskCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TaskAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaskMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaskMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TaskSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaskOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskOrderByWithAggregationInput>;
export const TaskOrderByWithAggregationInputObjectZodSchema = makeSchema();
