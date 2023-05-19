import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../server/auth';
import Image from 'next/image';
import Facebook from '../../media/facebook.png';
import Google from '../../media/google.png';
import GitHub from '../../media/github.png';
import MimiIcon from '../../media/mimi-icon.png';
import { useRouter } from 'next/router';
import { Itim } from 'next/font/google';

const itim = Itim({
	weight: '400',
	subsets: ['latin'],
});

export default function SignIn({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	function getImageName(name: string) {
		switch (name) {
			case 'GitHub':
				return GitHub;
			case 'Google':
				return Google;
			case 'Facebook':
				return Facebook;
			default:
				return '';
		}
	}

	return (
		<div className='flex h-screen flex-col items-center bg-eggshell'>
			<button onClick={() => router.push('/')} className='self-baseline'>
				<Image src={MimiIcon} alt={''} className='w-36 lg:w-44' />
			</button>
			<div className='flex h-4/6 w-2/6 flex-col items-center rounded-xl border-2 border-black bg-mimilicious text-black shadow-xl'>
				<text>Sign In</text>
				<textarea
					className='w-3/6 justify-items-center rounded-3xl bg-eggshell'
					placeholder='Email Address'
				/>
				<button className='w-1/6 rounded-full bg-oceanview'>Submit</button>
				<text>Or</text>
				{Object.values(providers).map((provider) => (
					// <div key={provider.name}>
					<button
						key={provider.name}
						onClick={() => signIn(provider.id)}
						className='m-2 w-3/6 rounded-full bg-white px-5 py-1 shadow-lg'
					>
						<div className='flex flex-row items-center'>
							<Image
								src={getImageName(provider.name)}
								alt={'Provider logo'}
								width={45}
								height={45}
							/>{' '}
							Sign in with {provider.name}
						</div>
					</button>
					// </div>
				))}
			</div>
			<text className='text-black py-5'>Don&apos;t have an account yet? Learn more about us</text>
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	if (session) {
		return { redirect: { destination: '/' } };
	}

	const providers = await getProviders();

	return {
		props: { providers: providers ?? [] },
	};
}
