// import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
   getGreeting: publicProcedure.query(() => {
    return 'Hello Mimi';
   }),
});

export type AppRouter = typeof appRouter;