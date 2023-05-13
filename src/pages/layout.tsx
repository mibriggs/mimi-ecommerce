import NavBar from '../components/nav-bar';
import HeaderComponent from '../components/header';
import useViewport from '@/hooks/user-viewport';
import TestMenu from '@/components/test-hamburger';
import HamburgerNavBar from '@/components/hamburger-nav-bar';

const Layout = ({ children }: { children: JSX.Element }) => {
	const BREAKPOINT = 620;
	const { width, height } = useViewport();


	return (
		<div className='flex h-screen flex-col'>
			{/* <Image src={MimiIcon} alt={"me"}/> */}
			<HeaderComponent />
			<NavBar />
			<HamburgerNavBar />
			{/* {(width >= BREAKPOINT) ? <HeaderAndMenu /> : <HeaderAndHamburger />} */}
			<div className='h-screen bg-eggshell md:bg-oceanview'>{children}</div>
		</div>
	);
};

export default Layout;
