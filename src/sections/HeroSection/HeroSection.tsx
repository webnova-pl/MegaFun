import { links } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import HeroImg from "./elements/HeroImg";
import Ballons from "@/components/Ballons";
import ArrowButton from "@/ui/Buttons/ArrowButton";
import { Delivery } from "../../ui/Icons/icons";

interface IHeroSection {
	showButtons?: boolean;
	showImg?: boolean;
}

const HeroSection: FC<IHeroSection> = ({ showButtons = true, showImg = true }) => {
	return (
			<section
				className={`soft-shadow relative z-20 overflow-hidden lg:rounded-b-[5rem] rounded-b-[2rem] bg-cover bg-bottom shadow-2xl lg:mt-0`}
			>
				{showImg ? <HeroImg bigImg={showButtons} /> : ""}
				<div
					className={`absolute inset-0 flex h-[85vh] w-screen flex-col items-center justify-center px-8`}
				>
					<h1
						className={`text-bold z-40 text-center text-4xl font-extrabold text-white lg:text-7xl lg:tracking-wide`}
					>
						MEGA FUN <br />{" "}
						<span className="text-2xl lg:text-4xl"> Dmuchańce które rozkręcą każdą impreze</span>
					</h1>

					{showButtons ? (
						<div className="z-40 mt-8 flex flex-col items-center justify-center text-xl text-white lg:flex-row">
							<Link href={links.pricelist}>Galeria zdjęć</Link>
							<Link className="mt-4 lg:ml-12 lg:mt-0" href={links.attractions}>
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
