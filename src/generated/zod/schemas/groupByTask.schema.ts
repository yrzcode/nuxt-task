import { z } from 'zod';
import { TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskOrderByWithAggregationInputObjectSchema } from './objects/TaskOrderByWithAggregationInput.schema';
import { TaskScalarWhereWithAggregatesInputObjectSchema } from './objects/TaskScalarWhereWithAggregatesInput.schema';
import { TaskScalarFieldEnumSchema } from './enums/TaskScalarFieldEnum.schema';
import { TaskCountAggregateInputObjectSchema } from './objects/TaskCountAggregateInput.schema';
import { TaskMinAggregateInputObjectSchema } from './objects/TaskMinAggregateInput.schema';
import { TaskMaxAggregateInputObjectSchema } from './objects/TaskMaxAggregateInput.schema';

export const TaskGroupBySchema = z.object({ where: TaskWhereInputObjectSchema.optional(), orderBy: z.union([TaskOrderByWithAggregationInputObjectSchema, TaskOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TaskScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TaskScalarFieldEnumSchema), _count: z.union([ z.literal(true), TaskCountAggregateInputObjectSchema ]).optional(), _min: TaskMinAggregateInputObjectSchema.optional(), _max: TaskMaxAggregateInputObjectSchema.optional() })