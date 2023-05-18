import { TRPCError } from '@trpc/server';
import { Context } from '../context';
import { UpdateUserInfoObject, UpdateUserInfoType } from '../types/user';
import { throwIfUnauth } from '../errors/auth';

export const getUser = async (ctx: Context) => {
	throwIfUnauth(ctx);

	const userId = ctx.session?.user.id;
	const user = await ctx.prisma.user.findFirst({
		where: {
			id: {
				equals: userId,
			},
		},
	});
	return user;
};

export const deleteUser = async (ctx: Context) => {
	throwIfUnauth(ctx);

	const userId = ctx.session?.user.id;
	const deletedUser = await ctx.prisma.user.delete({
		where: {
			id: userId,
		},
	});
	return deletedUser;
};

export const updateUserInformation = (
	input: UpdateUserInfoType,
	ctx: Context
) => {
	throwIfUnauth(ctx);

	const data = UpdateUserInfoObject.safeParse(input);
	if (!data.success) {
		throw new TRPCError({
			code: 'BAD_REQUEST',
			cause: data.error,
		});
	}

	// need updated data here aka data.data
	const userId = ctx.session?.user.id;
};

export const getAllUsers = async (ctx: Context) => {
	throwIfUnauth(ctx);

	const users = await ctx.prisma.user.findMany();
	return users;
};
