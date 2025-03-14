import { links } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import HeroImg from "./elements/HeroImg";
import ArrowButton from "@/ui/Buttons/ArrowButton";
import Ballons from "@/components/Ballons";

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
				className={`absolute inset-0 flex h-[85vh] w-screen flex-col items-center justify-center px-8`}
			>
				<h1
					data-aos="fade-up"
					className={`text-bold z-40 text-center text-5xl font-bold text-white lg:text-7xl lg:tracking-wide`}
				>
					MEGA FUN <br />{" "}
					<span data-aos="fade-up" data-aos-delay="300" className="text-2xl lg:text-4xl">
						{" "}
						Dmuchańce które rozkręcą każdą impreze
					</span>
				</h1>

				{showButtons ? (
					<div className="z-40 mt-8 flex items-center justify-center gap-4 text-xl text-white lg:flex-row">
						<Link data-aos="fade-up" data-aos-delay="400" href={links.pricelist}>
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
			<Ballons className="absolute bottom-0 left-0 w-full lg:w-2/5" />
			<Ballons className="absolute bottom-0 right-0 max-lg:hidden lg:w-2/5" />
		</section>
	);
};

export default HeroSection;
