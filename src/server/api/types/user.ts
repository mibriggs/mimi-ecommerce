import { z } from 'zod';

export const UpdateUserInfoObject = z.object({
	firstName: z.string().trim().min(1).optional(),
	lastName: z.string().trim().min(1).optional(),
	phoneNumber: z.string().trim().min(10).optional(),
});

export type UpdateUserInfoType = z.infer<typeof UpdateUserInfoObject>;
