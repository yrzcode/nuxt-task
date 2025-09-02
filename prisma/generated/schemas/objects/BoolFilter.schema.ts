import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const BoolFilterObjectSchema: z.ZodType<Prisma.BoolFilter> = makeSchema() as unknown as z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectZodSchema = makeSchema();
