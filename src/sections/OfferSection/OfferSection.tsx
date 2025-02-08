import { links } from "@/constants";
import { getAttraction } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import { AttractionType } from "@/types";
import ArrowButtonLink from "@/ui/Buttons/ArrowButtonLink";
import Image from "next/image";
import Link from "next/link";

const OfferSection = async () => {
	const data: AttractionType[] = await getAttraction();

	return (
		<section className="bg-primaryc rounded-[5rem] py-20 pb-40 text-white">
			<div className="container">
				<h2 className="mb-6 text-center text-white">Z nami nuda nie ma szans!</h2>
				<p className="mx-auto max-w-4xl text-center">
					Zapoznaj się z naszą bogatą ofertą dmuchanych atrakcji! Znajdziesz u nas szeroki wybór
					zjeżdżalni, zamków i wiele innych, które zapewnią mnóstwo frajdy na Twojej imprezie.
				</p>
				<div className="mt-40 grid grid-cols-3 gap-10">
					{data.map((item, idx) => (
						<div
							key={`${item.id}-${idx}`}
							className="flex flex-col items-center rounded-[2rem] bg-white px-10 py-10 text-black"
						>
							<Image
								src={urlFor(item.mainImage).url()}
								alt=""
								width={1000}
								height={1000}
								className="-mt-32 max-w-[300px]"
							/>
							<h4 className="text-primaryc mb-10 text-center text-3xl font-bold">{item.name}</h4>
							<p className="text-gray mb-10 text-center text-lg">{item.description}</p>
							{/* <Link
								href={`${links.attractions}/${item.slug.current}`}
								className="bg-primaryc mt-auto w-full rounded-full py-4 text-center text-xl text-white"
							>
								Dowiedz się więcej
							</Link> */}
							<div className="mt-auto">
								<ArrowButtonLink href={`${links.attractions}/${item.slug.current}`}>
									Dowiedz się więcej
								</ArrowButtonLink>
							</div>
						</div>
					))}
				</div>
				<div className="mt-10">
					*Możliwość wynajęcia atrakcji z opiekunem w cenie 30 zł za godzine
				</div>
				<div className="mt-10 flex justify-center">
					<Link
						href={links.attractions}
						className="text-primaryc inline-block bg-white px-8 py-4 text-xl font-bold"
					>
						Zobacz wszystkie atrakcje
					</Link>
				</div>
			</div>
		</section>
	);
};

export default OfferSection;
