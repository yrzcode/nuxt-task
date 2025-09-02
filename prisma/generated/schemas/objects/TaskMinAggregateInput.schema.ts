import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  done: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const TaskMinAggregateInputObjectSchema: z.ZodType<Prisma.TaskMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskMinAggregateInputType>;
export const TaskMinAggregateInputObjectZodSchema = makeSchema();
