import { Inter } from 'next/font/google';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

const AuthShowcase: React.FC = () => {
	const { data: sessionData } = useSession();
	return (
		<div className='flex flex-col items-center justify-center gap-4'>
			<p className='text-center text-2xl text-white'>
				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
			</p>
			<button
				className='rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20'
				onClick={sessionData ? () => signOut() : () => signIn()}
			>
				{sessionData ? 'Sign out' : 'Sign in'}
			</button>
		</div>
	);
};

const Home: NextPage = () => {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<AuthShowcase />
		</main>
	);
};

export default Home;
