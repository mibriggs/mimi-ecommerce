import NavBar from '../components/nav-bar';
import HeaderComponent from '../components/header';
import MimiIcon from '../media/mimi-icon.png';
import Image from 'next/image';


const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<div className='flex h-screen flex-col'>
			{/* <Image src={MimiIcon} alt={"me"}/> */}
			<HeaderComponent />
			<NavBar />
			<div className='h-screen bg-oceanview'>{children}</div>
		</div>
	);
};

export default Layout;
