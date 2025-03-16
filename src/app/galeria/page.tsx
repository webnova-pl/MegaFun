// app/galeria/page.tsx
import { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import GalleryClient from "@/components/Gallery";

// Metadata dla SEO
export const metadata: Metadata = {
	title: "Galeria Zdjęć Dmuchańców | Dmuchańce na Imprezy",
	description:
		"Zobacz nasze dmuchańce, zamki, zjeżdżalnie i inne atrakcje dla dzieci dostępne do wynajęcia na imprezy urodzinowe, firmowe i pikniki rodzinne.",
	keywords:
		"galeria dmuchańców, zdjęcia zamków dmuchanych, galeria zjeżdżalni dmuchanych, atrakcje dla dzieci zdjęcia",
	alternates: {
		canonical: "https://dmuchancemegafun.pl/galeria",
	},
	openGraph: {
		title: "Galeria Zdjęć Dmuchańców | Atrakcje na Imprezy Dziecięce",
		description:
			"Przeglądaj naszą bogatą galerię dmuchańców, zamków i zjeżdżalni dostępnych do wynajęcia na imprezy dla dzieci.",
		url: "https://dmuchancemegafun.pl/galeria",
		siteName: "Dmuchańce na Imprezy",
		locale: "pl_PL",
		type: "website",
	},
};

// Typy danych
export type GalleryImage = {
	_id: string;
	title?: string;
	description?: string;
	photo: {
		_ref: string;
		url?: string;
	};
	alt?: string;
	category?: string;
};

// Funkcja do pobierania danych z Sanity
async function fetchGalleryData() {
	// Pobierz wszystkie zdjęcia galerii, z użyciem pola photo zamiast asset
	const galleryImages = await client.fetch(
		groq`*[_type == "galleryImage"] | order(order asc) {
      _id,
      title,
      description,
      category,
      alt,
	  photo,
		}`,
	);
	return { images: galleryImages };
}

export default async function GalleryPage() {
	const { images } = await fetchGalleryData();

	return (
		<main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<section className="rounded-container bg-primaryc pb-24 pt-48 text-white">
				<div className="container mx-auto px-4 text-center">
					<h1 className="font-boldmd:text-5xl mb-4 text-4xl">Galeria zdjęć</h1>
					<p className="text-gray-600 mx-auto max-w-3xl text-xl">Zobacz nasze dmuchańce w akcji</p>
				</div>
			</section>
			<div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
				{/* Komponent kliencki dla interaktywnej galerii */}
				<GalleryClient images={images}/>

				{/* Schema.org structured data for ImageGallery */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ImageGallery",
							headline: "Galeria Dmuchańców i Atrakcji dla Dzieci",
							description:
								"Galeria dmuchańców, zamków i zjeżdżalni dostępnych do wynajęcia na imprezy dziecięce, urodziny i pikniki.",
							publisher: {
								"@type": "Organization",
								name: "Dmuchańce na Imprezy",
								logo: {
									"@type": "ImageObject",
									url: "https://twojadomena.pl/logo.png",
								},
							},
						}),
					}}
				/>
			</div>
		</main>
	);
}
