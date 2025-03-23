import { links } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import HeroImg from "./elements/HeroImg";
import HeroLogo from "@public/logo_hero2.png";
import ArrowButton from "@/ui/Buttons/ArrowButton";
import Ballons from "@/components/Ballons";
import Image from "next/image";

interface IHeroSection {
	showButtons?: boolean;
	showImg?: boolean;
}

const HeroSection: FC<IHeroSection> = ({ showButtons = true, showImg = true }) => {
	return (
		<section
			className={`soft-shadow relative z-20 overflow-hidden rounded-b-[2rem] bg-cover bg-bottom shadow-2xl lg:mt-0 lg:rounded-b-[5rem]`}
		>
			{showImg ? <HeroImg bigImg={showButtons} /> : ""}
			<div
				className={`absolute inset-0 mt-12 flex h-[85vh] w-screen flex-col items-center justify-center
					
					`}
			>
				<Image className="px-8" data-aos="fade-up" data-aos-delay="" src={HeroLogo} width={300} alt=""></Image>
				<h1
					data-aos="fade-up"
					data-aos-delay="200"
					className={`text-bold z-40 max-w-[96rem] mt-4 mb-4 px-4 text-center text-[2rem] lg:text-6xl font-semibold text-white tracking-[.5rem]`}
				>
						Dmuchańce które <br className="md:block hidden" /> rozkręcą każdą impreze
				</h1>

				{showButtons ? (
					<div className="z-40 mt-8 flex flex-wrap items-center justify-center gap-4 text-white md:text-xl lg:flex-row">
						<Link data-aos="fade-up" data-aos-delay="400" href={links.gallery}>
							Galeria zdjęć
						</Link>
						<Link
							data-aos="fade-up"
							data-aos-delay="600"
							className="lg:ml-12 lg:mt-0"
							href={links.attractions}
						>
							<ArrowButton>Zobacz oferte</ArrowButton>
						</Link>
					</div>
				) : (
					""
				)}
			</div>
			<Ballons className="absolute bottom-0 left-0 w-full lg:w-2/5"></Ballons>
			<Ballons className="absolute bottom-0 right-0 max-lg:hidden lg:w-2/5"></Ballons>
		</section>
	);
};

export default HeroSection;
