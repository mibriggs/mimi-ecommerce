import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key, useState } from 'react';
import MimiIcon from '../media/mimi-icon.png';
import HamburgerIcon from '../media/hamburger-icon.svg';
import { Button, Dialog, DialogTrigger, Heading, Modal, ModalOverlay } from 'react-aria-components';
import localFont from 'next/font/local';

const customFont = localFont({ src: '../media/Mimi-Regular.ttf' });

const HamburgerNavBar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (key: Key) => {
        router.push(key.toString());
    }
    //! This is incomplete!!!!!!
    return (
        <div className={`md:hidden flex flex-row bg-mimilicious ${customFont.className} text-3xl items-center justify-between`}>
            <Image src={MimiIcon} alt={'Gurumi Icon'} width={79} height={75} quality={100} className='rotate-15' />
            MimiGurumi&apos;s            
            <DialogTrigger>
                <Button onPress={() => setIsOpen(true)} >
                    <Image src={HamburgerIcon} alt='Hamburger Menu Button' quality={100} className='pr-3' />
                </Button>
                <ModalOverlay className='fixed inset-0 bg-black bg-opacity-50'>
                    <Modal isDismissable isOpen={isOpen} onOpenChange={() => setIsOpen(false)} className='fixed top-5 bottom-0 right-0 bg-eggshell rounded-tl-3xl rounded-bl-3xl w-7/12'>
                        <Dialog>
                            Modal
                        </Dialog>
                    </Modal>
                </ModalOverlay>
            </DialogTrigger>
        </div>
    );
};

export default HamburgerNavBar;
