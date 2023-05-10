import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
    createUser: publicProcedure
    .input(z.object({
        name: z.string().min(1)
    }))
    .mutation(({input, ctx}) => {
        const name = input.name;
        const newUser = ctx.prisma.user.create({
            data: {
                name: name
            }
        })
    }),
});