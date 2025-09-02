import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id', 'title', 'done', 'createdAt', 'updatedAt'])

export type TaskScalarFieldEnum = z.infer<typeof TaskScalarFieldEnumSchema>;