import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key } from 'react';
import {MenuTrigger, Button, Popover, Menu, Item} from 'react-aria-components';
import HamburgerMenuIcon from '../media/burger-bar.png';

const HamburgerNavBar = () => {
    const router = useRouter();
    const handleClick = (key: Key) => {
        router.push(key.toString());
    }
    //! This is incomplete!!!!!!
    return (
    <MenuTrigger>
        {/* <Button aria-label="Menu" className="bg-mimilicious w-auto text-bold">☰</Button> */}
        <Button aria-label="Menu" className="bg-mimilicious w-auto text-bold">
            <Image 
            src={HamburgerMenuIcon}
            alt='Hamburger Menu Icon'
            height={20}
            width={500}
            />
        </Button>
        {/* <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Febrian Hidayat - Flaticon</a> */}
        <Popover>
            <Menu className='bg-eggshell text-black' onAction={(key: Key) => handleClick(key)}>
                <Item id='/'>Home</Item> 
                <Item id="/products">Products</Item>
                <Item id="/about">About Us</Item>
                <Item id="/contact-us">Contact Us</Item>
                <Item id="donte">Donate</Item>
                <Item id="checkout">Checkout</Item>
            </Menu>
        </Popover>
    </MenuTrigger>
    );
};

export default HamburgerNavBar;
