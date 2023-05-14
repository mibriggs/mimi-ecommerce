import { Inter } from 'next/font/google';
import { trpc } from '@/utils/trpc';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

const AuthShowcase: React.FC = () => {
	const { data: sessionData } = useSession();
	console.log('In Auth Showcase');
	return (
	  <div className="flex flex-col items-center justify-center gap-4">
		<p className="text-center text-2xl text-white">
		  {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
		</p>
		<button
		  className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
		  onClick={sessionData ? () => void signOut() : () => void signIn()}
		>
		  {sessionData ? "Sign out" : "Sign in"}
		</button>
	  </div>
	);
	};

const Home: NextPage = () => {
	const greetingQuery = trpc.getGreeting.useQuery();

	if (greetingQuery.isLoading) {
		return <span>Loading...</span>;
	}

	if (greetingQuery.isError) {
		return <span>An Error Occurred</span>;
	}

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<AuthShowcase />
			{greetingQuery.data}
		</main>
	);
};

export default Home;