import NavBar from "./nav-bar";
import localFont from "next/font/local";
import MimiIcon from "../media/mimi-icon.png";
import Image from "next/image";

const customFont = localFont({src: '../media/Mimi-Regular.ttf'});

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="flex flex-col h-screen">
            {/* <Image src={MimiIcon} alt={"me"}/> */}
            <div className={`bg-mimilicious text-center text-eggshell p-8 ${customFont.className} text-8xl`}>MimiGurumi&apos;s</div>
            <NavBar />
            <div className="bg-oceanview h-screen">
                {children}
            </div>
        </div>
    );
};

export default Layout;
