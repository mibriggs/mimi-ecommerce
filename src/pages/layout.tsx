import NavBar from '../components/nav-bar';
import HeaderComponent from '../components/header';
import MimiIcon from '../media/mimi-icon.png';
import Image from 'next/image';
import useViewport from '@/hooks/user-viewport';
import HamburgerNavBar from '@/components/hamburger-nav-bar';

const HeaderAndHamburger = () => {
	return (
	<div className='flex flex-row'>
		<HamburgerNavBar />
		<HeaderComponent />
	</div>);
};

const HeaderAndMenu = () => {
	return (
		<>
		<HeaderComponent />
		<NavBar />
		</>
	)
}
const Layout = ({ children }: { children: JSX.Element }) => {
	const BREAKPOINT = 620;
	const { width, height } = useViewport();


	return (
		<div className='flex h-screen flex-col'>
			{/* <Image src={MimiIcon} alt={"me"}/> */}
			{(width >= BREAKPOINT) ? <HeaderAndMenu /> : <HeaderAndHamburger />}
			<div className='h-screen bg-oceanview'>{children}</div>
		</div>
	);
};

export default Layout;
