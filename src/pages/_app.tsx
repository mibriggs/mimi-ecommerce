import Layout from '@/pages/layout';
import '@/styles/globals.css';
import { trpc } from '@/utils/trpc';
import { type Session } from "next-auth";
import type { AppProps, AppType } from 'next/app';
import { SSRProvider } from 'react-aria-components';
import { SessionProvider } from 'next-auth/react';

const App: AppType<{session: Session | null}> = ({ 
	Component, 
	pageProps: { session, ...pageProps },
 }) => {
	return (
		<SSRProvider>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</SSRProvider>
	);
};

export default trpc.withTRPC(App);
