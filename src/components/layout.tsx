import NavBar from "./nav-bar";
import MimiIcon from "../media/mimi-icon.png";
import Image from "next/image";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="flex flex-col h-screen">
            {/* <Image src={MimiIcon} alt={"me"}/> */}
            <div className="bg-mimilicious text-center text-eggshell p-8">Mimi Gurumi</div>
            <NavBar />
            <div className="bg-oceanview h-screen">
                {children}
            </div>
        </div>
    );
};

export default Layout;
