import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { userRouter } from './user';
import { productRouter } from './product';
import { deliveryRouter } from './delivery';

export const appRouter = router({
	getGreeting: publicProcedure.query(({ctx}) => {
		return 'Hello Mimi';
	}),
	user: userRouter,
	product: productRouter,
	delivery: deliveryRouter,
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
