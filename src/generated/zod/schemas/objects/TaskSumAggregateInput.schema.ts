import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional()
}).strict();
export const TaskSumAggregateInputObjectSchema: z.ZodType<Prisma.TaskSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskSumAggregateInputType>;
export const TaskSumAggregateInputObjectZodSchema = makeSchema();
