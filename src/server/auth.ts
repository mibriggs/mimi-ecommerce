import { type GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from './db/client';
import GitHubProvider from 'next-auth/providers/github';

//! Look into how all this works lol
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            isAdmin: boolean;
        } & DefaultSession["user"];
    }
};

export const authOptions: NextAuthOptions = {
    callbacks: {
        session: ({session, user}) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        //! Add all providers you want to use here
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET|| ''
        }),
    ],
}

export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext['req'],
    res: GetServerSidePropsContext['res']
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};