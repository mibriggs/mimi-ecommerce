import Layout from '@/pages/layout';
import '@/styles/globals.css';
import { trpc } from '@/utils/trpc';
import type { AppProps, AppType } from 'next/app';

const App: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default trpc.withTRPC(App);
