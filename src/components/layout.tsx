import NavBar from './nav-bar';
import localFont from 'next/font/local';
import MimiIcon from '../media/mimi-icon.png';
import Image from 'next/image';

const customFont = localFont({ src: '../media/Mimi-Regular.ttf' });

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<div className='flex h-screen flex-col'>
			{/* <Image src={MimiIcon} alt={"me"}/> */}
			<div
				className={`bg-mimilicious p-8 text-center text-eggshell ${customFont.className} text-8xl`}
			>
				MimiGurumi&apos;s
			</div>
			<NavBar />
			<div className='h-screen bg-oceanview'>{children}</div>
		</div>
	);
};

export default Layout;
