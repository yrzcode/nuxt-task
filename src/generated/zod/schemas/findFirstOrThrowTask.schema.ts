import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskScalarFieldEnumSchema } from './enums/TaskScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    done: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskSelect>;

export const TaskFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    done: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const TaskFindFirstOrThrowSchema: z.ZodType<Prisma.TaskFindFirstOrThrowArgs> = z.object({ select: TaskFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFindFirstOrThrowArgs>;

export const TaskFindFirstOrThrowZodSchema = z.object({ select: TaskFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict();