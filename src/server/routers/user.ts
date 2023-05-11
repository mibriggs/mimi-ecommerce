import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
    createUser: publicProcedure
    .input(z.object({
        name: z.string().min(1)
    }))
    .mutation(async ({input, ctx}) => {
        const name = input.name;
        // const newUser = await ctx.prisma.user.create({
        //     data: {
        //         firstName: name,
                
        //     }
        // });
        // return newUser;
    }),
});