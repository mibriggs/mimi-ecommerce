import '@/styles/globals.css'
import { trpc } from '@/utils/trpc';
import type { AppProps, AppType } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
};

export default trpc.withTRPC(App);
