import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int()
}).strict();
export const TaskWhereUniqueInputObjectSchema: z.ZodType<Prisma.TaskWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskWhereUniqueInput>;
export const TaskWhereUniqueInputObjectZodSchema = makeSchema();
