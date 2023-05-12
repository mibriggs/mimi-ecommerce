import NavBar from '../components/nav-bar';
import HeaderComponent from '../components/header';
import MimiIcon from '../media/mimi-icon.png';
import Image from 'next/image';
import useViewport from '@/hooks/user-viewport';
import HamburgerNavBar from '@/components/hamburger-nav-bar';


const Layout = ({ children }: { children: JSX.Element }) => {
	const BREAKPOINT = 620;
	const { width, height } = useViewport();

	const HeaderAndNavBar = <></>

	return (
		<div className='flex h-screen flex-col'>
			{/* <Image src={MimiIcon} alt={"me"}/> */}
			<HeaderComponent />
			{(width >= BREAKPOINT) ? <NavBar/> : <HamburgerNavBar/>}
			<div className='h-screen bg-oceanview'>{children}</div>
		</div>
	);
};

export default Layout;
