import NavBar from '../components/nav-bar';
import HeaderComponent from '../components/header';
import useViewport from '@/hooks/user-viewport';
import HamburgerNavBar from '@/components/hamburger-nav-bar';

const Layout = ({ children }: { children: JSX.Element }) => {

	return (
		<div className='flex h-screen flex-col'>
			<HeaderComponent />
			<NavBar />
			<HamburgerNavBar />
			<div className='h-screen bg-eggshell md:bg-oceanview'>{children}</div>
		</div>
	);
};

export default Layout;
