import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../server/auth';
import Image from 'next/image';
import Facebook from '../../media/facebook.svg';
import Google from '../../media/google.svg';
import GitHub from '../../media/github.svg';
import MimiIcon from '../../media/mimi-icon.png';
import { useRouter } from 'next/router';
import { ChangeEvent, useState, MouseEvent } from 'react';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { itim } from '../_app';

export default function SignIn({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	const [email, setEmail] = useState('');
	// const [isError, setIsError] = useState(false);

	const getImageName = (name: string) => {
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
	};
	const updateEmail = (e: ChangeEvent<HTMLInputElement>) => {
		const newEmailVal = e.target.value;
		setEmail(newEmailVal);
	};

	const handleEmailSubmission = () => {
		const isEmail = z.string().email().safeParse(email);
		if (!isEmail.success) {
			console.log('not a valid email');
			toast.error('This is an invalid email');
		} else {
			console.log('valid email');
			toast.success('Successfully created!');
		}
		setEmail('');
	};

	return (
		<div className={`flex h-screen flex-col items-center bg-eggshell ${itim.className} text-xl`}>
			<button onClick={() => router.push('/')} className='self-baseline'>
				<Image src={MimiIcon} alt={''} className='w-36 lg:w-44' />
			</button>
			<div className='flex h-4/6 w-2/6 flex-col items-center rounded-xl border-2 border-black bg-mimilicious text-black shadow-xl'>
				<text className='m-8'>Sign In</text>
				<input
					className={`m-4 w-3/6 justify-items-center rounded-3xl bg-eggshell p-2 text-center`}
					placeholder='Email Address'
					value={email}
					onChange={updateEmail}
				/>
				<button
					className='h-10 w-36 rounded-full bg-oceanview'
					onClick={handleEmailSubmission}
				>
					Submit
				</button>
				<text className='m-14'>---------- Or ----------</text>
				{Object.values(providers).map((provider) => (
					<button
						key={provider.name}
						onClick={() => signIn(provider.id)}
						className='m-2 w-3/6 rounded-full bg-white px-5 py-1 shadow-lg'
					>
						<div className='flex flex-row items-center'>
							<Image src={getImageName(provider.name)} alt={'Provider logo'} />{' '}
							Sign in with {provider.name}
						</div>
					</button>
				))}
			</div>
			<text className='py-5 text-black'>
				Don&apos;t have an account yet? Learn more about us
			</text>
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
