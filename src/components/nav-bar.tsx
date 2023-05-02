import Link from 'next/link';

export const NavBar = () => {
    return (
        <div className="flex flex-row items-center justify-between bg-white text-black py-4 px-3">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/products">Products</Link></div>
            <div><Link href="/about">About Us</Link></div>
            <div><Link href="/contact-us">Contact Us</Link></div>
            <button 
            className='rounded-full bg-amber-300 p-5 w-40 text-stone-50' 
            onClick={() => console.log('Button Clicked')}
            >
                Checkout
            </button>
        </div>
    );
};

export default NavBar;
