import { z } from 'zod';
import { adminProcedure, protectedProcedure, router } from '../trpc';
import { UpdateUserInfoObject } from '../types/user';
import {
	getUser,
	deleteUser,
	updateUserInformation,
	getAllUsers,
} from '../service/user';

export const userRouter = router({
	// updateUser/deleteUser/getUser should all be protectedRoutes
	// probably want a convenience endpoint to getAllUsers
	getUser: protectedProcedure.query(async ({ ctx }) => await getUser(ctx)),
	deleteUser: protectedProcedure.mutation(
		async ({ ctx }) => await deleteUser(ctx)
	),
	updateUserInformation: protectedProcedure
		.input(UpdateUserInfoObject)
		.mutation(({ input, ctx }) => updateUserInformation(input, ctx)),
	getAllUsers: adminProcedure.query(async ({ ctx }) => await getAllUsers(ctx)),
});
