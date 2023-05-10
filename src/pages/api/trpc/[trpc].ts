import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/server/routers/_app';

export default trpcNext.createNextApiHandler({
	// Wrapper so that TRPC can be used as NextJs backend
	router: appRouter,
	createContext: async () => {
		// Context that every "procedure" will be called with
		return {};
	},
	onError({ error }) {
		if (error.code === 'INTERNAL_SERVER_ERROR') {
			console.error('Something went wrong', error);
		}
	},
	batching: {
		enabled: true,
	},
});
