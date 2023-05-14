import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
    createUser: publicProcedure // Creating a user should probably be public
    .input(z.object({
        name: z.string().min(1)
    }))
    .mutation(async ({input, ctx}) => {
        const name = input.name;
    }),

    // updateUser/deleteUser/getUser should all be protectedRoutes
    // probably want a convenience endpoint to getAllUsers
});