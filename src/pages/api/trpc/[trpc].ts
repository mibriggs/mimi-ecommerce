import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/server/api/routers/_app';
import { createContext } from '@/server/api/context';

export default trpcNext.createNextApiHandler({
	// Wrapper so that TRPC can be used as NextJs backend
	router: appRouter,
	createContext: createContext,
	onError({ error }) {
		if (error.code === 'INTERNAL_SERVER_ERROR') {
			console.error('Something went wrong', error);
		}
	},
	batching: {
		enabled: true,
	},
});
