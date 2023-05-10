import localFont from "next/font/local";

const customFont = localFont({ src: '../media/Mimi-Regular.ttf' });

export const HeaderComponent = () => {
    return (
        <div className={`bg-mimilicious p-8 text-center text-eggshell ${customFont.className} text-8xl`}>
            MimiGurumi&apos;s
        </div>
    );
};

export default HeaderComponent;
