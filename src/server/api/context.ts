import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { prisma } from '../db/client';
import { inferAsyncReturnType } from '@trpc/server';
import { Session } from 'next-auth';
import { getServerAuthSession } from '../auth';

interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
	session: Session | null;
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 * @see https://trpc.io/docs/server/context#inner-and-outer-context
 */
const createInnerContext = async (options?: CreateInnerContextOptions) => {
	return {
		prisma,
		session: options?.session,
	};
};

export const createContext = async (options: CreateNextContextOptions) => {
	const req = options.req;
	const res = options.res;
	const session = await getServerAuthSession({ req, res });
	const innerContext = await createInnerContext({ session: session });

	return {
		...innerContext,
		req,
		res,
	};
};

export type Context = inferAsyncReturnType<typeof createInnerContext>;
