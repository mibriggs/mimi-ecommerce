import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key, useState } from 'react';
import MimiIcon from '../media/mimi-icon.png';
import HamburgerIcon from '../media/hamburger-icon.svg';
import XIcon from '../media/x-icon.svg';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import localFont from 'next/font/local';
import { Itim } from 'next/font/google'

const customFont = localFont({ src: '../media/Mimi-Regular.ttf' });
const itim = Itim({
    weight: '400',
    subsets: ['latin']
});

const HamburgerNavBar = () => {
    const router = useRouter();    
    const handleClick = (key: string, close: () => void) => {
        router.push(key);
        close();
    }

    const handleClassName = (isEntering: boolean, isExiting: boolean): string => {
        const baseName: string = 'fixed top-5 bottom-0 right-0 bg-eggshell rounded-tl-3xl rounded-bl-3xl w-7/12 p-8 text-black';
        if (isEntering) {
            const newString = 'transition ease-in duration-5000 delay-1000 '.concat(baseName);
            console.log(newString);
            return newString;
        }
        return baseName;
    }

    //! This is incomplete!!!!!!
    //! According to chrome this isn't yet compatible with galaxy fold's hoe ass
    return (
        <div className={`md:hidden flex flex-row bg-mimilicious ${customFont.className} text-3xl items-center justify-between`}>
            <Image src={MimiIcon} alt={'Gurumi Icon'} width={79} height={75} quality={100} style={{transform: 'rotate(-15deg)'}} />
            MimiGurumi&apos;s            
            <DialogTrigger>
                <Button>
                    <Image src={HamburgerIcon} alt='Hamburger Menu Button' quality={100} className='pr-3' />
                </Button>
                <ModalOverlay className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md'>
                    <Modal className={({isEntering, isExiting}) => handleClassName(isEntering, isExiting)}>
                        <Dialog>
                            {({close}) => 
                            <div className={`${itim.className} flex flex-col text-xl`}>
                                <Button onPress={close} className='self-end'>
                                    <Image src={XIcon} alt='Close Button' quality={100} />
                                </Button>
                                <Button onPress={() =>  handleClick('/', close)} className='text-left'>Home</Button>
                                <Button onPress={() => handleClick('/products', close)} className='text-left'>Products</Button>
                                <Button onPress={() => handleClick('/about', close)} className='text-left'>About Us</Button>
                                <Button onPress={() => handleClick('/contact-us', close)} className='text-left'>Contact Us</Button>
                                <Button className='text-left'>Donate</Button>
                                <div className='flex flex-col space-y-5'>
                                    <Button className='bg-neutral-300 rounded-lg h-11'>Sign In</Button>
                                    <Button className='bg-oceanview rounded-lg h-11'>Sign Up</Button>
                                </div>
                            </div>}
                        </Dialog>
                    </Modal>
                </ModalOverlay>
            </DialogTrigger>
        </div>
    );
};

export default HamburgerNavBar;
