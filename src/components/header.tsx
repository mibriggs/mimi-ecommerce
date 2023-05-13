import localFont from "next/font/local";

const customFont = localFont({ src: '../media/Mimi-Regular.ttf' });

export const HeaderComponent = () => {
    return (
        <div className={`max-md:hidden bg-mimilicious p-8 text-center text-eggshell ${customFont.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}>
            MimiGurumi&apos;s
        </div>
    );
};

export default HeaderComponent;
