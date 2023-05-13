import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "./db/client";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = async (options?: CreateNextContextOptions) => {
    const req = options?.req;
    const res = options?.res;

    return {
        req,
        res,
        prisma
    };
};

export type Context = inferAsyncReturnType<typeof createContext>;
