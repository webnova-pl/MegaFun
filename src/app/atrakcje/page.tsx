import AttractionCard from "@/components/AttractionCard";
import { getAttraction } from "@/lib/query";
import { AttractionType } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Oferta",
	description:
		"Szeroki wybór dmuchańców i innych atrakcji na imprezy dla dzieci. Profesjonalny wynajem dmuchanych zamków, zjeżdżalni i innych urządzeń rozrywkowych na terenie całego kraju.",
	keywords: [
		"dmuchańce",
		"dmuchane zamki",
		"wynajem dmuchańców",
		"atrakcje dla dzieci",
		"zjeżdżalnie dmuchane",
		"imprezy dla dzieci",
		"dmuchane place zabaw",
	],
	openGraph: {
		title: "Oferta",
		description:
			"Profesjonalny wynajem dmuchańców na imprezy, urodziny, festyny i inne wydarzenia. Sprawdź naszą ofertę!",
		locale: "pl_PL",
		type: "website",
	},
};

const AttractionsPage = async () => {
	const data: AttractionType[] = await getAttraction();
	
	const sortedAttractions = [...data].sort((a, b) => {
		const orderA = typeof a.order === 'number' ? a.order : Infinity;
		const orderB = typeof b.order === 'number' ? b.order : Infinity;
		return orderA - orderB;
	});

	return (
		<main className="pb-40">
			<section className="rounded-container bg-primaryc pb-32 pt-48">
				<div className="container mx-auto px-4">
					<h1 className="text-center text-3xl font-bold text-white lg:text-5xl">
						Nasze atrakcje na wynajem
					</h1>
					<p className="text-white mt-4 mx-auto max-w-3xl text-xl">Zapoznaj się z naszą ofertą i wybierz swojego wymarzonego dmuchańca.</p>
				</div>
			</section>

			<div className="container mx-auto px-4">
				<div className="mt-20">
					{sortedAttractions.length === 0 ? (
						<p className="text-center text-lg">
							Aktualnie aktualizujemy naszą ofertę. Prosimy o kontakt telefoniczny w celu uzyskania
							informacji.
						</p>
					) : (
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{sortedAttractions.map((item, idx) => (
								<article key={`${item.id}-${idx}`}>
									<AttractionCard attraction={item} />
								</article>
							))}
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default AttractionsPage;