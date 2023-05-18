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

export default function SignIn({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
		<>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						onClick={() => signIn(provider.id)}
						className='m-2 rounded-full bg-white px-5 py-1 text-black shadow-md'
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
				</div>
			))}
		</>
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
