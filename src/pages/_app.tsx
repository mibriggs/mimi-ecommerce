import Layout from '@/pages/layout';
import '@/styles/globals.css';
import { trpc } from '@/utils/trpc';
import type { AppProps, AppType } from 'next/app';
import { SSRProvider } from 'react-aria-components';

const App: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<SSRProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</SSRProvider>
	);
};

export default trpc.withTRPC(App);
