import NavBar from "./nav-bar";

const Layout = ({ children }: { children: any }) => {
    return (
        <div className="flex flex-row h-screen">
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
