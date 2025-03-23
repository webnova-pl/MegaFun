import { notFound } from "next/navigation";
import { TypedObject } from "sanity";
import { getSingleAttraction } from "@/lib/query";
import { client } from "@/lib/sanity";
import AttractionDescription from "@/ui/AttractionDescription/AttractionDescription";
import AttractionImages from "@/ui/AttractionImages/AttractionImages";
import { urlForImage } from "@/lib/imageUrlBuilder";
import { PageProps } from ".next/types/app/page";
import { Metadata } from "next";

export const revalidate = 120;

export async function generateStaticParams() {
	const query = `*[_type == "attraction"]{ slug }`;
	const attractions = await client.fetch(query);

	return attractions.map((attraction: { slug: { current: string } }) => ({
		slug: attraction.slug.current,
	}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;

	const attraction = await getSingleAttraction({ slug: slug });

	if (!attraction) {
		return {
			title: "Atrakcja nie znaleziona | Dmuchańce Mega Fun",
			description: "Niestety, nie znaleźliśmy szukanej atrakcji.",
		};
	}

	return {
		title: `${attraction.name} | Wynajem dmuchańców | Mega Fun`,
		description:
			attraction.shortDescription ||
			`Wypożycz ${attraction.name} na imprezę dla dzieci. Profesjonalny wynajem dmuchańców w Przemyślu, Jarosławiu i okolicach.`,
		keywords: [
			`${attraction.name}`,
			"wynajem dmuchańców",
			"dmuchane zamki",
			"dmuchane atrakcje dla dzieci",
			"Przemyśl",
			"Jarosław",
			"Arłamów",
			"Dubiecko",
			"Ruszeczyce",
			"Krzywcza",
		],
		openGraph: {
			title: `${attraction.name} | Wynajem dmuchańców | Mega Fun`,
			description:
				attraction.shortDescription ||
				`Wypożycz ${attraction.name} na imprezę dla dzieci. Najlepsza oferta w regionie.`,
			type: "website",
			locale: "pl_PL",
		},
		alternates: {
			canonical: `https://dmuchancemegafun.pl/atrakcje/${slug}`,
		},
	};
}

interface Attraction {
	name: string;
	shortDescription: string;
	description: TypedObject | TypedObject[];
	price: string;
	mainImage: { asset: { _ref: string; _type: string } };
	gallery: { asset: { url: string; _id: string } }[];
	_id: string;
}

export default async function AttractionPage({ params }: PageProps) {
	const { slug } = await params;
	const attraction: Attraction = await getSingleAttraction({ slug: slug });

	if (!attraction) return notFound();

	return (
		<main>
			<section className="rounded-b-[5rem] bg-primaryc pb-40 pt-52">
				<div className="container mx-auto px-4">
					<h1 className="text-center text-3xl font-bold text-white lg:text-5xl">
						{attraction.name}
					</h1>
					{attraction.shortDescription && (
						<p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white opacity-90">
							{attraction.shortDescription}
						</p>
					)}
				</div>
			</section>

			<section className="relative z-10 -mb-20 -mt-20 max-w-7xl rounded-[5rem] bg-white py-20 shadow-md lg:container max-lg:overflow-hidden max-lg:pb-0 md:pl-20">
				<div
					className={`flex flex-col max-lg:space-y-10 ${!attraction.mainImage && (!attraction.gallery || attraction.gallery.length === 0) ? "w-full" : "md:flex-row lg:space-x-10"}`}
				>
					<AttractionDescription description={attraction.description} price={attraction.price} />

					{(attraction.mainImage || (attraction.gallery && attraction.gallery.length > 0)) && (
						<div className="flex-1 overflow-hidden lg:rounded-b-3xl">
							<AttractionImages mainImage={attraction.mainImage} images={attraction.gallery} />
						</div>
					)}
				</div>
			</section>

			{/* Mikrodata dla SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org/",
						"@type": "Product",
						name: attraction.name,
						description: attraction.shortDescription,
						image: attraction.mainImage ? urlForImage(attraction.mainImage).url() : "",
						offers: {
							"@type": "Offer",
							priceCurrency: "PLN",
							price: attraction.price?.replace(/[^\d]/g, "") || "",
							availability: "https://schema.org/InStock",
						},
					}),
				}}
			/>
		</main>
	);
}
