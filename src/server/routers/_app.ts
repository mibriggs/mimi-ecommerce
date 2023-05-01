import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
    /*
        Endpoints in TRPC don't exactly map like traditional REST endpoints
        Starts pretty simmilarly though:
            http://BASE_URL/trpc/api
            From there if you have base endpoints it'll just be /function-name
            else: /router-name.function-name I.E. /forms.getForms
        Inputs GET/queries take the form of ?input="text here" (quotations were needed in my exp.)
        Everything else like regular goes in body
        Not sure how input objects work tho...
    */
   getGreeting: publicProcedure.query((ctx) => {
    console.log(ctx);
    return 'Hello Mimi';
   }),
});

export type AppRouter = typeof appRouter;