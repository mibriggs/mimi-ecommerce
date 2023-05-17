import { type GetServerSidePropsContext } from 'next';
import { DefaultSession, NextAuthOptions, getServerSession } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './db/client';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

//! Look into how all this works lol
declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			isAdmin: boolean;
		} & DefaultSession['user'];
	}
}

export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => ({
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
			clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
		/**
		 * I don't think facebook is configured correctly
		 * Got an error the first time i tried logging in? But it's gone now idk
		 * Also... when i login with facebook it redirects me here: http://localhost:3000/#_=_ instead of http://localhost:3000?
		 * @see https://next-auth.js.org/providers/facebook
		 * @see https://developers.facebook.com/apps/594282442483155/dashboard/
		 */
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID || '',
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
		}),
	],
	// pages: {
	//     signIn: '/auth/signin',
	// }
};

export const getServerAuthSession = (ctx: {
	req: GetServerSidePropsContext['req'];
	res: GetServerSidePropsContext['res'];
}) => {
	return getServerSession(ctx.req, ctx.res, authOptions);
};
