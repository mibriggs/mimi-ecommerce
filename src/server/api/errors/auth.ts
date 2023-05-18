import { TRPCError } from '@trpc/server';
import { Context } from '../context';

export const AUTHError = new TRPCError({
	code: 'UNAUTHORIZED',
	message: "Unauthorized. You aren't logged in",
});

export const throwIfUnauth = (ctx: Context) => {
	if (!ctx.session) {
		throw AUTHError;
	}
};
