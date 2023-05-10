import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
	getGreeting: publicProcedure.query(() => {
		return 'Hello Mimi';
	}),
});

export type AppRouter = typeof appRouter;

// const euiTypes = {
// 	DRONE: "drone",
// 	ROCKET: "rocket",
// 	CAR: "car",
// 	HELICOPTER: "helicopter",
// 	OTHER: "other",
// } as const;

// type euiTypes = typeof euiTypes[keyof typeof euiTypes];  BETTER WAY OF MAKING ENUMS IMO
