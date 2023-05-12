import Link from 'next/link';
import {MenuTrigger, Button, Popover, Menu, Item} from 'react-aria-components';

const HamburgerNavBar = () => {
    //! This is incomplete!!!!!!
    return (
    <MenuTrigger>
        <Button aria-label="Menu" className="bg-mimilicious w-auto">☰</Button>
        <Popover>
            <Menu className='bg-eggshell text-black'>
                <Item id="home"><Link href='/'>Home</Link></Item> 
                <Item id="products"><Link href='/products'>Products</Link></Item>
                <Item id="about"><Link href='/about'>About Us</Link></Item>
                <Item id="share"><Link href='/contact-us'>Contact Us</Link></Item>
                <Item id="delete">Delete…</Item>
            </Menu>
        </Popover>
    </MenuTrigger>
    );
};

export default HamburgerNavBar;
