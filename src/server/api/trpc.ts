import { TRPCError, initTRPC } from '@trpc/server';
import { Context } from './context';

const t = initTRPC.context<Context>().create();
export const router = t.router;
export const middleware = t.middleware;

/**
 * Unprotected Procedure
 */
export const publicProcedure = t.procedure;

/**
 * Protected Procedure
 */
const isAuthed = t.middleware(({ next, ctx }) => {
	if (!ctx.session || !ctx.session.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: {
			session: { ...ctx.session, user: ctx.session.user },
		},
	});
});
export const protectedProcedure = t.procedure.use(isAuthed);

/**
 * Admin Procedure
 */
const isAdmin = t.middleware(({ next, ctx }) => {
	if (!ctx.session || !ctx.session.user || !ctx.session.user.isAdmin) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: {
			session: { ...ctx.session, user: ctx.session.user },
		},
	});
});
export const adminProcedure = t.procedure.use(isAdmin);
