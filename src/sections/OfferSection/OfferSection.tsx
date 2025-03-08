import { links } from "@/constants";
import { getAttraction } from "@/lib/query";
import { AttractionType } from "@/types";
import Link from "next/link";
import AttractionsSlider from "../../components/AttractionsSlider";
import productsImage from "@public/products.webp";
import Image from "next/image";
import {
	BubbleIcon,
	CandyIcon,
	CostumeIcone,
	PopcornIcon,
	SpeakerIcon,
} from "../../ui/Icons/icons";

const OfferSection = async () => {
	const data: AttractionType[] = await getAttraction();

	return (
		<section className="rounded-container bg-primaryc py-20 pb-40 text-white">
			<div className="container">
				<h2 className="mb-6 text-left text-6xl text-white md:text-center md:text-[3.5rem]">
					Z nami nuda nie ma szans!
				</h2>
				<p className="mx-auto max-w-4xl text-left text-xl md:text-center">
					Zapoznaj się z naszą bogatą ofertą dmuchanych atrakcji! Znajdziesz u nas szeroki wybór
					zjeżdżalni, zamków i torów przeszkód, które zapewnią mnóstwo frajdy na Twojej imprezie.
				</p>
				<AttractionsSlider attractions={data} />
				<div className="mt-4 text-center text-2xl">
					Możliwość wynajęcia atrakcji z opiekunem w cenie 30 zł za godzine
				</div>
				<div className="mt-10 flex justify-center">
					<Link
						href={links.attractions}
						className="inline-block bg-white px-8 py-4 text-xl font-bold text-primaryc"
					>
						Zobacz wszystkie atrakcje
					</Link>
				</div>

				<div className="mt-16 flex flex-col-reverse items-center justify-center lg:flex-row">
					<p className="text-left text-5xl font-bold md:text-7xl">
						Atrakcje dmuchane to nie wszystko <br />{" "}
						<span className="text-4xl font-normal"> Oferujemy również:</span>
					</p>
					<Image
						alt="Głośniki, Wata Cukrowa, Popcorn"
						src={productsImage}
						width={700}
						height={700}
						className="object-cover object-center drop-shadow-2xl"
					/>
				</div>
				<div className="mt-16 flex flex-wrap items-center justify-center gap-16 text-center text-2xl font-semibold lg:mt-4">
					<div className="flex flex-col items-center justify-center">
						<div className="animate-bounceSlow">
							<CandyIcon />
						</div>
						Maszynę do waty cukrowej
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="animate-bounceSlow">
							<PopcornIcon />
						</div>
						Maszynę do popcornu
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="animate-bounceSlow">
							<BubbleIcon />
						</div>
						Wytwornicę baniek mydlanych
					</div>
				</div>
				<div className="mt-16 flex flex-wrap items-center justify-center gap-16 text-center text-2xl font-semibold">
					<div className="flex flex-col items-center justify-center">
						<div className="animate-bounceSlow">
							<SpeakerIcon />
						</div>
						Systemy nagłośnienia
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="animate-bounceSlow">
							<CostumeIcone />
						</div>
						Kostiumy do przebrania
					</div>
				</div>

				<ul className="mt-8 flex items-center justify-center gap-16 text-2xl font-semibold"></ul>
			</div>
		</section>
	);
};

export default OfferSection;
