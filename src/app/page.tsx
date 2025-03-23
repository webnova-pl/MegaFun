import AboutSection from "@/sections/AboutSection/AboutSection";
import OfferSection from "@/sections/OfferSection/OfferSection";
import RentSection from "@/sections/RentSection/RentSection";
import HeroSection from "../sections/HeroSection/HeroSection";

export const revalidate = 120;

export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<AboutSection />
			<OfferSection />
			<RentSection />
		</main>
	);
}
