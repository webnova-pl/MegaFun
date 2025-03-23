// app/faq/page.tsx
import { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import {
	PortableText,
	PortableTextMarkComponentProps,
	PortableTextReactComponents,
} from "@portabletext/react";
import { TypedObject } from "sanity";

export const revalidate = 120;

// Define proper types for our FAQ data
interface FAQ {
	_id: string;
	question: string;
	answer: TypedObject | TypedObject[];
	order: number;
}

export const metadata: Metadata = {
	title: "Często Zadawane Pytania (FAQ) | Dmuchańce Mega Fun",
	description:
		"Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące wynajmu dmuchańców, zamków i zjeżdżalni na imprezy dla dzieci i wydarzenia firmowe.",
	keywords:
		"dmuchańce faq, wynajem dmuchańców, zamki dmuchane, dmuchane zjeżdżalnie, imprezy dla dzieci, pytania o dmuchańce",
	alternates: {
		canonical: "https://dmuchancemegafun.pl/faq",
	},
	openGraph: {
		title: "Często Zadawane Pytania (FAQ) | Dmuchańce na Imprezy",
		description:
			"Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące wynajmu dmuchańców, zamków i zjeżdżalni na imprezy dla dzieci i wydarzenia firmowe.",
		url: "https://dmuchancemegafun.pl/faq",
		siteName: "Dmuchańce na Imprezy",
		locale: "pl_PL",
		type: "website",
	},
};

// Define the components with proper types
const ptComponents: Partial<PortableTextReactComponents> = {
	marks: {
		link: ({ children, value }: PortableTextMarkComponentProps) => {
			const rel = !value?.href.startsWith("/") ? "noreferrer noopener" : undefined;
			return (
				<a href={value?.href} rel={rel} className="underline">
					{children}
				</a>
			);
		},
	},
};

async function getFAQs(): Promise<FAQ[]> {
	return client.fetch(
		groq`*[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      order
    }`,
	);
}

export default async function FAQPage() {
	const faqs = await getFAQs();

	return (
		<main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<section className="rounded-container bg-primaryc pb-24 pt-48 text-white">
				<div className="container mx-auto px-4 text-center">
					<h1 className="mb-4 text-4xl font-bold md:text-5xl">Często Zadawane Pytania</h1>
					<p className="mx-auto max-w-3xl text-xl text-white/80">
						Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych dmuchańców i usług.
					</p>
				</div>
			</section>
			<div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<section className="space-y-6">
					{faqs.map((faq) => (
						<div
							key={faq._id}
							className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
						>
							<details className="group cursor-pointer">
								<summary className="text-gray-900 flex list-none items-center justify-between p-6 text-lg font-medium md:text-xl">
									<span>{faq.question}</span>
									<span className="transition duration-300 group-open:rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="h-6 w-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</summary>
								<div className="text-gray-700 prose prose-blue max-w-none px-6 pb-6 pt-2">
									<PortableText value={faq.answer} components={ptComponents} />
								</div>
							</details>
						</div>
					))}
				</section>

				<section className="mt-16 rounded-xl border p-8 text-center">
					<h2 className="text-gray-900 mb-4 text-2xl font-semibold">
						Nie znalazłeś odpowiedzi na swoje pytanie?
					</h2>
					<p className="text-gray-700 mb-6">
						Skontaktuj się z nami bezpośrednio, a nasz zespół z przyjemnością odpowie na wszystkie
						Twoje pytania! Dane do kontaktu znajdziesz poniżej
					</p>
				</section>
			</div>
		</main>
	);
}
