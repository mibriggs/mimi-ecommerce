import { initTRPC } from '@trpc/server';
import { Context } from './context';

const t = initTRPC.context<Context>().create();
const isAuthed = t.middleware(({next, ctx}) => {
    throw new Error('To be completed');
});

export const router = t.router;
export const middleware = t.middleware;
/**
 * Unprotected Procedure
 */
export const publicProcedure = t.procedure;

/**
 * Protected Procedure
 */
export const protectedProcedure = t.procedure.use(isAuthed);