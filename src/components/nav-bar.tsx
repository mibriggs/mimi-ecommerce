import Link from 'next/link';

export const NavBar = () => {
	return (
		<div className=' flex flex-row items-center justify-between bg-white px-3 py-4 text-black max-md:hidden'>
			<div>
				<Link href='/'>Home</Link>
			</div>
			<div>
				<Link href='/products'>Products</Link>
			</div>
			<div>
				<Link href='/about'>About Us</Link>
			</div>
			<div>
				<Link href='/contact-us'>Contact Us</Link>
			</div>
			<div>Donate</div> {/*Button to be added later*/}
			<button
				className='w-40 rounded-full bg-amber-300 p-5 text-stone-50'
				onClick={() => console.log('Button Clicked')}
			>
				Checkout
			</button>
		</div>
	);
};

export default NavBar;
