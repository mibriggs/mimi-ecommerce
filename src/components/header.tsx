import { customFont } from "@/pages/_app";

export const HeaderComponent = () => {
	return (
		<div
			className={`bg-mimilicious p-8 text-center text-eggshell max-md:hidden ${customFont.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
		>
			MimiGurumi&apos;s
		</div>
	);
};

export default HeaderComponent;
