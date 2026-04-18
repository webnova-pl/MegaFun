import { notFound } from "next/navigation";
import { TypedObject } from "sanity";
import { getSingleAttraction } from "@/lib/query";
import { client } from "@/lib/sanity";
import AttractionDescription from "@/ui/AttractionDescription/AttractionDescription";
import { urlForImage } from "@/lib/imageUrlBuilder";
type PageProps = { params: Promise<{ slug: string }> };
import { Metadata } from "next";
import AttractionMediaSlider from "@/components/AttractionMediaSlider";

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
			images: attraction.mainImage ? [urlForImage(attraction.mainImage).url()] : [],
		},
		alternates: {
			canonical: `https://dmuchancemegafun.pl/atrakcje/${slug}`,
		},
	};
}

// Types matching the GROQ query output
interface GalleryItem {
	_type: string;
	_key?: string;
	asset?: {
		_id?: string;
		url?: string;
		mimeType?: string;
		originalFilename?: string;
		// _ref is available when asset is NOT dereferenced (e.g. mainImage)
		_ref?: string;
		_type?: string;
	};
}

interface Attraction {
	_id: string;
	name: string;
	shortDescription: string;
	description: TypedObject | TypedObject[];
	price: string;
	// mainImage is NOT dereferenced — keeps asset._ref for urlForImage()
	mainImage: { asset: { _ref: string; _type: string } };
	// mainVideo IS dereferenced — gives us asset.url directly
	mainVideo?: { asset: { url: string; _id: string } };
	// gallery IS dereferenced — gives us asset.url, mimeType, etc.
	gallery: GalleryItem[];
}

export default async function AttractionPage({ params }: PageProps) {
	const { slug } = await params;
	const attraction: Attraction = await getSingleAttraction({ slug: slug });

	if (!attraction) return notFound();

	const hasMedia =
		attraction.mainVideo ||
		attraction.mainImage ||
		(attraction.gallery && attraction.gallery.length > 0);

	return (
		<main className="min-h-screen">
			{/* Hero Header */}
			<section className="relative overflow-hidden bg-primaryc pb-32 pt-32 lg:pb-40 lg:pt-40 rounded-b-3xl">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0" style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
						backgroundSize: '40px 40px'
					}}></div>
				</div>

				<div className="container relative z-10 mx-auto px-4 ">
					<div className="mx-auto max-w-5xl text-center">
						<h1 className="mb-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl xl:text-7xl">
							{attraction.name}
						</h1>
						{attraction.shortDescription && (
							<p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/95 lg:text-2xl">
								{attraction.shortDescription}
							</p>
						)}
					</div>
				</div>
			</section>

			{/* Main Content Container */}
			<section className="container mx-auto px-4 -mt-16 lg:-mt-24 pb-20 lg:pb-32">
				<div className="mx-auto max-w-6xl">
					{/* Media Slider */}
					{hasMedia && (
						<div className="mb-12 overflow-hidden rounded-2xl bg-white shadow-2xl ring-black/5">
							<AttractionMediaSlider
								mainVideo={attraction.mainVideo}
								mainImage={attraction.mainImage}
								gallery={attraction.gallery}
							/>
						</div>
					)}

					{/* Two Column Layout */}
					<div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
						{/* Left Column - Description */}
						<div className="lg:col-span-2">
							<div className="overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 lg:p-12">
								<h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
									O atrakcji
								</h2>
								<div className="prose prose-lg max-w-none text-gray-700">
									<AttractionDescription description={attraction.description} />
								</div>
							</div>
						</div>

						{/* Right Column - Pricing Card */}
						<div className="lg:col-span-1">
							<div className="sticky top-24">
								<div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primaryc to-primaryc p-8 shadow-2xl">
									<div className="mb-6 text-center">
										<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
											Cena wynajmu
										</div>
										<div className="text-5xl font-extrabold text-white">
											od {attraction.price} zł
										</div>
									</div>

									<div className="mb-6 space-y-3">
										<div className="flex items-center gap-3 text-white/90">
											<svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
											<span className="text-sm font-medium">Transport do 30km w cenie</span>
										</div>
										<div className="flex items-center gap-3 text-white/90">
											<svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
											<span className="text-sm font-medium">Montaż i demontaż</span>
										</div>
										<div className="flex items-center gap-3 text-white/90">
											<svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
											<span className="text-sm font-medium">Bezpieczna zabawa</span>
										</div>
									</div>

									<a
										href="tel:+48662712418"
										className="block w-full rounded-2xl bg-white px-8 py-4 text-center text-lg font-bold text-primaryc shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-100"
									>
										Zarezerwuj teraz
									</a>

									<div className="mt-4 text-center text-sm text-white/70">
										lub zadzwoń: <span className="font-semibold text-white">+48 662 712 418</span>
									</div>
								</div>
							</div>
						</div>
					</div>
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