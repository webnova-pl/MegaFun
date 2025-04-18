import { links } from "@/constants";
import ContactSection from "@/sections/ContactSection/ContactSection";
import Footer from "@/ui/Footer/Footer";
import Header from "@/ui/Header/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { FacebookIcon } from "../ui/Icons/icons";
import { AOSInit } from "@/plugins/aos";

const popins = Poppins({
	subsets: ["latin", "latin-ext"],
	weight: ["300", "500", "600", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dmuchańce Mega Fun | Profesjonalny wynajem dmuchańców na imprezy",
	description:
		"Oferujemy profesjonalny wynajem dmuchańców i innych atrakcji dla dzieci na imprezy, eventy firmowe, festyny i urodziny w Przemyślu, Jarosławiu, Arłamowie, Dubiecku, Ruszeczycach, Krzywczy i okolicach. Sprawdź naszą ofertę już dziś!",
	keywords: [
		"dmuchańce",
		"wynajem dmuchańców",
		"dmuchane zjeżdżalnie",
		"atrakcje dla dzieci",
		"imprezy dla dzieci",
		"dmuchane zamki",
		"wynajem atrakcji",
		"festyny",
		"pikniki",
		"eventy firmowe",
		"dmuchańce Przemyśl",
		"dmuchańce Jarosław",
		"dmuchańce Arłamów",
		"dmuchańce Dubiecko",
		"dmuchańce Ruszeczyce",
		"dmuchańce Krzywcza",
		"wynajem dmuchańców Podkarpacie",
	],
	authors: [{ name: "Mega Fun" }],
	creator: "Mega Fun",
	publisher: "Mega Fun",
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: "website",
		locale: "pl_PL",
		url: "https://dmuchancemegafun.pl/",
		siteName: "Dmuchańce Mega Fun",
		title: "Dmuchańce Mega Fun | Profesjonalny wynajem dmuchańców",
		description:
			"Wynajem dmuchańców i atrakcji dla dzieci na imprezy, pikniki i urodziny w Przemyślu, Jarosławiu, Arłamowie, Dubiecku, Ruszeczycach, Krzywczy i okolicach. Oferujemy dmuchane zamki, zjeżdżalnie i inne atrakcje."
	},
	twitter: {
		card: "summary_large_image",
		title: "Dmuchańce Mega Fun | Profesjonalny wynajem dmuchańców",
		description:
			"Wynajem dmuchańców i atrakcji dla dzieci na imprezy, pikniki i urodziny w Przemyślu, Jarosławiu, Arłamowie, Dubiecku i okolicach.",
	},
	alternates: {
		canonical: "https://dmuchancemegafun.pl",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	category: "entertainment",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<head>
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#4F46E5" />
				<GoogleTagManager gtmId="GTM-KJNGGDX4" />
			</head>
			<AOSInit />
			<body className={`${popins.className} m-0 overflow-x-hidden bg-[#FAFAFA] p-0`}>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KJNGGDX4"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>

				<Header />
				<main id="content">{children}</main>
				<ContactSection />
				<Footer />
				<div className="fixed bottom-4 right-2 z-30 flex flex-col gap-4">
					<a
						href={links.facebook}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Odwiedź nasz profil na Facebooku"
						className="flex items-center justify-center rounded-full bg-primaryc p-4 shadow-lg transition-transform hover:scale-105"
					>
						<FacebookIcon />
					</a>
				</div>
				<div id="kontakt" className="scroll-mt-20"></div>
			</body>
		</html>
	);
}
